/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    visitHomepage(): Chainable<void>
    checkAccessibility(): Chainable<void>
  }
}
