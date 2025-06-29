class CadastroUsuarioPage {
  visit() {
    cy.visit('/admin/cadastrarusuarios');
  }

  fillNome(nome) {
    cy.get('[data-testid="nome"]').clear().type(nome);
  }

  fillEmail(email) {
    cy.get('[data-testid="email"]').clear().type(email);
  }

  fillPassword(password) {
    cy.get('[data-testid="password"]').clear().type(password);
  }

  checkAdmin() {
    cy.get('[data-testid="checkbox"]').check();
  }

  submit() {
    cy.get('[data-testid="cadastrarUsuario"]').click();
  }

  assertSuccess() {
    cy.contains('Lista dos usuários').should('be.visible');
  }

  assertInvalidEmail() {
    cy.contains('Email deve ser um email válido').should('be.visible');
  }

  assertJaexisteEmail() {
    cy.contains('Este email já está sendo usado').should('be.visible');
  }
}

export default new CadastroUsuarioPage();