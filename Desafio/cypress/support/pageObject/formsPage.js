const locators_forms = require ("../locators/locator_forms.js").locator_forms;

export class FormsPage {

    constructor(){
        this.userData = {};
    }

    clickOnPracticeForm(){
        cy.get(locators_forms.btnPracticeForm).click();
    }

    setUserData(userData){
        this.userData = userData;
    }

    fillForm(){
        cy.get(locators_forms.inputFirstName).type(this.userData.firstName);
        cy.get(locators_forms.inputLastName).type(this.userData.lastName);
        cy.get(locators_forms.inputEmail).type(this.userData.firstName + this.userData.lastName + '@email.com');
        cy.get(locators_forms.radioBtnGender).click();
        cy.get(locators_forms.inputMobile).type(this.userData.mobile);
        cy.get(locators_forms.inputLastName).type('25 Jan 1990');
        cy.get(locators_forms.inputSubject).type('test subject');
        cy.get(locators_forms.checkbox_hobbies_music).click();
        this.selectFile();
        cy.get(locators_forms.address).type(this.userData.currentAddress);
        cy.get(locators_forms.dropdown_state).select(1);
        cy.get(locators_forms.dropdown_city).select(1);
        cy.get(locators_forms.btnSubmit).click();

    }

    selectFile() {
        const filePath = 'cypress\files\desafio.txt'; 
    
        cy.get("input[id='uploadPicture']").attachFile(filePath);
        cy.wait(10000); 
    }

}