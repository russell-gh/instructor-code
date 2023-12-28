/// <reference types="cypress" />

describe("My First Test", () => {
  it("Visit the jump and click the course link", () => {
    cy.visit("https://www.thejump.tech");

    cy.get(".v-btn__content").click({ multiple: true, force: true }); // Click on button
  });
});
