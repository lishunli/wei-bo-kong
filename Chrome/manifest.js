this.manifest = {
    "name": "微博控",
    "icon": "icon.png",
	
    "settings": [
		
		{
            "tab": "基本设置",
            "group": "全局设置",
            "name": "enable_all",
            "type": "checkbox",
            "label": "启用微博控"
        },
		
		{
            "tab": "基本设置",
            "group": "微博控主题",
            "name": "global_theme",
            "type": "popupButton",
            "label": "请选择主题配色",
            "options": [
				["original", "默认配色"],
                ["blue", "蓝色"],
                ["grey", "灰色"]
            ]
        },
		
		{
            "tab": "顶端导航条",
            "group": "全局设置",
            "name": "hide_top",	
            "type": "checkbox",
            "label": "隐藏所有元素"
        },
		
		{
            "tab": "顶端导航条",
            "group": "详细设置",
            "name": "hide_top_left",
            "type": "checkbox",
            "label": "隐藏左侧链接"
        },
		
		{
            "tab": "顶端导航条",
            "group": "详细设置",
            "name": "hide_top_right",
            "type": "checkbox",	
            "label": "隐藏右侧链接"
        },
		
		{
            "tab": "二级导航条",
            "group": "全局设置",
            "name": "hide_secondnav",
            "type": "checkbox",
            "label": "隐藏所有元素"
        },
		
		{
            "tab": "二级导航条",
            "group": "详细设置",
            "name": "hide_secondnav_logo",
            "type": "checkbox",
            "label": "隐藏新浪Logo"
        },
		
		{
            "tab": "二级导航条",
            "group": "详细设置",
            "name": "hide_secondnav_nav",
            "type": "checkbox",
            "label": "隐藏右侧导航条"
        },
		
		{
            "tab": "右侧边栏",
            "group": "全局设置",
            "name": "hide_right",
            "type": "checkbox",
            "label": "隐藏所有元素"
        },
		
		{
            "tab": "右侧边栏",
            "group": "详细设置",
            "name": "hide_right_info",
            "type": "checkbox",
            "label": "隐藏个人资料"
        },
		
		{
            "tab": "右侧边栏",
            "group": "详细设置",
            "name": "hide_right_app",
            "type": "checkbox",
            "label": "隐藏推荐应用"
        },
		
		{
            "tab": "右侧边栏",
            "group": "详细设置",
            "name": "hide_right_nav",
            "type": "checkbox",
            "label": "隐藏右侧导航"
        },
		
		{
            "tab": "右侧边栏",
            "group": "详细设置",
            "name": "hide_right_ads",
            "type": "checkbox",
            "label": "隐藏广告(共3处)"
        },
		
		{
            "tab": "右侧边栏",
            "group": "详细设置",
            "name": "hide_right_topic",
            "type": "checkbox",
            "label": "隐藏热门话题"
        },
		
		{
            "tab": "右侧边栏",
            "group": "详细设置",
            "name": "hide_right_people",
            "type": "checkbox",
            "label": "隐藏可能感兴趣的人"
        },
		
		{
            "tab": "右侧边栏",
            "group": "详细设置",
            "name": "hide_right_alltopic",
            "type": "checkbox",
            "label": "隐藏关注的话题"
        },
		
		{
            "tab": "右侧边栏",
            "group": "详细设置",
            "name": "hide_right_group",
            "type": "checkbox",
            "label": "隐藏我加入的群"
        },
		
		{
            "tab": "右侧边栏",
            "group": "详细设置",
            "name": "hide_right_cf",
            "type": "checkbox",
            "label": "隐藏手机新浪,意见反馈"
        },
		
		{
            "tab": "右侧边栏",
            "group": "详细设置",
            "name": "hide_right_report",
            "type": "checkbox",
            "label": "隐藏举报"
        },
		
		{
            "tab": "主面板",
            "group": "详细设置",
            "name": "hide_main_post",
            "type": "checkbox",
            "label": "隐藏发布栏"
        },
		
		{
            "tab": "主面板",
            "group": "详细设置",
            "name": "hide_main_tips",
            "type": "checkbox",
            "label": "隐藏推荐"
        },
		
		{
            "tab": "主面板",
            "group": "详细设置",
            "name": "hide_main_sort",
            "type": "checkbox",
            "label": "隐藏分组,排序"
        },
		
		{
            "tab": "主面板",
            "group": "详细设置",
            "name": "hide_main_forward",
            "type": "checkbox",
            "label": "隐藏转发内容(仅显示好友消息，单击\"展开\"后显示全部内容)"
        },
		
		{
            "tab": "主面板",
            "group": "详细设置",
            "name": "hide_main_image",
            "type": "checkbox",
            "label": "隐藏图片(鼠标悬停至‘展开图片’即可自动显示图片)"
        },
		
		{
            "tab": "主面板",
            "group": "详细设置",
            "name": "hide_main_micro",
            "type": "checkbox",
            "label": "精简模式(仅显示微博正文,隐藏转发,收藏,评论等功能)"
        },
		
		{
            "tab": "其它",
            "group": "详细设置",
            "name": "hide_other_nav",
            "type": "checkbox",
            "label": "隐藏常用导航"
        },
		
		{
            "tab": "其它",
            "group": "详细设置",
            "name": "hide_other_ads",
            "type": "checkbox",
            "label": "隐藏底部广告"
        },
		
		{
            "tab": "其它",
            "group": "详细设置",
            "name": "hide_other_bot",
            "type": "checkbox",
            "label": "隐藏底部链接"
        },
		
		{
            "tab": "消息过滤",
            "group": "过滤用户",
            "name": "enable_filter",
            "type": "checkbox",
            "label": "启用过滤用户",
        },
		
		{
            "tab": "消息过滤",
            "group": "过滤用户",
            "name": "filter",
            "type": "text",
            "label": "请输入想屏蔽用户名",
			"text": "以半角逗号,分隔用户名",
			"masked": "false"
        },
		
		{
            "tab": "消息过滤",
            "group": "过滤用户",
            "name": "bugs",
            "type": "description",
            "text": "*目前只能过滤第一页内容,请以半角逗号分隔多个用户名"
        },
		
		{
            "tab": "消息过滤",
            "group": "过滤关键字",
            "name": "enable_filter_keyword_origin",
            "type": "checkbox",
            "label": "过滤原创内容",
        },
		
		{
            "tab": "消息过滤",
            "group": "过滤关键字",
            "name": "enable_filter_keyword_forward",
            "type": "checkbox",
            "label": "过滤转发内容",
        },
		
		{
            "tab": "消息过滤",
            "group": "过滤关键字",
            "name": "filter_keyword",
            "type": "text",
            "label": "请输入想屏蔽的关键字",
			"text": "以半角逗号,分隔关键字",
			"masked": "false"
        },
		
		{
            "tab": "消息过滤",
            "group": "过滤关键字",
            "name": "bugs",
            "type": "description",
            "text": "*目前只能过滤第一页内容,请以半角逗号分隔多个关键字"
        },
		
		{
            "tab": "桌面提醒",
            "group": "全局设置",
            "name": "enable_notification",
            "type": "checkbox",
            "label": "启用桌面提醒"
        },
		
		{
            "tab": "桌面提醒",
            "group": "全局设置",
            "name": "notification_intervals",
            "type": "slider",
			"min": 10,
			"max": 600,
			"step": 10,
			"display": true,
            "label": "检查间隔(秒)"
        },
		
		{
            "tab": "桌面提醒",
            "group": "详细设置",
            "name": "notification_post",
            "type": "checkbox",
            "label": "有新微博时提醒"
        },
		
		{
            "tab": "关于",
            "group": "关于微博控",
            "name": "thx",
            "type": "description",
            "text": "非常感谢您的使用!"
        },
		
		{
            "tab": "关于",
            "group": "版本信息",
            "name": "version",
            "type": "description",
            "text": chrome.i18n.getMessage("appVersion")
        },
		
		{
            "tab": "关于",
            "group": "关于微博控",
            "name": "bug",
            "type": "description",
            "text": "关于Bug和建议:请发送邮件至ye111111ow@gmail.com 非常感谢!"
        },
	]
}