import {Given} from "cypress-cucumber-preprocessor/steps";

Given("I click on the button in the first container",()=>{
   cy.contains("Container 1").parent().find('button');
});
Given("I click on the button in the second container",()=>{
    cy.contains("Container 2").parent().find('button');
});