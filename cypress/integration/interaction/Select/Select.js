import {Given} from "cypress-cucumber-preprocessor/steps";

Given("I select Hamster in the selection",()=>{
    cy.get('[data-test-id=select_simple]').select('Hamster');
});