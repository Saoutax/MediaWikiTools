"use strict";
$(() => {
    try {
        if (
            $(".will2Be2Deleted")[0]
            || mw.config.get("wgRevisionId") === 0 && mw.config.get("wgArticleId") === 0
            || !mw.config.get("wgUserGroups").includes("autopatrol")
        ) {
            return;
        }

        const $body = $("body");
        $("#mw-notification-area").appendTo($body);

        class RedirectWindow extends OO.ui.ProcessDialog {
            static static = {
                ...super.static,
                tagName: "div",
                name: "lr-redirect",
                title: wgULS("重定向", "重定向"),
                actions: [
                    {
                        action: "cancel",
                        label: "取消",
                        flags: ["safe", "close", "destructive"],
                    },
                    {
                        action: "submit",
                        label: wgULS("确认", "確認"),
                        flags: ["primary", "progressive"],
                    },
                ],
            };

            constructor(config) {
                super(config);
            }

            initialize() {
                super.initialize();

                this.panelLayout = new OO.ui.PanelLayout({
                    scrollable: false,
                    expanded: false,
                    padded: true,
                });
                this.pagesText = new OO.ui.MultilineTextInputWidget({
                    placeholder: wgULS("请输入要重定向的页面名称，每行一个", "請輸入要重定向的頁面名稱，每行一個"),
                });

                const pagesField = new OO.ui.FieldLayout(this.pagesText, {
                    label: wgULS("页面列表", "頁面列表"),
                    align: "top",
                });

                this.panelLayout.$element.append(
                    pagesField.$element,
                );

                this.$body.append(this.panelLayout.$element);
            }

            getBodyHeight() {
                return this.panelLayout.$element.outerHeight(true);
            }

            getReadyProcess(data) {
                return super.getReadyProcess(data).next(() => {
                    this.pagesText.focus();
                }, this);
            }

            getActionProcess(action) {
                if (action === "cancel") {
                    return new OO.ui.Process(() => {
                        this.close({ action });
                    }, this);
                } else if (action === "submit") {
                    return new OO.ui.Process($.when((async () => {
                        const pages = this.pagesText.getValue().split("\n").map(p => p.trim()).filter(p => p);
                        if (!pages.length) {
                            throw new OO.ui.Error("请输入至少一个页面名称");
                        }
                        try {
                            for (const page of pages) {
                                await this.createRedirect(page);
                                await new Promise(resolve => setTimeout(resolve, 5000)); // 5秒间隔
                            }
                            this.close({ action });
                            mw.notify(wgULS("重定向创建完成", "重定向創建完成"), {
                                title: wgULS("操作成功", "操作成功"),
                                type: "success",
                                tag: "lr-redirect",
                            });
                            setTimeout(() => location.reload(), 730);
                        } catch (e) {
                            console.error("[RedirectTool] Error:", e);
                            throw new OO.ui.Error(e);
                        }
                    })()).promise(), this);
                }
                return super.getActionProcess(action);
            }

            async createRedirect(targetPage) {
                const api = new mw.Api();
                const currentPage = mw.config.get("wgPageName");
                try {
                    // 检查页面是否存在
                    const { query: { pages } } = await api.get({
                        action: "query",
                        titles: targetPage,
                        format: "json",
                    });
                    const pageId = Object.keys(pages)[0];
                    if (pages[pageId].missing) {
                        // 页面不存在，创建重定向
                        await api.postWithToken("csrf", {
                            action: "edit",
                            assertuser: mw.config.get("wgUserName"),
                            format: "json",
                            title: targetPage,
                            text: `#重定向 [[${currentPage}]]`,
                            summary: `重定向到 [[${currentPage}]]`,
                            nocreate: false,
                            watchlist: "nochange",
                            tags: "Automation tool",
                            contentmodel: "wikitext",
                        });
                    } else {
                        console.log(`页面 ${targetPage} 已存在，跳过`);
                    }
                } catch (e) {
                    throw e;
                }
            }
        }

        const windowManager = new OO.ui.WindowManager();
        $body.append(windowManager.$element);
        const redirectDialog = new RedirectWindow({ size: "medium" });
        windowManager.addWindows([redirectDialog]);

        $(mw.util.addPortletLink("p-cactions", "#", wgULS("重定向", "重定向"), "ca-lr-redirect", `${wgULS("重定向本页", "重定向本頁")}[alt-shift-r]`), "r").on("click", (e) => {
            e.preventDefault();
            windowManager.openWindow(redirectDialog);
            $body.css("overflow", "auto");
        });
    } catch (e) {
        var parseError = function (errLike, _space/* ? */) {
            let space = _space;
            if (_space === void 0) {
                space = 4;
            }
            return JSON.stringify(errLike, function (_, v) {
                if (v instanceof Error) {
                    var stack = [];
                    if (v.stack) {
                        Reflect.apply(stack.push, stack, v.stack.split("\n").map(function (n) {
                            return n.trim();
                        }).filter(function (n) {
                            var _a;
                            return ((_a = n === null || n === void 0 ? void 0 : n.length) !== null && _a !== void 0 ? _a : -1) > 0;
                        }));
                    }
                    var keys = Object.keys(v).filter(function (key) {
                        return !Reflect.has(Error.prototype, key);
                    });
                    if (keys.length) {
                        stack.push(JSON.stringify(Object.fromEntries(keys.map(function (key) {
                            return [key, v[key]];
                        })), null, space));
                    }
                    return stack.join("\n").trim() || "";
                }
                return v;
            }, space).replace(/^"(.*)"$/, "$1");
        };
        oouiDialog.alert("错误信息：<br>" + oouiDialog.sanitize(parseError(e)), {
            title: "重定向工具发生错误",
        });
        console.error("[RedirectTool] Setup error:", e);
    }
});
