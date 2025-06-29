class LoginPage {
  visit() {
    cy.visit('/login');
  }

  fillEmail(email) {
    cy.get('[data-testid="email"]').clear().type(email);
  }

  fillPassword(password) {
    cy.get('[data-testid="senha"]').clear().type(password);
  }

  submit() {
    cy.get('[data-testid="entrar"]').click();
  }

  clickCadastrarSe() {
    cy.get('[data-testid="cadastrar"]').click();
  }

  assertLoginSuccess() {
    cy.url().should('not.include', '/login');
    cy.contains('Bem Vindo').should('exist');
  }

  assertLoginError(message) {
    cy.contains(message).should('be.visible');
    cy.url().should('include', '/login');
  }
}

export default new LoginPage();