import {Given} from "cypress-cucumber-preprocessor/steps";

Given('The text area equals Text with value',()=>{
    cy.get('[data-test-id=should_text_area]').should('have.value','Text with value');
});