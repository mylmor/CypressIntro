import {Given} from "cypress-cucumber-preprocessor/steps";

Given("I get my CheckBox", () => {
   // select input child
    cy.get('[data-test-id=get_checkbox_bike]').click();
});