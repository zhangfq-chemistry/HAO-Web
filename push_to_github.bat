@echo off
setlocal
cd /d "%~dp0"
echo.
echo Paste your empty GitHub repository HTTPS URL.
echo Example: https://github.com/your-name/hmo-orbital-web.git
echo.
set /p REPO_URL=GitHub repo URL: 
if "%REPO_URL%"=="" (
  echo No repository URL provided.
  pause
  exit /b 1
)

git branch -M main
git remote remove origin >nul 2>nul
git remote add origin "%REPO_URL%"
git push -u origin main
if errorlevel 1 (
  echo.
  echo Push failed. Please check the repository URL and GitHub login prompt.
  pause
  exit /b 1
)

echo.
echo Push complete.
echo.
echo Next step:
echo 1. Open the repository on GitHub.
echo 2. Go to Settings - Pages.
echo 3. Source: Deploy from a branch.
echo 4. Branch: main, folder: /root.
echo 5. Save.
echo.
echo If your repository is named USERNAME.github.io, the site URL will be:
echo https://USERNAME.github.io/
echo.
echo Otherwise, the site URL will usually be:
echo https://USERNAME.github.io/REPOSITORY_NAME/
pause
