describe('API Cadastro de Usuário - Serverest', () => {
  it('deve cadastrar um novo usuário com sucesso', function () {
    cy.fixture('novoUsuario').then((usuario) => {
      usuario.email = `beltrano_${Date.now()}@qa.com.br`;
      cy.apiCadastroUsuario(usuario.nome, usuario.email, usuario.password, usuario.administrador).then((response) => {
        cy.log(`Status da resposta: ${response.status}`);
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
        expect(response.body).to.have.property('_id');
      });
    });
  });

  it('não deve cadastrar usuário já existente', function () {
    cy.fixture('novoUsuario').then((usuario) => {
      usuario.email = `beltrano_${Date.now()}@qa.com.br`;
      cy.apiCadastroUsuario(usuario.nome, usuario.email, usuario.password, usuario.administrador).then(() => {
        cy.apiCadastroUsuario(usuario.nome, usuario.email, usuario.password, usuario.administrador).then((response) => {
          cy.log(`Status da resposta: ${response.status}`);
          expect(response.status).to.eq(400);
          expect(response.body).to.have.property('message', 'Este email já está sendo usado');
        });
      });
    });
  });
});