/// <reference types="cypress" />

class RegistrationPage {
     
    visit() {
        cy.visit('/');
    }

    preencherDados(nome, sobrenome, telefone, email, senha) {
        cy.get('[data-testid="firstName"]').type(nome);
        cy.get('[data-testid="lastName"]').type(sobrenome);
        cy.get('[data-testid="phone"]').type(telefone);
        cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]').type(email);
        cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]').type(senha, { log: false });
        cy.get('[data-testid="repassword"]').type(senha, { log: false });
    }

    submeterCadastro() {
        cy.get('[data-testid="create"]').click()
        cy.get('[href="/Tab/Account"]').click()
    }
}

export default RegistrationPage;