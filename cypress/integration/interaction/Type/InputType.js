import {Given} from "cypress-cucumber-preprocessor/steps";

Given("I type in the input field",()=>{
    cy.get('[data-test-id=type_input]').clear().type("small test");
});