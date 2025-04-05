const locators_homePage = require ("../locators/locator_homePage.js").locator_homePage;
import 'cypress-xpath';

export class HomePage {

    clickOnMenuOption(option) {
        
        cy.xpath(locators_homePage.btnMenuOption(option))
            .should('be.visible').scrollIntoView() 
            .click();
    }
    

}