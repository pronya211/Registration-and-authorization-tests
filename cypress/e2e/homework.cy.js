/// <reference types="cypress"/>

describe('template spec', () => {
  it('Registration', () => {
    cy.visit('https://automationteststore.com/')

    cy.get('#customernav').click();
    cy.get('[title="Continue"]').click();
    cy.get('#AccountFrm_firstname').type('Ivan');
    cy.get('#AccountFrm_lastname').type('Ivanov');
    cy.get('#AccountFrm_email').type('1testemail@gmail.com');
    cy.get('#AccountFrm_telephone').type('+380000000000');
    cy.get('#AccountFrm_fax').type('12345');
    cy.get('#AccountFrm_company').type('Famous company');
    cy.get('#AccountFrm_address_1').type('Derebasivska str. 1');
    cy.get('#AccountFrm_city').type('Boston');
    cy.get('div #AccountFrm_country_id').select('Ukraine').should('have.value', '220');
    cy.get('#AccountFrm_postcode').type('55555');
    cy.get('#AccountFrm_zone_id').select('Odesa').should('have.value', '3495');
    cy.get('#AccountFrm_loginname').type('SomeTestUser');
    cy.get('#AccountFrm_password').type('SomeTestPassword');
    cy.get('#AccountFrm_confirm').type('SomeTestPassword');
    cy.get('#AccountFrm_newsletter1').check();
    cy.get('#AccountFrm_agree').check();
    cy.get('.lock-on-click').click(); 
    cy.get('.fa.fa-thumbs-up').should('have.text', ' Your Account Has Been Created!')

  })

  it.only('Registration', () => {
    cy.visit('https://automationteststore.com/')
    
    cy.get('#customernav').click();
    cy.get('#loginFrm_loginname').type('SomeTestUser');
    cy.get('#loginFrm_password').type('SomeTestPassword');
    cy.get('.btn.btn-orange.pull-right').last().click();
    cy.get('.maintext').should('have.text', ' My Account');


  })
})