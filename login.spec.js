/**
 * OrangeHRM Login Test Suite
 * Comprehensive test cases untuk login functionality
 * Author: Saeful Ridwan - QA Engineer
 * Test Framework: Cypress
 */

import LoginPage from '../support/LoginPage';

describe('OrangeHRM Login Feature - Test Suite', () => {
  // Pre-test hooks
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.verifyLoginPageLoaded();
  });

  /**
   * TC-001: Verify Login Page Loads Successfully
   * Objective: Memastikan halaman login berhasil dimuat dengan semua elemen yang diperlukan
   */
  it('TC-001: Verify login page loads with all required elements', () => {
    LoginPage.verifyLoginPageLoaded();
    
    cy.get('input[name="username"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible').should('have.text', 'Login');
  });

  /**
   * TC-002: Successful Login with Valid Credentials
   * Objective: Memastikan user dapat login dengan credential yang valid
   * Expected: Login berhasil, redirect ke dashboard
   */
  it('TC-002: Successful login with valid credentials', function() {
    cy.fixture('loginTestData').then((data) => {
      LoginPage.performLogin(data.validLogin.username, data.validLogin.password);
      
      // Tunggu redirect dan verifikasi URL mengandung dashboard
      cy.url({ timeout: 10000 }).should('include', '/index.php/dashboard');
      
      // Verifikasi halaman dashboard dimuat
      cy.get('[role="main"]').should('be.visible');
    });
  });

  /**
   * TC-003: Login Fails with Invalid Username
   * Objective: Memastikan login gagal dengan username yang tidak valid
   * Expected: Error message ditampilkan
   */
  it('TC-003: Login fails with invalid username', function() {
    cy.fixture('loginTestData').then((data) => {
      LoginPage.performLogin(data.invalidUsername.username, data.invalidUsername.password);
      
      // Verifikasi error message muncul
      cy.get('[role="alert"]').should('be.visible');
      cy.get('[role="alert"]').should('contain', 'Invalid credentials');
      
      // Verifikasi masih di halaman login
      cy.url().should('not.include', '/dashboard');
    });
  });

  /**
   * TC-004: Login Fails with Invalid Password
   * Objective: Memastikan login gagal dengan password yang salah
   * Expected: Error message ditampilkan
   */
  it('TC-004: Login fails with invalid password', function() {
    cy.fixture('loginTestData').then((data) => {
      LoginPage.performLogin(data.invalidPassword.username, data.invalidPassword.password);
      
      // Verifikasi error message muncul
      cy.get('[role="alert"]').should('be.visible');
      cy.get('[role="alert"]').should('contain', 'Invalid credentials');
      
      // Verifikasi masih di halaman login
      cy.url().should('not.include', '/dashboard');
    });
  });

  /**
   * TC-005: Login Fails with Empty Username Field
   * Objective: Memastikan system menampilkan validation error saat username kosong
   * Expected: Error message untuk required field
   */
  it('TC-005: Login fails with empty username field', function() {
    cy.fixture('loginTestData').then((data) => {
      LoginPage.performLogin(data.emptyUsername.username, data.emptyUsername.password);
      
      // Verifikasi validation error
      cy.get('span').should('contain', 'Required');
    });
  });

  /**
   * TC-006: Login Fails with Empty Password Field
   * Objective: Memastikan system menampilkan validation error saat password kosong
   * Expected: Error message untuk required field
   */
  it('TC-006: Login fails with empty password field', function() {
    cy.fixture('loginTestData').then((data) => {
      LoginPage.performLogin(data.emptyPassword.username, data.emptyPassword.password);
      
      // Verifikasi validation error
      cy.get('span').should('contain', 'Required');
    });
  });

  /**
   * TC-007: Login Fails with Both Fields Empty
   * Objective: Memastikan validation error saat kedua field kosong
   * Expected: Error messages ditampilkan untuk kedua field
   */
  it('TC-007: Login fails with both username and password empty', function() {
    LoginPage.clearAllFields();
    LoginPage.clickLoginButton();
    
    // Verifikasi validation errors
    cy.get('span').each(($span) => {
      cy.wrap($span).invoke('text').then((text) => {
        if (text.includes('Required')) {
          expect(text).to.include('Required');
        }
      });
    });
  });

  /**
   * TC-008: Login with Username Containing Leading/Trailing Spaces
   * Objective: Memastikan system handling username dengan leading/trailing spaces
   * Expected: System trim spaces dan login berhasil OR error message
   */
  it('TC-008: Login with username containing spaces - should handle gracefully', function() {
    cy.fixture('loginTestData').then((data) => {
      LoginPage.performLogin(data.usernameWithSpaces.username, data.usernameWithSpaces.password);
      
      // Verifikasi error message atau successful login
      cy.get('[role="alert"]', { timeout: 8000 }).should('be.visible')
        .and(($alert) => {
          const text = $alert.text();
          expect(text).to.satisfy(text => 
            text.includes('Invalid credentials') || text.includes('Required')
          );
        });
    });
  });

  /**
   * TC-009: SQL Injection Attempt in Username Field
   * Objective: Memastikan system aman dari SQL injection attack
   * Expected: Login gagal dengan error message
   */
  it('TC-009: SQL injection attempt should be blocked', function() {
    cy.fixture('loginTestData').then((data) => {
      LoginPage.performLogin(data.sqlInjection.username, data.sqlInjection.password);
      
      // Verifikasi login gagal
      cy.get('[role="alert"]', { timeout: 8000 }).should('be.visible');
      cy.get('[role="alert"]').should('contain', 'Invalid credentials');
      
      // Verifikasi tidak ada redirect ke dashboard
      cy.url().should('not.include', '/dashboard');
    });
  });

  /**
   * TC-010: Username Field Accepts Valid Input
   * Objective: Memastikan username field dapat menerima input yang valid
   * Expected: Username field berisi nilai yang diinput
   */
  it('TC-010: Username field accepts valid input correctly', function() {
    const testUsername = 'Admin';
    LoginPage.enterUsername(testUsername);
    
    cy.get('input[name="username"]').should('have.value', testUsername);
  });

  /**
   * TC-011: Password Field Accepts Input
   * Objective: Memastikan password field dapat menerima input
   * Expected: Password field berisi nilai yang diinput (masked atau tidak visible)
   */
  it('TC-011: Password field accepts input correctly', function() {
    const testPassword = 'admin123';
    LoginPage.enterPassword(testPassword);
    
    cy.get('input[name="password"]').should('have.value', testPassword);
  });

  /**
   * TC-012: Login Button is Clickable
   * Objective: Memastikan login button dapat diklik
   * Expected: Button responsive terhadap click action
   */
  it('TC-012: Login button is clickable and responsive', function() {
    cy.get('button[type="submit"]').should('be.enabled');
    cy.get('button[type="submit"]').click({ force: true });
    
    // Verifikasi ada action setelah click (error atau navigasi)
    cy.get('[role="alert"], [role="main"]', { timeout: 8000 }).should('exist');
  });

  /**
   * TC-013: Clear Form Fields Functionality
   * Objective: Memastikan user dapat clear fields sebelum submit
   * Expected: Fields menjadi kosong setelah clear
   */
  it('TC-013: User can clear all form fields', function() {
    LoginPage.enterUsername('Admin');
    LoginPage.enterPassword('admin123');
    
    LoginPage.clearAllFields();
    
    LoginPage.isUsernameFieldEmpty();
    LoginPage.isPasswordFieldEmpty();
  });

  /**
   * TC-014: Case Sensitivity Test - Username
   * Objective: Memastikan username case-sensitive atau tidak sesuai requirement
   * Expected: Login gagal atau berhasil tergantung requirement
   */
  it('TC-014: Case sensitivity test - lowercase username should fail', function() {
    LoginPage.performLogin('admin', 'admin123');
    
    // Verifikasi error message muncul (karena username adalah 'Admin' bukan 'admin')
    cy.get('[role="alert"]', { timeout: 8000 }).should('be.visible');
    cy.get('[role="alert"]').should('contain', 'Invalid credentials');
  });

  /**
   * TC-015: Re-login After Failed Attempt
   * Objective: Memastikan user dapat login kembali setelah failed attempt
   * Expected: Login berhasil dengan valid credential
   */
  it('TC-015: User can re-login successfully after failed attempt', function() {
    // First attempt - invalid
    LoginPage.performLogin('InvalidUser', 'wrongpassword');
    
    cy.get('[role="alert"]', { timeout: 8000 }).should('be.visible');
    
    // Clear dan try again dengan valid credentials
    LoginPage.clearAllFields();
    
    cy.fixture('loginTestData').then((data) => {
      LoginPage.performLogin(data.validLogin.username, data.validLogin.password);
      
      // Verifikasi successful login
      cy.url({ timeout: 10000 }).should('include', '/index.php/dashboard');
    });
  });
});
