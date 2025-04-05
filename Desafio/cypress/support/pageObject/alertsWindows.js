const locator_alertsWindows = require ("../locators/locator_alertsWindows").locator_alertsWindows;

export class AlertsWindows {

    clickOnBrowserWindow(){
        cy.xpath('//span[contains(., "Browser Windows")]').should('be.visible').click();
    }

    clickonNewWindow(){
        
        cy.get(locator_alertsWindows.btnNewWindow).should('be.visible').click();
    }

    checkNewPage(){
        cy.visit('https://demoqa.com/sample');
        cy.get(locator_alertsWindows.popupNewPage).should('be.visible');
    }

}