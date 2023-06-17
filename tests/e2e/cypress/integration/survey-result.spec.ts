import * as Http from '../support/http-mocks'
import * as Helper from '../support/helpers'

const path = /\/surveys\/any_id\//
const mockUnexpectedError = (): void => { Http.mockServerError(path, 'GET') }
const mockAcessDeniedError = (): void => { Http.mockForbbidenError(path, 'GET') }
const mockSuccess = (): void => {
  cy.fixture('survey-result').then(surveyResult => {
    Http.mockOk(path, 'GET', surveyResult)
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

  it('Should present survey result', () => {
    mockSuccess()
    cy.visit('/surveys/any_id')
    cy.getByTestId('question').should('have.text', 'Question')
    cy.getByTestId('day').should('have.text', '20')
    cy.getByTestId('month').should('have.text', 'abr')
    cy.getByTestId('year').should('have.text', '2018')
    cy.get('li:nth-child(1)').then(li => {
      assert.equal(li.find('[data-testid="answer"]').text(), 'any_answer')
      assert.equal(li.find('[data-testid="image"]').attr('src'), 'any_image')
      assert.equal(li.find('[data-testid="percent"]').text(), '70%')
    })
    cy.get('li:nth-child(2)').then(li => {
      assert.equal(li.find('[data-testid="answer"]').text(), 'any_answer_2')
      assert.notExists(li.find('[data-testid="image"]'))
      assert.equal(li.find('[data-testid="percent"]').text(), '30%')
    })
  })

  it('Should go to SurveyList on back button click', () => {
    cy.visit('')
    mockSuccess()
    cy.visit('/surveys/any_id')
    cy.getByTestId('back-button').click()
    Helper.testUrl('/')
  })
})
