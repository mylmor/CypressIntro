import {Given} from "cypress-cucumber-preprocessor/steps";

Given("I get the last Value", () => {
    cy.get('[data-test-id=list_table_row_value]').last();
});