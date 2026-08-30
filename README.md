# 范高一格 · Silicon Validation

个人主页：系统级硅验证 / 昇腾 NPU 组网 / 预硅与验证平台工程。默认中文，可切英文。

## 本地预览

```bash
python3 -m http.server 8080
```

打开 `http://127.0.0.1:8080`。

## 结构

| 路径 | 作用 |
| --- | --- |
| `index.html` | 页面结构 |
| `assets/styles.css` | 半导体风格样式与动效 |
| `assets/i18n.js` | 中英文案、经历、项目、验证栈数据 |
| `assets/app.js` | 语言切换、晶圆交互、die 动画、滚动进度 |
| `assets/favicon.svg` | 图标 |

## 在线访问（GitHub Pages）

仓库 Settings → Pages → Source 选 `main` / `(root)`。  
发布后地址一般为：`https://caesarvan.github.io/ai/`

## 改内容

- 经历 / 项目 / 能力文案：`assets/i18n.js`
- 联系方式：`index.html` 中 `mailto` / `tel` / GitHub 链接
