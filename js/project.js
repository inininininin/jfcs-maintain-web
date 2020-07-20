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



project.fenXianChengShou = function (value) {
    if(value < 40)
        return '低'
    else if(40<= value < 60 )
        return '中'
    else if(60<= value < 79)
        return '中高'
    else if(80<= value <= 100)
        return '高'
   return ''
}

project.touZiLeiXing = function (value) {
    if(value < 40)
        return '保守'
    else if(40<= value < 60 )
        return '稳健'
    else if(60<= value < 79)
        return '积极'
    else if(80<= value <= 100)
        return '冒险'
    return ''
}