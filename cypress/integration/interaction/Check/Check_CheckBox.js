import {Given} from "cypress-cucumber-preprocessor/steps";

Given("I check the Bike checkbox",()=>{
    cy.get('[data-test-id=check_checkbox_bike]').check();
});

Given("I check the Bike and Train checkboxes",()=>{
    cy.get('[data-test-id=check_checkbox_bike]').check();
    cy.get('[data-test-id=check_checkbox_train]').check();
});