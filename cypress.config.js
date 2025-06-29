const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    // Configurações de ambiente para testes de API.
    // Email e senha do usuário para autenticação.
    email: 'fulano@qa.com',
    password: 'teste',

    // URL base para as solicitações de API.
    baseUrlApi: 'https://serverest.dev'
  },

  e2e: {
    // URL base para todas as solicitações.
    baseUrl: 'https://front.serverest.dev/',
    setupNodeEvents(on, config) {
    // implement node event listeners here
    },
  }
});
