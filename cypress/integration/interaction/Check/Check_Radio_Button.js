import {Given} from "cypress-cucumber-preprocessor/steps";

Given("I check the phone radio button",()=>{
    cy.get('[data-test-id=check_radio_phone]').check();
});