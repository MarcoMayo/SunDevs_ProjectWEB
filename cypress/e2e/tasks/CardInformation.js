function cardInformationPayment (){
    cy.get("[title='continuar']").click();
    cy.get('.content-loader', { timeout: 10000 }).should('not.exist');
    cy.get("[title='continuar']").click();
    cy.get('.content-loader', { timeout: 10000 }).should('not.exist');

    cy.contains('AGREGAR TARJETA').click();
    cy.get("[id='payment_creditCard.number']").type('5282096712463427');
    cy.get("[id='payment_creditCard.name']").type('PRUEBA TEST');
    cy.get("[id='payment_creditCard.securityCode']").type('123');
    cy.get("[id='payment_creditCard.installments'] > .ant-select-selection").click();
    cy.get('.ant-select-dropdown-menu-item-active').click();
    cy.get('#payment_agreement').click();

    cy.get("[title='continuar']").click();
    cy.get("[title='ACEPTAR']").click();
    cy.get('.loader-box', { timeout: 5000 }).should('exist');
    cy.get('.loader-box', { timeout: 180000 }).should('not.exist');
}
module.exports = {
    cardInformationPayment
};