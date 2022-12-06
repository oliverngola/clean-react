import * as FormHelper from '../support/form-helper'

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
})
