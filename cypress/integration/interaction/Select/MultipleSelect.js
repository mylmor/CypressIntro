import {Given} from "cypress-cucumber-preprocessor/steps";

Given("I select Oranges in the multiple selection",()=>{
    cy.get('[data-test-id=select_multiple]').select('Oranges');
});

Given("I select Pineapple, Bananas and Oranges in the multiple selection",()=>{
    cy.get('[data-test-id=select_multiple]').select(['Oranges','Bananas','Pineapple']);
});