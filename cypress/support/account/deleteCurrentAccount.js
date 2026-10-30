Cypress.Commands.add("deleteCurrentAccount", () => {
  cy.contains("a", "Delete Account").click();
  cy.contains("Account Deleted!").should("be.visible");
  cy.get('[data-qa="continue-button"]').click();
});
