export default class ListViewPage {

searchInput = "#searchbox"
searchBtn = "#searchsubmit"
addComputerBtn = "#add"
cancelBtn = "a[class='btn']"
alertMsg = ".alert-message"
dateInputsAlert = ".clearfix.error"
deleteComputerBtn = "input[value='Delete this computer']"


getAlertMsg(selector) {
  return cy.get(selector)
}

searchComputer (computerName) {
  cy.get(this.searchInput).type(computerName);
  cy.get(this.searchBtn).click();
  cy.get('a').contains(computerName).click()
};

searchAndDeleteComputer (computerName) {
  cy.get(this.searchInput).type(computerName);
  cy.get(this.searchBtn).click();
  cy.get('a').contains(computerName).click()
  cy.get(this.deleteComputerBtn).click()
}

};