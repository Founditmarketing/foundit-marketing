@echo off
echo Starting PRODUCTION deployment to Vercel...
echo This will overwrite the live site.
echo.
call npx vercel --prod
echo.
pause
