// ==UserScript==
// @name         微信读书自动夜间模式
// @namespace    https://github.com/SherlockChiang/Weread-auto-darkmode
// @version      1.1
// @description  根据系统深色模式自动切换微信读书的黑夜/白天主题
// @author       Uranium92
// @match        *://weread.qq.com/*
// @icon         https://weread.qq.com/favicon.ico
// @updateURL    https://raw.githubusercontent.com/SherlockChiang/Weread-auto-darkmode/main/weread-auto-dark-mode.user.js
// @downloadURL  https://raw.githubusercontent.com/SherlockChiang/Weread-auto-darkmode/main/weread-auto-dark-mode.user.js
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    let debounceTimer = null;

    function applyTheme() {
        const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const hasWhite = document.body.classList.contains('wr_whiteTheme');

        if (isSystemDark && hasWhite) {
            document.body.classList.remove('wr_whiteTheme');
        } else if (!isSystemDark && !hasWhite) {
            document.body.classList.add('wr_whiteTheme');
        }
    }

    function applyThemeDebounced() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(applyTheme, 50);
    }

    setTimeout(applyTheme, 1000);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);

    const observer = new MutationObserver(() => {
        applyThemeDebounced();
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
})();
