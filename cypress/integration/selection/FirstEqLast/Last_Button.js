import {Given} from "cypress-cucumber-preprocessor/steps";

Given("I get the last Button", () => {
    cy.get('[data-test-id=list_button]').last();
});