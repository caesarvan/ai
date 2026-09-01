# Caesar Fan

多页静态个人站。对外署名 **Caesar Fan**。

- 中文：`index.html`
- English：`index.html?lang=en`

语言参数会在页面跳转时保留，因此中英文版本都可以直接分享 URL。

## 页面

| 文件 | 内容 |
| --- | --- |
| `index.html` | 首页 |
| `work.html` | 专业经历（配图 + 术语说明） |
| `projects.html` | GitHub 自有项目 |
| `awards.html` | 荣誉 |
| `about.html` | 关于 / 路径 |
| `contact.html` | 联系（仅 GitHub） |

本站不展示真名与电话。职业经历中的机构标识使用可追溯的现有
Logo，来源见 [`BRAND_ASSETS.md`](BRAND_ASSETS.md)。

## 本地预览

```bash
python3 -m http.server 8080
```

打开 `http://127.0.0.1:8080`。

文案与项目列表：`assets/i18n.js`。
