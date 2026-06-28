@echo off
chcp 65001 >nul
setlocal

cd /d "%~dp0"

if "%QT_DIR%"=="" set "QT_DIR=D:\software\QT\6.11.0\mingw_64"
if "%MINGW_DIR%"=="" set "MINGW_DIR=D:\software\QT\Tools\mingw1310_64"

if "%VTK_ROOT%"=="" set "VTK_ROOT=D:\software\VTK"

set "APP_EXE="
if exist release\HAO.exe set "APP_EXE=release\HAO.exe"
if "%APP_EXE%"=="" if exist debug\HAO.exe set "APP_EXE=debug\HAO.exe"

if "%APP_EXE%"=="" (
    echo [ERROR] HAO.exe not found. Run build_windows.bat first.
    pause
    exit /b 1
)

set "PATH=%QT_DIR%\bin;%MINGW_DIR%\bin;%VTK_ROOT%\bin;%PATH%"

echo Running %APP_EXE%
"%APP_EXE%"

if errorlevel 1 (
    echo.
    echo [WARN] Program exited with errorlevel %ERRORLEVEL%.
    pause
)
