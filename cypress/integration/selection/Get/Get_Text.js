import {Given} from "cypress-cucumber-preprocessor/steps";

Given("I get my text",()=>{
    cy.get('[data-test-id=get_text_block]');
})