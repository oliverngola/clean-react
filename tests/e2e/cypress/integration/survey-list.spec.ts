import * as Http from '../support/http-mocks'
import * as Helper from '../support/helpers'

const path = /surveys/
const mockUnexpectedError = (): void => { Http.mockServerError(path, 'GET') }
const mockAcessDeniedError = (): void => { Http.mockForbbidenError(path, 'GET') }

describe('SurveyList', () => {
  beforeEach(() => {
    cy.fixture('account').then(account => {
      Helper.setLocalStorageItem('account', account)
    })
  })

  it('Should present error on UnexpectedError', () => {
    mockUnexpectedError()
    cy.visit('')
    cy.getByTestId('error').should('contain.text', 'Algo de errado aconteceu. Tente novamente em breve.')
  })

  it('Should logout on AccesDeniedError', () => {
    mockAcessDeniedError()
    cy.visit('')
    Helper.testUrl('/login')
  })

  it('Should present correct username', () => {
    mockUnexpectedError()
    cy.visit('')
    const { name } = Helper.getLocalStorageItem('account')
    cy.getByTestId('username').should('contain.text', name)
  })

  it('Should logout on logout link click', () => {
    mockUnexpectedError()
    cy.visit('')
    cy.getByTestId('logout').click()
    Helper.testUrl('/login')
  })

  it('Should present survey item', () => {
    mockUnexpectedError()
    cy.visit('')
    cy.getByTestId('logout').click()
    Helper.testUrl('/login')
  })
})
