this.manifest = {
    "name": "΢����",
    "icon": "icon.png",
	
    "settings": [
		
		{
            "tab": "��������",
            "group": "ȫ������",
            "name": "set|enable_all",
            "type": "checkbox",
            "label": "����΢����"
        },
		
		{
            "tab": "��������",
            "group": "΢��������",
            "name": "set|global_theme",
            "type": "popupButton",
            "label": "��ѡ��ť��ɫ",
            "options": [
				["original", "Ĭ����ɫ(��΢��������ͬ)"],
                ["blue", "��ɫ"],
                ["grey", "��ɫ"]
            ]
        },
		
		{
            "tab": "��������",
            "group": "ʵ�ù���",
            "name": "set|enable_autonew",
            "type": "checkbox",
            "label": "�Զ�չ����΢��"
        },
		
		{
            "tab": "���˵�����",
            "group": "ȫ������",
            "name": "div|id|pl_content_top",	
            "type": "checkbox",
            "label": "��������Ԫ��"
        },
		
		{
            "tab": "���˵�����",
            "group": "��ϸ����",
            "name": "div|class|logo",
            "type": "checkbox",
            "label": "��������logo"
        },
		
		{
            "tab": "���˵�����",
            "group": "��ϸ����",
            "name": "ul|class|list",
            "type": "checkbox",
            "label": "�����������"
        },
		
		{
            "tab": "���˵�����",
            "group": "��ϸ����",
            "name": "div|class|search",
            "type": "checkbox",	
            "label": "����������"
        },
		
		{
            "tab": "���˵�����",
            "group": "��ϸ����",
            "name": "div|class|right",
            "type": "checkbox",	
            "label": "�����Ҳ�����"
        },
		
		
		/*
		{
            "tab": "�Ҳ����",
            "group": "ȫ������",
            "name": "hide_right_ads",
            "type": "checkbox",
            "label": "���ع��(��4��)"
        },
		
		{
            "tab": "�Ҳ����",
            "group": "��ϸ����",
            "name": "hide_right_tip",
            "type": "checkbox",
            "label": "����С��ʾ"
        },
		{
            "tab": "�Ҳ����",
            "group": "ȫ������",
            "name": "div|class|W_main_r",
            "type": "checkbox",
            "label": "��������Ԫ��"
        },
		*/
		{
            "tab": "�Ҳ����",
            "group": "ȫ������",
            "name": "div|id|pl_content_liteFacePersonInfo",
            "type": "checkbox",
            "label": "���ظ�������"
        },
		
		{
            "tab": "�Ҳ����",
            "group": "��ϸ����",
            "name": "div|id|pl_content_medal",
            "type": "checkbox",
            "label": "����ѫ��"
        },
		
		{
            "tab": "�Ҳ����",
            "group": "��ϸ����",
            "name": "div|id|pl_nav_outlookBar",
            "type": "checkbox",
            "label": "�����Ҳർ��"
        },
		
		{
            "tab": "�Ҳ����",
            "group": "ģ������",
            "name": "div|id|pl_content_promotetopic",
            "type": "checkbox",
            "label": "�������Ż���"
        },
		
		{
            "tab": "�Ҳ����",
            "group": "ģ������",
            "name": "div|id|pl_content_homeInterest",
            "type": "checkbox",
            "label": "���ؿ��ܸ���Ȥ����"
        },
		
		{
            "tab": "�Ҳ����",
            "group": "ģ������",
            "name": "div|id|pl_relation_recommendPopularUsers",
            "type": "checkbox",
            "label": "���������û��Ƽ�"
        },
		
		{
            "tab": "�Ҳ����",
            "group": "ģ������",
            "name": "div|id|pl_content_allInOne",
            "type": "checkbox",
            "label": "����All in oneģ��"
        },
		
		{
            "tab": "�Ҳ����",
            "group": "ģ������",
            "name": "div|id|ads_36",
            "type": "checkbox",
            "label": "���ع��"
        },
		
		{
            "tab": "�Ҳ����",
            "group": "ģ������",
            "name": "div|id|pl_content_topic",
            "type": "checkbox",
            "label": "���ع�ע�Ļ���"
        },
		
		{
            "tab": "�Ҳ����",
            "group": "ģ������",
            "name": "div|id|pl_common_noticeboard",
            "type": "checkbox",
            "label": "���ع�����"
        },
		
		{
            "tab": "�Ҳ����",
            "group": "ģ������",
            "name": "div|id|pl_common_help",
            "type": "checkbox",
            "label": "���ذ���"
        },
		
		{
            "tab": "�Ҳ����",
            "group": "��ϸ����",
            "name": "div|id|pl_common_feedback",
            "type": "checkbox",
            "label": "�����������"
        }/*,
		

		{
            "tab": "�����",
            "group": "��ϸ����",
            "name": "hide_main_post",
            "type": "checkbox",
            "label": "���ط�����"
        },
		
		{
            "tab": "�����",
            "group": "��ϸ����",
            "name": "hide_main_tips",
            "type": "checkbox",
            "label": "�����Ƽ�"
        },
		
		{
            "tab": "�����",
            "group": "��ϸ����",
            "name": "hide_main_sort",
            "type": "checkbox",
            "label": "���ط���,����"
        },
		
		{
            "tab": "�����",
            "group": "��ϸ����",
            "name": "hide_main_forward",
            "type": "checkbox",
            "label": "����ת������(����ʾ������Ϣ������\"չ��\"����ʾȫ������)"
        },
		
		{
            "tab": "�����",
            "group": "��ϸ����",
            "name": "hide_main_image",
            "type": "checkbox",
            "label": "����ͼƬ(�����ͣ����չ��ͼƬ�������Զ���ʾͼƬ)"
        },
		
		{
            "tab": "�����",
            "group": "��ϸ����",
            "name": "hide_main_micro",
            "type": "checkbox",
            "label": "����ģʽ(����ʾ΢������,����ת��,�ղ�,���۵ȹ���)"
        },
		
		{
            "tab": "����",
            "group": "��ϸ����",
            "name": "hide_other_nav",
            "type": "checkbox",
            "label": "���س��õ���"
        },
		
		{
            "tab": "����",
            "group": "��ϸ����",
            "name": "hide_other_ads",
            "type": "checkbox",
            "label": "���صײ����"
        },
		
		{
            "tab": "����",
            "group": "��ϸ����",
            "name": "hide_other_bot",
            "type": "checkbox",
            "label": "���صײ�����"
        },
		
		{
            "tab": "����ҳ��",
            "group": "ȫ������",
            "name": "enable_friend",
            "type": "checkbox",
            "label": "���ú���ҳ���Ż�"
        },
		
		{
            "tab": "����ҳ��",
            "group": "���˵�����",
            "name": "hide_top_friend",	
            "type": "checkbox",
            "label": "��������Ԫ��"
        },
		
		{
            "tab": "����ҳ��",
            "group": "���˵�����",
            "name": "hide_top_left_friend",
            "type": "checkbox",
            "label": "�����������"
        },
		
		{
            "tab": "����ҳ��",
            "group": "���˵�����",
            "name": "hide_top_right_friend",
            "type": "checkbox",	
            "label": "�����Ҳ�����"
        },
		
		{
            "tab": "����ҳ��",
            "group": "����������",
            "name": "hide_secondnav_friend",
            "type": "checkbox",
            "label": "��������Ԫ��"
        },
		
		{
            "tab": "����ҳ��",
            "group": "����������",
            "name": "hide_secondnav_logo_friend",
            "type": "checkbox",
            "label": "��������Logo"
        },
		
		{
            "tab": "����ҳ��",
            "group": "����������",
            "name": "hide_secondnav_nav_friend",
            "type": "checkbox",
            "label": "�����Ҳർ����"
        },
		
		{
            "tab": "����ҳ��",
            "group": "�Ҳ����",
            "name": "hide_right_info_friend",
            "type": "checkbox",
            "label": "���غ�����Ϣ"
        },
		
		{
            "tab": "����ҳ��",
            "group": "�Ҳ����",
            "name": "hide_right_medal_friend",
            "type": "checkbox",
            "label": "���غ��ѻ���"
        },
		
		{
            "tab": "����ҳ��",
            "group": "�Ҳ����",
            "name": "hide_right_follow_friend",
            "type": "checkbox",
            "label": "����'��עTa����ͬʱ��ע'"
        },
		
		{
            "tab": "����ҳ��",
            "group": "�Ҳ����",
            "name": "hide_right_bothfollow_friend",
            "type": "checkbox",
            "label": "���ع�ͬ��ע"
        },
		
		{
            "tab": "����ҳ��",
            "group": "�Ҳ����",
            "name": "hide_right_profile_friend",
            "type": "checkbox",
            "label": "���غ�������"
        },
		
		{
            "tab": "����ҳ��",
            "group": "�Ҳ����",
            "name": "hide_right_tag_friend",
            "type": "checkbox",
            "label": "���غ��ѱ�ǩ"
        },
		
		{
            "tab": "����ҳ��",
            "group": "�Ҳ����",
            "name": "hide_right_topic_friend",
            "type": "checkbox",
            "label": "���غ��ѹ�ע�Ļ���"
        },
		
		{
            "tab": "����ҳ��",
            "group": "�Ҳ����",
            "name": "hide_right_fan_friend",
            "type": "checkbox",
            "label": "���غ��ѷ�˿"
        },
		
		{
            "tab": "����ҳ��",
            "group": "�Ҳ����",
            "name": "hide_right_group_friend",
            "type": "checkbox",
            "label": "���غ��Ѽ��뵽Ⱥ"
        },
		
		{
            "tab": "����ҳ��",
            "group": "�Ҳ����",
            "name": "hide_right_feedback_friend",
            "type": "checkbox",
            "label": "�����������"
        },
		
		{
            "tab": "����ҳ��",
            "group": "�Ҳ����",
            "name": "hide_right_report_friend",
            "type": "checkbox",
            "label": "���ؾٱ�"
        },
		
		{
            "tab": "����ҳ��",
            "group": "�����",
            "name": "hide_main_relation_friend",
            "type": "checkbox",
            "label": "���ع�ע���"
        },
		
		{
            "tab": "����ҳ��",
            "group": "�����",
            "name": "hide_main_handle_friend",
            "type": "checkbox",
            "label": "���غ��Ѳ���"
        },
		
		{
            "tab": "����ҳ��",
            "group": "�����",
            "name": "hide_main_tab_friend",
            "type": "checkbox",
            "label": "����΢��/TA������"
        },
		
		{
            "tab": "����ҳ��",
            "group": "�����",
            "name": "hide_main_filter_friend",
            "type": "checkbox",
            "label": "����ɸѡ"
        },
		
		{
            "tab": "����ҳ��",
            "group": "�����",
            "name": "hide_main_micro_friend",
            "type": "checkbox",
            "label": "����ģʽ(����ʾ΢������,����ת��,�ղ�,���۵ȹ���)"
        },
		
		{
            "tab": "����ҳ��",
            "group": "��������",
            "name": "hide_other_nav_friend",
            "type": "checkbox",
            "label": "���س��õ���"
        },
		
		{
            "tab": "����ҳ��",
            "group": "��������",
            "name": "hide_other_ads_friend",
            "type": "checkbox",
            "label": "���صײ����"
        },
		
		{
            "tab": "����ҳ��",
            "group": "��������",
            "name": "hide_other_bot_friend",
            "type": "checkbox",
            "label": "���صײ�����"
        },
		
		{
            "tab": "����ҳ��",
            "group": "�������",
            "name": "hide_top_search",
            "type": "checkbox",
            "label": "���ض���������"
        },
		
		{
            "tab": "����ҳ��",
            "group": "�������",
            "name": "hide_top_left_search",
            "type": "checkbox",
            "label": "���ض�������������ࣩ"
        },
		
		{
            "tab": "����ҳ��",
            "group": "�������",
            "name": "hide_top_right_search",
            "type": "checkbox",
            "label": "���ض������������Ҳࣩ"
        },
		
		{
            "tab": "����ҳ��",
            "group": "�������",
            "name": "hide_search_logo",
            "type": "checkbox",
            "label": "��������logo"
        },
		
		{
            "tab": "����ҳ��",
            "group": "�������",
            "name": "hide_search_bottom",
            "type": "checkbox",
            "label": "���صײ�����"
        },
		
		{
            "tab": "����ҳ��",
            "group": "��ϸ����",
            "name": "hide_search_hot",
            "type": "checkbox",
            "label": "���������û�"
        },
		
		{
            "tab": "����ҳ��",
            "group": "��ϸ����",
            "name": "hide_search_order",
            "type": "checkbox",
            "label": "������������"
        },
		
		{
            "tab": "����ҳ��",
            "group": "��ϸ����",
            "name": "hide_search_topic",
            "type": "checkbox",
            "label": "���ػ���ѡ��"
        },
		
		{
            "tab": "����ҳ��",
            "group": "��ϸ����",
            "name": "hide_search_toptitle",
            "type": "checkbox",
            "label": "���ع�ע�Ļ���"
        },
		
		{
            "tab": "����ҳ��",
            "group": "��ϸ����",
            "name": "hide_search_top10",
            "type": "checkbox",
            "label": "����1Сʱ�����"
        },
		
		{
            "tab": "����ҳ��",
            "group": "��ϸ����",
            "name": "hide_search_related",
            "type": "checkbox",
            "label": "������ػ���"
        },
		
		{
            "tab": "����ҳ��",
            "group": "��ϸ����",
            "name": "hide_search_feedback",
            "type": "checkbox",
            "label": "�����������"
        },
		
		
		{
            "tab": "��Ϣ����",
            "group": "�����û�",
            "name": "enable_filter",
            "type": "checkbox",
            "label": "���ù����û�",
        },
		
		{
            "tab": "��Ϣ����",
            "group": "�����û�",
            "name": "filter",
            "type": "text",
            "label": "�������������û���",
			"text": "�԰�Ƕ���,�ָ��û���",
			"masked": "false"
        },
		
		{
            "tab": "��Ϣ����",
            "group": "�����û�",
            "name": "bugs",
            "type": "description",
            "text": "*Ŀǰֻ�ܹ��˵�һҳ����,���԰�Ƕ��ŷָ�����û���"
        },
		
		
		{
            "tab": "��Ϣ����",
            "group": "���˹ؼ���",
            "name": "enable_filter_keyword_origin",
            "type": "checkbox",
            "label": "����ԭ������",
        },
		
		{
            "tab": "��Ϣ����",
            "group": "���˹ؼ���",
            "name": "enable_filter_keyword_forward",
            "type": "checkbox",
            "label": "����ת������",
        },
		
		{
            "tab": "��Ϣ����",
            "group": "���˹ؼ���",
            "name": "filter_keyword",
            "type": "text",
            "label": "�����������εĹؼ���",
			"text": "�԰�Ƕ���,�ָ��ؼ���",
			"masked": "false"
        },
		
		{
            "tab": "��Ϣ����",
            "group": "���˹ؼ���",
            "name": "bugs",
            "type": "description",
            "text": "*Ŀǰֻ�ܹ��˵�һҳ����,���԰�Ƕ��ŷָ�����ؼ���"
        },
		
		{
            "tab": "��������",
            "group": "ȫ������",
            "name": "enable_notification",
            "type": "checkbox",
            "label": "������������"
        },
		
		{
            "tab": "��������",
            "group": "ȫ������",
            "name": "notification_intervals",
            "type": "slider",
			"min": 10,
			"max": 600,
			"step": 10,
			"display": true,
            "label": "�����(��)"
        },
		
		{
            "tab": "��������",
            "group": "��ϸ����",
            "name": "notification_post",
            "type": "checkbox",
            "label": "����΢��ʱ����"
        },
		
		{
            "tab": "��������",
            "group": "��ϸ����",
            "name": "notification_comment",
            "type": "checkbox",
            "label": "��������ʱ����"
        },
		
		{
            "tab": "��������",
            "group": "��ϸ����",
            "name": "notification_fan",
            "type": "checkbox",
            "label": "���·�˿ʱ����"
        },
		
		{
            "tab": "��������",
            "group": "��ϸ����",
            "name": "notification_msg",
            "type": "checkbox",
            "label": "����˽��ʱ����"
        },
		
		{
            "tab": "��������",
            "group": "��ϸ����",
            "name": "notification_atme",
            "type": "checkbox",
            "label": "����@ʱ����"
        },
		
		{
            "tab": "����",
            "group": "����΢����",
            "name": "thx",
            "type": "description",
            "text": "�ǳ���л����ʹ��!"
        },
		
		{
            "tab": "����",
            "group": "�汾��Ϣ",
            "name": "version",
            "type": "description",
            "text": chrome.i18n.getMessage("appVersion")
        },
		
		{
            "tab": "����",
            "group": "����ʱ��",
            "name": "version",
            "type": "description",
            "text": chrome.i18n.getMessage("appReleaseDate")
        },
		
		{
            "tab": "����",
            "group": "��������",
            "name": "version",
            "type": "description",
            "text": chrome.i18n.getMessage("appChangelog")
        },
		
		{
            "tab": "����",
            "group": "����΢����",
            "name": "bug",
            "type": "description",
            "text": "����Bug�ͽ���:�뷢���ʼ���ye111111ow@gmail.com �ǳ���л!"
        },
		*/
	]
}