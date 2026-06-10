@echo off
REM ============================================================
REM OrangeHRM Login Automation - Windows Batch Commands
REM ============================================================
REM Author: Saeful Ridwan - QA Engineer
REM Project: OrangeHRM Login Test Automation
REM Last Updated: June 2026
REM ============================================================

setlocal enabledelayedexpansion

REM ============================================================
REM INSTALLATION COMMANDS
REM ============================================================

:install_all
cls
echo.
echo ============================================================
echo Installing OrangeHRM Login Automation
echo ============================================================
echo.
echo Step 1: Installing dependencies...
call npm install

echo.
echo Step 2: Verifying Cypress...
call npx cypress verify

echo.
echo Step 3: Checking versions...
echo Node.js version:
call node --version
echo NPM version:
call npm --version
echo Cypress version:
call npx cypress --version

echo.
echo Installation complete!
pause
goto menu

REM ============================================================
REM TEST EXECUTION COMMANDS
REM ============================================================

:run_all_tests
cls
echo.
echo Running All Tests...
echo.
call npm run cy:run
pause
goto menu

:run_tests_interactive
cls
echo.
echo Opening Cypress GUI...
echo.
call npm run cy:open
goto menu

:run_specific_test
cls
set /p test_id="Enter Test ID (e.g., TC-002): "
if "!test_id!"=="" (
    echo Error: Test ID required
    pause
    goto menu
)

cls
echo Running Test: !test_id!
echo.
call npx cypress run --spec "cypress/e2e/login.spec.js" --grep "!test_id!"
pause
goto menu

:run_multiple_tests
cls
set /p test_ids="Enter Test IDs separated by pipe (e.g., TC-002^|TC-003^|TC-004): "
if "!test_ids!"=="" (
    echo Error: Test IDs required
    pause
    goto menu
)

cls
echo Running Multiple Tests: !test_ids!
echo.
call npx cypress run --spec "cypress/e2e/login.spec.js" --grep "!test_ids!"
pause
goto menu

:run_with_video
cls
echo.
echo Running Tests with Video Recording...
echo.
call npx cypress run --record
pause
goto menu

:run_with_screenshots
cls
echo.
echo Running Tests with Screenshots...
echo.
call npx cypress run --screenshot-on-failure
pause
goto menu

REM ============================================================
REM DEBUGGING COMMANDS
REM ============================================================

:debug_test
cls
set /p test_id="Enter Test ID to debug (e.g., TC-002): "
if "!test_id!"=="" (
    echo Error: Test ID required
    pause
    goto menu
)

cls
echo Debugging Test: !test_id!
echo.
call npx cypress run --spec "cypress/e2e/login.spec.js" --grep "!test_id!" --headed --no-exit
pause
goto menu

:debug_with_timeout
cls
set /p test_id="Enter Test ID: "
set /p timeout="Enter timeout in milliseconds (e.g., 10000): "

if "!test_id!"=="" (
    echo Error: Test ID required
    pause
    goto menu
)

if "!timeout!"=="" (
    echo Error: Timeout required
    pause
    goto menu
)

cls
echo Debugging !test_id! with !timeout!ms timeout
echo.
call npx cypress run --spec "cypress/e2e/login.spec.js" --grep "!test_id!" --config defaultCommandTimeout=!timeout! --headed --no-exit
pause
goto menu

:debug_with_logging
cls
echo.
echo Running Tests with Detailed Logging...
echo.
call npx cypress run --quiet false
pause
goto menu

REM ============================================================
REM REPORTING & ARTIFACTS
REM ============================================================

:view_screenshots
cls
echo.
echo Viewing Screenshots...
echo.
dir /b /s cypress\screenshots\
echo.
start "" cypress\screenshots\
pause
goto menu

:view_videos
cls
echo.
echo Viewing Videos...
echo.
dir /b /s cypress\videos\
echo.
start "" cypress\videos\
pause
goto menu

:clear_artifacts
cls
echo.
echo Warning: This will delete all test artifacts!
set /p confirm="Are you sure? (yes/no): "

if /i "!confirm!"=="yes" (
    echo Clearing screenshots...
    if exist cypress\screenshots rmdir /s /q cypress\screenshots
    
    echo Clearing videos...
    if exist cypress\videos rmdir /s /q cypress\videos
    
    echo Clearing logs...
    if exist cypress\logs rmdir /s /q cypress\logs
    
    echo All artifacts cleared!
) else (
    echo Cancelled.
)

pause
goto menu

REM ============================================================
REM MAINTENANCE COMMANDS
REM ============================================================

:clear_cache
cls
echo.
echo Clearing Cypress cache...
call npx cypress cache clear
echo Cache cleared!
pause
goto menu

:verify_installation
cls
echo.
echo ============================================================
echo Verifying Installation
echo ============================================================
echo.
echo Node.js version:
call node --version
echo.
echo NPM version:
call npm --version
echo.
echo Cypress version:
call npx cypress --version
echo.
echo Verifying Cypress...
call npx cypress verify
echo.
echo Verification complete!
pause
goto menu

:update_dependencies
cls
echo.
echo Checking for outdated packages...
call npm outdated
echo.
echo Updating dependencies...
call npm update
echo.
echo Verifying Cypress...
call npx cypress verify
echo.
echo Dependencies updated!
pause
goto menu

:clean_install
cls
echo.
echo WARNING: This will delete node_modules and reinstall!
set /p confirm="Are you sure? (yes/no): "

if /i "!confirm!"=="yes" (
    echo Removing node_modules...
    if exist node_modules rmdir /s /q node_modules
    if exist package-lock.json del package-lock.json
    
    echo Reinstalling...
    call npm install
    
    echo Verifying...
    call npx cypress verify
    
    echo Clean install complete!
) else (
    echo Cancelled.
)

pause
goto menu

REM ============================================================
REM PROJECT INFORMATION
REM ============================================================

:show_project_info
cls
echo.
echo ============================================================
echo Project Information
echo ============================================================
echo.
echo Project: OrangeHRM Login Test Automation
echo Author: Saeful Ridwan - QA Engineer
echo.
echo Test Cases:
for /f %%A in ('findstr /c:"it(" cypress\e2e\login.spec.js ^| find /c /v ""') do echo Total: %%A
echo.
echo Dependencies:
call npm list --depth=0
pause
goto menu

:list_test_cases
cls
echo.
echo ============================================================
echo Available Test Cases
echo ============================================================
echo.
for /f "tokens=*" %%A in ('findstr "it(" cypress\e2e\login.spec.js') do (
    echo %%A
)
echo.
pause
goto menu

:view_test_data
cls
echo.
echo ============================================================
echo Test Data
echo ============================================================
echo.
type cypress\fixtures\loginTestData.json
echo.
pause
goto menu

:view_configuration
cls
echo.
echo ============================================================
echo Cypress Configuration
echo ============================================================
echo.
type cypress.config.js
echo.
pause
goto menu

:count_test_cases
cls
echo.
echo ============================================================
echo Test Case Count
echo ============================================================
echo.
for /f %%A in ('findstr /c:"it(" cypress\e2e\login.spec.js ^| find /c /v ""') do echo Total Test Cases: %%A
echo.
pause
goto menu

REM ============================================================
REM REPORTING SCRIPTS
REM ============================================================

:generate_json_report
cls
echo.
echo Generating JSON Report...
echo.
call npx cypress run --reporter json --reporter-options "outputFile=cypress/reports/test-results.json"
echo Report saved to: cypress/reports/test-results.json
pause
goto menu

:generate_html_report
cls
echo.
echo Generating HTML Report...
echo.
call npx cypress run --reporter html --reporter-options "outputFile=cypress/reports/test-report.html"
echo Report saved to: cypress/reports/test-report.html
start "" cypress\reports\test-report.html
pause
goto menu

REM ============================================================
REM MAIN MENU
REM ============================================================

:menu
cls
echo.
echo ============================================================
echo OrangeHRM Login Automation - Command Menu
echo ============================================================
echo Author: Saeful Ridwan - QA Engineer
echo.
echo INSTALLATION:
echo   1. Complete Setup (Install ^& Verify)
echo.
echo RUNNING TESTS:
echo   2. Run All Tests (Headless)
echo   3. Open Cypress GUI
echo   4. Run Specific Test Case
echo   5. Run Multiple Test Cases
echo   6. Run Tests with Video Recording
echo   7. Run Tests with Screenshots
echo.
echo DEBUGGING:
echo   8. Debug Single Test Case
echo   9. Debug with Custom Timeout
echo  10. Run with Detailed Logging
echo.
echo REPORTING ^& ARTIFACTS:
echo  11. View Screenshots
echo  12. View Videos
echo  13. Clear All Artifacts
echo  14. Generate JSON Report
echo  15. Generate HTML Report
echo.
echo MAINTENANCE:
echo  16. Clear Cypress Cache
echo  17. Verify Installation
echo  18. Update Dependencies
echo  19. Clean Install (Force Reinstall)
echo.
echo PROJECT INFORMATION:
echo  20. Show Project Info
echo  21. List All Test Cases
echo  22. View Test Data
echo  23. View Cypress Configuration
echo  24. Count Test Cases
echo.
echo UTILITIES:
echo  25. Show Help
echo   0. Exit
echo.
echo ============================================================
set /p choice="Enter your choice (0-25): "

if "%choice%"=="1" goto install_all
if "%choice%"=="2" goto run_all_tests
if "%choice%"=="3" goto run_tests_interactive
if "%choice%"=="4" goto run_specific_test
if "%choice%"=="5" goto run_multiple_tests
if "%choice%"=="6" goto run_with_video
if "%choice%"=="7" goto run_with_screenshots
if "%choice%"=="8" goto debug_test
if "%choice%"=="9" goto debug_with_timeout
if "%choice%"=="10" goto debug_with_logging
if "%choice%"=="11" goto view_screenshots
if "%choice%"=="12" goto view_videos
if "%choice%"=="13" goto clear_artifacts
if "%choice%"=="14" goto generate_json_report
if "%choice%"=="15" goto generate_html_report
if "%choice%"=="16" goto clear_cache
if "%choice%"=="17" goto verify_installation
if "%choice%"=="18" goto update_dependencies
if "%choice%"=="19" goto clean_install
if "%choice%"=="20" goto show_project_info
if "%choice%"=="21" goto list_test_cases
if "%choice%"=="22" goto view_test_data
if "%choice%"=="23" goto view_configuration
if "%choice%"=="24" goto count_test_cases
if "%choice%"=="25" goto show_help
if "%choice%"=="0" goto end

echo Invalid choice. Please try again.
pause
goto menu

:show_help
cls
echo.
echo ============================================================
echo Help - Available Commands
echo ============================================================
echo.
echo Use the menu above to run commands easily.
echo.
echo For command line usage, available npm scripts:
echo   npm run cy:open         - Open Cypress GUI
echo   npm run cy:run          - Run all tests
echo   npm run cy:run:chrome   - Run with Chrome
echo   npm run cy:run:headless - Run in headless mode
echo.
echo For direct Cypress commands:
echo   npx cypress run         - Run all tests
echo   npx cypress open        - Open GUI
echo.
echo Examples:
echo   npx cypress run --spec "cypress/e2e/login.spec.js"
echo   npx cypress run --spec "cypress/e2e/login.spec.js" --grep "TC-002"
echo.
pause
goto menu

:end
cls
echo.
echo Thank you for using OrangeHRM Login Automation!
echo.
pause
exit /b 0

REM ============================================================
REM END OF BATCH SCRIPT
REM ============================================================

