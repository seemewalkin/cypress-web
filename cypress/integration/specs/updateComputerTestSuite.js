import CreationPage from '../../integration/pages/creationPage';
import ListViewPage from '../../integration/pages/listViewPage';

const creationPage = new CreationPage();
const listViewPage = new ListViewPage();
const computerName = 'MyComputer'
const introducedDate = '2017-02-01'
const discountedDate = '2018-02-01'
const companyName = 'IBM'

describe('Update and deletion of computers on computer page', function () {

  before(function () {
    creationPage.proceedOnComputersPage();
    creationPage.createComputer(computerName,introducedDate,discountedDate,companyName)
  });

  beforeEach(function () {
    creationPage.proceedOnComputersPage();
  });

  it('should have an ability to view the details of created computer', function () {
    listViewPage.searchComputer(computerName);
    creationPage.getInputValue(creationPage.computerNameInput).should('have.value', computerName)
    creationPage.getInputValue(creationPage.introducedDateInput).should('have.value', introducedDate)
    creationPage.getInputValue(creationPage.discountedDateInput).should('have.value', discountedDate)
  });

  it('should have an ability to delete computer and validation message is displayed after deletion', function () {
    listViewPage.searchAndDeleteComputer(computerName);
    listViewPage.getAlertMsg(listViewPage.alertMsg).should('contain', "Computer has been deleted")
  });
});
 