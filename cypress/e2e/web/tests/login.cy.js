import LoginPage from '../pages/LoginPage';
import { faker } from '@faker-js/faker';

describe('Login - Serverest', () => {
  let users;

  before(() => {
    cy.fixture('users').then((data) => {
      users = data;
    });
  });

  beforeEach(() => {
    LoginPage.visit();
  });

  it('Deve realizar login com sucesso com credenciais válidas', () => {
    cy.login(users.valid.email, users.valid.password);
    LoginPage.assertLoginSuccess();
  });

  it('Não deve logar com e-mail válido e senha aleatória (faker)', () => {
    const fakePassword = faker.internet.password();
    cy.login(users.valid.email, fakePassword);
    LoginPage.assertLoginError('Email e/ou senha inválidos');
  });

  it('Não deve logar com e-mail inválido e senha válida', () => {
    cy.login(users.invalid.email, users.valid.password);
    LoginPage.assertLoginError('Email e/ou senha inválidos');
  });

  it('Não deve logar com e-mail válido e senha inválida', () => {
    cy.login(users.valid.email, users.invalid.password);
    LoginPage.assertLoginError('Email e/ou senha inválidos');
  });

  it('Não deve logar com e-mail e senha inválidos', () => {
    cy.login(users.invalid.email, users.invalid.password);
    LoginPage.assertLoginError('Email e/ou senha inválidos');
  });

  it('Não deve logar com campos vazios', () => {
    LoginPage.submit();
    LoginPage.assertLoginError('Email é obrigatório');
    LoginPage.assertLoginError('Password é obrigatório');
  });
});