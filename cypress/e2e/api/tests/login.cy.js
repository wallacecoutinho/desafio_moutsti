describe('API Login - Serverest', () => {
  let users;

  before(() => {
    cy.fixture('users').then((data) => {
      users = data;
    });
  });

  it('deve fazer login com sucesso', function () {
    cy.apiLogin(users.valid.email, users.valid.password).then((response) => {
      cy.log(`Status da resposta: ${response.status}`);
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', 'Login realizado com sucesso');     
    });
  });

  it('Não deve fazer login com credencial inválida', function () {
    cy.apiLogin(users.invalid.email, users.invalid.password).then((response) => {
      cy.log(`Status da resposta: ${response.status}`);
      expect(response.status).to.eq(401);
      expect(response.body).to.have.property('message', 'Email e/ou senha inválidos');
    });
  });
});