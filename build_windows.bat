@echo off
chcp 65001 >nul
setlocal

cd /d "%~dp0"

echo HAO Windows build helper
echo Project: %cd%
echo.

if "%QT_DIR%"=="" set "QT_DIR=D:\software\QT\6.11.0\mingw_64"

if "%MINGW_DIR%"=="" set "MINGW_DIR=D:\software\QT\Tools\mingw1310_64"

if "%VTK_ROOT%"=="" set "VTK_ROOT=D:\software\VTK"

set "QMAKE=%QT_DIR%\bin\qmake.exe"
set "MAKE=%MINGW_DIR%\bin\mingw32-make.exe"
set "PATH=%MINGW_DIR%\bin;%QT_DIR%\bin;%VTK_ROOT%\bin;%PATH%"

if not exist "%QMAKE%" (
    echo [ERROR] qmake not found:
    echo   %QMAKE%
    pause
    exit /b 1
)

if not exist "%MAKE%" (
    echo [ERROR] mingw32-make not found:
    echo   %MAKE%
    pause
    exit /b 1
)

if not exist "%VTK_ROOT%\include\vtk-9.6" (
    echo [ERROR] VTK headers not found:
    echo   %VTK_ROOT%\include\vtk-9.6
    pause
    exit /b 1
)

if not exist "%VTK_ROOT%\lib" (
    echo [ERROR] VTK lib directory not found:
    echo   %VTK_ROOT%\lib
    pause
    exit /b 1
)

echo QT_DIR:
echo   %QT_DIR%
echo VTK_ROOT:
echo   %VTK_ROOT%
echo MINGW_DIR:
echo   %MINGW_DIR%
echo.

echo Running qmake...
"%QMAKE%" src.pro
if errorlevel 1 (
    echo [ERROR] qmake failed.
    pause
    exit /b 1
)

echo.
echo Building...
"%MAKE%" -j%NUMBER_OF_PROCESSORS%
if errorlevel 1 (
    echo [ERROR] build failed.
    pause
    exit /b 1
)

echo.
echo Build finished.
if exist release\HAO.exe (
    echo Output: release\HAO.exe
) else if exist debug\HAO.exe (
    echo Output: debug\HAO.exe
) else (
    echo [WARN] HAO.exe was not found in release or debug.
)

pause
