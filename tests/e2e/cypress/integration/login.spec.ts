import * as FormHelper from '../support/form-helpers'
import * as Helper from '../support/helpers'
import * as Http from '../support/http-mocks'
import faker from 'faker'

const path = /login/
const mockInvalidCredencialsError = (): void => { Http.mockUnauthorizedError(path) }
const mockUnexpectedError = (): void => { Http.mockServerError(path, 'POST') }
const mockSuccess = (): void => {
  cy.fixture('account').then(account => {
    Http.mockOk(path, 'POST', account)
  })
}

const populateFields = (): void => {
  cy.getByTestId('email').focus().type(faker.internet.email())
  cy.getByTestId('password').focus().type(faker.random.alphaNumeric(5))
}

const simulateValidSubmit = (): void => {
  populateFields()
  cy.getByTestId('submit').click()
}

describe('Login', () => {
  beforeEach(() => {
    cy.visit('login')
  })

  it('Should load with correct initial state', () => {
    const error = 'Campo Obrigatório'
    cy.getByTestId('email').should('have.attr', 'readOnly')
    FormHelper.testInputStatus('email', error)
    cy.getByTestId('password').should('have.attr', 'readOnly')
    FormHelper.testInputStatus('password', error)
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present error state if form is invalid', () => {
    const error = 'Campo inválido'
    cy.getByTestId('email').focus().type(faker.random.word())
    FormHelper.testInputStatus('email', error)
    cy.getByTestId('password').focus().type(faker.random.alphaNumeric(4))
    FormHelper.testInputStatus('password', error)
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present valid state if form is valid', () => {
    cy.getByTestId('email').focus().type(faker.internet.email())
    FormHelper.testInputStatus('email')
    cy.getByTestId('password').focus().type(faker.random.alphaNumeric(5))
    FormHelper.testInputStatus('password')
    cy.getByTestId('submit').should('not.have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present InvalidCredencialsError on 401', () => {
    mockInvalidCredencialsError()
    simulateValidSubmit()
    FormHelper.testMainError('Credencias inválidas')
    Helper.testUrl('/login')
  })

  it('Should present UnexpectedError on 400', () => {
    mockUnexpectedError()
    simulateValidSubmit()
    FormHelper.testMainError('Algo de errado aconteceu. Tente novamente em breve.')
    Helper.testUrl('/login')
  })

  it('Should save AccessToken if valid credentials are provided', () => {
    mockSuccess()
    simulateValidSubmit()
    cy.getByTestId('error-wrap').should('not.exist')
    Helper.testUrl('/')
    Helper.testLocalStorageItem('account')
  })

  it('Should prevent multiple submits', () => {
    mockSuccess()
    populateFields()
    cy.getByTestId('submit').dblclick()
    cy.wait('@request')
    Helper.testHttpCallsCount(1)
  })

  it('Should not submit if form is invalid', () => {
    mockSuccess()
    cy.getByTestId('email').focus().type(faker.internet.email()).type('{enter}')
    Helper.testHttpCallsCount(0)
  })
})
