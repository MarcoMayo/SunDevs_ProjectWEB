function shoppingCartValidation(items){
    cy.get('.shopping-cart__buyer').click();  
    
    items.forEach(item => {
        cy.contains(item).should('exist');
      });

    cy.get('.snackbar__name-close').click();
}

module.exports = {
    shoppingCartValidation
};