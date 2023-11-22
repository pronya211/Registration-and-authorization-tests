import BasePage from "./BasePage";

class AccountPage extends BasePage{

    constructor(){
        super();
      
        this.elements.firstNameText = '.subtext';

    }

    getFirstNameText(){
        return cy.get(this.elements.firstNameText)

    }

}
export default new AccountPage();