import 'cypress-mochawesome-reporter/cucumberSupport';
const { mockLocation } = require('../../../support/commands.js');
const { loginSucces } = require('../../tasks/LogIn.js');
const { selectTheaterByName } = require('../../tasks/SelectTheater.js');
const { selectMovieByDate } = require('../../tasks/SelectMovie.js');
const { selectSeatsNumber } = require('../../tasks/SelectSeats.js');
const { sleectFoodByName } = require('../../tasks/SelectFood.js');
const { shoppingCartValidation } = require('../../tasks/ShoppingCart.js');
const { cardInformationPayment } = require('../../tasks/CardInformation.js');
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('The user Login with user {string} and password {string}', (user, password) => {
    cy.visit("/", mockLocation(4.7110, -74.0721));
    cy.viewport(1536, 960);
    loginSucces(user, password);
}); 

When('the user selects a movie {string} at {string} on the day {string} and theater {string}', (movie, hour, day, theater) => {
    selectTheaterByName(theater);
    selectMovieByDate(movie, hour, day);
});

When('the user selects {int} tickets and chooses seats', (ticketCount) => {
    selectSeatsNumber(ticketCount);
    const itemsToValidate = ['entradas', 'cargo por servicio Boletería'];
    shoppingCartValidation(itemsToValidate);
    sleectFoodByName('CRISPETA 160 GR GRATIS PRO');
});

When('the user proceeds to payment', () => {
    const itemsToValidate = ['entradas', 'cargo por servicio Boletería', 'confitería', 'CRISPETA', 'cargo por servicio Confitería'];
    shoppingCartValidation(itemsToValidate);
    cardInformationPayment();
});

Then('the user should see the confirmation of ticket purchase', () => {
    cy.get('.code').should('exist');
    cy.get('.qr').should('exist');
});
