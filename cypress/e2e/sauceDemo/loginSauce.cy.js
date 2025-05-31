/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/')
});
context('Validação da funcionalidade de login', () => {
    it('Login valido', () => {
        //Passos
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_label').should('contain', 'Products')
    });
    
    
});