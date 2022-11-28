declare global {
  namespace Cypress {
    interface Chainable {
      getByTestId: (id: string) => Chainable<Element>
    }
  }
}

export function getByTestId (id: string): any {
  return cy.get(`[data-testid="${id}"]`)
}

Cypress.Commands.add('getByTestId', getByTestId)
