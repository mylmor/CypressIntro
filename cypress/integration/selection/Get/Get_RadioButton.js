import {Given} from "cypress-cucumber-preprocessor/steps";

Given("I get my RadioButton",()=>{
    cy.get('#Computer');
});