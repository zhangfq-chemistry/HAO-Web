# Windows 使用说明

本文档说明如何在 Windows 上构建并运行 `HAO`。

## 当前项目状态

项目已经做过 Windows 适配：

- 不再依赖 QtColorWidgets。
- 不再要求修改 VTK 的 `vtkActor.h`。
- `src.pro` 使用 `VTK_ROOT` 环境变量定位 VTK。
- 新增了双击脚本：
  - `check_windows_env.bat`：检查环境。
  - `build_windows.bat`：编译。
  - `run_windows.bat`：运行。

当前电脑还缺少 Qt 和 VTK，因此还不能直接编译或运行。

## 必需依赖

需要安装：

- Qt 6 MinGW 64-bit。
- VTK 9.6，使用同一个 MinGW 工具链编译，并启用 Qt 支持。

不再需要：

- QtColorWidgets。
- 修改版 VTK。

## 推荐路径

建议安装到：

```text
C:\Qt\6.10.1\mingw_64
C:\VTK
```

如果你的 Qt 目录不是这个名字，也没有关系，只要设置环境变量即可。

## 设置环境变量

安装完成后，在 PowerShell 或 CMD 中执行：

```bat
setx QT_DIR C:\Qt\6.10.1\mingw_64
setx VTK_ROOT C:\VTK
```

然后重新打开一个新的命令行窗口。

`VTK_ROOT` 应包含：

```text
C:\VTK\include\vtk-9.6
C:\VTK\lib
C:\VTK\bin
```

## 检查环境

双击：

```text
check_windows_env.bat
```

如果看到：

```text
[OK] qmake found.
[OK] mingw32-make found.
[OK] VTK include directory found.
[OK] VTK lib directory found.
```

说明基本环境已就绪。

如果 `where qmake` 显示 Anaconda 的 qmake，不用管。`build_windows.bat` 会显式使用 `QT_DIR\bin\qmake.exe`。

## 编译

双击：

```text
build_windows.bat
```

成功后通常会生成：

```text
release\HAO.exe
```

或：

```text
debug\HAO.exe
```

## 运行

双击：

```text
run_windows.bat
```

该脚本会临时把以下目录加入 `PATH`：

```text
%QT_DIR%\bin
%VTK_ROOT%\bin
```

这样程序可以找到 Qt 和 VTK 的 DLL。

## 常见问题

### 1. QT_DIR is not set

说明没有设置 Qt 环境变量。执行：

```bat
setx QT_DIR C:\Qt\6.10.1\mingw_64
```

路径替换成你的 Qt 实际安装目录。

### 2. VTK_ROOT is not set

说明没有设置 VTK 环境变量。执行：

```bat
setx VTK_ROOT C:\VTK
```

路径替换成你的 VTK 实际安装目录。

### 3. qmake 指向 Anaconda

这不是问题，只要使用 `build_windows.bat`。不要手动运行裸命令：

```bat
qmake src.pro
```

### 4. 找不到 VTK 库

检查：

```bat
echo %VTK_ROOT%
dir %VTK_ROOT%\include\vtk-9.6
dir %VTK_ROOT%\lib
```

### 5. 启动时报 DLL 缺失

使用 `run_windows.bat` 启动。它会临时设置 Qt/VTK DLL 路径。
