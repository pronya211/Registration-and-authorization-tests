/// <reference types="cypress"/>
 
import user from '../fixtures/user.json'
import homePage from '../support/pages/HomePage';
import authorizationPage from '../support/pages/AuthorizationPage';




  it.only('First order', () => {

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

    cy.get('[title="Automation Test Store"]').click();
    cy.get('.search-query.dropdown-toggle').type('be');
    cy.get('.fa.fa-search').click();
    cy.get('[title="Beauty Eau de Parfum"]').click();
    cy.get('.cart').last().click();
    cy.get('#cart_checkout1').click();
    cy.get('#checkout_btn').click();
    cy.get('.maintext').should('have.text', ' Your Order Has Been Processed!');

  })