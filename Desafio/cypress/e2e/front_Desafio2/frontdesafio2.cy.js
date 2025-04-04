const {HomePage} = require('../../support/pageObject/homePage');
const {FormsPage} = require('../../support/pageObject/formsPage');
import dataHomePage from "../../fixtures/dataHomePage.json";
const {Base} = require('../../support/base');
const {faker} = require('@faker-js/faker');
import 'cypress-xpath';


describe('Forms', () => {

    const userData = {

        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        mobile: faker.string.numeric(10),
        currentAddress: faker.location.streetAddress(),

    };

    const homePage = new HomePage();
    const formsPage = new FormsPage();
    const base = new Base();

    beforeEach(() => {
        base.accessURL();
    });

    it('Forms', () => {

        console.log(dataHomePage.option_Forms);
        homePage.clickOnMenuOption(dataHomePage.option_Forms);

        formsPage.clickOnPracticeForm();
        formsPage.fillForm(userData);

    })
})
