@echo off
chcp 65001 >nul
setlocal

cd /d "%~dp0"

echo HAO Windows environment check
echo Project: %cd%
echo.

if "%QT_DIR%"=="" set "QT_DIR=D:\software\QT\6.11.0\mingw_64"
if "%MINGW_DIR%"=="" set "MINGW_DIR=D:\software\QT\Tools\mingw1310_64"
if "%VTK_ROOT%"=="" set "VTK_ROOT=D:\software\VTK"

echo QT_DIR=%QT_DIR%
if "%QT_DIR%"=="" (
    echo [FAIL] QT_DIR is not set.
) else (
    if exist "%QT_DIR%\bin\qmake.exe" (
        echo [OK] qmake found.
    ) else (
        echo [FAIL] qmake missing: %QT_DIR%\bin\qmake.exe
    )

)

echo.
echo MINGW_DIR=%MINGW_DIR%
if "%MINGW_DIR%"=="" (
    echo [FAIL] MINGW_DIR is not set.
) else (
    if exist "%MINGW_DIR%\bin\mingw32-make.exe" (
        echo [OK] mingw32-make found.
    ) else (
        echo [FAIL] mingw32-make missing: %MINGW_DIR%\bin\mingw32-make.exe
    )
)

echo.
echo VTK_ROOT=%VTK_ROOT%
if "%VTK_ROOT%"=="" (
    echo [FAIL] VTK_ROOT is not set.
) else (
    if exist "%VTK_ROOT%\include\vtk-9.6" (
        echo [OK] VTK include directory found.
    ) else (
        echo [FAIL] VTK include missing: %VTK_ROOT%\include\vtk-9.6
    )

    if exist "%VTK_ROOT%\lib" (
        echo [OK] VTK lib directory found.
    ) else (
        echo [FAIL] VTK lib directory missing: %VTK_ROOT%\lib
    )

    if exist "%VTK_ROOT%\bin" (
        echo [OK] VTK bin directory found.
    ) else (
        echo [WARN] VTK bin directory missing: %VTK_ROOT%\bin
    )
)

echo.
where qmake
echo.
echo If qmake above points to Anaconda, ignore it and use build_windows.bat.
echo build_windows.bat uses QT_DIR\bin\qmake.exe and MINGW_DIR\bin\mingw32-make.exe explicitly.
pause
