/// <reference types="cypress"/>

import testData from '../fixtures/testData.json'

describe('template spec', () => {

  it('Registration', () => {
    cy.visit('https://automationteststore.com/')

    cy.get('#customernav').click();
    cy.get('[title="Continue"]').click();


    testData.forEach(({ selector, data, value }) => {
      if (value) {
        cy.get(selector).select(data).should('have.value', value);
      } else {
        cy.get(selector).type(data);
      }
    });

    cy.get('#AccountFrm_newsletter1').check();
    cy.get('#AccountFrm_agree').check();
    cy.get('.lock-on-click').click(); 
    cy.get('.maintext').should('have.text', ' Your Account Has Been Created!');
    cy.get('.btn.btn-default.mr10').click();
    cy.get('.subtext').should('have.text', 'Ivan8');


  })


})