import form from './components/form'

const home = {
  get form() {
    return form
  },

  visit() {
    return cy.visit('/')
  }
}

export default home
