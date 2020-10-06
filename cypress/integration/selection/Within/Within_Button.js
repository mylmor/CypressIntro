import {Given} from "cypress-cucumber-preprocessor/steps";

Given("I click on the button within the first container", () => {
    cy.contains("Container 1").parent()
        .within(() => {
            cy.get('button');
        });
});
Given("I click on the button within the second container", () => {
    cy.contains("Container 2").parent()
        .within(() => cy.get('button'));
});