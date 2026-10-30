Cypress.Commands.add("loginUser", (userOverrides = {}) => {
  cy.fixture("login/user").then((fixtureUser) => {
    const user = { ...fixtureUser, ...userOverrides };
    cy.contains("a", "Signup / Login").click();
    cy.contains("Login to your account").should("be.visible");
    cy.get('[data-qa="login-email"]').type(user.email);
    cy.get('[data-qa="login-password"]').type(user.password);
    cy.get('[data-qa="login-button"]').click();
    cy.contains("a", "Logout").should("be.visible");
  });
});
