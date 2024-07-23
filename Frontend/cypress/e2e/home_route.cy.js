/// <reference types="cypress" />

describe("Home Page", () => {
  // Test for desktop view
  it("should load the front-page successfully", () => {
    cy.viewport(1200, 945);
    cy.visit("/");
    cy.wait(3000);
    cy.contains("Nigeria Election");
    cy.wait(3000);
  });

  // Test for tablet view
  it("should display correctly on tablets", () => {
    cy.viewport(768, 1024);
    cy.wait(3000);
    cy.visit("/");
    cy.wait(3000);
    cy.contains("Nigeria Election");
  });
});
