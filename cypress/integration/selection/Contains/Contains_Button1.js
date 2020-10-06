import {Given} from "cypress-cucumber-preprocessor/steps";

Given("I get my Button1", () => {
    //plus de précision
    cy.contains("[data-test-id=contains_button]", "Button 1");
});