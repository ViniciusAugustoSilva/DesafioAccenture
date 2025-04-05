const locator_elements = require ("../locators/locator_elements.js").locator_elements;

export class Elements {

    constructor(){
        this.userData = {};
    }

    clickOnWebTables(){
        cy.xpath('//span[contains(., "Web Tables")]').should('be.visible').click();
        cy.wait(3000);
    }

    clickonAdd(){
        cy.xpath(locator_elements.btnAdd).click();

    }


    setUserData(userData){
        this.userData = userData;
    }

    fillRegistrationForm(){
        cy.get(locator_elements.inputFirstName).focus();
        cy.get(locator_elements.inputFirstName).should('be.visible').type(this.userData.firstName);
        cy.get(locator_elements.inputLastName).type(this.userData.lastName);
        cy.get(locator_elements.inputEmail).type(this.userData.firstName + this.userData.lastName + '@email.com');
        cy.get(locator_elements.inputAge).type('25');
        cy.get(locator_elements.inputSalary).type('3000');
        cy.get(locator_elements.inputDepartment).type('Department');
        cy.get(locator_elements.btnSubmit).click();

    }

    clickonEdit(){
        cy.wait(3000);
        cy.get(locator_elements.btnEdit).should('be.visible').click();
    }

    editRegistrationForm(){
        cy.get(locator_elements.inputAge).should('be.visible').type('30');
        cy.get(locator_elements.inputSalary).type('4000');
        cy.get(locator_elements.btnSubmit).click();

    }

    clickonDelete(){
        cy.wait(3000);
        cy.get(locator_elements.btnDelete).should('be.visible').click();
    }


}