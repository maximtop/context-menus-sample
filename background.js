chrome.contextMenus.create({
    contexts: ['all'],
    title: 'first item',
    enabled: true,
});

chrome.contextMenus.create({
    type: 'separator',
});

chrome.contextMenus.create({
    contexts: ['all'],
    title: 'second item',
    enabled: true,
});
