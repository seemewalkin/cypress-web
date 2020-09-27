import CreationPage from '../../integration/pages/creationPage';
import ListViewPage from '../../integration/pages/listViewPage';

const creationPage = new CreationPage();
const listViewPage = new ListViewPage();
const computerName = "what"
const computerName2= "what1"

describe('Creation of computer page', function () {

  beforeEach(function () {
    creationPage.proceedOnComputersPage();
  });

  it('should support creation of computer with all required fields', function () {
    creationPage.createComputer(computerName,'2017-02-01', '2018-02-01', 'IBM');
    listViewPage.getAlertMsg(listViewPage.alertMsg).should('contain', "Done! Computer "+computerName+" has been created")
  });

  it('should support creation of computer with only computer name field filled in', function () {
    creationPage.createComputer(computerName2,'','','');
    listViewPage.getAlertMsg(listViewPage.alertMsg).should('contain', "Done! Computer "+computerName2+" has been created");
  });
});
 