function sleectFoodByName (food){
    cy.contains(food).parents('.candy-store__item').find('.candy-store__btn-control--left-space').click();        
}

module.exports = {
    sleectFoodByName
};