@echo off
echo Pushing code to GitHub...
"C:\Program Files\Git\cmd\git.exe" push -u origin main
if %errorlevel% neq 0 (
    echo.
    echo Push Failed! likely due to authentication.
    echo Please try running this script again or check your permissions.
) else (
    echo.
    echo Push Success!
)
pause
