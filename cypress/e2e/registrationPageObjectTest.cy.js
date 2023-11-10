/// <reference types="cypress"/>

import user from '../fixtures/user.json';
import { faker } from '@faker-js/faker';
import homePage from '../support/pages/HomePage';
import loginPage from '../support/pages/LoginPage';
import registrationPage from '../support/pages/RegistrationPage';
import accountPage from '../support/pages/AccountPage';

user.email = faker.internet.email({ provider: 'fakerMail.com'});
user.loginName = faker.internet.userName();
user.firstName = faker.person.firstName()
user.lastName = faker.person.lastName();
user.fax = faker.phone.number();
user.phone = faker.phone.number();
user.companyName = faker.company.name();
user.postCode = faker.location.zipCode('####');


describe('template spec', () => {
  it.only('Registration', () => {
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
    cy.visit('https://automationteststore.com/')
    
    cy.get('#customernav').click();
    cy.get('#loginFrm_loginname').type(user.loginName);
    cy.get('#loginFrm_password').type(user.password);
    cy.get('.btn.btn-orange.pull-right').last().click();
    cy.get('.maintext').should('have.text', ' My Account');
    cy.get('.subtext').should('have.text', user.firstName);

  })

})