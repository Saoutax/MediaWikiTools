(function() {
    'use strict';

    if (mw.config.get('wgNamespaceNumber') !== 14) {
        return;
    }

    const CATEGORY_NAME = mw.config.get('wgPageName');
    if (!CATEGORY_NAME) {
        return;
    }

    function copyText(text) {
        return new Promise((resolve, reject) => {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(resolve).catch(reject);
            } else {
                const textArea = document.createElement('textarea');
                textArea.value = text;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                textArea.style.top = '-999999px';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                try {
                    document.execCommand('copy');
                    resolve();
                } catch (err) {
                    reject(err);
                } finally {
                    document.body.removeChild(textArea);
                }
            }
        });
    }

    function waitInterval(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function categoryMembers(categoryTitle) {
        const api = new mw.Api();
        const members = [];
        let cmcontinue = '';
        
        while (cmcontinue !== undefined) {
            const result = await api.post({
                format: 'json',
                utf8: true,
                action: 'query',
                list: 'categorymembers',
                cmtitle: categoryTitle,
                cmlimit: 'max',
                ...(cmcontinue ? { cmcontinue } : {})
            });
            cmcontinue = result.continue ? result.continue.cmcontinue : undefined;
            members.push(...result.query.categorymembers.map(member => member.title));
        }
        return members;
    }

    class CategoryFileInspector {
        constructor(categoryName) {
            this.categoryName = categoryName;
            this.api = new mw.Api();
            this.status = 'ready';
            this.deleteStatus = 'ready';
            this.failReason = '';
            this.fileUsageData = [];
            this.deleteRecord = [];
            this.copyButtonText = '复制文件列表';
            this.deleteInterval = 6;
            this.usedNotLinked = [];
            this.isMaintainer = mw.config.get('wgUserGroups').some(group => 
                ['sysop', 'patroller'].includes(group)
            );
            
            this.init();
        }

        init() {
            mw.loader.using(['mediawiki.api', 'moment']).then(() => {
                this.createInterface();
            });
        }

        createInterface() {
            const wrapper = document.createElement('div');
            wrapper.style.marginTop = '20px';
            wrapper.style.borderTop = '1px solid #a2a9b1';
            wrapper.style.paddingTop = '20px';
            wrapper.innerHTML = `
                <form id="category-file-inspector">
                    <fieldset>
                        <legend>分类文件检查</legend>
                        <div id="inspector-content">
                            查询该分类下所有无使用的文件信息<br>
                            <button type="button" id="query-btn" class="mw-ui-button mw-ui-progressive">查询</button>
                        </div>
                    </fieldset>
                </form>
            `;

            const contentText = document.querySelector('#mw-content-text');
            if (contentText) {
                contentText.appendChild(wrapper);
                this.bindEvents();
            }
        }

        bindEvents() {
            const queryBtn = document.getElementById('query-btn');
            if (queryBtn) {
                queryBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.queryCategoryFilesUsage();
                });
            }
        }

        async queryCategoryFiles() {
            const categoryFileList = [];
            let cmcontinue = '';
            
            while (cmcontinue !== undefined) {
                const result = await this.api.post({
                    format: 'json',
                    utf8: true,
                    action: 'query',
                    list: 'categorymembers',
                    cmtitle: this.categoryName,
                    cmnamespace: 6,
                    cmprop: ['title', 'timestamp'],
                    cmsort: 'timestamp',
                    cmdir: 'desc',
                    cmlimit: 'max',
                    ...(cmcontinue ? { cmcontinue } : {})
                });
                cmcontinue = result.continue ? result.continue.cmcontinue : undefined;
                categoryFileList.push(...result.query.categorymembers.map(({title, timestamp}) => ({
                    title,
                    timestamp
                })));
            }
            return categoryFileList;
        }

        async queryFileUsage(fileList) {
            const queryLimit = mw.config.get('wgUserGroups').some(group => 
                ['bot', 'flood', 'sysop'].includes(group)
            ) ? 500 : 50;
            
            const fileChunks = this.chunk(fileList, queryLimit);
            const filtedFileUsageData = [];

            // 查询全域使用情况
            for (const fileData of fileChunks) {
                let gucontinue = '||';
                while (gucontinue) {
                    const result = await this.api.post({
                        format: 'json',
                        utf8: true,
                        action: 'query',
                        prop: 'globalusage',
                        titles: fileData.map(({title}) => title),
                        gucontinue,
                        gulimit: 'max'
                    });
                    gucontinue = result.continue ? result.continue.gucontinue : null;
                    
                    for (const page of Object.values(result.query.pages)) {
                        const {pageid, title, globalusage} = page;
                        const target = filtedFileUsageData.find(({id}) => id === pageid);
                        if (target) {
                            target.usage.push(...(globalusage || []));
                        } else {
                            const fileInfo = fileList.find(file => file.title === title);
                            filtedFileUsageData.push({
                                id: pageid,
                                fileName: title,
                                addTime: fileInfo ? moment(fileInfo.timestamp).format('YYYY年M月D日 HH:mm:ss') : '未知',
                                usage: globalusage || [],
                                selected: true,
                                deleted: false
                            });
                        }
                    }
                }
            }

            const newChunks = this.chunk(filtedFileUsageData, queryLimit);
            for (const fileData of newChunks) {
                let fucontinue = '';
                while (fucontinue !== undefined) {
                    const result = await this.api.post({
                        format: 'json',
                        utf8: true,
                        action: 'query',
                        prop: 'fileusage',
                        titles: fileData.map(({fileName}) => fileName),
                        ...(fucontinue ? { fucontinue } : {}),
                        fulimit: 'max'
                    });
                    fucontinue = result.continue ? result.continue.fucontinue : undefined;
                    
                    for (const page of Object.values(result.query.pages)) {
                        const {pageid, fileusage} = page;
                        if (fileusage && fileusage.length) {
                            const target = filtedFileUsageData.find(({id}) => id === pageid);
                            if (target) {
                                target.cmused = true;
                            }
                        }
                    }
                }
            }

            return filtedFileUsageData.filter(({fileName, usage, cmused}) => {
                return !cmused &&
                    usage.length === 0 &&
                    !this.usedNotLinked.includes(fileName);
            });
        }

        async queryCategoryFilesUsage() {
            try {
                this.status = 'querying';
                this.updateInterface();
                
                this.usedNotLinked = await categoryMembers('Category:非链入使用的文件');
                const categoryFileList = await this.queryCategoryFiles();
                const filtedFileUsageData = await this.queryFileUsage(categoryFileList);
                
                this.fileUsageData = filtedFileUsageData;
                this.status = 'acquired';
                this.updateInterface();
            } catch (err) {
                this.status = 'failed';
                this.failReason = err.toString();
                this.updateInterface();
            }
        }

        updateInterface() {
            const content = document.getElementById('inspector-content');
            if (!content) return;

            if (this.status === 'ready') {
                content.innerHTML = `
                    查询该分类下所有无使用的文件信息<br>
                    <button type="button" id="query-btn" class="mw-ui-button mw-ui-progressive">查询</button>
                `;
                this.bindEvents();
            } else if (this.status === 'querying') {
                content.innerHTML = '正在查询……';
            } else if (this.status === 'failed') {
                content.innerHTML = `
                    查询失败：${this.failReason}<br>
                    <button type="button" id="retry-btn" class="mw-ui-button">重试</button>
                `;
                document.getElementById('retry-btn').addEventListener('click', (e) => {
                    e.preventDefault();
                    this.status = 'ready';
                    this.updateInterface();
                });
            } else if (this.status === 'acquired') {
                this.renderResults();
            }
        }

        renderResults() {
            const content = document.getElementById('inspector-content');
            let html = '获取成功！该分类下无使用的文件如下：<dl>';
            
            this.fileUsageData.forEach(({fileName, usage, selected, deleted, addTime}) => {
                html += `<dt>`;
                if (this.isMaintainer) {
                    html += `<input type="checkbox" name="${fileName}" ${selected && !deleted ? 'checked' : ''} 
                             ${deleted || this.deleteStatus === 'deleting' ? 'disabled' : ''} 
                             onchange="window.categoryFileInspector.handleCheck('${fileName}', this.checked)">`;
                }
                html += `<a href="/${fileName}" ${deleted ? 'style="text-decoration: line-through"' : ''} 
                         target="_blank" rel="noreferrer">${fileName}</a>
                         <label style="font-weight: normal">（添加于 ${addTime}）</label></dt>`;
                
                if (usage.length) {
                    usage.forEach(({url, title}) => {
                        html += `<dd><a href="${url}" target="_blank" rel="noreferrer">${title}</a></dd>`;
                    });
                } else {
                    html += '<dd>无使用</dd>';
                }
            });
            
            html += '</dl><hr><div class="category-file-inspector-panel">';
            
            if (this.isMaintainer) {
                html += `<button type="button" id="delete-btn" class="mw-ui-button mw-ui-progressive" 
                         ${this.deleteStatus === 'deleting' ? 'disabled' : ''}>挂删选中的文件</button>`;
            }
            
            html += `挂删间隔（s）：<input type="number" id="delete-interval" value="${this.deleteInterval}" 
                     min="0" style="width: 5em" onchange="window.categoryFileInspector.deleteInterval = this.value"><br>
                     <button type="button" id="copy-btn" class="mw-ui-button" style="margin-top: 0.4em">${this.copyButtonText}</button>
                     </div>`;
            
            if (this.deleteStatus !== 'ready') {
                html += '<ul class="category-file-inspector-log">';
                this.deleteRecord.forEach(record => {
                    html += `<li>${record}</li>`;
                });
                html += '</ul>';
            }
            
            content.innerHTML = html;
            
            const deleteBtn = document.getElementById('delete-btn');
            if (deleteBtn) {
                deleteBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.handleDelete();
                });
            }
            
            const copyBtn = document.getElementById('copy-btn');
            if (copyBtn) {
                copyBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.handleCopy();
                });
            }
        }

        handleCheck(fileName, checked) {
            this.fileUsageData = this.fileUsageData.map(file =>
                file.fileName === fileName ? {...file, selected: checked} : file
            );
        }

        async handleDelete() {
            const interval = this.deleteInterval * 1000;
            const currentUser = mw.config.get('wgUserName');
            const fileList = this.fileUsageData.filter(({selected}) => selected);
            
            if (fileList.length === 0) {
                return;
            }
            
            this.deleteStatus = 'deleting';
            this.updateInterface();
            
            let done = 0;
            for (const {fileName, usage} of fileList) {
                const reason = '无使用或不再使用的文件';
                try {
                    await this.api.postWithToken('csrf', {
                        action: 'edit',
                        assertUser: currentUser,
                        title: fileName,
                        text: `<noinclude>{{即将删除|1=${reason}|user=${currentUser}}}</noinclude>`,
                        summary: `CategoryFileInspector：挂删：${reason}`,
                        watchlist: 'nochange',
                        tags: 'Automation tool',
                        bot: true
                    });
                    
                    this.fileUsageData = this.fileUsageData.map(file =>
                        file.fileName === fileName ? {...file, deleted: true} : file
                    );
                    
                    this.deleteRecord.push(`${moment().format('HH:mm:ss')} - 【${fileName}】已挂删。`);
                } catch (err) {
                    this.deleteRecord.push(`${moment().format('HH:mm:ss')} - 【${fileName}】挂删失败：${err}`);
                }
                
                done++;
                if (done < fileList.length) {
                    await waitInterval(interval);
                }
                this.renderResults();
            }
            
            this.deleteStatus = 'done';
            this.renderResults();
        }

        async handleCopy() {
            try {
                const text = this.fileUsageData.map(({fileName}) => `* ${fileName}`).join('\n');
                await copyText(text);
                this.copyButtonText = '复制成功';
            } catch (err) {
                this.copyButtonText = `复制失败：${err}`;
            }
            this.renderResults();
        }

        chunk(array, size) {
            const chunks = [];
            for (let i = 0; i < array.length; i += size) {
                chunks.push(array.slice(i, i + size));
            }
            return chunks;
        }
    }

    $(document).ready(function() {
        window.categoryFileInspector = new CategoryFileInspector(CATEGORY_NAME);
    });

})();