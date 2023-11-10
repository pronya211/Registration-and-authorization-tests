import BasePage from "./BasePage";

class RegistrationPage extends BasePage{

    constructor(){
        super();
        this.elements.firstNameField = '#AccountFrm_firstname';
        this.elements.lastNameField = '#AccountFrm_lastname';
        this.elements.emailField = '#AccountFrm_email';
        this.elements.phoneNumberField = '#AccountFrm_telephone';
        this.elements.faxField = '#AccountFrm_fax';
        this.elements.companyNameField = '#AccountFrm_company';
        this.elements.addressFirstField = '#AccountFrm_address_1';
        this.elements.addressSecondField = '#AccountFrm_address_2';
        this.elements.cityField = '#AccountFrm_city';
        this.elements.countryIdField = 'div #AccountFrm_country_id';
        this.elements.postcodeField = '#AccountFrm_postcode';
        this.elements.zoneIdField = '#AccountFrm_zone_id';
        this.elements.loginNameField = '#AccountFrm_loginname';
        this.elements.passwordField = '#AccountFrm_password';
        this.elements.passwordConfirmField = '#AccountFrm_confirm';
        this.elements.newsLetterCheckbox = '#AccountFrm_newsletter1';
        this.elements.privacyPolicyCheckbox = '#AccountFrm_agree';
        this.elements.submitRegistrationFormbutton = '.lock-on-click';
        this.elements.checkSuccesfulRegistration = '.maintext';
        this.elements.buttonContinueAfterSuccessfulRegistration = '.btn.btn-default.mr10';
        this.elements.checkNameInCabinet = '.subtext';

    }

    getFirstNameField(){
        return cy.get(this.elements.firstNameField)

    }

    getLastNameField(){
        return cy.get(this.elements.lastNameField)

    }

    getEmailField(){
        return cy.get(this.elements.emailField)

    }

    getPhoneNumberField(){
        return cy.get( this.elements.phoneNumberField)

    }

    getFaxField(){
        return cy.get(this.elements.faxField)

    }

    getCompanyNameField(){
        return cy.get(this.elements.companyNameField)

    }

    getAddressFirstField(){
        return cy.get(this.elements.addressFirstField)


    }
    getAddressSecondField(){
        return cy.get(this.elements.addressSecondField)

    }

    getCityField(){
        return cy.get(this.elements.cityField)

    }

    getCountryIdField(){
        return cy.get(this.elements.countryIdField)


    }
    getPostcodeField(){
        return cy.get(this.elements.postcodeField)

    }

    getZoneIdField(){
        return cy.get(this.elements.zoneIdField)

    }

    getLoginNameField(){
        return cy.get(this.elements.loginNameField)

    }

    getPasswordField(){
        return cy.get(this.elements.passwordField)

    }
    
    getPasswordConfirmField(){
        return cy.get(this.elements.passwordConfirmField)

    }

    getNewsLetterCheckbox(){
        return cy.get(this.elements.newsLetterCheckbox)


    }
    getPrivacyPolicyCheckbox(){
        return cy.get(this.elements.privacyPolicyCheckbox)

    }

    getSubmitRegistrationFormbutton(){
        return cy.get(this.elements.submitRegistrationFormbutton)

    }

    getCheckSuccesfulRegistration(){
        return cy.get(this.elements.checkSuccesfulRegistration)

    }

    getButtonContinueAfterSuccessfulRegistration(){
        return cy.get(this.elements.buttonContinueAfterSuccessfulRegistration)

    }

    getCheckNameInCabinet(){
        return cy.get(this.elements.checkNameInCabinet)

    }

    fillRegistrationFields(user){
        this.getFirstNameField().type(user.firstName);
        this.getLastNameField().type(user.lastName);
        this.getEmailField().type(user.email);
        this.getPhoneNumberField().type(user.phone);
        this.getFaxField().type(user.fax);
        this.getCompanyNameField().type(user.companyName);
        this.getAddressFirstField().type(user.address1);
        this.getAddressSecondField().type(user.address2);
        this.getCityField().type(user.city);
        this.getCountryIdField().select(user.country).should('have.value', '220');
        this.getPostcodeField().type(user.postcode);
        this.getZoneIdField().select(user.zoneId).should('have.value', '3495');
        this.getLoginNameField().type(user.loginName);
        this.getPasswordField().type(user.password);
        this.getPasswordConfirmField().type(user.password);

    }

}
export default new RegistrationPage();