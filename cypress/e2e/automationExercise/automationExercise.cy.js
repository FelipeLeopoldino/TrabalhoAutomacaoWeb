/// <reference types="cypress" />

describe("Trabalho de conclusão de Disciplina PGATS - Automação de testes na camada de interface (WEB)", () => {
  beforeEach("", () => {
    cy.visit("/");
  });

  it("Test Case 1: Register User", () => {
    const timestamp = Date.now();
    cy.get('a[href="/"]').first().should("be.visible");
    const user = {
      name: `Cypress Test User ${timestamp}`,
      email: `cypress.user.${timestamp}@example.com`,
    };
    cy.registerUser(user);
    cy.deleteCurrentAccount();
  });

  it("Test Case 2: Login User with correct email and password", () => {
    cy.loginUser();
    cy.contains("a", "Logout").click();
  });

  it("Test Case 3: Login User with incorrect email and password", () => {
    cy.contains("a", "Signup / Login").click();
    cy.contains("Login to your account").should("be.visible");
    cy.fixture("login/invalidCredentials").then((credentials) => {
      cy.get('[data-qa="login-email"]').type(credentials.email);
      cy.get('[data-qa="login-password"]').type(credentials.password);
    });
    cy.get('[data-qa="login-button"]').click();
    cy.contains("Your email or password is incorrect!").should("be.visible");
  });

  it("Test Case 4: Logout User", () => {
    cy.loginUser();
    cy.contains("a", "Logout").click();
    cy.contains("Login to your account").should("be.visible");
  });

  it("Test Case 5: Register User with existing email", () => {
    cy.visit("/");
    cy.contains("a", "Signup / Login").click();
    cy.fixture("login/user").then((user) => {
      cy.get('[data-qa="signup-name"]').type(user.name);
      cy.get('[data-qa="signup-email"]').type(user.email);
      cy.get('[data-qa="signup-button"]').click();
    });
    cy.contains("Email Address already exist!").should("be.visible");
  });

  it("Test Case 8: Verify All Products and product detail page", () => {
    cy.contains("a", "Products").click();
    cy.contains("All Products").should("be.visible");
    cy.get(".features_items .product-image-wrapper").should(
      "have.length.greaterThan",
      0,
    );
    cy.get(".features_items .product-image-wrapper")
      .first()
      .contains("View Product")
      .click();
    cy.get(".product-information").within(() => {
      cy.get("h2").should("be.visible");
      cy.contains("Category:").should("be.visible");
      cy.contains("Rs.").should("be.visible");
      cy.contains("Availability:").should("be.visible");
      cy.contains("Condition:").should("be.visible");
      cy.contains("Brand:").should("be.visible");
    });
  });

  it("Test Case 9: Search Product", () => {
    cy.contains("a", "Products").click();
    cy.contains("All Products").should("be.visible");
    cy.get("#search_product").type("top");
    cy.get("#submit_search").click();
    cy.contains("Searched Products").should("be.visible");
    cy.get(".features_items .product-image-wrapper").should(
      "have.length.greaterThan",
      0,
    );
  });

  it("Test Case 10: Verify Subscription in home page", () => {
    cy.get("#footer").scrollIntoView();
    cy.contains("h2", "Subscription").should("be.visible");
    cy.get("#susbscribe_email").type(`home.${Date.now()}@example.com`);
    cy.get("#subscribe").click();
    cy.contains("You have been successfully subscribed!").should("be.visible");
  });

  it("Test Case 15: Place Order: Register before Checkout", () => {
    const timestamp = Date.now();
    const user = {
      name: `Cypress Order ${timestamp}`,
      email: `cypress.order.${timestamp}@example.com`,
    };

    cy.registerUser(user);
    cy.addProductToCart(0);
    cy.addProductToCart(1);
    cy.contains("a", "Cart").click();
    cy.contains("Shopping Cart").should("be.visible");
    cy.contains("Proceed To Checkout").click();
    cy.contains("Address Details").should("be.visible");
    cy.contains("Review Your Order").should("be.visible");
    cy.completeOrderPayment();
    cy.deleteCurrentAccount();
  });

  it("Test Case 16: Place Order: Login before Checkout", () => {
    cy.loginUser();
    cy.addProductToCart(0);
    cy.contains("a", "Cart").click();
    cy.contains("Proceed To Checkout").click();
    cy.contains("Address Details").should("be.visible");
    cy.contains("Review Your Order").should("be.visible");
    cy.completeOrderPayment();
    cy.contains("a", "Logout").click();
  });
});
