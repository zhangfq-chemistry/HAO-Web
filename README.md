# HAO Web

This folder contains the pure-front-end Web version of the HAO project. It mirrors the Qt/VTK desktop workflow with browser-side hydrogen atomic orbital calculation and adds classroom activity modules for prediction, explanation, and review.

## Run

Use a local static server from this folder:

```powershell
cd web
node server.mjs
```

Then open:

```text
http://127.0.0.1:5173
```

## Share Online

This Web version is a static front-end app. To let other people use it directly in a browser, upload the `web` folder to any static hosting service, for example GitHub Pages, Netlify, Vercel, or a school web server.

Because the current build imports Three.js from `https://esm.sh`, users need internet access. For a fully offline deployment, vendor the Three.js files locally and change the import paths in `app.js`.

## Current Scope

- Browser-side hydrogen atomic orbital calculation.
- Three.js Marching Cubes isosurface rendering for positive and negative orbital phases.
- Optional radial-surface and point-cloud rendering modes.
- XOY/XOZ/YOZ slice plane overlays.
- Optional node-surface, axes, boundary box, color, opacity, background, and screenshot export controls.
- Qt-style 2x2 workspace with orbital projection, atomic orbital, radial distribution, and angular function views.
- Classroom interaction window with prediction-validation, prediction scoring, error diagnosis, node discovery, orbital comparison, orbital matching, principle demonstration, and tablet-classroom modes.
- Floating sketch panel for student prediction drawings.
- Formula decomposition window linking the current orbital with radial part, angular part, phase colors, and node counts.
- Generation-animation window with stepwise orbital-building explanation and browser video export when supported.
- Instructor annotation mode for draggable labels on the four visualization panes.
- No backend server and no database.

## Next Steps

- Add resizable splitters between the four Qt-style view panes.
- Add triangle/wireframe overlays closer to the desktop VTK actors.
- Move heavy calculation into a Web Worker to keep the UI responsive at high grid density.
- Consider code-splitting the activity/animation modules to reduce the production JavaScript chunk size.
