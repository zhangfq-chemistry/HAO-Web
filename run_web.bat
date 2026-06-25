@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo Starting HAO Web at http://127.0.0.1:5173
start "" "http://127.0.0.1:5173"
node server.mjs
pause
