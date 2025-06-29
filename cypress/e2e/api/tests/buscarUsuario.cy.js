describe('API Buscar Usuário - Serverest', () => {
  it('deve buscar um usuário pelo ID com sucesso', function () {
    const usuarioId = '0uxuPY0cbmQhpEz1';

    cy.apiBuscarUsuarioPorId(usuarioId).then((response) => {
      cy.log(`Status da resposta: ${response.status}`);
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('nome', 'Fulano da Silva');
      expect(response.body).to.have.property('email', 'fulano@qa.com');
      expect(response.body).to.have.property('password', 'teste');
      expect(response.body).to.have.property('administrador', 'true');
      expect(response.body).to.have.property('_id', usuarioId);
    });
  });
});