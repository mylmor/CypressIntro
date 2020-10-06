import {Given} from "cypress-cucumber-preprocessor/steps";

Given("I get my textInput",()=>{
    cy.get('[data-test-id=get_input]')
})