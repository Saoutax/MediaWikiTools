// <nowiki>

(function() {
    'use strict';

    // 用户组配置
    const USER_GROUPS = {
        'arbiter': { label: '裁', color: '#e213f5', name: '裁决员' },
        'bureaucrat': { label: '行', color: '#9c27b0', name: '行政员' },
        'checkuser': { label: '查', color: '#673ab7', name: '用户查核员' },
        'suppress': { label: '监', color: '#9c27b0', name: '监督员' },
        'sysop': { label: '管', color: '#ec407a', name: '管理员' },
        'interface-admin': { label: '界', color: '#f55b42', name: '界面管理员' },
        'patroller': { label: '巡', color: '#f77f38', name: '巡查员' },
        'techeditor': { label: '技', color: '#3f51b5', name: '技术编辑员' },
        'autoreviewer': { label: '免', color: '#1aa179', name: '巡查豁免者' },
        'bot': { label: '机', color: '#1e88e5', name: '机器人' },
        'flood': { label: '机', color: '#1e88e5', name: '机器用户' },
        'confirmed': { label: '确', color: '#009688', name: '确认用户' }
    };

    const GROUP_ORDER = Object.keys(USER_GROUPS);
    const userGroupCache = new Map();
    const CACHE_DURATION = 5 * 60 * 1000; 

    // 获取用户组信息
    async function getUserGroups(usernames) {
        if (!usernames || usernames.length === 0) return {};

        const uncachedUsers = [];
        const result = {};

        usernames.forEach(username => {
            const cached = userGroupCache.get(username);
            if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
                result[username] = cached.groups;
            } else {
                uncachedUsers.push(username);
            }
        });

        if (uncachedUsers.length === 0) {
            return result;
        }

        try {
            const api = new mw.Api();
            const response = await api.get({
                action: 'query',
                list: 'users',
                ususers: uncachedUsers.join('|'),
                usprop: 'groups',
                formatversion: 2
            });

            if (response.query && response.query.users) {
                response.query.users.forEach(user => {
                    if (user.groups && !user.missing) {
                        const relevantGroups = user.groups.filter(group => USER_GROUPS[group]);
                        result[user.name] = relevantGroups;
                        
                        userGroupCache.set(user.name, {
                            groups: relevantGroups,
                            timestamp: Date.now()
                        });
                    }
                });
            }
        } catch (error) {
            console.warn('获取用户组信息失败:', error);
        }

        return result;
    }

    function createGroupIndicator(groups) {
        if (!groups || groups.length === 0) return null;

        const sortedGroups = groups.sort((a, b) => {
            return GROUP_ORDER.indexOf(a) - GROUP_ORDER.indexOf(b);
        });

        const container = document.createElement('sup');
        container.style.cssText = `
            font-size: 80%;
            vertical-align: super;
            margin-left: 2px;
            line-height: 1;
        `;

        sortedGroups.forEach((group, index) => {
            const config = USER_GROUPS[group];
            if (!config) return;

            const span = document.createElement('span');
            span.textContent = config.label;
            span.style.cssText = `
                color: ${config.color};
                cursor: help;
                ${index > 0 ? 'margin-left: 1px;' : ''}
            `;
            span.title = config.name;

            container.appendChild(span);
        });

        return container;
    }

    async function processUserLinks() {
        const userLinks = document.querySelectorAll('.mw-userlink, .plainlinks .userlink');
        if (userLinks.length === 0) return;

        const usernames = [];
        const linkMap = new Map();

        userLinks.forEach(link => {
            if (link.dataset.groupProcessed) return;

            let username = '';
            
            if (link.classList.contains('mw-userlink')) {
                const href = link.getAttribute('href');
                if (href) {
                    const match = href.match(/\/wiki\/User:([^/?#]+)/);
                    if (match) {
                        username = decodeURIComponent(match[1]).replace(/_/g, ' ');
                    }
                }
            } else if (link.classList.contains('userlink')) {
                username = link.textContent.trim();
            }

            if (username && !linkMap.has(username)) {
                usernames.push(username);
                linkMap.set(username, []);
            }
            
            if (username) {
                linkMap.get(username).push(link);
                link.dataset.groupProcessed = 'true';
            }
        });

        if (usernames.length === 0) return;

        const userGroups = await getUserGroups(usernames);

        Object.entries(userGroups).forEach(([username, groups]) => {
            const links = linkMap.get(username);
            if (!links || groups.length === 0) return;

            const indicator = createGroupIndicator(groups);
            if (!indicator) return;

            links.forEach(link => {
                if (link.nextElementSibling && link.nextElementSibling.tagName === 'SUP') {
                    return;
                }
                link.parentNode.insertBefore(indicator.cloneNode(true), link.nextSibling);
            });
        });
    }

    // 初始化
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', processUserLinks);
        } else {
            processUserLinks();
        }

        const observer = new MutationObserver(function(mutations) {
            let shouldProcess = false;
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(function(node) {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            if (node.querySelector('.mw-userlink, .plainlinks .userlink')) {
                                shouldProcess = true;
                            }
                        }
                    });
                }
            });
            
            if (shouldProcess) {
                setTimeout(processUserLinks, 100);
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    if (typeof mw !== 'undefined' && mw.Api) {
        init();
    } else {
        if (typeof mw !== 'undefined') {
            mw.loader.using('mediawiki.api').then(init);
        }
    }

})();

// </nowiki>