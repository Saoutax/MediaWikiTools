/*
* 修改自星海massRollback，移除了管理员相关，增加bot
*/
"use strict";
$.when($.ready, mw.loader.using(["mediawiki.api", "ext.gadget.libOOUIDialog"])).then(() => {
    if (mw.config.get("wgCanonicalSpecialPageName") !== "Contributions") {
        return;
    }

    $(".mw-contributions-list li").each(function () {
        const newChk = document.createElement("input");
        newChk.setAttribute("type", "checkbox");
        newChk.setAttribute("data-title", this.getElementsByClassName("mw-contributions-title")[0].innerText);
        newChk.setAttribute("data-revid", this.getAttribute("data-mw-revid"));
        this.prepend(newChk);
    });

    $("#mw-content-text > p:first").before(
        "<div style=\"float: right; font-size: 66%; margin: 0.6em 0;\" id=\"mw-history-revision-actions\"> \
        <span class=\"mw-ui-button\" id=\"mw-checkbox-invert\">全选/反选</span> \
        <span class=\"mw-ui-button\" id=\"mw-checkbox-between\" title=\"请勾选需要操作的第一个和最后一个复选框后点击此按钮。\">连选</span> \
        <span class=\"mw-ui-button mw-ui-progressive\" id=\"contributions-undo-button\">撤销</span> \
        <span class=\"mw-ui-button mw-ui-progressive patroller-show\" id=\"contributions-rollback-button\" title=\"拥有bot或flood用户组时启用markbotedit\">回退</span> \
        </div>",
    );


    $("#mw-checkbox-invert").click(() => {
        $("li input[type=\"checkbox\"]").prop("checked", (_i, ele) => !ele);
    });
    $("#mw-checkbox-between").click(() => {
        const last = $(".mw-contributions-list input[type=\"checkbox\"]:checked:last").parent()[0];
        $(".mw-contributions-list input[type=\"checkbox\"]:checked:first").parent().nextUntil(last).children("input[type=\"checkbox\"]").prop("checked", true);
    });

    const api = new mw.Api();

    $("#contributions-rollback-button").click(async () => {
        const checked = $(".mw-contributions-list li :checkbox:checked");
        const reason = await oouiDialog.prompt(`<ul><li>选中了${checked.length}个页面</li><li>批量回退操作的编辑摘要：<code>xxx//MassRollback</code></li><li>空白则使用默认回退摘要，取消则不进行回退</li><li>管理员可自授权机器用户或在URL后添加<code>bot=1</code>以启用markbotedit。</li></ul><hr>请输入回退摘要：`, {
            title: "批量回退小工具",
            size: "medium",
            required: false,
        });
        if (reason === null) { return; }
        console.log("开始回退...");
        const user = mw.config.get("wgRelevantUserName");
        checked.each(function () {
            const title = this.getAttribute("data-title");
            try {
                api.postWithToken("rollback", {
                    action: "rollback",
                    format: "json",
                    title: title,
                    user: user,
                    markbot: mw.config.get("wgUserGroups").includes("bot") || mw.config.get("wgUserGroups").includes("flood"),
                    watchlist: "nochange",
                    tags: "Automation tool",
                    summary: reason ? `${reason} //MassRollback` : "//MassRollback",
                }).then((result) => {
                    console.log(`回退：${title}\n${result}`);
                });
            } catch (e) {
                console.log(`回退失败：${e}` instanceof Error ? e.stack.split("\n")[1].trim() : JSON.stringify(e));
            }
        });
    });

    $("#contributions-undo-button").click(async () => {
        const checked = $(".mw-contributions-list li :checkbox:checked");
        const reason = await oouiDialog.prompt(`<ul><li>选中了${checked.length}个页面</li><li>批量撤销操作的编辑摘要：<code>xxx//MassUndo</code></li><li>空白则使用默认撤销摘要，取消则不进行撤销</li></ul><hr>请输入撤销摘要：`, {
            title: "批量撤销小工具",
            size: "medium",
            required: false,
        });
        if (reason === null) { return; }
        console.log("开始撤销...");
        checked.each(function () {
            const title = this.getAttribute("data-title"),
                revid = this.getAttribute("data-revid");
            try {
                api.postWithToken("csrf", {
                    action: "edit",
                    format: "json",
                    title: title,
                    undo: revid,
                    tags: "Automation tool",
                    bot: mw.config.get("wgUserGroups").includes("bot") || mw.config.get("wgUserGroups").includes("flood"),
                    watchlist: "nochange",
                    summary: reason ? `${reason} //MassUndo` : "//MassUndo",
                }).then((result) => {
                    console.log(`撤销：${title}\n${result}`);
                });
            } catch (e) {
                console.log(`撤销失败：${e}` instanceof Error ? e.stack.split("\n")[1].trim() : JSON.stringify(e));
            }
        });
    });
});
