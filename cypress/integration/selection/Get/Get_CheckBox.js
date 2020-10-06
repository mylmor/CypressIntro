import {Given} from "cypress-cucumber-preprocessor/steps";

Given("I get my CheckBox", () => {
    cy.get('#Bike');
});