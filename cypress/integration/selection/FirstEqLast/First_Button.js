import {Given} from "cypress-cucumber-preprocessor/steps";

Given("I get the first Button", () => {
    cy.log("hello");
    cy.get('[data-test-id=list_button]').first();
});