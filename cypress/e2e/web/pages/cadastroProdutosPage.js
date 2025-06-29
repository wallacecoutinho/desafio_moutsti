class CadastroProdutosPage {
  // Seletores dos campos do formulário
  get inputNome() { return 'input[data-testid="nome"]'; }
  get inputPreco() { return 'input[data-testid="preco"]'; }
  get inputDescricao() { return 'textarea[data-testid="descricao"]'; }
  get inputQuantidade() { return 'input[data-testid="quantity"]'; }
  get btnCadastrar() { return 'button[data-testid="cadastrarProdutos"]'; }
  get msgSucesso() { return '.alert-success'; }
  get msgErro() { return '.alert-danger'; }
  get inputImagem() { return 'input[type="file"]'; }

  visitar() {
    cy.visit('/admin/cadastrarprodutos');
  }

  preencherNome(nome) {
    cy.get(this.inputNome).clear().type(nome);
  }

  preencherPreco(preco) {
    cy.get(this.inputPreco).clear().type(preco);
  }

  preencherDescricao(descricao) {
    cy.get(this.inputDescricao).clear().type(descricao);
  }

  preencherQuantidade(quantidade) {
    cy.get(this.inputQuantidade).clear().type(quantidade);
  }

  preencherImagem(filePath) {
    cy.get(this.inputImagem).attachFile(filePath);
   
  }

  clicarCadastrar() {
  }

   submit() {
    cy.get('[data-testid="cadastrarUsuario"]').click();
  }

  validarMensagemSucesso(mensagem) {
    cy.get(this.msgSucesso).should('contain', mensagem);
  }

  validarMensagemErro(mensagem) {
    cy.get(this.msgErro).should('be.visible').and('contain', mensagem);
  }

  cadastrarProduto({ nome, preco, descricao, quantidade }) {
    this.preencherNome(nome);
    this.preencherPreco(preco);
    this.preencherDescricao(descricao);
    this.preencherQuantidade(quantidade);
    this.clicarCadastrar();
  }
}

module.exports = new CadastroProdutosPage();