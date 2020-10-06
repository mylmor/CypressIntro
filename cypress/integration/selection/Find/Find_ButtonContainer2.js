import {Given} from "cypress-cucumber-preprocessor/steps";

Given("I find the button in container 2", () => {
    cy.get('[data-test-id=find_container_2]').find(' [data-test-id=find_button]')
});