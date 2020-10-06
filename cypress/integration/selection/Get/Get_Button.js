import {Given} from "cypress-cucumber-preprocessor/steps";

Given("I get my button", () => {
    cy.get('[data-test-id=get_button]');
});