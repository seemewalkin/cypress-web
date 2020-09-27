export default class CreationPage {
  path = "/computers"
  computerNameInput = "#name"
  introducedDateInput = "#introduced"
  discountedDateInput = "#discontinued"
  companyPicklist = "#company"
  createComputerBtn = "input[value='Create this computer']"
  saveComputerBtn = "input[value='Save this computer']"
  deleteComputerBtn = "input[value='Delete this computer']"
  addComputerBtn = "#add"
  computerNameAlert = ".help-inline"
  cancelBtn = "a[class='btn']"
  companyPicklist = "#company"

  proceedOnComputersPage() {
    cy.visit(this.path)
  }

  getInputValue(selector) {
    return cy.get(selector)
  }

  createComputer (computerName,introduced,discounted,companyName) {
    cy.get(this.addComputerBtn).click();
    cy.get(this.computerNameInput).clear().then(e => { if (computerName !== '') cy.wrap(e).type(computerName)})
    cy.get(this.introducedDateInput).clear().then(e => { if (introduced !== '') cy.wrap(e).type(introduced)})
    cy.get(this.discountedDateInput).clear().then(e => { if (discounted !== '') cy.wrap(e).type(discounted)})
    cy.get(this.companyPicklist).select(companyName)
    cy.get(this.createComputerBtn).click()
  };

  changeComputerValues (computerName,introduced,discounted,itemName) {
    cy.get(this.computerNameInput).clear()
    cy.get(this.computerNameInput).type(computerName);
    cy.get(this.introducedDateInput).clear();
    cy.get(this.introducedDateInput).type(introduced);
    cy.get(this.discountedDateInput).clear();
    cy.get(this.discountedDateInput).type(discounted);
    cy.get(this.CompanyPicklist).select(itemName)
    cy.get(this.saveComputerBtn).click();
  };
}