import {Given} from "cypress-cucumber-preprocessor/steps";

Given("I get the Value number {string}", (index) => {
    cy.get('[data-test-id=list_table_row_value]').eq(index-1);
});