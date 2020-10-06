import {Given} from "cypress-cucumber-preprocessor/steps";

Given('The input equals Input with value',()=>{
    cy.get('[data-test-id=should_input]').should('have.value','Input with value');
});