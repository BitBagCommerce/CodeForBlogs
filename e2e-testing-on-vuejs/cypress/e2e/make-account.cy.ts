import page from '../pages/index'

before(() => {
  cy.fixture('example').then((fixture) => {
    cy.fixtures = fixture
  })
})

describe('Make an account', () => {
  it('should make an account', () => {
    page.home.visit()
    page.home.form.fillForm(cy.fixtures)
    page.home.form.submit.click()
    page.home.form.message.should('be.visible')
  })
})
