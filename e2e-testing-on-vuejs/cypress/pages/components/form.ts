type formInput = {
  name: string
  lastName: string
  eMail: string
  phoneNumber: string
}

const form = {
  get nameInput() {
    return cy.getByTag('form-name')
  },

  get lastNameInput() {
    return cy.getByTag('form-last-name')
  },

  get eMailInput() {
    return cy.getByTag('form-e-mail')
  },

  get phoneNumberInput() {
    return cy.getByTag('form-phone-number')
  },

  get submit() {
    return cy.getByTag('form-submit')
  },

  get message() {
    return cy.getByTag('form-message')
  },

  fillForm({ name, lastName, eMail, phoneNumber }: formInput) {
    this.nameInput.type(name)
    this.lastNameInput.type(lastName)
    this.eMailInput.type(eMail)
    this.phoneNumberInput.type(phoneNumber)
  }
}

export default form
