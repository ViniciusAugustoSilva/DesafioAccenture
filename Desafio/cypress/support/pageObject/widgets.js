const locator_widgets = require ("../locators/locator_widgets").locator_widgets;

export class Widgets {

    clickOnProgressBar(){
        cy.xpath('//span[contains(., "Progress Bar")]').should('be.visible').click();
    }

    clickonStart(){
        cy.get(locator_widgets.btnStartStop).should('be.visible').click();
    }

    monitorProgress(){
        
              cy.get(locator_widgets.progressBar).should('be.visible');
              cy.wait(1000);
              cy.get(locator_widgets.btnStartStop).click();
    

    }

    validateBarAndStart(){

            cy.get(locator_widgets.progressBar) 
  .should('be.visible') 
  .invoke('text') 
  .then((text) => {
    const progressValue = Number(text.replace('%', '')); 
    expect(progressValue).to.be.lessThan(25); 
  });

  
           
        cy.get(locator_widgets.btnStartStop).click();
    }

    clickOnReset(){
        cy.wait(6000);
        cy.get(locator_widgets.progressBar) 
            .should('be.visible') 
            .invoke('text') 
            .should((text) => {
                const progressValue = Number(text.replace('%', '')); 
                expect(progressValue).to.equal(100); 
            });

        cy.wait(1000);
        cy.get(locator_widgets.btnReset).should('be.visible').click();
    }

}