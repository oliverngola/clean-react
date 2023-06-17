import * as Http from '../support/http-mocks'
import * as Helper from '../support/helpers'

const path = /\/surveys\/any_id\//
const mockUnexpectedError = (): void => { Http.mockServerError(path, 'GET') }

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
})
