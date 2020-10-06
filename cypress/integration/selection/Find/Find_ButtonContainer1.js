import {Given} from "cypress-cucumber-preprocessor/steps";

Given("I find the button in container 1", () => {
    cy.get('[data-test-id=find_container_1]').find('[data-test-id=find_button]')
});