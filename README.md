````markdown
# Vue3 + Vite 部署到 GitHub Pages（标准方案）

Vue3 + Vite 部署到 GitHub Pages，**核心就三件事**：

1. 设置 `base` 为仓库名路径  
2. `npm run build` 生成 `dist`  
3. 把 `dist` 发布到 GitHub Pages（**推荐用 GitHub Actions 自动化**）

下面是一套 **照做即可上线** 的标准流程。

---

## 修改 Vite 的 `base`

编辑 `vite.config.ts`（或 `vite.config.js`）：

```ts
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

export default defineConfig({
  plugins: [vue()],
  base: "/仓库名/", // 例如 /Nordic-Minimalist-Fashion-Website/
})
````

### 特殊情况

* 如果你使用的是 **用户主页仓库**

  * 仓库名必须是：`用户名.github.io`
  * 此时可以使用：

    ```ts
    base: "/"
    ```

---

## 配置 GitHub Pages（使用 Actions 自动构建并发布）✅ 推荐

### A. GitHub 仓库设置

进入仓库：

```
Settings → Pages
```

* **Source**：选择 `GitHub Actions`

---

### B. 添加 GitHub Actions 工作流

在项目中创建文件：

```
.github/workflows/deploy.yml
```

内容如下：

```yml
name: Deploy Vite Vue to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci
      - run: npm run build

      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

---

## 部署与访问

当你执行：

```bash
git push origin main
```

GitHub Actions 会自动：

1. 安装依赖
2. 构建项目（生成 `dist`）
3. 发布到 GitHub Pages

部署完成后，访问地址为：

```
https://用户名.github.io/仓库名/
```

---

## 常见注意事项（强烈建议检查）
* `base` 路径必须与 **仓库名完全一致**
* `dist` 目录中必须直接包含 `index.html`
* 如果使用 Vue Router：

  * 建议使用 `createWebHashHistory()`，避免刷新 404

---

## 总结

* **最省事、最稳定方案**：GitHub Actions 自动部署
* 不需要手动管理 `dist` 或 `gh-pages` 分支
* 适合个人项目 / 作品集 / 前端 Demo

