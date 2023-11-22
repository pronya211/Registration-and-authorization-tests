/// <reference types="cypress"/>

import user from '../fixtures/user.json';
import { faker } from '@faker-js/faker';
import homePage from '../support/pages/HomePage';
import loginPage from '../support/pages/LoginPage';
import registrationPage from '../support/pages/RegistrationPage';
import accountPage from '../support/pages/AccountPage';
import authorizationPage from '../support/pages/AuthorizationPage';

user.email = faker.internet.email({ provider: 'fakerMail.com'});
user.loginName = faker.internet.userName();
user.firstName = faker.person.firstName()
user.lastName = faker.person.lastName();
user.fax = faker.phone.number();
user.phone = faker.phone.number();
user.companyName = faker.company.name();
user.postCode = faker.location.zipCode('####');


describe('template spec', () => {
  it('Registration', () => {
    homePage.visit();

    cy.log('Opening registration page...')
    homePage.getHeaderAccountButton().click()
    loginPage.getRegisterAccountButton().click();

    cy.log('Fill in regisration fielsd...');
    
    registrationPage.fillRegistrationFields(user);
   

    cy.log('Submit registration form button...');
    registrationPage.getNewsLetterCheckbox().check();
    registrationPage.getPrivacyPolicyCheckbox().check();
    registrationPage.getSubmitRegistrationFormbutton().click(); 
    registrationPage.getCheckSuccesfulRegistration().should('have.text', ' Your Account Has Been Created!');
    registrationPage.getButtonContinueAfterSuccessfulRegistration().click();

    cy.log('Verify first name displayedon account page...');
    accountPage.getFirstNameText().should('have.text', user.firstName)

  })

  it('Authirization', () => {
    homePage.visit();
    
    cy.log('Opening authorization page...')

    homePage.getHeaderAccountButton().click()

    cy.log('Fill in authorizationn fielsd...');

    authorizationPage.fillAuthorizationFields(user);

    cy.log('Submit authorization form button...');

    authorizationPage.getLoginAccountButton().click();

    cy.log('Verify login name displayed on account page...');

    authorizationPage.getCheckSuccesfulAuthorization().should('have.text', ' My Account');
    authorizationPage.getCheckNameAfterAuthorization().should('have.text', user.firstName);

  })

})