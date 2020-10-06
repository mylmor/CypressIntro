import {Given} from "cypress-cucumber-preprocessor/steps";

Given("I click on the click_button",()=>{
    cy.get('[data-test-id=click_button]').click();
});