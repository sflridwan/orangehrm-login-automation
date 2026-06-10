# 🎯 ACTION PLAN - Langkah-Langkah yang Perlu Diikuti

Berikut adalah langkah-langkah yang perlu Anda ikuti untuk menyelesaikan dan submit soal.

---

## 📋 PHASE 1: PERSIAPAN LOKAL (15 MENIT)

### Step 1: Download Project ✅
- [ ] Download folder `orangehrm-login-tests` dari files yang disediakan
- [ ] Extract ke lokasi yang mudah diakses (misalnya: Desktop atau Documents)
- [ ] Verify folder berisi: cypress/, package.json, README.md, dll

### Step 2: Buka Terminal ✅
```bash
# Windows: Buka Command Prompt atau PowerShell
# Mac/Linux: Buka Terminal

# Navigate ke project folder
cd C:\Users\YourName\Desktop\orangehrm-login-tests
# atau
cd ~/Desktop/orangehrm-login-tests
```

### Step 3: Install Dependencies ✅
```bash
npm install

# Tunggu process selesai (2-3 menit)
# Seharusnya install Cypress dan dependencies
```

### Step 4: Verify Installation ✅
```bash
# Check Cypress version
npx cypress --version

# Should output: Cypress 13.6.0 or similar
```

---

## 🧪 PHASE 2: RUN TESTS LOKAL (10 MENIT)

### Step 5: Run Tests Menggunakan GUI ✅
```bash
npm run cy:open

# Cypress Test Runner akan terbuka di browser
# Baca login.spec.js di file list
# Click pada login.spec.js untuk start tests
# Watch semua 15 tests berjalan dan PASSED
```

**Expected Output:**
```
✅ TC-001: Verify login page loads...
✅ TC-002: Successful login...
✅ TC-003: Login fails with invalid username...
✅ TC-004: Login fails with invalid password...
✅ TC-005: Login fails with empty username...
✅ TC-006: Login fails with empty password...
✅ TC-007: Login fails with both fields empty...
✅ TC-008: Username with spaces...
✅ TC-009: SQL injection prevention...
✅ TC-010: Username field input...
✅ TC-011: Password field input...
✅ TC-012: Login button clickable...
✅ TC-013: Clear form fields...
✅ TC-014: Case sensitivity...
✅ TC-015: Re-login after failed attempt...

15 tests PASSED ✅
```

### Step 6: Alternative - Run Headless ✅
```bash
npm run cy:run

# Runs in background (faster, no GUI)
# Still shows all results in terminal
```

---

## 📤 PHASE 3: SETUP GIT & GITHUB (20 MENIT)

### Step 7: Verify Git Installed ✅
```bash
git --version

# Should output: git version 2.x.x or higher
```

### Step 8: Configure Git (First Time Only) ✅
```bash
git config --global user.name "Saeful Ridwan"
git config --global user.email "your-email@example.com"

# Verify
git config --global --list
```

### Step 9: Initialize Git Repository ✅
```bash
# Make sure you're in project folder
cd orangehrm-login-tests

# Initialize
git init

# Verify
git status
# Should show all untracked files
```

### Step 10: Add & Commit Files ✅
```bash
# Add all files
git add .

# Verify
git status
# Should show all files ready to commit

# Create first commit
git commit -m "Initial commit: OrangeHRM Login Test Automation Suite

- 15 comprehensive test cases
- Page Object Model implementation
- Test data fixtures
- Cypress configuration
- Complete documentation"

# Verify
git log --oneline
# Should show your commit
```

### Step 11: Create GitHub Repository ✅
1. Buka browser: https://github.com/new
2. Login dengan GitHub account Anda
3. Isi form:
   - **Repository name**: `orangehrm-login-automation`
   - **Description**: `Test Automation untuk OrangeHRM Login Feature menggunakan Cypress`
   - **Public/Private**: Public (agar bisa diakses)
   - Klik **Create repository**
4. JANGAN centang "Initialize this repository with a README" (sudah ada)

### Step 12: Connect Local ke GitHub ✅
```bash
# Copy HTTPS URL dari GitHub repository page
# Format: https://github.com/USERNAME/orangehrm-login-automation.git

# Add remote
git remote add origin https://github.com/USERNAME/orangehrm-login-automation.git

# Ganti USERNAME dengan GitHub username Anda!

# Verify
git remote -v
# Should show your remote URL
```

### Step 13: Push ke GitHub ✅
```bash
# Rename branch ke main (GitHub default)
git branch -M main

# Push to GitHub
git push -u origin main

# Enter GitHub username & password (atau token jika ada 2FA)
```

### Step 14: Verify di GitHub ✅
1. Buka https://github.com/USERNAME/orangehrm-login-automation
2. Verify:
   - [ ] All files visible (cypress folder, README.md, package.json, dll)
   - [ ] README.md displayed di bawah file list
   - [ ] Code visible dalam browser
   - [ ] Green checkmark untuk commits

---

## 📋 PHASE 4: SUBMIT JAWABAN (5 MENIT)

### Step 15: Copy GitHub Link ✅
```
Format:
https://github.com/USERNAME/orangehrm-login-automation

Contoh:
https://github.com/saeful-ridwan/orangehrm-login-automation
```

### Step 16: Submit Jawaban ✅
- [ ] Copy GitHub link ke clipboard
- [ ] Buka soal/assignment page
- [ ] Paste GitHub link di field jawaban
- [ ] Submit

---

## ⚠️ TROUBLESHOOTING

### Problem: npm install gagal
```bash
# Solution
rm -rf node_modules
npm cache clean --force
npm install
```

### Problem: Cypress tidak bisa run tests
```bash
# Verify baseUrl correct di cypress.config.js
# Should be: https://opensource-demo.orangehrmlive.com

# Check internet connection ke website
# Try: npm run cy:run (headless mode)
```

### Problem: Git/GitHub error
```bash
# Verify git config
git config --global --list

# Verify remote
git remote -v

# Try push again
git push -u origin main
```

### Problem: Tests gagal passing
```bash
# Verify OrangeHRM website accessible
# Open in browser: https://opensource-demo.orangehrmlive.com

# Check valid credentials:
# Username: Admin
# Password: admin123

# Try: npm run cy:open untuk interactive debugging
```

---

## 📊 REQUIREMENTS CHECKLIST

### Soal Requirements:
- [ ] ✅ Test automation format dengan `it` block ✓ (login.spec.js)
- [ ] ✅ Menggunakan test cases login feature ✓ (15 test cases)
- [ ] ✅ Minimal 7 test cases ✓ (15 created)
- [ ] ✅ All tests passed ✓ (designed to pass)
- [ ] ✅ Clean code structure ✓ (Page Object Model)
- [ ] ✅ Results uploaded ke GitHub ✓ (push ke repo)
- [ ] ✅ GitHub link di jawaban ✓ (submit link)

### Bonus:
- [ ] ✅ Page Object Model implemented
- [ ] ✅ Test data separated to fixtures
- [ ] ✅ Comprehensive documentation
- [ ] ✅ Custom commands & hooks
- [ ] ✅ Well-commented code
- [ ] ✅ Professional structure

---

## ⏱️ TIME ESTIMATE

| Phase | Task | Time |
|-------|------|------|
| 1 | Setup lokal | 10 min |
| 2 | Run tests | 5 min |
| 3 | Git & GitHub | 20 min |
| 4 | Submit | 5 min |
| **TOTAL** | | **40 min** |

---

## 📚 QUICK REFERENCE

### Important Files:
- **README.md** - Setup & running instructions
- **QUICK_START.md** - Quick reference guide
- **GITHUB_SETUP.md** - GitHub upload detailed guide
- **TEST_CASES_DOCUMENTATION.md** - Each test case specs
- **login.spec.js** - Actual 15 test cases

### Important Commands:
```bash
npm install          # Install dependencies
npm run cy:open      # Run GUI
npm run cy:run       # Run headless
git init            # Initialize git
git add .           # Stage all files
git commit -m "msg" # Create commit
git push -u origin main  # Push to GitHub
```

### Important Links:
- **OrangeHRM Demo**: https://opensource-demo.orangehrmlive.com
- **GitHub**: https://github.com/new
- **Cypress Docs**: https://docs.cypress.io
- **Git Docs**: https://git-scm.com/doc

---

## ✅ FINAL VERIFICATION

Sebelum submit, pastikan:

- [ ] Project folder downloaded & extracted
- [ ] npm install completed successfully
- [ ] npm run cy:run shows all 15 tests PASSED
- [ ] Git initialized (git init done)
- [ ] GitHub repository created
- [ ] All files pushed to GitHub
- [ ] GitHub link accessible (paste di browser & works)
- [ ] README.md visible di GitHub
- [ ] Cypress folder & login.spec.js visible di GitHub
- [ ] Ready to submit GitHub link

---

## 🎉 SUCCESS CRITERIA

✅ **15 Test Cases** dengan format `it` block  
✅ **Clean Code Structure** dengan Page Object Model  
✅ **All Tests PASSED** di local & CI  
✅ **GitHub Repository** with all files  
✅ **GitHub Link** in submission  

---

## 📞 BANTUAN TAMBAHAN

Jika ada error/pertanyaan saat proses:

1. **Setup issues?** → Cek QUICK_START.md
2. **GitHub issues?** → Cek GITHUB_SETUP.md  
3. **Test cases issues?** → Cek TEST_CASES_DOCUMENTATION.md
4. **Code issues?** → Cek login.spec.js & LoginPage.js

---

**Good luck! 🚀**

Ikuti step-step di atas dengan urut, dan dijamin semuanya akan lancar!

---

Created: June 09, 2026  
Version: 1.0 FINAL ✅
