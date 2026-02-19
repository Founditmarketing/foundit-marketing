@echo off
echo Starting deployment to FOUNDIT MARKETING Team...
echo.
call npx vercel --scope foundit-marketing --prod
echo.
pause
