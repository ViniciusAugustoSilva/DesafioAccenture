const { HomePage } = require('../../support/pageObject/homePage');
const { FormsPage } = require('../../support/pageObject/formsPage');
const { AlertsWindows } = require('../../support/pageObject/alertsWindows');
const { Elements } = require('../../support/pageObject/elementsPage');
const { Widgets } = require('../../support/pageObject/widgets');
const { InteractionsPage } = require('../../support/pageObject/interactionsPage');
const { Base } = require('../../support/base');
const { faker } = require('@faker-js/faker');
import dataHomePage from "../../fixtures/dataHomePage.json";
import 'cypress-xpath';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

describe('Forms', () => {
    
    const phoneNumber = Cypress._.replace(faker.phone.number('##########'), /[^0-9]/g, '');

    const userData = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        mobile: phoneNumber, 
        currentAddress: faker.location.streetAddress(),
    };

    
    const homePage = new HomePage();
    const formsPage = new FormsPage();
    const alertsWindows = new AlertsWindows();
    const elements = new Elements();
    const widgets = new Widgets();
    const interactions = new InteractionsPage();
    const base = new Base();

    
    beforeEach(() => {
        
        Cypress.on('window:before:load', (win) => {
            const style = win.document.createElement('style');
            style.innerHTML = `
                .covering-link, iframe, .ad-banner {
                    display: none !important;
                    visibility: hidden !important;
                }
            `;
            win.document.head.appendChild(style);
        });

        
        cy.intercept('GET', '**/ads/**', { body: {} }).as('blockAds');
        cy.intercept('GET', '**/popups/**', { body: {} }).as('blockPopups');

        
        base.accessURL();

        
        cy.get('body').should('be.visible'); 
    });

   // Teste para a funcionalidade de Forms
    it('forms', () => {
        homePage.clickOnMenuOption(dataHomePage.option_Forms);
        formsPage.clickOnPracticeForm();
        formsPage.setUserData(userData);
        formsPage.fillForm(userData);
        formsPage.verifySuccessModal();
    });

  // Teste para AlertsFrameWindow
    it('alerts and frame windows', () => {
        homePage.clickOnMenuOption(dataHomePage.option_Alerts);
        alertsWindows.clickOnBrowserWindow();
        alertsWindows.clickonNewWindow();
        alertsWindows.checkNewPage();
    });

    // Teste para a funcionalidade de Elements
    it('Elements', () => {
        homePage.clickOnMenuOption(dataHomePage.option_Elements);
        elements.clickOnWebTables();
        elements.clickonAdd();
        elements.setUserData(userData);
        elements.fillRegistrationForm(userData);
        elements.clickonEdit();
        elements.editRegistrationForm();
        elements.clickonDelete();
    }); 

    // Teste para a funcionalidade de Widgets
     it('Widgets', () => {
        homePage.clickOnMenuOption(dataHomePage.option_Widgets);
        widgets.clickOnProgressBar();
        widgets.clickonStart();
        widgets.monitorProgress();
        widgets.validateBarAndStart();
        widgets.clickOnReset();
    });

    // Teste para a funcionalidade de Interactions
    it('Interactions', () => {
        homePage.clickOnMenuOption(dataHomePage.option_Interactions);
        interactions.clickOnSortable();
        interactions.sortByAscending();
        
    });

});
