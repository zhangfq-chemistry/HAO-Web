# HAO Web (Hydrogen Atomic Orbital Viewer)

[**English**](#english) | [**中文**](#中文)

---

<a name="english"></a>
## 🔬 Overview (English)

**HAO Web** is a pure front-end, high-performance web application designed for the 3D visualization and interactive teaching of Hydrogen-like Atomic Orbitals (HAO). 

It is the browser-native port of the original Qt/VTK desktop application. By leveraging **Three.js** and **Web Workers**, HAO Web delivers real-time calculation and rendering of quantum mechanical wavefunctions directly in the browser, without requiring any backend server or database.

### ✨ Key Features

1. **Advanced 3D Rendering**
   - Real-time calculation of Schrödinger equation solutions for hydrogen-like atoms.
   - **Marching Cubes** isosurface rendering for positive and negative orbital phases.
   - Support for multiple display modes: Isosurface, Radial Surface, Point Cloud (Electron Cloud), and Wireframe.
   - Dynamic XOY/XOZ/YOZ cutting planes with synchronized 2D contour projections and 3D integrated maps.
2. **Qt-Style Multi-View Workspace**
   - A professional 2x2 grid layout displaying: **Atomic Orbital (Main)**, **2D/3D Projection**, **Radial Distribution Function (RDF)**, and **Angular Function**.
3. **Classroom Interactive Modules**
   - **Prediction Sketching**: A floating canvas allowing students to draw and predict wave nodes and orbital shapes before revealing the true mathematical render.
   - **Interactive Validation**: Real-time scoring and error diagnosis comparing student sketches with calculated orbitals.
   - **Instructor Annotation**: Draggable labels and drawing tools overlaying the 3D canvases for live classroom explanations.
4. **Cinematic Generation Animations**
   - Step-by-step cinematic evolution explaining how orbitals are constructed: from raw probability density (electron cloud) to isosurfaces, and finally to geometric slicing.
5. **Formula Decomposition**
   - An interactive formula window that dynamically links parts of the quantum mechanical equation (radial part, spherical harmonics) to the visual rendering on the screen.

### 🛠️ Architecture & Tech Stack

- **Core**: HTML5, Vanilla JavaScript (ES Modules), CSS3.
- **3D Graphics**: `Three.js` (WebGL).
- **Performance**: `Web Workers` are utilized to offload heavy scalar field calculations (grid sampling) to background threads, maintaining a smooth 60FPS UI.
- **Physics Engine**: Custom-built JavaScript math engine (`orbitals.js`) handling Laguerre polynomials, Legendre polynomials, and Spherical Harmonics.

### 🚀 Run Locally

Use the included lightweight Node.js static server:

```powershell
# Navigate to the web directory
cd web

# Start the local server
node server.mjs
```
Then open your browser and navigate to: `http://127.0.0.1:5173`

### 🌐 Deployment

Since HAO Web is a static front-end application, it can be hosted on any static hosting service in seconds:
- **GitHub Pages**, **Vercel**, **Netlify**, or standard Nginx/Apache servers.
- *Note*: The current build fetches `Three.js` via CDN (`unpkg.com`). For offline deployments, you must vendor the Three.js library locally and update the import maps in `index.html`.

### 📂 Directory Structure

```text
web/
├── index.html         # Main entry point containing the Qt-style DOM skeleton
├── app.js             # Main application logic and state management
├── orbitals.js        # Quantum mechanics math engine (Wavefunctions, Scalar fields)
├── server.mjs         # Local Node.js static server for development
├── css/               # Modular CSS (windows.css, layout.css, activities.css)
├── js/
│   ├── renderers.js   # Three.js scene, camera, and renderer management
│   ├── ui.js          # UI state, layouts, and drawer interactions
│   ├── cinematic.js   # Cinematic step-by-step animation logic
│   ├── activities.js  # Classroom interactive tasks and node discovery
│   ├── sketch.js      # Canvas-based prediction drawing logic
│   ├── formula.js     # Interactive formula decomposition
│   ├── worker.js      # Web Worker script for offloading math calculations
│   └── i18n.js        # Internationalization support
└── public/            # Static assets and icons
```

### 🔮 Roadmap / Next Steps

- **UI Enhancements**: Implement resizable splitters between the four Qt-style view panes.
- **Rendering Fidelity**: Add high-quality triangle/wireframe overlays to match the desktop VTK actors perfectly.
- **Build System**: Introduce Vite or Webpack for bundle compression and tree-shaking to reduce the production JavaScript chunk size.
- **Compute Shaders**: Explore WebGL 2 / WebGPU Compute Shaders to move scalar field generation entirely to the GPU for ultra-high-resolution grid sampling.

---

<a name="中文"></a>
## 🔬 项目简介 (中文)

**HAO Web** 是一个**纯前端**的氢原子轨道 (Hydrogen-like Atomic Orbitals) 可视化与互动教学 Web 应用。

它是原有 Qt/VTK 桌面端软件的浏览器移植版本。借助 **Three.js** 和 **Web Worker**，HAO Web 能够直接在浏览器端实时计算并渲染量子力学波函数，**无需任何后端服务器或数据库**。

### ✨ 核心功能

1. **高级 3D 渲染**
   - 实时计算类氢原子薛定谔方程解析解。
   - 使用 **Marching Cubes** (移动立方体算法) 渲染原子轨道正负相位的等势面。
   - 支持多种显示模式：等势面、径向曲面、点云（电子云）及网格线框模式。
   - 动态 XOY/XOZ/YOZ 剖面切割，支持同步显示 2D 等值线投影及 3D 整合山峰图。
2. **Qt 风格多视图工作区**
   - 专业的 2x2 经典网格布局，包含：**主轨道视图**、**投影视图**、**径向分布视图 (RDF)** 和 **角向函数视图**。
3. **课堂互动模块**
   - **画板预测**：悬浮画板允许学生在渲染真实数学图像前，手绘预测波函数曲线及节面位置。
   - **交互式验证**：系统实时对比学生的预测草图与计算得出的真实轨道，并给出评分与错误诊断。
   - **教师标注**：支持在 3D 画布上拖拽标签与实时绘制，方便课堂板书讲解。
4. **轨道生成动画**
   - 分步式的运镜动画演示，清晰讲解原子轨道的构建过程：从杂乱的概率密度电子云 -> 提取等势面 -> 截面切片与投影。
5. **波函数公式解析**
   - 交互式的公式分解窗口，将复杂的量子力学公式（径向部分、球谐函数）与屏幕上的 3D 视觉元素动态联动高亮。

### 🛠️ 架构与技术栈

- **核心**：HTML5, 原生 JavaScript (ES Modules), CSS3。
- **3D 图形**：`Three.js` (WebGL)。
- **性能优化**：引入 `Web Workers`，将密集的标量场计算（网格采样）放入后台线程，确保高网格密度下主界面的绝对流畅 (60FPS)。
- **物理计算引擎**：纯 JS 编写的数学引擎 (`orbitals.js`)，负责解析拉盖尔多项式、勒让德多项式及球谐函数。

### 🚀 本地运行

项目内置了一个轻量级的 Node.js 静态服务器，直接运行即可：

```powershell
# 进入 web 目录
cd web

# 启动本地服务器
node server.mjs
```
随后在浏览器中打开：`http://127.0.0.1:5173`

### 🌐 线上部署

由于 HAO Web 是纯静态前端应用，您可以将其在几秒钟内免费部署到任何静态托管平台：
- **GitHub Pages**, **Vercel**, **Netlify**，或者传统的 Nginx/Apache 服务器。
- *注意*：当前版本通过 CDN (`unpkg.com`) 引入了 `Three.js`。如果您需要**完全离线**部署，请将 Three.js 库下载到本地，并在 `index.html` 的 `importmap` 中修改引入路径。

### 🔮 未来规划

- **界面优化**：为四大 Qt 风格视图添加可拖拽调整大小的分割线 (Splitters)。
- **渲染提升**：优化网格线框 (Wireframe) 算法，使其在视觉上完全对齐甚至超越桌面端 VTK 的渲染效果。
- **工程化构建**：引入 Vite 或 Webpack 工具链进行代码压缩 (Minification) 与按需加载 (Code-splitting)，减小首次加载体积。
- **GPU 加速计算**：探索使用 WebGL 2 或 WebGPU 的 Compute Shaders (计算着色器)，将标量场采样彻底交由 GPU 处理，从而支持超高分辨率的网格渲染。
