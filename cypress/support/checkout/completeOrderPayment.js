Cypress.Commands.add("completeOrderPayment", () => {
  cy.fixture("checkout/payment").then((payment) => {
    cy.contains("a", payment.placeOrderLink).click();
    cy.get('[data-qa="name-on-card"]').type(payment.nameOnCard);
    cy.get('[data-qa="card-number"]').type(payment.cardNumber);
    cy.get('[data-qa="cvc"]').type(payment.cvc);
    cy.get('[data-qa="expiry-month"]').type(payment.expiryMonth);
    cy.get('[data-qa="expiry-year"]').type(payment.expiryYear);
    cy.get('[data-qa="pay-button"]').click();
    cy.contains(payment.successMessage).should("be.visible");
  });
});
