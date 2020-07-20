var project = {}
project.newTab = function (param) {
    var tabs = $('#tabs').length == 0 ? parent.$('#tabs') : $('#tabs')

    tabs.tabs('add', {
        id: param.id,
        title: param.title,
        closable: true,
        width: '100%',
        content: `<iframe src="${param.url}" style="width:100%;height:99%;border:none;"/>`,
        tools: [{
            iconCls: 'icon-mini-refresh',
            handler: function () {
                var currentTab = tabs.tabs('getSelected');
                tabs.tabs('update', {
                    tab: currentTab,
                    options: {
                        content: currentTab.panel('options', 'content'),
                    }
                });
            }
        }
        ]
    });
}



