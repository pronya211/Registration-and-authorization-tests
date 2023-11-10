export function login(user){
    cy.visit('https://automationteststore.com/')
    
    cy.get('#customernav').click();
    cy.get('#loginFrm_loginname').type(user.loginName);
    cy.get('#loginFrm_password').type(user.password);
    cy.get('.btn.btn-orange.pull-right').last().click();
    cy.get('.maintext').should('have.text', ' My Account');
    cy.get('.subtext').should('have.text', user.firstName);
}