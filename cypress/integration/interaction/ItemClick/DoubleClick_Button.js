import {Given} from "cypress-cucumber-preprocessor/steps";

Given("I double click on the double_click_button",()=>{
    cy.get('[data-test-id=double_click_button]').dblclick();
});