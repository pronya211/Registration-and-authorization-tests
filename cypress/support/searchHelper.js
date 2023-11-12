export function searchProductWithLetter(letter, page = 1) {
   
    cy.get('[title="Automation Test Store"]').click();
    cy.get('.search-query.dropdown-toggle').type('a');
    cy.get('[title="Go"]').click();
    
    cy.get('.col-md-3.col-sm-6.col-xs-12').each((product) => {
      const productName = product.find('[title="Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15"]').text();
      if (productName.includes(letter)) {
        cy.log(`Знайдено необхідний товар: ${productName}`);

        cy.get('[title="Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15"]').click();
        cy.get('.productpagecart').click();
        cy.get('#cart_checkout1').click();
        cy.get('#checkout_btn').click();
        cy.get('.maintext').should('have.text', ' Your Order Has Been Processed!');
        
        return ;
      }
    });
  
    cy.get('li a:contains(">")').first().click().then((nextButton) => {
      if (nextButton.length > 0) {
        cy.log('Переход на наступну сторінку');
        searchProductWithLetter(letter, page + 1);
      } else {
        cy.log(`Товар з літерою ${letter} не знайдено`);
      }
    });
  }


  
  
  

