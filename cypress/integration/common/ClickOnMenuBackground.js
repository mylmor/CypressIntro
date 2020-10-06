import {Given} from "cypress-cucumber-preprocessor/steps";

Given("I go to {string} menu", (menuButton) => {
    switch (menuButton.toUpperCase()) {
        case "GET" :
            ClickOnMenuItem('get');
            break;
        case "CONTAINS" :
            ClickOnMenuItem('contains');
            break;
        case "FIND" :
            ClickOnMenuItem('find');
            break;
        case "FIRST/EQ/LAST" :
            ClickOnMenuItem('eq');
            break;
        case "PARENT" :
            ClickOnMenuItem('parent');
            break;
        case "WITHIN" :
            ClickOnMenuItem('within');
            break;
        case "CLICK" :
            ClickOnMenuItem('click');
            break;
        case "TYPE" :
            ClickOnMenuItem('type');
            break;
        case "SELECT":
            ClickOnMenuItem('select');
            break;
        case "CHECK":
            ClickOnMenuItem('check');
            break;
        case "SHOULD":
            ClickOnMenuItem('should');
            break;

        default :
            cy.log("couldn't find menu button");
            break;
    }
});

function ClickOnMenuItem(param){
    cy.get(`[data-test-id=navigation_menu_${param}`).click();
}