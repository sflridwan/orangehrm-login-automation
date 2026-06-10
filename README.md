# OrangeHRM Login Test Automation

## 📋 Deskripsi Project

Project ini merupakan test automation untuk fitur login OrangeHRM menggunakan Cypress Test Framework. Test suite ini mencakup **15 comprehensive test cases** yang mencakup berbagai skenario login termasuk:

- ✅ Valid login scenarios
- ❌ Invalid credentials
- ⚠️ Validation errors (empty fields)
- 🔒 Security testing (SQL injection)
- 🔄 Re-login scenarios
- 📝 Input field testing

## 🎯 Test Cases Overview

| TC ID | Deskripsi | Status |
|-------|-----------|--------|
| TC-001 | Verify login page loads with all elements | ✅ |
| TC-002 | Successful login with valid credentials | ✅ |
| TC-003 | Login fails with invalid username | ✅ |
| TC-004 | Login fails with invalid password | ✅ |
| TC-005 | Login fails with empty username | ✅ |
| TC-006 | Login fails with empty password | ✅ |
| TC-007 | Login fails with both fields empty | ✅ |
| TC-008 | Username with spaces handling | ✅ |
| TC-009 | SQL injection prevention | ✅ |
| TC-010 | Username field input validation | ✅ |
| TC-011 | Password field input validation | ✅ |
| TC-012 | Login button clickability | ✅ |
| TC-013 | Clear form fields | ✅ |
| TC-014 | Case sensitivity test | ✅ |
| TC-015 | Re-login after failed attempt | ✅ |

## 🛠️ Technology Stack

- **Framework**: Cypress 13.6.0
- **Language**: JavaScript
- **Node.js**: v14+ (recommended v16+)
- **Test Format**: BDD (Behavior-Driven Development)
- **Page Object Model**: Implemented for maintainability

## 📁 Project Structure

```
orangehrm-login-tests/
├── cypress/
│   ├── e2e/
│   │   └── login.spec.js           # Main test suite (15 test cases)
│   ├── fixtures/
│   │   └── loginTestData.json      # Test data
│   └── support/
│       ├── LoginPage.js            # Page Object Model
│       └── e2e.js                  # Custom commands & hooks
├── cypress.config.js               # Cypress configuration
├── package.json                    # Dependencies & scripts
└── README.md                       # Documentation
```

## 🚀 Installation & Setup

### 1. Clone Repository
```bash
git clone <your-github-repo-url>
cd orangehrm-login-tests
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Verify Installation
```bash
npx cypress --version
```

## ▶️ Running Tests

### Option 1: Interactive Mode (GUI)
```bash
npm run cy:open
```
Cypress akan membuka Test Runner untuk running tests secara interaktif.

### Option 2: Headless Mode (CLI)
```bash
npm run cy:run
```

### Option 3: Run dengan Chrome Browser
```bash
npm run cy:run:chrome
```

### Option 4: Run Specific Test File
```bash
npx cypress run --spec "cypress/e2e/login.spec.js"
```

### Option 5: Run dengan Video Recording
```bash
npx cypress run --spec "cypress/e2e/login.spec.js" --record
```

## 📊 Test Execution Results

Semua 15 test cases dirancang untuk **PASSED** dengan kondisi:

1. **Test Environment**: https://opensource-demo.orangehrmlive.com
2. **Valid Credentials**:
   - Username: `Admin`
   - Password: `admin123`

3. **Screenshots**: Akan tersimpan otomatis di folder `cypress/screenshots/` jika ada test yang failed.

4. **Videos**: Akan tersimpan di folder `cypress/videos/` (jika dijalankan dengan option yang sesuai).

## 🎨 Code Quality & Best Practices

✅ **Page Object Model**: Semua element selectors dikumpulkan di LoginPage.js
✅ **Clean Code**: Well-documented dengan comments & JSDoc
✅ **Test Data Separation**: Test data tersimpan di fixtures
✅ **Reusable Methods**: Custom methods untuk common actions
✅ **Proper Assertions**: Explicit assertions untuk each test case
✅ **Error Handling**: Proper timeout & error handling

## 📝 Test Case Details

### TC-002: Successful Login with Valid Credentials
```javascript
// Login dengan credential yang valid
// Expected: Redirect ke dashboard dan user berhasil login
```

### TC-003 to TC-009: Negative Test Cases
```javascript
// Test various invalid scenarios
// Expected: Error messages ditampilkan, tidak ada redirect
```

### TC-010 to TC-015: UI & Flow Testing
```javascript
// Test field behavior, button responsiveness, re-login flow
// Expected: All UI elements work as expected
```

## 🔧 Troubleshooting

### Issue: Tests Failed - "Element not found"
**Solution**: Verifikasi baseUrl di cypress.config.js mengarah ke OrangeHRM instance yang benar.

### Issue: Timeout Error
**Solution**: Increase timeout di cypress.config.js atau dalam test case:
```javascript
cy.get(selector, { timeout: 15000 })
```

### Issue: Screenshot/Video not Generated
**Solution**: Pastikan folder `cypress/screenshots` dan `cypress/videos` writable.

## 📚 Additional Commands

```bash
# Clear Cypress cache
npx cypress cache clear

# Update Cypress
npm update cypress

# Run with specific browser
npx cypress run --browser firefox

# Run in background
npm run cy:run:headless
```

## 🤝 Contributing

Untuk menambah test cases:
1. Edit file `cypress/e2e/login.spec.js`
2. Tambahkan test case baru dengan format `it('TC-XXX: ...')`
3. Update dokumentasi di README.md
4. Run tests untuk verify semua passed

## 📧 Author

**Saeful Ridwan** - QA Engineer

## 📄 License

MIT License

## 🔗 Resources

- [Cypress Documentation](https://docs.cypress.io)
- [OrangeHRM](https://www.orangehrm.com)
- [Page Object Model Best Practices](https://docs.cypress.io/guides/references/best-practices)

---

**Last Updated**: June 2026
**Total Test Cases**: 15 ✅
**Expected Status**: All PASSED ✅
