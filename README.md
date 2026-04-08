# 微信读书自动夜间模式 (WeRead Auto Dark Mode)

一个轻量级的 Tampermonkey (油猴) 脚本，用于让 Web 版微信读书（weread.qq.com）的主题自动跟随你的操作系统深色模式进行切换。

## 核心特性

- 当你的系统切换为深色/浅色模式时，网页自动切换到对应模式，无需手动点击。

## 安装指南

### 第一步：安装脚本管理器
如果你还没有安装 Tampermonkey（油猴）扩展，请先在你的浏览器中安装：
- [Chrome 扩展商店](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- [Edge 扩展商店](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

### 第二步：一键安装脚本
点击下方链接，Tampermonkey 会自动弹出安装界面：

**[点击此处安装脚本](https://raw.githubusercontent.com/SherlockChiang/Weread-auto-darkmode/main/weread-auto-dark-mode.user.js)**

## 实现方式

为 `body` 标签添加 `wr_whiteTheme` 类名实现主题切换。
