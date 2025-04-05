const locators_forms = require ("../locators/locator_forms.js").locator_forms;
import 'cypress-file-upload';

export class FormsPage {

    constructor(){
        this.userData = {};
    }

    clickOnPracticeForm(){
        
        cy.xpath('//span[contains(., "Practice")]').should('be.visible').click();
    }

    setUserData(userData){
        this.userData = userData;
    }

    fillForm(){
        cy.wait(3000);
        cy.get(locators_forms.inputFirstName).type(this.userData.firstName);
        cy.get(locators_forms.inputLastName).type(this.userData.lastName);
        cy.get(locators_forms.inputEmail).type(this.userData.firstName + this.userData.lastName + '@email.com');
        cy.wait(1000);
        cy.get(locators_forms.radioBtnGender).click();
        cy.get(locators_forms.inputMobile).type(this.userData.mobile,{ delay: 100 });
        cy.wait(1000);
        cy.get(locators_forms.inputBithday).click();
        cy.get(locators_forms.inputBithday).type('{backspace}{backspace}{backspace}{backspace}');
        cy.get(locators_forms.inputBithday).type('1990');
        cy.wait(1000);
        cy.get(locators_forms.inputSubject).type('test subject');
        cy.wait(1000);
        cy.get(locators_forms.checkbox_hobbies_music).should('be.visible').click();
        this.selectFile();
        cy.get(locators_forms.address).should('be.visible').type(this.userData.currentAddress);
        cy.get(locators_forms.dropdown_state).click();
        cy.get(locators_forms.dropdown_state).type('NCR{enter}');
        cy.get(locators_forms.dropdown_city).click();
        cy.get(locators_forms.dropdown_city).type('Delhi{enter}');
        cy.get(locators_forms.btnSubmit).click();

    }

    verifySuccessModal(){
        cy.get(locators_forms.successModal).should('be.visible');
    }

    selectFile() {
        const filePath = 'desafio.txt'; 
    
        cy.get("input[id='uploadPicture']").attachFile(filePath);
        cy.wait(5000); 
    }

}