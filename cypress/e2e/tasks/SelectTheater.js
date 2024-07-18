function selectTheaterByName (theather){
    cy.intercept('POST', 'https://s.clarity.ms/collect').as('POSTMovies');
    cy.wait('@POSTMovies');
    cy.get('.menu > .text--uppercase').eq(1).click();
    cy.contains(theather).siblings('.theater-item__footer').click()
}

module.exports = {
    selectTheaterByName
};