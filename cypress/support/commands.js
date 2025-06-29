import LoginPage from '../e2e/web/pages/LoginPage';
import 'cypress-file-upload';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
  LoginPage.fillEmail(email);
  LoginPage.fillPassword(password);
  LoginPage.submit();
});

Cypress.Commands.add('loginViaSession', (email, password) => {
  cy.session([email, password], () => {
    cy.visit('/login');
    cy.get('[data-testid="email"]').type(email);
    cy.get('[data-testid="senha"]').type(password);
    cy.get('[data-testid="entrar"]').click();
    cy.contains('Bem Vindo').should('be.visible');
  });
});

const apiserveRest = Cypress.env("baseUrlApi");

// Comando para fazer login via API
Cypress.Commands.add('apiLogin', (email, password) => {
    return cy.api({
        method: 'POST',
        url: `${apiserveRest}/login`,
        headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
        },
        body: { 
            email,
            password
        },
        failOnStatusCode: false,
    }).then((response) => {
        return response;      
        });
});

Cypress.Commands.add('apiCadastroUsuario', (nome, email, password, administrador) => {
    return cy.api({
        method: 'POST',
        url: `${apiserveRest}/usuarios`,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: { 
            nome,
            email,
            password,
            administrador
        },
        failOnStatusCode: false,
    }).then((response) => {
        return response;      
    });
});

Cypress.Commands.add('apiListarProdutos', () => {
  return cy.api({
    method: 'GET',
    url: `${apiserveRest}/produtos`,
    headers: {
      accept: 'application/json'
    },
    failOnStatusCode: false,
  }).then((response) => {    
    return response;
  });
});

Cypress.Commands.add('apiBuscarUsuarioPorId', (id) => {
  return cy.api({
    method: 'GET',
    url: `${apiserveRest}/usuarios/${id}`,
    headers: {
      accept: 'application/json'
    },
    failOnStatusCode: false,
  }).then((response) => {
    return response;
  });
});
