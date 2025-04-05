const locator_interactions = require ("../locators/locator_interactions").locator_interactions;

export class InteractionsPage {

    clickOnSortable(){
        cy.xpath('//span[contains(., "Sortable")]').should('be.visible').click();
    }

    sortByAscending(){

        cy.wait(2000);
        cy.xpath(locator_interactions.one).scrollIntoView();

        cy.xpath(locator_interactions.six)
        .drag(locator_interactions.one);
  
      
      cy.xpath(locator_interactions.five)
        .drag(locator_interactions.four);
  
      
      cy.xpath(locator_interactions.four)
        .drag(locator_interactions.three);
  
      
      cy.xpath(locator_interactions.three)
        .drag(locator_interactions.two);
  
      
      cy.xpath(locator_interactions.two)
        .drag(locator_interactions.one);
  
    

    }


}