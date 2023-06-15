declare namespace Cypress {
  interface Chainable {
    getByTag(...args: Parameters<typeof cy.get>): Chainable
  }
}
