// WeiboKong
// version 1.0.2
// 2011-09-15
//
// ==UserScript==
// @name          WeiboKong
// @namespace     
// @description   
// @include       http://weibo.com/*
// @include		  http://t.sina.com.cn/*
// ==/UserScript==

var VERSION = chrome.i18n.getMessage("appVersion");
var UPDATE = chrome.i18n.getMessage("appChangelog");
var DATE = chrome.i18n.getMessage("appReleaseDate");

function topnav(options) {
	if ( options['hide_top'] == true ) {
		$("div.global_header").hide();
	} else {
		if ( options['hide_top_logo'] == true ) {
			$("div.logo").hide();
		}
		if ( options['hide_top_left'] == true ) {
			$("ul.list").hide();
		}
		if ( options['hide_top_right'] == true ) {
			$("div.right").hide();
		}
		if ( options['hide_top_search'] == true ) {
			$("div.search").hide();
		}
		//.layer_message_box
	}
}

function rightside(options) {
	if ( options['hide_right'] == true ) {
		$(".W_main_r").hide();
		//#pl_content_versionTip
	}
	else {
		if ( options['hide_right_widgets'] ) {
			$('div[name^="app"]').hide();
		}
		if ( options['hide_right_ads'] == true ) {
			$("#ads_35").hide();
			$("#ads_36").hide();
			$("#ads_37").hide();
			$("#ads_47").hide();
		}
		if ( options['hide_right_info'] == true ) {
			$(".userinfo").hide();
		}
		if ( options['hide_right_app'] == true ) {
			$(".widgetIntroduce.widgetH2").hide();
		}
		if ( options['hide_right_nav'] == true ) {
			$(".right_nav").hide();
		}
		if ( options['hide_right_topic'] == true ) {
			$('div[name="app4"]').hide();
		}
		if ( options['hide_right_people'] == true ) {
			$('div[name="app20"]').hide();
		}
		if ( options['hide_right_alltopic'] == true ) {
			$('div[name="app5"]').hide();
		}
		
		if ( options['hide_right_group'] == true ) {
			$('div[name="app10003"]').hide();
		}
		if ( options['hide_right_cf'] == true ) {
			$(".f_pro").hide();
		}
		if ( options['hide_right_report'] == true ) {
			$(".rightTxtList").hide();
		}
		if ( options['hide_right_popuser'] == true ) {
			$('div[name="app6"]').hide();
		}
		if ( options['hide_right_tip'] == true ) {
			$(".PopLayer").hide();
		}
	}
}

function mainboard(options) {
	var theme = "kong_button" + getTheme( options['global_theme'] );
	var theme_hover = "kong_button_hover" + getTheme( options['global_theme'] );
	if ( options['hide_main_post'] == true ) {
		$(".MIB_mbloghead").hide();
	}
	if ( options['hide_main_tips'] == true ) {
		$("#pully_list").hide();
	}
	if ( options['hide_main_sort'] == true ) {
		$("#MIB_newFilter").hide();
	}
	if ( options['hide_main_micro'] == true ) {
		$(".feed_att.MIB_linkbl.MIB_txtbl").hide();
	}
	if ( options['hide_main_forward'] == true ) {
		$(".sms").each(function (index){
			var html = $(this).html();
			
			var pos = -1;
			var i = 0;
			var ina = false;
			for ( i = 0;i < html.length;i++ ) {
				if ( html[i] == '<' ) ina = true;
				if (html[i] == '<' && html[i+1] == '/' ) ina = false;
				if ( ina == true ) continue;
				if ( html[i] == '/' && html[i + 1] == '/' ) {
					pos = i;
					break;
				}
			}
			if ( pos != -1 ) {
				var mine = html.substring(0, pos);
				var theirs = html.substring(pos + 2, html.length);
				$(this).html(mine + 
					"<div id=\"kong_display_" + index + "\" class=\"kong_button " + theme + "\" >展开</div><span id= \"kong_foward_" + index 
					+ "\" style=\" display: none; margin-left: 40px; \"><hr class=\"kong_hr\">"+ theirs + "</span>");
				var keep = false;
				$("#kong_display_"+index).click(function(){
					if ( keep == false ) {
						keep = true;
						$(this).html("隐藏");
					}
					else {
						keep = false;
						$(this).html("保持展开");
					}
				});
				
				$("#kong_display_"+index).hover(function(){
					var timer = setTimeout(function() {
						$("#kong_display_"+index).addClass(theme_hover);
						if ( keep == false ) {
							$("#kong_display_"+index).html("保持展开");
						}
						else {
							$("#kong_display_"+index).html("隐藏");
						}
						$("#kong_foward_"+index).show();
					}, 500);
				},function(){
					$(this).removeClass(theme_hover);
					if ( keep == false ) {
						$("#kong_foward_"+index).hide();
						$(this).html("展开");
					}
					else {
						$(this).html("隐藏");
					}
				});
			}
		});
	}
	if ( options["hide_main_image"] == true ) {
		$(".feed_img > a").each( function (){
			var str = $(this).attr( "onclick" );
			var thumbnail_url = $(this).children().attr( "src" );
			var bmiddle_url = thumbnail_url.replace("thumbnail", "bmiddle")
			var large_url = thumbnail_url.replace("thumbnail", "large");
			$(this).parent().append("<span><div class='thumbnail kong_button_left " + theme + "' href='javascript:void(0);'>&nbsp;&nbsp;显示缩略图&nbsp;&nbsp;</div><div class='bmiddle kong_button_middle " + theme + "' href='javascript:void(0);'>&nbsp;&nbsp;&nbsp;&nbsp;显示中图&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='kong_button_right " + theme + "'>新窗口打开大图</div></span><br><br><img style='display:none' />");
			var keep = false;
			
			//hover
			var thumbnail = $(this).parent().children("span").children(".thumbnail");
			$(thumbnail).hover(function() {
				var timer = setTimeout(function() {
					$(thumbnail).addClass(theme_hover);
					$(thumbnail).parent().parent().children("img").attr("src", thumbnail_url);
					$(thumbnail).parent().parent().children("img").show();
						
					if ( keep == false ) {
						$(thumbnail).html("保持图片展开");
					}
					else {
						$(thumbnail).html("&nbsp;&nbsp;&nbsp;&nbsp;隐藏图片&nbsp;&nbsp;&nbsp;&nbsp;");
					}
				}, 500);
			}, function() {
				$(this).removeClass(theme_hover);
				if ( keep == false ) { 
					$(this).html("&nbsp;&nbsp;显示缩略图&nbsp;&nbsp;");
					$(this).parent().parent().children("img").hide();
				}
			});
			
			var bmiddle = $(this).parent().children("span").children(".bmiddle");
			$(bmiddle).hover(function() {
				var timer = setTimeout(function() {
					$(bmiddle).addClass(theme_hover);
					$(bmiddle).parent().parent().children("img").attr("src", bmiddle_url);
					$(bmiddle).parent().parent().children("img").show();
					
					if ( keep == false ) {
						$(bmiddle).html("保持图片展开");
					}
					else {
						$(bmiddle).html("&nbsp;&nbsp;&nbsp;&nbsp;隐藏图片&nbsp;&nbsp;&nbsp;&nbsp;");
					}
				}, 500);
			}, function() {
				$(this).removeClass(theme_hover);
				if ( keep == false ) { 
					$(this).html("&nbsp;&nbsp;&nbsp;&nbsp;显示中图&nbsp;&nbsp;&nbsp;&nbsp;");
					$(this).parent().parent().children("img").hide();
				}
			});
			
			//click
			$(this).parent().children("span").children(".thumbnail").click(function() {
				if ( keep == false ) {
					keep = true;
					$(this).html("&nbsp;&nbsp;&nbsp;&nbsp;隐藏图片&nbsp;&nbsp;&nbsp;&nbsp;");
				}
				else {
					keep = false;
					$(this).html("保持图片展开");
				}
			});
			
			$(this).parent().children("span").children(".bmiddle").click(function() {
				if ( keep == false ) {
					keep = true;
					$(this).html("&nbsp;&nbsp;&nbsp;&nbsp;隐藏图片&nbsp;&nbsp;&nbsp;&nbsp;");
				}
				else {
					keep = false;
					$(this).html("保持图片展开");
				}
			});
			
			$(this).parent().children("span").children(".kong_button_right").click(function() {
				window.open(large_url,"WeiboKong");
			});
			
			$(this).hide();
		});
	}
	
}

function others(options) {
	if ( options['hide_other_nav'] == true ) {
		$(".cmn_nav.cn_away").hide();
	}
	if ( options['hide_other_ads'] == true ) {
		$("#ads_bottom_1").hide();
	}
	if ( options['hide_other_bot'] == true ) {
		$("#bottomborder").hide();
	}
}

function filter(options) {
	/*
	if ( options['enable_filter'] == true ) {
		if ( options['filter'] != "" ) {
			var names = options['filter'].toString().split(",");
			for (var i in names) {
			
				allDivs = document.evaluate(
					"//a[@title='" + names[i] + "']",
					document,
					null,
					XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
					null);
				for (var i = 0; i < allDivs.snapshotLength; i++) {
					thisDiv = allDivs.snapshotItem(i);
					thisDiv = thisDiv.parentNode;
					thisDiv = thisDiv.parentNode;
					thisDiv = thisDiv.parentNode;
					thisDiv.parentNode.removeChild(thisDiv);
				}
				
			}
		}
	}
	*/
	if ( options['enable_filter_keyword_origin'] == true ) {
		if ( options['filter_keyword'] != "" ) {
			var keywords = options['filter_keyword'].toString().split(",");
			$(".sms").each(function (index){
				var html = $(this).html();
				
				for (var k in keywords) {
					if ( html.search( keywords[k] ) != -1 ) {
						$(this).parent().parent().hide();
						break;
					}
				}
			});
			var keywords = options['filter_keyword'].toString().split("，");
			$(".sms").each(function (index){
				var html = $(this).html();
				
				for (var k in keywords) {
					if ( html.search( keywords[k] ) != -1 ) {
						$(this).parent().parent().hide();
						break;
					}
				}
			});
		}
	}
	if ( options['enable_filter_keyword_forward'] == true ) {
		if ( options['filter_keyword'] != "" ) {
			var keywords = options['filter_keyword'].toString().split(",");
			$(".MIB_assign").each(function (index){
				var html = $(this).html();
					
				for (var k in keywords) {
					if ( html.search( keywords[k] ) != -1 ) {
						$(this).parent().parent().hide();
						break;
					}
				}
			});
			var keywords = options['filter_keyword'].toString().split("，");
			$(".MIB_assign").each(function (index){
				var html = $(this).html();
					
				for (var k in keywords) {
					if ( html.search( keywords[k] ) != -1 ) {
						$(this).parent().parent().hide();
						break;
					}
				}
			});
		}
	}
	t = setTimeout(function(){filter(options);}, 2000 );
}

function checkUpdate() {
	if ( localStorage["version"] == undefined || VERSION > localStorage["version"] ) {
		localStorage["version"] = VERSION;
		newElement = document.createElement('div');
		newElement.id = "kong_update";
		newElement.innerHTML += "<div id='kong_title'>微博控更新详情 v" + VERSION +"</div>"
		newElement.innerHTML += "<div id='kong_date'>" + DATE + "</div><br>" 
		newElement.innerHTML += UPDATE;
		newElement.innerHTML += "<div id='kong_func'>10秒后自动<a href=\"\" onClick=\"document.getElementById('kong_update').style.display = 'none'; return false;\">关闭</a></div>"
		document.body.appendChild(newElement);
		var timer = setTimeout("document.getElementById('kong_update').style.display = 'none';", 10000);
	}
}

function checkNew(notified1,notified2,notified3,notified4,notified5,options) {
    //mainboard(options);
	var flag = false;
	if ( options['notification_post'] == true ) {
		if ( $(".newMblog_ts1").css("display") != "none" ) {
			flag = true;
			if ( notified1 == false ) {
				chrome.extension.sendRequest({'action' : 'notify', 'type' : 'post'}, function(){});
				notified1 = true;
				if ( options['enable_autonew'] == true ) {
					$(".newMblog_ts1").click();
				}
			}
		}
		if ( flag == false ) notified1 = false;
	}
	flag = false;
	if ( options['notification_comment']  == true ) {
		if ( $(".yInfo p:first-child").css("display") != "none" && $(".yInfo p:first-child").html() != "" ) {
			flag = true;
			if ( notified2 == false ) {
				chrome.extension.sendRequest({'action' : 'notify', 'type' : 'comment'}, function(){});
				notified2 = true;
			}
		}
		if ( flag == false ) notified2 = false;
	}
	flag = false;
	if ( options['notification_fan']  == true ) {
		if ( $(".yInfo p:first-child").next().css("display") != "none" && $(".yInfo p:first-child").next().html() != "" ) {
			flag = true;
			if ( notified3 == false ) {
				chrome.extension.sendRequest({'action' : 'notify', 'type' : 'fan'}, function(){});
				notified3 = true;
			}
		}
		if ( flag == false ) notified3 = false;
	}
	flag = false;
	if ( options['notification_msg']  == true ) {
		if ( $(".yInfo p:first-child").next().next().css("display") != "none" && $(".yInfo p:first-child").next().next().html() != "" ) {
			flag = true;
			if ( notified4 == false ) {
				chrome.extension.sendRequest({'action' : 'notify', 'type' : 'msg'}, function(){});
				notified4 = true;
			}
		}
		if ( flag == false ) notified4 = false;
	}
	flag = false;
	if ( options['notification_atme']  == true ) {
		if ( $(".yInfo p:first-child").next().next().next().css("display") != "none" && $(".yInfo p:first-child").next().next().next().html() != "" ) {
			flag = true;
			if ( notified5 == false ) {
				chrome.extension.sendRequest({'action' : 'notify', 'type' : 'atme'}, function(){});
				notified5 = true;
			}
		}
		if ( flag == false ) notified5 = false;
	}
	
	
	var intervals = options['notification_intervals'];
	if ( intervals < 10 ) intervals = 10;
	t = setTimeout(function(){checkNew(notified1,notified2,notified3,notified4,notified5,options);}, intervals * 1000 );
}

function notification(options) {
	if ( options['enable_notification'] == false ) {
		return;
	}
	checkNew(false,false,false,false,false,options);
}

function friendpage(options) {
	if ( options['hide_top_friend'] == true ) {
		$(".tsina_gnbarea").hide();
	} else {
		if ( options['hide_top_left_friend'] == true ) {
			$(".gnb_l").hide();
		}
		if ( options['hide_top_right_friend'] == true ) {
			$(".gnb_r").hide();
		}
	}
	if ( options['hide_secondnav_friend'] == true ) {
		$(".head_menu").hide();
		$(".newlogo.festival").hide();
	} else {
		if ( options['hide_secondnav_logo_friend'] == true ) {
			$(".newlogo.festival").hide();
		}
		if ( options['hide_secondnav_nav_friend'] == true ) {
			$(".head_menu").hide();
		}
	}
	if ( options['hide_right_info_friend'] == true ) {
		$(".user_atten.MIB_linedot").hide();
	}
	if ( options['hide_right_medal_friend'] == true ) {
		$(".medal_show1").hide();
	}
	if ( options['hide_right_follow_friend'] == true ) {
		$('div[name="app43"]').hide();
	}
	if ( options['hide_right_bothfollow_friend'] == true ) {
		$('div[name="app41"]').hide();
	}
	if ( options['hide_right_profile_friend'] == true ) {
		$('div[name="app15"]').hide();
	}
	if ( options['hide_right_tag_friend'] == true ) {
		$('div[name="app11"]').hide();
	}
	if ( options['hide_right_topic_friend'] == true ) {
		$('div[name="app5"]').hide();
	}
	if ( options['hide_right_fan_friend'] == true ) {
		$('div[name="app9"]').hide();
	}
	if ( options['hide_right_group_friend'] == true ) {
		$('div[name="app10003"]').hide();
	}
	if ( options['hide_right_feedback_friend'] == true ) {
		$('.MIB_dot').parent().parent().hide();
	}
	if ( options['hide_right_report_friend'] == true ) {
		$(".rightTxtList").hide();
	}
	if ( options['hide_main_relation_friend'] == true ) {
		$(".MIB_btn_inter.lf").hide();
	}
	if ( options['hide_main_handle_friend'] == true ) {
		$(".more_handle").hide();
	}
	if ( options['hide_main_tab_friend'] == true ) {
		$(".nfTagB.nfTagOff").hide();
	}
	if ( options['hide_main_filter_friend'] == true ) {
		$(".nfBox").hide();
	}
	if ( options['hide_main_micro_friend'] == true ) {
		$(".feed_att.MIB_linkbl.MIB_txtbl").hide();
	}
	
	if ( options['hide_other_nav_friend'] == true ) {
		$(".cmn_nav.cn_away").hide();
	}
	if ( options['hide_other_ads_friend'] == true ) {
		$("#ads_bottom_1").hide();
	}
	if ( options['hide_other_bot_friend'] == true ) {
		$("#bottomborder").hide();
	}
}

function searchpage(options) {
	if ( options['hide_top_search'] == true ) {
		$(".tsina_gnbarea").hide();
	} else {
		if ( options['hide_top_left_search'] == true ) {
			$(".gnb_l").hide();
		}
		if ( options['hide_top_right_search'] == true ) {
			$(".gnb_r").hide();
		}
	}
	if ( options['hide_search_logo'] == true ) {
		$(".newlogo").hide();
	}
	if ( options['hide_search_bottom'] == true ) {
		$("#bottomborder").hide();
	}
	if ( options['hide_search_hot'] == true ) {
		t = setTimeout(function(){$(".srch_hotWrap").hide();}, 2 * 1000 );
	}
	if ( options['hide_search_order'] == true ) {
		$(".tab_top_new").hide();
	}
	if ( options['hide_search_topic'] == true ) {
		$(".srch_link").hide();
	}
	if ( options['hide_search_toptitle'] == true ) {
		$("#list_topic_box").hide();
	}
	if ( options['hide_search_top10'] == true ) {
		$(".top10.hotTipS").hide();
	}
	if ( options['hide_search_related'] == true ) {
		$(".top10.hotTipS").next().hide();
		$(".related_topic").hide();
	}
	if ( options['hide_search_feedback'] == true ) {
		$(".sdbar_opt").hide();
	}
}

function doit(options) {
	/*
		test
	*/
	var html = $(".W_main_r").html();
	var add = "<div id='kong_close' style='position:absolute; right:10px; top: 10px;'><img id='kong_close_img' /></div>";
	$(".W_main_r").html( html + add );
	var imgURL = chrome.extension.getURL("img/icon/close.png");
	$("#kong_close_img").attr("src", imgURL);
	var kong_close_div = $("#kong_close");
	$(kong_close_div).hover(function() {
		$(kong_close_div).parent().addClass("kong_parent_hover");
	}, function() {
		$(kong_close_div).parent().removeClass("kong_parent_hover");
	});
	$(kong_close_div).hover(function() {
		$(kong_close_div).parent().addClass("kong_parent_hover");
	}, function() {
		$(kong_close_div).parent().removeClass("kong_parent_hover");
	});
	$(kong_close_div).click(function() {
		$(kong_close_div).parent().hide();
	});
	
	/*
		test
	*/
	checkUpdate();
	if ( options['enable_all'] == false ) return;
	
	if ( $(document).attr('title').match("我的首页") || $(document).attr('title').match("我的首頁") ){
		$("<style type='text/css'> .kong_button_original { color:" + $('.MIB_linkbl > a').css("color") + "; } </style>").appendTo("head");
		topnav(options);
		rightside(options);
		mainboard(options);
		others(options);
		filter(options);
		notification(options);
	}
	else if ( $(document).attr('title').match("微博搜索") || $(document).attr('title').match("微博搜尋") ){
		searchpage(options)
	}
	else {
		if ( options['enable_friend'] == false ) return;
		friendpage(options);
	}
}

function getTheme( theme )
{
	switch (theme) {
		case 'grey':
		return '_grey';
		case 'blue':
		return '_blue';
		case 'original':
		return '_original';
		default:
		return '_original';
	}
}

chrome.extension.sendRequest({'action' : 'getOptions'}, doit);
