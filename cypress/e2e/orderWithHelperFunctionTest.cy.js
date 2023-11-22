/// <reference types="cypress"/>
 
import user from '../fixtures/user.json'
import homePage from '../support/pages/HomePage';
import authorizationPage from '../support/pages/AuthorizationPage';
import {searchProductWithLetter} from '../support/searchHelper'


  it.only('Order with helper function', () => {

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
  
    searchProductWithLetter('a');

  })