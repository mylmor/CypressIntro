import {Given} from "cypress-cucumber-preprocessor/steps";

Given("I click on the click_text",()=>{
    cy.get('[data-test-id=click_text]').click();
});