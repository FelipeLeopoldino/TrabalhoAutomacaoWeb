Cypress.Commands.add("addProductToCart", (index) => {
  cy.get(".product-image-wrapper")
    .eq(index)
    .find(".add-to-cart")
    .click({ multiple: true, force: true });
  cy.contains("Continue Shopping").click();
});
