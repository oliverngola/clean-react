import * as Http from '../support/http-mocks'
import * as Helper from '../support/helpers'

const path = /\/surveys\/any_id\//
const mockUnexpectedError = (): void => { Http.mockServerError(path, 'GET') }
const mockAcessDeniedError = (): void => { Http.mockForbbidenError(path, 'GET') }
const mockSuccess = (): void => {
  cy.fixture('survey-result').then(surveyList => {
    Http.mockOk(path, 'GET', surveyList)
  })
}

describe('SurveyResult', () => {
  beforeEach(() => {
    cy.fixture('account').then(account => {
      Helper.setLocalStorageItem('account', account)
    })
  })

  it('Should present error on UnexpectedError', () => {
    mockUnexpectedError()
    cy.visit('/surveys/any_id')
    cy.getByTestId('error').should('contain.text', 'Algo de errado aconteceu. Tente novamente em breve.')
  })

  it('Should reload on button click', () => {
    mockUnexpectedError()
    cy.visit('/surveys/any_id')
    cy.getByTestId('error').should('contain.text', 'Algo de errado aconteceu. Tente novamente em breve.')
    mockSuccess()
    cy.getByTestId('reload').click()
    cy.getByTestId('question').should('exist')
  })

  it('Should logout on AccesDeniedError', () => {
    mockAcessDeniedError()
    cy.visit('/surveys/any_id')
    Helper.testUrl('/login')
  })
})
