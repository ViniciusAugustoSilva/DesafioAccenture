const locators_homePage = require ("../locators/locator_homePage.js").locator_homePage;
import 'cypress-xpath';

export class HomePage {

  /*  clickOnMenuOption(option){
        cy.wait(3000);
        cy.xpath(locators_homePage.btnMenuOption(option)).click();
        
    }*/

    clickOnMenuOption(option) {
        // Evitar hardcode de tempo com cy.wait, usar algo mais dinâmico se necessário
        cy.xpath(locators_homePage.btnMenuOption(option))
            .should('be.visible') // Garante que o elemento está visível antes de clicar
            .click();
    }
    

}