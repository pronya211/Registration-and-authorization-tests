import BasePage from "./BasePage";

class AuthorizationPage extends BasePage{

    constructor(){
        super();
        this.elements.loginFormNameFeld = '#loginFrm_loginname';
        this.elements.loginFormPasswordFeld = '#loginFrm_password';
        this.elements.loginAccountButton = '[title="Login"]';
        this.elements.checkSuccesfulAuthorization = '.maintext';
        this.elements.checkNameAfterAuthorization = '.subtext';
    }

    getLoginFormNameFeld(){
        return cy.get(this.elements.loginFormNameFeld)

    }

    getLoginFormPasswordFeld(){
        return cy.get(this.elements.loginFormPasswordFeld)

    }

    getLoginAccountButton(){
        return cy.get( this.elements.loginAccountButton)

    }

    getCheckSuccesfulAuthorization(){
        return cy.get( this.elements.checkSuccesfulAuthorization)

    }

    getCheckNameAfterAuthorization(){
        return cy.get(this.elements.checkNameAfterAuthorization)

    }

    fillAuthorizationFields(user){
        this.getLoginFormNameFeld().type(user.loginName);
        this.getLoginFormPasswordFeld().type(user.password);

    }
}
export default new AuthorizationPage();