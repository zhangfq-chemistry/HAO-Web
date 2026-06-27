# -*- coding: utf-8 -*-
import re
from pathlib import Path

css_path = Path.cwd() / 'css' / 'windows.css'
with open(css_path, 'r', encoding='utf-8') as f:
    text = f.read()

text = re.sub(r'\.workspace\s*\{[^}]+\}\s*\.view-grid\s*\{[^}]+\}\s*/\*\s*-+\s*25\.\s*Overlap\s*layout\s*-+\s*\*/\s*\.view-grid\.overlap-layout\s*\{[^}]+\}\s*\.view-grid\.overlap-layout\s*\.qt-window\s*\{[^}]+\}\s*\.view-grid\.overlap-layout\s*\.qt-window:nth-child\(1\)\s*\{[^}]+\}\s*\.view-grid\.overlap-layout\s*\.qt-window:nth-child\(2\)\s*\{[^}]+\}\s*\.view-grid\.overlap-layout\s*\.qt-window:nth-child\(3\)\s*\{[^}]+\}\s*\.view-grid\.overlap-layout\s*\.qt-window:nth-child\(4\)\s*\{[^}]+\}\s*/\*\s*-+\s*26\.\s*Qt\s*window\s*\(card\s*style\)\s*-+\s*\*/\s*\.qt-window\s*\{[^}]+\}',
r'''/* ---------- 24. Workspace & view grid ---------- */
.workspace {
  height: 100%;
  min-height: 0;
  min-width: 0;
  padding: 0;
  background: var(--workspace-bg);
  overflow: hidden;
}

.view-container {
  width: 100%;
  height: 100%;
  position: relative;
}

/* ---------- 26. Qt window (card style) ---------- */
.qt-window {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s;
  background: var(--bg-base);
  border: none;
}

.qt-window.active {
  opacity: 1;
  pointer-events: auto;
  z-index: 10;
}

.qt-window[class*="floating-"] {
  position: fixed;
  inset: auto;
  opacity: 1;
  pointer-events: auto;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-sm);
  background: var(--viewer-bg);
  box-shadow: var(--shadow-lg);
  display: grid;
  grid-template-rows: 28px minmax(0, 1fr);
  width: auto;
  height: auto;
  transition: none;
}''', text)

text = re.sub(r'\.qt-window\.minimized\s*\{[^}]+\}\s*\.qt-window\.minimized\s*\.viewer,\s*\.qt-window\.minimized\s*\.sketch-panel,\s*\.qt-window\.minimized\s*\.box-panel,\s*\.qt-window\.minimized\s*\.activity-panel,\s*\.qt-window\.minimized\s*\.formula-panel,\s*\.qt-window\.minimized\s*\.animation-panel,\s*\.qt-window\.minimized\s*\.status-strip\s*\{[^}]+\}\s*\.qt-window\.closed\s*\{[^}]+\}\s*\.qt-window\.maximized\s*\{[^}]+\}',
r'''.qt-window[class*="floating-"].minimized {
  grid-template-rows: 28px;
  align-self: start;
  height: 28px !important;
  min-height: 28px !important;
}

.qt-window[class*="floating-"].minimized .viewer,
.qt-window[class*="floating-"].minimized .sketch-panel,
.qt-window[class*="floating-"].minimized .box-panel,
.qt-window[class*="floating-"].minimized .activity-panel,
.qt-window[class*="floating-"].minimized .formula-panel,
.qt-window[class*="floating-"].minimized .animation-panel,
.qt-window[class*="floating-"].minimized .status-strip {
  display: none;
}

.qt-window.closed {
  display: none;
}

.qt-window[class*="floating-"].maximized {
  position: fixed !important;
  inset: 4px !important;
  z-index: 100 !important;
  width: auto !important;
  height: auto !important;
  resize: none !important;
  border-radius: var(--radius-md) !important;
}''', text)

text = re.sub(r'/\*\s*-+\s*27\.\s*Window\s*title\s*-+\s*\*/\s*\.window-title\s*\{[^}]+\}\s*\.window-title\s*>\s*span:not\(\.qt-badge\):first-child\s*\{[^}]+\}\s*\.qt-badge\s*\{[^}]+\}\s*/\*\s*-+\s*28\.\s*Window\s*controls\s*-+\s*\*/\s*\.window-controls\s*\{[^}]+\}\s*\.qt-window:hover\s*\.window-controls\s*\{[^}]+\}\s*\.window-control-btn\s*\{[^}]+\}\s*\.window-control-btn:hover\s*\{[^}]+\}\s*\.window-control-btn\[data-window-action="close"\]:hover\s*\{[^}]+\}\s*/\*\s*-+\s*Viewer\s*-+\s*\*/\s*\.viewer\s*\{[^}]+\}',
r'''/* ---------- 27. Window title ---------- */
.qt-window[class*="floating-"] .window-title {
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  height: 28px;
  padding: 0 8px;
  background: var(--bg-overlay);
  backdrop-filter: blur(8px);
  color: var(--text-secondary);
  font-size: 11px;
  font-weight: 500;
  border-bottom: 1px solid var(--border-light);
  user-select: none;
}

.qt-window[class*="floating-"] .window-title > span:not(.qt-badge):first-child {
  grid-column: 1;
}

.qt-window[class*="floating-"] .qt-badge {
  justify-self: start;
  display: inline-grid;
  place-items: center;
  width: 24px;
  height: 20px;
  border-radius: 2px;
  background: var(--positive-color);
  color: var(--text);
  font-size: 14px;
  font-weight: 700;
}

/* ---------- 28. Window controls ---------- */
.qt-window[class*="floating-"] .window-controls {
  grid-column: 2;
  justify-self: end;
  display: flex;
  gap: 2px;
  opacity: 0;
  transition: opacity var(--transition-fast);
  white-space: nowrap;
}

.qt-window[class*="floating-"]:hover .window-controls {
  opacity: 1;
}

.qt-window[class*="floating-"] .window-control-btn {
  width: 22px;
  height: 20px;
  border: 0;
  border-radius: var(--radius-sm);
  background: transparent;
  color: var(--text-muted);
  font-size: 13px;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: all var(--transition-fast);
  padding: 0;
}

.qt-window[class*="floating-"] .window-control-btn:hover {
  background: var(--bg-hover);
  color: var(--text);
}

.qt-window[class*="floating-"] .window-control-btn[data-window-action="close"]:hover {
  background: rgba(248, 81, 73, 0.3);
  color: #f85149;
}

/* ---------- Viewer ---------- */
.viewer {
  position: relative;
  height: 100%;
  min-height: 0;
  background: var(--viewer-bg);
}''', text)

text = re.sub(r'body\.cinematic-mode\s*\.view-grid\s*\{[^}]+\}\s*body\.cinematic-mode\s*\.view-grid\s*>\s*article:not\(\.main-window\)\s*\{[^}]+\}',
r'''body.cinematic-mode .view-container {
  display: block !important;
  width: 100% !important;
  height: 100% !important;
}

body.cinematic-mode .view-container > article:not(.main-window) {
  display: none !important;
}''', text)

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(text)

print("Done")
