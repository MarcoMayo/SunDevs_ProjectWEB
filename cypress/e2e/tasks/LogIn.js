function loginSucces(user, password) {
    cy.get('.ant-modal-close-x').click();
    cy.contains('INICIAR SESIÓN').click();
    cy.get('#MemberEmail').type(user);
    cy.get('#MemberPassword').type(password);
    cy.get('.text-center > .ant-btn').click();
}

module.exports = {
    loginSucces
};