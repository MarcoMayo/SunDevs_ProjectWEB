function selectSeatsNumber(ticketCount){
    cy.get('.loader-box', { timeout: 20000 }).should('not.exist'); 
    cy.get(".ant-modal-close-x").click();
    cy.get('.information__top-bar-bistro').next().find('.seat-format__item-grid').eq(1).find('.ant-select').click();
    cy.get('.ant-select-dropdown-menu .ant-select-dropdown-menu-item').eq(ticketCount).click();
    cy.get("[title='continuar']").click();

    for (let i = 0; i < ticketCount; i++) {
        cy.get('.seat-item--available:not(.seat-item--my-selected)').first().click();
    }

    cy.get("[title='continuar']").click(); 
    cy.get("[title='confirmar']").click();
    cy.get('.content-loader', { timeout: 20000 }).should('not.exist'); 
}

module.exports = {
    selectSeatsNumber
};