import {Given} from "cypress-cucumber-preprocessor/steps";

Given("I get my Button1", () => {
    cy.get('[data-test-id=contains_button]').contains("Button 1");
});