# HMO Web 发布指南

目标：让别人不下载项目、不安装依赖，只通过一个网址直接打开使用。

## 1. 本地生成发布文件

双击运行：

```bat
build_web.bat
```

成功后会生成：

```text
dist/
```

`dist` 目录就是最终要发布的静态网页文件。发布后，别人只需要打开网址即可使用。

本地预览发布版：

```bat
npm.cmd run preview
```

然后打开终端中显示的本地地址。

## 2. 推荐发布方式

### Vercel

1. 注册并登录 Vercel。
2. 新建项目并导入当前项目目录。
3. Build Command 填：

```text
npm run build
```

4. Output Directory 填：

```text
dist
```

5. 部署完成后，Vercel 会给出一个可访问的网址。

### Netlify

1. 运行 `build_web.bat`。
2. 把生成的 `dist` 文件夹拖到 Netlify 的部署页面。
3. Netlify 会生成一个可访问网址。

### GitHub Pages

1. 运行 `build_web.bat`。
2. 把 `dist` 中的文件上传到 GitHub Pages 对应分支或目录。
3. 打开 GitHub Pages 给出的链接即可使用。

## 3. 对访问者的要求

访问者不需要安装 Qt、VTK、Node、Python，也不需要下载项目。

只需要：

- 一台能联网的电脑或平板；
- 一个现代浏览器，例如 Edge、Chrome、Safari。

## 4. 注意

当前发布版会把 Three.js 打包进本地文件，不再依赖 `https://esm.sh` 这类外部 CDN。这样课堂网络不稳定时也更可靠。
