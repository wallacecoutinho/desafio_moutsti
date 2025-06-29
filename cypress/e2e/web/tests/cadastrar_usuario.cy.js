import CadastroUsuarioPage from '../pages/CadastroUsuarioPage';
import { faker } from '@faker-js/faker';

describe('Cadastro de Usuário - Serverest', () => {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.loginViaSession(users.valid.email, users.valid.password);
    });
    CadastroUsuarioPage.visit();
    cy.get('[data-testid="nome"]').should('be.visible');
  });

  it('Deve cadastrar um novo usuário com sucesso', () => {
    const nome = faker.person.fullName();
    const email = faker.internet.email();
    const password = faker.internet.password();

    CadastroUsuarioPage.fillNome(nome);
    CadastroUsuarioPage.fillEmail(email);
    CadastroUsuarioPage.fillPassword(password);
    CadastroUsuarioPage.checkAdmin();
    CadastroUsuarioPage.submit();

    CadastroUsuarioPage.assertSuccess();
  });

  it('Não deve cadastrar usuário com e-mail inválido', () => {
    const nome = faker.person.fullName();
    const email = 'email@invalido'; // email inválido
    const password = faker.internet.password();

    CadastroUsuarioPage.fillNome(nome);
    CadastroUsuarioPage.fillEmail(email);
    CadastroUsuarioPage.fillPassword(password);
    CadastroUsuarioPage.checkAdmin();
    CadastroUsuarioPage.submit();

    CadastroUsuarioPage.assertInvalidEmail();
  });

  it('Não deve cadastrar usuário já existente', () => {
    const nome = faker.person.fullName();
    const email = 'fulano@qa.com' // email já existe
    const password = faker.internet.password();

    CadastroUsuarioPage.fillNome(nome);
    CadastroUsuarioPage.fillEmail(email);
    CadastroUsuarioPage.fillPassword(password);
    CadastroUsuarioPage.checkAdmin();
    CadastroUsuarioPage.submit();

    CadastroUsuarioPage.assertJaexisteEmail();
  });
});