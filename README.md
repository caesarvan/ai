# 个人主页

GPU / 芯片功耗验证方向的静态个人站点。中文为默认语言，右上角可切到英文。

## 本地预览

仓库根目录就是站点根目录，任选一种方式：

```bash
python3 -m http.server 8080
```

浏览器打开 `http://127.0.0.1:8080`。

也可直接打开 `index.html`（部分浏览器对本地 `file://` 的字体请求更严，建议用本地 HTTP）。

## 结构

| 路径 | 作用 |
| --- | --- |
| `index.html` | 页面结构 |
| `assets/styles.css` | 样式 |
| `assets/i18n.js` | 中英文案与功耗域数据 |
| `assets/app.js` | 语言切换、菜单、平面图交互 |
| `assets/favicon.svg` | 图标 |

## 改内容

- 自我介绍、方法、能力：改 `assets/i18n.js` 里 `I18N` 的 `zh` / `en`。
- 功耗域平面图：改同一文件里的 `DOMAINS`（位置用 0–1 相对坐标）。
- 联系方式：改 `index.html` 里 GitHub 链接。

GitHub Pages 可直接以仓库根为发布源。
