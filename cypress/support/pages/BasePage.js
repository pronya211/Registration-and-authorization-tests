export default class BasePage{
    
    constructor(){

        this.elements = {};
        this.elements.headerAccountButton = '#customernav';
    }

    getHeaderAccountButton(){
        return cy.get(this.elements.headerAccountButton);
    }

}