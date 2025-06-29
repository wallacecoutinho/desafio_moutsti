# Automação com Cypress

Projeto Desafio de automação com Cypress Framework.

## 🚀 Começando

### Pré-requisitos

- Node.js (versão LTS)
- npm ou yarn

### Instalação

1. Clone este repositório
2. Instale as dependências:

```bash
npm install --save-dev cypress
```

## 📁 Estrutura do Projeto

```
cypress/
├── e2e/              # Arquivos de teste
├──── api\tests         # Arquivos de teste da backend
├──── web\tests         # Arquivos de teste da frontend
├────── pages/            # Page Objects
├── fixtures/         # Arquivos de dados para testes
└── support/          # Arquivos de suporte e comandos customizados

```

## 🛠️ Executando os Testes

Executar testes em modo headless:

```bash
npx cypress run
```

Abrir o Cypress Test Runner:

```bash
npx cypress open
```

## 📝 Boas Práticas

1. Utilize o padrão Page Object para melhor manutenção
2. Mantenha dados de teste em fixtures
3. Use comandos customizados para ações repetitivas
4. Siga as convenções de nomenclatura:
   - Arquivos de teste: `*.cy.js`
   - Page objects: `*Page.js`
   - Fixtures: nomes descritivos como `produtos.json`, `usuarios.json`

## 📚 Documentação

- [Documentação do Cypress](https://docs.cypress.io/)
- [Melhores Práticas](https://docs.cypress.io/guides/references/best-practices)
