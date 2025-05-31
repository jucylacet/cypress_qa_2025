/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('https://angelofdiasg.tech/qaprogramador/sacfunc/')
});
context('Validação da funcionalidade de aprovação ou reprovação', () => {
    it('Validar os campos obrigatórios', () => {
        //Passos
        cy.get('#nome').type('Fulano Testador')
        cy.get('#email').type('tMkOv@example.com')
        cy.get('#renda').type('2000')
        cy.get('#cpf').type('123.456.789-10')
        cy.get('#credito').type('1000')
        cy.get('[type="submit"]').click()
        cy.get('#result').should('be.visible')
    });
    it('Validar aprovação de crédito', () => {
        //Passos
        cy.get('#nome').type('Fulano Testador')
        cy.get('#email').type('tMkOv@example.com')
        cy.get('#renda').type('2000')
        cy.get('#cpf').type('123.456.789-10')
        cy.get('#credito').type('1000')
        cy.get('[type="submit"]').click()
        cy.get('#result').should('contain', 'APROVADA')
        //cy.get('#result').contains(/Aprovada/i)
    });
    it('Validar reprovação de crédito', () => {
        //Passos
        cy.get('#nome').type('Fulano Testador')
        cy.get('#email').type('tMkOv@example.com')
        cy.get('#renda').type('1000')
        cy.get('#cpf').type('123.456.789-10')
        cy.get('#credito').type('2000')
        cy.get('[type="submit"]').click()
        cy.get('#result').should('contain', 'REPROVADA')
    });
});