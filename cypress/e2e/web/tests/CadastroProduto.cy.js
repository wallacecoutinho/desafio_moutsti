import CadastroProdutosPage, { validarMensagemErro } from '../pages/cadastroProdutosPage';
import { faker } from '@faker-js/faker';

describe('Cadastro de Produto - Serverest', () => {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.loginViaSession(users.valid.email, users.valid.password);
    });
    CadastroProdutosPage.visitar();
    cy.get('input[data-testid="nome"]').should('be.visible');
  });

  it('Deve cadastrar um novo produto com sucesso', () => {
    const nome = faker.commerce.productName();
    const preco = faker.number.int({ min: 1, max: 1000 });
    const descricao = faker.commerce.productDescription();
    const quantidade = faker.number.int({ min: 1, max: 100 });
    const filePath = 'cypress/fixtures/imagem_teste.jpg';

    CadastroProdutosPage.preencherNome(nome);
    CadastroProdutosPage.preencherPreco(preco);
    CadastroProdutosPage.preencherDescricao(descricao);
    CadastroProdutosPage.preencherQuantidade(quantidade);
    cy.fixture('imagem_teste.jpg', 'base64').then((fileContent) => {
      cy.get('input[type="file"]').selectFile(
        {
          contents: Cypress.Buffer.from(fileContent, 'base64'),
          fileName: 'imagem_teste.jpg',
          mimeType: 'image/jpeg',
        },
        { force: true }
      );
    });
    CadastroProdutosPage.clicarCadastrar();
  });

  it('Não deve cadastrar produto Sem Nome', () => {
    const preco = faker.number.int({ min: 1, max: 1000 });
    const descricao = faker.commerce.productDescription();
    const quantidade = faker.number.int({ min: 1, max: 100 });
    const caminhoImagem = `cypress/fixtures/imagem_teste.jpg`; // ajuste o caminho conforme sua estrutura

    CadastroProdutosPage.preencherPreco(preco);
    CadastroProdutosPage.preencherDescricao(descricao);
    CadastroProdutosPage.preencherQuantidade(quantidade);
    cy.fixture('imagem_teste.jpg', 'base64').then((fileContent) => {
      cy.get('input[type="file"]').selectFile(
        {
          contents: Cypress.Buffer.from(fileContent, 'base64'),
          fileName: 'imagem_teste.jpg',
          mimeType: 'image/jpeg',
        },
        { force: true }
      );
    });
    CadastroProdutosPage.clicarCadastrar();

  });


  it('Não deve cadastrar produto sem Preço', () => {
    const nome = faker.commerce.productName();
    
    const descricao = faker.commerce.productDescription();
    const quantidade = faker.number.int({ min: 1, max: 100 });
    const filePath = 'cypress/fixtures/imagem_teste.jpg';

    CadastroProdutosPage.preencherNome(nome);
    CadastroProdutosPage.preencherDescricao(descricao);
    CadastroProdutosPage.preencherQuantidade(quantidade);
    cy.fixture('imagem_teste.jpg', 'base64').then((fileContent) => {
      cy.get('input[type="file"]').selectFile(
        {
          contents: Cypress.Buffer.from(fileContent, 'base64'),
          fileName: 'imagem_teste.jpg',
          mimeType: 'image/jpeg',
        },
        { force: true }
      );
    });
    CadastroProdutosPage.clicarCadastrar();

  });

  it('Não deve cadastrar produto sem Imagem', () => {
    const nome = faker.commerce.productName();
    const preco = faker.number.int({ min: 1, max: 1000 });
    const descricao = faker.commerce.productDescription();
    const quantidade = faker.number.int({ min: 1, max: 100 });
     
    CadastroProdutosPage.preencherNome(nome);
    CadastroProdutosPage.preencherPreco(preco);
    CadastroProdutosPage.preencherDescricao(descricao);
    CadastroProdutosPage.preencherQuantidade(quantidade);

    CadastroProdutosPage.clicarCadastrar();
   
  });
});