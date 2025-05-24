// 快速清空用户页
if (mw.config.get("wgNamespaceNumber") === 2) {
    $(mw.util.addPortletLink("p-cactions", "#", "清空页面", "clear-userpage", "清空页面", "r")).on("click", function () {
        new mw.Api().postWithToken("csrf", {
            format: "json",
            action: "edit",
            watchlist: "nochange",
            tags: "Automation tool",
            title: mw.config.get("wgPageName"),
            text: "",
            summary: "清空页面"
        })
            .done(function () {
                mw.notify("清空完毕，即将刷新……");
                setTimeout(function () {
                    location.reload();
                }, 2000);
            })
            .fail(function (err) {
                mw.notify("清空页面时出现错误：" + err + "。");
            })
    });
}
