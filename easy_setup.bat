@echo off
setlocal enabledelayedexpansion

echo ==========================================
echo   Found It Marketing - Easy Setup
echo ==========================================
echo.

:: 1. FIND GIT
echo Looking for Git...
set "GIT_PATH="
if exist "C:\Program Files\Git\cmd\git.exe" set "GIT_PATH=C:\Program Files\Git\cmd\git.exe"
if exist "C:\Program Files (x86)\Git\cmd\git.exe" set "GIT_PATH=C:\Program Files (x86)\Git\cmd\git.exe"
if not defined GIT_PATH (
    echo [ERROR] Git not found! Please tell the AI.
    pause
    exit /b
)
echo [OK] Found Git at: "!GIT_PATH!"

:: 2. FIND GITHUB CLI
echo Looking for GitHub CLI...
set "GH_PATH="
if exist "C:\Program Files\GitHub CLI\gh.exe" set "GH_PATH=C:\Program Files\GitHub CLI\gh.exe"
if exist "%LOCALAPPDATA%\Microsoft\WinGet\Packages\GitHub.cli_Microsoft.Winget.Source_8wekyb3d8bbwe\gh.exe" set "GH_PATH=%LOCALAPPDATA%\Microsoft\WinGet\Packages\GitHub.cli_Microsoft.Winget.Source_8wekyb3d8bbwe\gh.exe"

if not defined GH_PATH (
    echo [ERROR] GitHub CLI not found!
    echo Installing it now...
    winget install --id GitHub.cli -e --source winget --accept-package-agreements --accept-source-agreements
    echo Please restart this script after installation.
    pause
    exit /b
)
echo [OK] Found GitHub CLI at: "!GH_PATH!"

echo.
echo ==========================================
echo   STEP 1: LOGIN
echo ==========================================
echo We will now log you in.
echo 1. Press Enter.
echo 2. Copy the code if shown (or just click Authorize).
echo 3. Switch back here when done.
echo.
pause

"!GH_PATH!" auth login --web --hostname github.com -p https

echo.
echo ==========================================
echo   STEP 2: PUSH CODE
echo ==========================================
echo pushing...
"!GIT_PATH!" push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Push Failed. You might not have permission or are not logged in.
) else (
    echo.
    echo [SUCCESS] Code is on GitHub!
)

echo.
pause
