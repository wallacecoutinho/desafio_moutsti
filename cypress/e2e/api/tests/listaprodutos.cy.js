describe('API Listar Produtos - Serverest', () => {
  it('deve listar todos os produtos com sucesso', function () {
    cy.apiListarProdutos().then((response) => {
      cy.log(`Status da resposta: ${response.status}`);
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('produtos');
      expect(response.body.produtos).to.be.an('array');
    });
  });
});