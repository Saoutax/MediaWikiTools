$(mw.util.addPortletLink("p-cactions", "#", "跨站批量删除", "cross-wiki-delete", "替换跨站列表项")).on("click", function () {
    new mw.Api().get({
        action: "query",
        prop: "revisions",
        rvprop: "content",
        titles: mw.config.get("wgPageName"),
        format: "json"
    }).then(data => {
        const page = data.query.pages[Object.keys(data.query.pages)[0]];
        const content = page.revisions[0]["*"];

        const listItems = content.match(/^\*[\s*]*(?:\[\[([^\]|]+)\]\]|([^\n]+))/gm) || [];
        const targets = listItems.map(item => {
            const match = item.match(/\[\[([^\]|]+)\]\]|([^\n]+)/);
            return (match[1] || match[2]).trim();
        });

        if (targets.length === 0) {
            mw.notify("未找到有效列表项");
            return;
        }

        mw.notify(`找到${targets.length}个页面，开始跨站替换...`, { title: "操作中" });

        const foreignApi = new mw.Api({
            apiUrl: 'https://commons.moegirl.org.cn/api.php' // ← 修改为实际目标站
        });

        Promise.all(targets.map(title => 
            foreignApi.postWithToken("csrf", {
                action: "edit",
                title: title,
                text: "{{即将删除}}", 
                summary: "跨站自动替换",
                tags: "Automation tool",
                watchlist: "nochange"
            }).catch(err => ({ error: true, title, err }))
        ).then(results => {
            const failed = results.filter(r => r && r.error);
            if (failed.length === 0) {
                mw.notify(`成功更新${targets.length}个commons页面`, { type: "success" });
            } else {
                mw.notify(`跨站操作完成，但有${failed.length}个失败`, { type: "error" });
                console.error("失败详情:", failed);
            }
        });

    }).catch(err => mw.notify("获取列表失败：" + err));
});
