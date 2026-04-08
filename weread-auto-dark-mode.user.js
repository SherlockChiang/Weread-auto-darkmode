// ==UserScript==
// @name         微信读书自动夜间模式
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  根据系统深色模式自动切换微信读书的黑夜/白天主题
// @author       Uranium92
// @match        *://weread.qq.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function autoToggleDarkMode() {
        const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        const targetElement = document.body;

        if (isSystemDark) {
            if (targetElement.classList.contains('wr_whiteTheme')) {
                targetElement.classList.remove('wr_whiteTheme');
            }
        } else {
            if (!targetElement.classList.contains('wr_whiteTheme')) {
                targetElement.classList.add('wr_whiteTheme');
            }
        }
    }

    setTimeout(autoToggleDarkMode, 1000);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', autoToggleDarkMode);

    const observer = new MutationObserver((mutations) => {
        const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (isSystemDark && document.body.classList.contains('wr_whiteTheme')) {
            document.body.classList.remove('wr_whiteTheme');
        }
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

})();
