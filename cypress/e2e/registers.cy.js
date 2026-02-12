describe('Cadastro de Usuário', () => {
  beforeEach(() => {
    cy.visit('/register');
  });

  it('Deve exibir erro quando nome não está preenchido', () => {
    cy.get('#email').type('usuario@teste.com');
    cy.get('#password').type('senhaSegura123');
    cy.get('#btnRegister').click();
    cy.get('span#errorMessageFirstName').should('be.visible').and('contain', 'O campo nome deve ser prenchido');
  });

  it('Deve exibir erro quando e-mail está vazio', () => {
    cy.get('#user').type('Usuário Teste');
    cy.get('#password').type('senhaSegura123');
    cy.get('#btnRegister').click();
    cy.get('span#errorMessageFirstName').should('be.visible').and('contain', 'O campo e-mail deve ser prenchido corretamente');
  });

  it('Deve exibir erro quando e-mail é inválido', () => {
    cy.get('#user').type('Usuário Teste');
    cy.get('#email').type('emailinvalido');
    cy.get('#password').type('senhaSegura123');
    cy.get('#btnRegister').click();
    cy.get('span#errorMessageFirstName').should('be.visible').and('contain', 'O campo e-mail deve ser prenchido corretamente');
  });

  it('Deve exibir erro quando senha está vazia', () => {
    cy.get('#user').type('Usuário Teste');
    cy.get('#email').type('usuario@teste.com');
    cy.get('#btnRegister').click();
    cy.get('span#errorMessageFirstName').should('be.visible').and('contain', 'O campo senha deve ter pelo menos 6 dígitos');
  });

  it('Deve exibir erro quando senha tem menos de 6 dígitos', () => {
    cy.get('#user').type('Usuário Teste');
    cy.get('#email').type('usuario@teste.com');
    cy.get('#password').type('123');
    cy.get('#btnRegister').click();
    cy.get('span#errorMessageFirstName').should('be.visible').and('contain', 'O campo senha deve ter pelo menos 6 dígitos');
  });
});

