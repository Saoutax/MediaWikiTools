// <nowiki>
"use strict";

const pageName = mw.config.get("wgPageName");
const userName = mw.config.get("wgUserName");

$(mw.util.addPortletLink("p-cactions", "#", "挂删", "registerToDelete", "挂删页面", "d")).on("click", function (e) {
    e.preventDefault();

    function DeleteTagDialog(config) {
        DeleteTagDialog.parent.call(this, config);
    }
    OO.inheritClass(DeleteTagDialog, OO.ui.ProcessDialog);

    DeleteTagDialog.static.name = 'deleteTagDialog';
    DeleteTagDialog.static.title = '挂删页面';
    DeleteTagDialog.static.actions = [
        {
            action: 'confirm',
            label: '确认',
            flags: ['primary', 'destructive']
        },
        {
            label: '取消',
            flags: 'safe'
        }
    ];

    DeleteTagDialog.prototype.initialize = function () {
        DeleteTagDialog.parent.prototype.initialize.apply(this, arguments);
        
        var content = new OO.ui.PanelLayout({
            padded: true,
            expanded: false
        });
        
        this.reasonInput = new OO.ui.TextInputWidget({
            placeholder: '请输入删除原因',
            multiline: true,
            rows: 3
        });
        
        content.$element.append(
            $('<p>').text('请输入删除原因：'),
            this.reasonInput.$element
        );
        
        this.$body.append(content.$element);
    };

    DeleteTagDialog.prototype.getActionProcess = function (action) {
        if (action === 'confirm') {
            return new OO.ui.Process(function () {
                var reason = this.reasonInput.getValue().trim();
                if (!reason) {
                    return new OO.ui.Error('请输入删除原因');
                }
                tagPageForDeletion(reason);
                this.close({ action: action });
            }, this);
        }
        return DeleteTagDialog.parent.prototype.getActionProcess.call(this, action);
    };

    DeleteTagDialog.prototype.getBodyHeight = function () {
        return 150;
    };

    var dialog = new DeleteTagDialog({
        size: 'medium'
    });
    
    var windowManager = new OO.ui.WindowManager();
    $('body').append(windowManager.$element);
    windowManager.addWindows([dialog]);

    windowManager.openWindow(dialog).closed.then(() => windowManager.destroy());
});

function tagPageForDeletion(reason) {
    var deleteTemplate = "{{待删除|user=" + userName + "|reason=" + reason + "}}";
    
    new mw.Api().postWithToken("csrf", {
        format: "json",
        action: "edit",
        watchlist: "nochange",
        tags: "Automation tool",
        title: pageName,
        text: deleteTemplate,
        summary: "挂删：" + reason
    })
    .done(function () {
        mw.notify("挂删成功，即将刷新……", { type: 'success' });
        setTimeout(function () {
            location.reload();
        }, 2000);
    })
    .fail(function (err) {
        var errorMsg = err.error ? err.error.info : err;
        mw.notify("挂删页面时出现错误：" + errorMsg, { type: 'error' });
    });
}

// </nowiki>