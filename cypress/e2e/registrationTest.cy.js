/// <reference types="cypress"/>

import user from '../fixtures/user.json'
import { faker } from '@faker-js/faker';


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
    cy.visit('https://automationteststore.com/')

    cy.get('#customernav').click();
    cy.get('[title="Continue"]').click();
    cy.get('#AccountFrm_firstname').type(user.firstName);
    cy.get('#AccountFrm_lastname').type(user.lastName);
    cy.get('#AccountFrm_email').type(user.email);
    cy.get('#AccountFrm_telephone').type(user.phone);
    cy.get('#AccountFrm_fax').type(user.fax);
    cy.get('#AccountFrm_company').type(user.companyName);
    cy.get('#AccountFrm_address_1').type(user.address1);
    cy.get('#AccountFrm_address_2').type(user.address2);
    cy.get('#AccountFrm_city').type(user.city);
    cy.get('div #AccountFrm_country_id').select(user.country).should('have.value', '220');
    cy.get('#AccountFrm_postcode').type(user.postCode);
    cy.get('#AccountFrm_zone_id').select(user.zoneId).should('have.value', '3495');
    cy.get('#AccountFrm_loginname').type(user.loginName);
    cy.get('#AccountFrm_password').type(user.password);
    cy.get('#AccountFrm_confirm').type(user.password);
    cy.get('#AccountFrm_newsletter1').check();
    cy.get('#AccountFrm_agree').check();
    cy.get('.lock-on-click').click(); 
    cy.get('.maintext').should('have.text', ' Your Account Has Been Created!');
    cy.get('.btn.btn-default.mr10').click();
    cy.get('.subtext').should('have.text', user.firstName)

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