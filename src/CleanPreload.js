"use strict";
const api = new mw.Api();
const pageName = mw.config.get("wgPageName");

if (mw.config.get("wgArticleId") !== 0) {
    $(mw.util.addPortletLink("p-cactions", "#", "清理预加载", "clear-preload", "清理预加载", "r")).on("click", function (e) {
        e.preventDefault();

        var dialog = new OO.ui.MessageDialog();
        
        var windowManager = new OO.ui.WindowManager();
        $('body').append(windowManager.$element);
        windowManager.addWindows([dialog]);

        windowManager.openWindow(dialog, {
            title: '清理预加载',
            message: '您确定要清理此页面的预加载内容吗？此操作仅会移除页面内HTML注释，请手动检查是否存在遗留。',
            actions: [
                {
                    action: 'confirm',
                    label: '确认',
                    flags: ['primary', 'destructive']
                },
                {
                    action: 'cancel',
                    label: '取消',
                    flags: 'safe'
                }
            ]
        }).closed.then(function (data) {
            if (data && data.action === 'confirm') {
                clearPreload();
            }
            
            windowManager.destroy();
        });
    });
    
    function clearPreload() {
        api.get({
            action: "query",
            titles: pageName,
            prop: "revisions",
            rvprop: "content",
            formatversion: "2"
        }).then(function(data) {
            if (!data.query || !data.query.pages || data.query.pages.length === 0) {
                throw new Error("无法获取页面数据");
            }
            const page = data.query.pages[0];
            if (page.missing) {
                throw new Error("页面不存在");
            }
            const content = page.revisions[0].content;
            const newContent = content.replace(/<!--[\s\S]*?-->/g, '');
            if (content === newContent) {
                mw.notify("未找到需要清理的预加载内容");
                return;
            }
            return api.postWithToken("csrf", {
                action: "edit",
                title: pageName,
                text: newContent,
                summary: "[[User:SaoMikoto/js#快速移除预加载模板|移除预加载模板]]",
                tags: "Automation tool",
                watchlist: "nochange"
            });
        }).then(function() {
            mw.notify("清理完成，即将刷新页面...");
            setTimeout(function() {
                location.reload();
            }, 2000);
        }).catch(function(error) {
            mw.notify("操作失败: " + error);
            console.error("清理预加载出错：", error);
        });
    }
}
