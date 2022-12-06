import * as FormHelper from '../support/form-helper'
import * as Http from './signup-mocks'
import faker from 'faker'

const simulateValidSubmit = (): void => {
  cy.getByTestId('name').focus().type(faker.name.findName())
  cy.getByTestId('email').focus().type(faker.internet.email())
  const password = faker.random.alphaNumeric(5)
  cy.getByTestId('password').focus().type(password)
  cy.getByTestId('passwordConfirmation').focus().type(password)
  cy.getByTestId('submit').click()
}

describe('SignUp', () => {
  beforeEach(() => {
    cy.visit('signup')
  })

  it('Should load with correct initial state', () => {
    const error = 'Campo Obrigatório'
    cy.getByTestId('name').should('have.attr', 'readOnly')
    FormHelper.testInputStatus('name', error)
    cy.getByTestId('email').should('have.attr', 'readOnly')
    FormHelper.testInputStatus('email', error)
    cy.getByTestId('password').should('have.attr', 'readOnly')
    FormHelper.testInputStatus('password', error)
    cy.getByTestId('passwordConfirmation').should('have.attr', 'readOnly')
    FormHelper.testInputStatus('passwordConfirmation', error)
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present error state if form is invalid', () => {
    const error = 'Campo inválido'
    cy.getByTestId('name').focus().type(faker.random.alphaNumeric(4))
    FormHelper.testInputStatus('name', error)
    cy.getByTestId('email').focus().type(faker.random.word())
    FormHelper.testInputStatus('email', error)
    cy.getByTestId('password').focus().type(faker.random.alphaNumeric(4))
    FormHelper.testInputStatus('password', error)
    cy.getByTestId('passwordConfirmation').focus().type(faker.random.alphaNumeric(4))
    FormHelper.testInputStatus('passwordConfirmation', error)
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present valid state if form is valid', () => {
    cy.getByTestId('name').focus().type(faker.name.findName())
    FormHelper.testInputStatus('name')
    cy.getByTestId('email').focus().type(faker.internet.email())
    FormHelper.testInputStatus('email')
    const password = faker.random.alphaNumeric(5)
    cy.getByTestId('password').focus().type(password)
    FormHelper.testInputStatus('password')
    cy.getByTestId('passwordConfirmation').focus().type(password)
    FormHelper.testInputStatus('passwordConfirmation')
    cy.getByTestId('submit').should('not.have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present EmailInUseError on 403', () => {
    Http.mockEmailInUseError()
    simulateValidSubmit()
    FormHelper.testMainError('Esse e-mail já está em uso')
    FormHelper.testUrl('/signup')
  })

  it('Should present UnexpectedError on default error cases', () => {
    Http.mockUnexpectedError()
    simulateValidSubmit()
    FormHelper.testMainError('Algo de errado aconteceu. Tente novamente em breve.')
    FormHelper.testUrl('/signup')
  })
})
