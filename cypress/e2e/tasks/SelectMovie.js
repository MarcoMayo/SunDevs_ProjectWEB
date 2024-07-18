function selectMovieByDate (movie, hour, day){
    cy.intercept('GET', 'https://api-dev.cinemark-core.sundevs.cloud/country/co/monthly/subscriptions/get?LoyaltyMembershipId=OTEGK9XXCQXQB1').as('GETMovies');
    cy.wait('@GETMovies');
    cy.contains(day).click();
    cy.intercept('POST', 'https://s.clarity.ms/collect').as('POSTMovies');
    cy.wait('@POSTMovies');
    cy.get('.section-detail__title').contains(movie).parent().parent().next().find(".sessions__button--runtime").contains(hour).click();
    cy.get('.detail-session__drawer--controls > .primary').click();
}

module.exports = {
    selectMovieByDate
};