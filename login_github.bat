@echo off
echo ==========================================
echo   Found It Marketing - GitHub Login
echo ==========================================
echo.
echo 1. Press Enter to start the login process.
echo 2. A browser window will open.
echo 3. Just click "Authorize" (you are already logged in to GitHub).
echo.
pause

"C:\Program Files\GitHub CLI\gh.exe" auth login --web --hostname github.com -p https

echo.
echo ==========================================
echo   Login Success! Pushing code...
echo ==========================================
"C:\Program Files\Git\cmd\git.exe" push -u origin main

echo.
echo Done!
pause
