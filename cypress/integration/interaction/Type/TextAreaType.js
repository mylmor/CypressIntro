import {Given} from "cypress-cucumber-preprocessor/steps";

Given("I type in the text area field",()=>{
    cy.get('[data-test-id=type_text_area]').clear().type("small test");
});