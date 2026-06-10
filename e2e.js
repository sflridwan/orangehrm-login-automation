// cypress/support/e2e.js
// Custom commands dan hooks untuk test automation

/**
 * Custom command: Login dengan valid credentials
 */
Cypress.Commands.add('loginWithValidCredentials', (username = 'Admin', password = 'admin123') => {
  cy.get('input[name="username"]').clear().type(username);
  cy.get('input[name="password"]').clear().type(password);
  cy.get('button[type="submit"]').click();
});

/**
 * Custom command: Logout
 */
Cypress.Commands.add('logout', () => {
  cy.get('[class*="profile"]').click({ force: true });
  cy.contains('Logout').click({ force: true });
});

/**
 * Custom command: Wait untuk element visible dengan custom timeout
 */
Cypress.Commands.add('waitForElement', (selector, timeout = 10000) => {
  cy.get(selector, { timeout: timeout }).should('be.visible');
});

// Disable uncaught exception handling untuk stability
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

// Screenshot on failure
afterEach(function() {
  if (this.currentTest.state === 'failed') {
    const filename = this.currentTest.fullTitle();
    cy.screenshot(filename, { overwrite: true });
  }
});
