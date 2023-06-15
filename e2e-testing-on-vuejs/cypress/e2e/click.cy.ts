describe('Toggling paragraph', () => {
  it('clicks on a button', () => {
    cy.visit('/')
    cy.get('[data-e2e="paragraph"]').should('be.not.visible')
    cy.get('[data-e2e="show-button"]').click()
    cy.get('[data-e2e="paragraph"]').should('be.visible')
  })
})
