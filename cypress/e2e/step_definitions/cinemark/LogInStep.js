import 'cypress-mochawesome-reporter/cucumberSupport';
const { loginSucces } = require('../../tasks/LogIn.js');
const { mockLocation } = require('../../../support/commands.js');
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given("The user is on the main page", () => {
    cy.visit("/", mockLocation(4.7110, -74.0721));
    cy.viewport(1536, 960);
  })

When("Enters credentials user {string} and password {string}", (user, password) => {
    loginSucces(user, password);
})

Then("the user can see the init page", () => {
    cy.get('.user-name').contains("QA Automation")
})
