@echo off
setlocal
cd /d "%~dp0"
call npm.cmd install
if errorlevel 1 pause & exit /b 1
call npm.cmd run build
if errorlevel 1 pause & exit /b 1
echo.
echo Web publish files are ready in: %cd%\dist
echo Upload the dist folder to Vercel, Netlify, GitHub Pages, or a school server.
pause
