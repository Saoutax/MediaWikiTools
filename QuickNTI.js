// <pre>
"use strict";
if (mw.config.get("wgNamespaceNumber") === 0 || mw.config.get("wgNamespaceNumber") === 2) {
    $(mw.util.addPortletLick("p-cactions", "#", "急需改进", "need-to-improve", "急需改进", "n")).on("click", function () {
        const pageTitle = mw.config.get("wgPageName");
        const textTop = /\{\{((.*)\s?top)|\{\{([欢歡]迎[编編][辑輯]|不完整)/gi;
        const newText = "{{急需改进|内容极少"

        new mw.Api().get({
            action: 'query',
            prop: 'revisions',
            rvprop: 'content',
            titles: pageTitle,
            format: 'json'
        }).done(function (data) {
            var pages = data.query.pages;
            var pageId = Object.keys(pages)[0];
            var page = pages[pageId];

            if (page.revisions) {
                var content = page.revisions[0].content;
                var newContent;

                textTop.lastIndex = 0;
                if (textTop.test(content)) {
                    textTop.lastIndex = 0;
                    newContent = content.replace(textTop, newText);
                } else {
                    newContent = newText + "\n" + content;
                }

                new mw.Api().postWithToken("csrf", {
                    action: "edit",
                    title: pageTitle,
                    text: newContent,
                    summary: "快速标记急需改进",
                    bot: mw.config.get("wgUserGroups").includes("bot"),
                    minor: true
                }).done(function () {
                    location.reload();
                }).fail(function (error) {
                    mw.notify("编辑失败: " + error);
                });
            }
        }).fail(function (error) {
            mw.notify("获取内容失败: " + error);
        });         
    });
}
// </pre>
