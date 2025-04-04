export class Base {

    accessURL (url = 'https://demoqa.com/'){
        cy.visit(url);
    }

}