describe("Login Tests", () => {
  
    beforeEach(() => {
    cy.visit("/login");
  });

  it("Deve exibir mensagem de erro para e-mail vazio", () => {
    cy.get("#user").clear();
    cy.get("#password").type("senhaSegura123");
    cy.get("#btnLogin").click();
    cy.get("span.invalid_input")
      .should("be.visible")
      .and("contain", "E-mail inválido.");
  });

  it("Deve exibir mensagem de erro para e-mail inválido", () => {
    cy.get("#user").type("emailinvalido");
    cy.get("#password").type("senhaSegura123");
    cy.get("#btnLogin").click();
    cy.get("span.invalid_input")
      .should("be.visible")
      .and("contain", "E-mail inválido.");
  });

  it("Deve exibir mensagem de erro para senha vazia", () => {
    cy.get("#user").type("usuario@teste.com");
    cy.get("#password").clear();
    cy.get("#btnLogin").click();
    cy.get("span.invalid_input")
      .should("be.visible")
      .and("contain", "Senha inválida.");
  });

  it("Deve exibir mensagem de erro para senha com menos de 6 dígitos", () => {
    cy.get("#user").type("usuario@teste.com");
    cy.get("#password").type("123");
    cy.get("#btnLogin").click();
    cy.get("span.invalid_input")
      .should("be.visible")
      .and("contain", "Senha inválida.");
  });

  it("Deve fazer login com credenciais válidas", () => {
    cy.get("#user").type("usuario@teste.com");
    cy.get("#password").type("senhaSegura123");
    cy.get("#btnLogin").click();
    cy.get("h2#swal2-title")
      .should("be.visible")
      .and("contain", "Login realizado");
  });
});
