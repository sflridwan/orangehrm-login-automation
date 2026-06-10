/**
 * Login Page Object Model
 * Mendefinisikan semua elemen dan methods untuk halaman login OrangeHRM
 */

class LoginPage {
  // Selectors
  usernameField = 'input[name="username"]';
  passwordField = 'input[name="password"]';
  loginButton = 'button[type="submit"]';
  errorMessage = '.oxd-alert-content-text';
  pageTitle = 'h5.orangehrm-login-title';
  forgotPasswordLink = 'a:contains("Forgot your password?")';
  invalidCredentialMessage = '[role="alert"]';

  /**
   * Membuka halaman login OrangeHRM
   */
  visit() {
    cy.visit('/');
  }

  /**
   * Memasukkan username
   * @param {string} username - Username untuk login
   */
  enterUsername(username) {
    cy.get(this.usernameField).clear().type(username);
  }

  /**
   * Memasukkan password
   * @param {string} password - Password untuk login
   */
  enterPassword(password) {
    cy.get(this.passwordField).clear().type(password);
  }

  /**
   * Mengklik tombol login
   */
  clickLoginButton() {
    cy.get(this.loginButton).click();
  }

  /**
   * Melakukan login dengan username dan password
   * @param {string} username - Username
   * @param {string} password - Password
   */
  performLogin(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLoginButton();
  }

  /**
   * Verifikasi pesan error muncul
   * @param {string} expectedMessage - Pesan error yang diharapkan
   */
  verifyErrorMessage(expectedMessage) {
    cy.get(this.invalidCredentialMessage).should('contain', expectedMessage);
  }

  /**
   * Verifikasi alert message muncul
   * @param {string} expectedMessage - Pesan yang diharapkan
   */
  verifyAlertMessage(expectedMessage) {
    cy.get(this.errorMessage).should('contain', expectedMessage);
  }

  /**
   * Verifikasi username field visible
   */
  verifyUsernameFieldVisible() {
    cy.get(this.usernameField).should('be.visible');
  }

  /**
   * Verifikasi password field visible
   */
  verifyPasswordFieldVisible() {
    cy.get(this.passwordField).should('be.visible');
  }

  /**
   * Verifikasi login button visible
   */
  verifyLoginButtonVisible() {
    cy.get(this.loginButton).should('be.visible').should('contain', 'Login');
  }

  /**
   * Verifikasi halaman login berhasil dimuat
   */
  verifyLoginPageLoaded() {
    cy.get(this.pageTitle).should('be.visible');
    this.verifyUsernameFieldVisible();
    this.verifyPasswordFieldVisible();
    this.verifyLoginButtonVisible();
  }

  /**
   * Clear semua input field
   */
  clearAllFields() {
    cy.get(this.usernameField).clear();
    cy.get(this.passwordField).clear();
  }

  /**
   * Cek apakah username field kosong
   */
  isUsernameFieldEmpty() {
    cy.get(this.usernameField).should('have.value', '');
  }

  /**
   * Cek apakah password field kosong
   */
  isPasswordFieldEmpty() {
    cy.get(this.passwordField).should('have.value', '');
  }

  /**
   * Verifikasi URL setelah login
   * @param {string} expectedUrl - URL yang diharapkan
   */
  verifyUrlAfterLogin(expectedUrl) {
    cy.url().should('include', expectedUrl);
  }
}

export default new LoginPage();
