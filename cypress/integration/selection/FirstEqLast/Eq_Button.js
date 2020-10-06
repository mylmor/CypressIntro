import {Given} from "cypress-cucumber-preprocessor/steps";

Given("I get the second Button", () => {
    cy.get('[data-test-id=list_button]').eq(1);
});