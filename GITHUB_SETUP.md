# 📚 Panduan: Push Project ke GitHub

Panduan lengkap untuk setup repository GitHub dan push project Cypress ini.

## ✅ Prasyarat

- [ ] Git sudah ter-install di komputer
- [ ] Account GitHub sudah dibuat
- [ ] Project sudah di-prepare di local machine

## 🚀 Step-by-Step Instructions

### Step 1: Setup Git Configuration Lokal (First Time Only)

Jalankan commands ini untuk configure Git profile:

```bash
git config --global user.name "Saeful Ridwan"
git config --global user.email "your-email@example.com"

# Verify configuration
git config --global --list
```

### Step 2: Initialize Git Repository

Buka terminal/command prompt di folder project:

```bash
cd orangehrm-login-tests

# Initialize git repository
git init

# Verify git is initialized
git status
```

Output yang diharapkan:
```
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        README.md
        cypress/
        cypress.config.js
        package.json
        ...
```

### Step 3: Add Files to Git

```bash
# Add semua files
git add .

# Verify files sudah staged
git status
```

### Step 4: Create First Commit

```bash
git commit -m "Initial commit: OrangeHRM Login Test Automation Suite

- 15 comprehensive test cases
- Page Object Model implementation
- Test data fixtures
- Cypress configuration
- Complete documentation"
```

### Step 5: Create Repository di GitHub

1. Buka https://github.com/new
2. Isi informasi:
   - **Repository name**: `orangehrm-login-automation` (atau nama lain)
   - **Description**: `Test Automation untuk OrangeHRM Login Feature menggunakan Cypress`
   - **Public/Private**: Public (supaya bisa dishare)
   - **Add .gitignore**: Skip (sudah ada)
   - **Add README**: Skip (sudah ada)
3. Klik **Create repository**

### Step 6: Connect Local Repository ke GitHub

Setelah membuat repository, GitHub akan menampilkan commands. Copy dan jalankan:

```bash
git branch -M main

# Gunakan HTTPS (lebih mudah)
git remote add origin https://github.com/USERNAME/orangehrm-login-automation.git

# Atau gunakan SSH (jika sudah setup SSH key)
# git remote add origin git@github.com:USERNAME/orangehrm-login-automation.git

# Verify remote sudah terhubung
git remote -v
```

**Ganti USERNAME dengan GitHub username Anda!**

### Step 7: Push ke GitHub

```bash
# Push branch main
git push -u origin main

# Jika mendapat error "branch 'main' does not exist", gunakan:
# git push -u origin master
```

Masukkan GitHub username dan password (atau personal access token jika pakai 2FA).

### Step 8: Verify di GitHub

1. Buka https://github.com/USERNAME/orangehrm-login-automation
2. Verifikasi semua files sudah ter-upload
3. Verifikasi README.md ditampilkan di bawah file list

---

## 🔄 Workflow untuk Updates Selanjutnya

Setelah setup awal, untuk menambah/mengupdate files:

```bash
# 1. Make changes to files
# (Edit file, add test case, etc.)

# 2. Check status
git status

# 3. Stage changes
git add .

# 4. Commit
git commit -m "Description of changes"

# 5. Push
git push
```

---

## 🔑 Troubleshooting

### Error: "fatal: remote origin already exists"

```bash
# Remove existing remote
git remote remove origin

# Re-add correct remote
git remote add origin https://github.com/USERNAME/orangehrm-login-automation.git
```

### Error: "Could not read Username for 'https://github.com'"

**Solution 1: Generate Personal Access Token**

1. Buka https://github.com/settings/tokens
2. Click **Generate new token**
3. Pilih **repo** scope
4. Copy token
5. Saat push, gunakan token sebagai password

**Solution 2: Setup SSH Key**

```bash
# Generate SSH key (if tidak ada)
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"

# Add ke GitHub: https://github.com/settings/keys
# Copy public key dari ~/.ssh/id_rsa.pub

# Test SSH connection
ssh -T git@github.com
```

### Error: "branch 'main' does not exist"

```bash
# Jika branch default adalah 'master'
git branch -M main
```

atau

```bash
git push -u origin master
```

---

## 📋 Checklist Sebelum Submit

- [ ] Git repository sudah diinisialisasi locally
- [ ] Semua files sudah di-add dan di-commit
- [ ] Repository sudah dibuat di GitHub
- [ ] Remote URL sudah dikonfigurasi dengan benar
- [ ] Semua files sudah ter-push ke GitHub
- [ ] README.md visible di GitHub repository
- [ ] Semua test cases ada di dalam repository
- [ ] .gitignore sudah dikonfigurasi (tidak ada node_modules, screenshots, dll)
- [ ] GitHub link siap untuk disubmit

---

## 📊 File Structure di GitHub

```
orangehrm-login-automation/
├── cypress/
│   ├── e2e/
│   │   └── login.spec.js
│   ├── fixtures/
│   │   └── loginTestData.json
│   └── support/
│       ├── LoginPage.js
│       └── e2e.js
├── .gitignore
├── README.md
├── TEST_CASES_DOCUMENTATION.md
├── cypress.config.js
└── package.json
```

---

## 🎯 Final GitHub Link Format

Setelah semua selesai, GitHub link Anda akan seperti:

```
https://github.com/USERNAME/orangehrm-login-automation
```

**Contoh (jika username adalah "saeful-ridwan"):**
```
https://github.com/saeful-ridwan/orangehrm-login-automation
```

---

## 📝 Tips Tambahan

### 1. Tambah Branch Baru (Optional)

```bash
# Create and switch to new branch
git checkout -b feature/additional-tests

# Make changes...

# Push branch baru
git push -u origin feature/additional-tests
```

### 2. Revert Commit

```bash
# Lihat commit history
git log

# Revert ke commit tertentu
git revert COMMIT_HASH
```

### 3. Cleanup Local Repository

```bash
# Delete untracked files
git clean -fd

# Reset to remote state
git reset --hard origin/main
```

---

## 🎓 Best Practices

1. **Commit Messages**: Gunakan present tense dan clear description
   ```bash
   # ✅ Good
   git commit -m "Add login negative test cases"
   
   # ❌ Bad
   git commit -m "fixed stuff"
   ```

2. **Frequent Commits**: Commit setiap kali ada perubahan significant
3. **Branch Names**: Gunakan `feature/`, `bugfix/`, `test/` prefix
4. **Code Review**: Jika ada tim, gunakan Pull Requests

---

## 📞 Support

Jika ada pertanyaan atau error:

1. Check GitHub documentation: https://docs.github.com
2. Check Git documentation: https://git-scm.com/doc
3. Google error message yang muncul

---

**Created By**: Saeful Ridwan - QA Engineer
**Last Updated**: June 2026
