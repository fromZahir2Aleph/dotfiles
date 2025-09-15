# Logseq 字数统计插件 (Word Count Plugin)

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/msjsc001/logseq-word-count-plugin)](https://github.com/msjsc001/logseq-word-count-plugin/releases/latest)
[![License](https://img.shields.io/github/license/msjsc001/logseq-word-count-plugin)](LICENSE)

一个简单实用的 Logseq 插件，用于实时统计当前页面的字数。

---

## ✨ 功能特性

*   **实时显示:** 在 Logseq 工具栏实时显示当前页面的字数统计。
*   **自动更新:**
    *   切换页面时自动重新统计。
    *   编辑内容停止输入后（约 300ms 延迟）自动更新统计。
*   **混合统计:** 支持统计中文字符、英文单词和数字。
*   **简洁图标:** 使用 "✏️" 图标加数字的格式显示，例如 "✏️1234"。

## 📸 截图

![插件在工具栏的显示效果](https://github.com/user-attachments/assets/a082273e-ee4b-4425-a95d-9299b0a3f5c9)
*(截图展示了插件在工具栏的位置和大致样式)*

## 🚀 安装

### 方式一：从 Logseq 插件市场安装 (推荐)

1.  在 Logseq 中打开 `...` -> `插件市场`。
2.  搜索 "Word Count Plugin" (或类似名称，取决于发布审核后的名称)。
3.  点击 "安装"。

### 方式二：手动安装

1.  从 [Releases 页面](https://github.com/msjsc001/logseq-word-count-plugin/releases/latest) 下载最新的 `logseq-word-count-plugin-vX.Y.Z.zip` 文件。
2.  解压下载的 `.zip` 文件。
3.  在 Logseq 中打开 `...` -> `插件`。
4.  点击 "加载解压的插件"。
5.  选择你刚刚解压出来的文件夹。

## 💡 使用方法

插件安装并启用后，会自动在 Logseq 顶部工具栏的右侧区域显示一个 "✏️" 图标，后面跟着当前页面的实时字数统计。

当你在不同页面间切换，或在当前页面编辑内容并稍作停顿时，字数会自动更新。

## 🧑‍💻 开发

本项目使用 TypeScript 编写，并使用 Parcel 进行构建。

### 环境设置

1.  克隆仓库:
    ```bash
    git clone https://github.com/msjsc001/logseq-word-count-plugin.git
    cd logseq-word-count-plugin
    ```
2.  安装依赖:
    ```bash
    npm install
    # 或者使用 pnpm
    # pnpm install
    ```

### 构建

```bash
npm run build
```
此命令会执行 Parcel 构建，并将必要文件处理后放入 `dist` 目录。

### 本地调试

1.  执行一次 `npm run build` 来生成 `dist` 目录。
2.  在 Logseq 中，点击 `...` -> `插件` -> `加载解压的插件`。
3.  **选择项目根目录** (`logseq-word-count-plugin`) 进行加载。
    *   (或者，也可以选择加载 `dist` 目录，这是最终用户安装的方式)。
4.  修改代码后，需要重新运行 `npm run build`，然后在 Logseq 中重新加载插件（或重启 Logseq）以查看更改。

*提示: 详细的开发和构建流程，以及常见问题解决方法，请参考 [`编写插件指南.md`](./编写插件指南.md)。*

## 🏗️ 项目结构

```
.
├── dist/                  # 构建输出目录 (用于 Logseq 加载)
├── src/
│   └── main.ts            # 插件核心逻辑
├── node_modules/          # 项目依赖
├── copy-files.js          # Node.js 脚本，用于准备 dist 目录
├── index.html             # Parcel 构建入口 HTML
├── package.json           # 项目配置和依赖
├── tsconfig.json          # TypeScript 配置
├── README.md              # 项目说明 (本文档)
├── LICENSE                # 项目许可证
├── icon.svg               # 插件图标
└── 编写插件指南.md        # 详细的插件开发指南 (面向 AI)
```

## 🤝 贡献

欢迎通过提交 Issue 或 Pull Request 来报告问题或贡献代码！

## 📄 License

本项目使用 [MIT License](LICENSE) 授权。
