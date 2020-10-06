import {When, Then} from "cypress-cucumber-preprocessor/steps";

When('I type some {string}', (text) => {
    cy.get('[data-test-id=should_text_area]').clear().type(text);
});
Then('It should equal {string}', (text) => {
    cy.get('[data-test-id=should_text_area]').should('have.value', text);
})