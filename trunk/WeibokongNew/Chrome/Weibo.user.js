// WeiboKongNew
// version 2.0.0
// 2011-11-09
//
// ==UserScript==
// @name          WeiboKongNew
// @namespace     
// @description   
// @include       http://weibo.com/*
// @include		  http://www.weibo.com/*
// @include		  http://t.sina.com.cn/*
// ==/UserScript==

var VERSION = chrome.i18n.getMessage("appVersion");
var UPDATE = chrome.i18n.getMessage("appChangelog");
var DATE = chrome.i18n.getMessage("appReleaseDate");

function topnav(options) {
	if ( options['hide_top'] == true ) {
		$(".global_header").hide();
		$(".layer_message_box").hide();
	} else {
		if ( options['hide_top_logo'] == true ) {
			$(".logo").hide();
		}
		if ( options['hide_top_left'] == true ) {
			$(".logo").next().hide();
		}
		if ( options['hide_top_search'] == true ) {
			$(".search").hide();
		}
		if ( options['hide_top_right'] == true ) {
			$(".right").hide();
		}
		if ( options['hide_top_tips'] == true ) {
			$(".layer_message_box").hide();
		}
	}
}

function rightside(options) {
	if ( options['hide_right'] == true ) {
		$(".W_main_r").hide();
		$(".W_main_narrow_bg.clearfix ").css("width", "600px");	
	}
	else {
		if ( options['hide_right_widgets'] ) {
			$('div[name^="app"]').hide();
		}
		if ( options['hide_right_ads'] == true ) {
			$("#ads_35").hide();
			$("#ads_47").hide();
			$("#ads_37").hide();
			$("#ads_36").hide();
		}
		if ( options['hide_right_tips'] == true ) {
			$("#pl_content_userTips").hide();
		}
		if ( options['hide_right_info'] == true ) {
			$("#pl_content_liteFacePersonInfo").hide();
		}
		if ( options['hide_right_medals'] == true ) {
			$("#pl_content_medal").hide();
		}
		if ( options['hide_right_nav'] == true ) {
			$("#pl_nav_outlookBar").hide();
		}
		if ( options['hide_right_topic'] == true ) {
			$('#pl_content_promotetopic').hide();
		}
		if ( options['hide_right_people'] == true ) {
			$('#pl_content_homeInterest').hide();
		}
		if ( options['hide_right_popuser'] == true ) {
			$('#pl_relation_recommendPopularUsers').hide();
		}
		if ( options['hide_right_allinone'] == true ) {
			$('#pl_content_allInOne').hide();
		}
		
		if ( options['hide_right_alltopic'] == true ) {
			$('#pl_content_topic').hide();
		}
		if ( options['hide_right_notice'] == true ) {
			$("#pl_common_reportentry").hide();
			$("#pl_common_noticeboard").hide();
		}
		if ( options['hide_right_help'] == true ) {
			$("#pl_common_help").hide();
		}
		
		if ( options['hide_right_feedback'] == true ) {
			$("#pl_common_feedback").hide();
		}
	}
}

function mainboard(options) {
	//var theme = "kong_button" + getTheme( options['global_theme'] );
	//var theme_hover = "kong_button_hover" + getTheme( options['global_theme'] );
	if ( options['hide_main_post'] == true ) {
		$("#pl_content_publisherTop").hide();
	}
	if ( options['hide_main_recommend'] == true ) {
		$(".title").hide();
	}
	if ( options['hide_main_tips'] == true ) {
		$("#pl_content_pullylist").hide();
	}
	if ( options['hide_main_nav'] == true ) {
		$('div[node-type="feed_nav"]').hide();
	}
	
	if ( options['hide_main_micro'] == true ) {
		$(".info.W_linkb.W_textb").hide();
	}
	/*
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
	
	*/
	
}

function others(options) {
	if ( options['hide_other_ads'] == true ) {
		$("#ads_bottom_1").hide();
	}
	if ( options['hide_other_bot'] == true ) {
		$(".global_footer.global_footer_narrow").hide();
	}
}

function filter(options) {
	if ( options['enable_filter'] == true ) {
		if ( options['filter'] != "" ) {
			var names = options['filter'].toString().split(",");
			for (var i in names) {
				$('a[title=\"' + names[i] + '\"]').parent().parent().hide();
			}
		}
	}
	
	if ( options['enable_filter_keyword_origin'] == true ) {
		if ( options['filter_keyword'] != "" ) {
			var keywords = options['filter_keyword'].toString().split(",");
			$("p[node-type='feed_list_content']").each(function (index){
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
			$("dt[node-type='feed_list_forwardContent']").each(function (index){
				var html = $(this).html();
				for (var k in keywords) {
					if ( html.search( keywords[k] ) != -1 ) {
						$(this).parent().parent().parent().hide();
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
/*
function checkNew(notified1,notified2,notified3,notified4,notified5,options) {
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
*/
function friendpage(options) {
	if ( options['hide_top_friend'] == true ) {
		$(".global_header").hide();
		$(".layer_message_box").hide();
	} else {
		if ( options['hide_top_logo_friend'] == true ) {
			$(".logo").hide();
		}
		if ( options['hide_top_left_friend'] == true ) {
			$(".logo").next().hide();
		}
		if ( options['hide_top_search_friend'] == true ) {
			$(".search").hide();
		}
		if ( options['hide_top_right_friend'] == true ) {
			$(".right").hide();
		}
		if ( options['hide_top_tips_friend'] == true ) {
			$(".layer_message_box").hide();
		}
	}
	
	if ( options['hide_right_info_friend'] == true ) {
		$("#pl_content_litePersonInfo").hide();
	}
	if ( options['hide_right_medal_friend'] == true ) {
		$("#pl_content_medal").hide();
	}
	if ( options['hide_right_follow_friend'] == true ) {
		$('#pl_relation_recommendAttUsers').hide();
	}
	if ( options['hide_right_bothfollow_friend'] == true ) {
		$('#pl_content_chainFollowers').hide();
	}
	if ( options['hide_right_same_friend'] == true ) {
		$('#pl_content_sameFriends').hide();
	}
	if ( options['hide_right_userinfo_friend'] == true ) {
		$('#pl_content_userInfo').hide();
	}
	
	if ( options['hide_right_tag_friend'] == true ) {
		$('#pl_content_hisTags').hide();
	}
	if ( options['hide_right_topic_friend'] == true ) {
		$('#pl_content_topic').hide();
	}
	if ( options['hide_right_fan_friend'] == true ) {
		$('#pl_content_hisFans').hide();
	}
	if ( options['hide_right_feedback_friend'] == true ) {
		$('#pl_common_feedback').hide();
	}
	if ( options['hide_right_report_friend'] == true ) {
		$("#pl_content_hisOperationPlate").hide();
	}
	if ( options['hide_main_relation_friend'] == true ) {
		$(".handle_btn").hide();
	}
	if ( options['hide_main_handle_friend'] == true ) {
		$(".handle_more").hide();
	}
	if ( options['hide_main_album_friend'] == true ) {
		$("#pl_content_album").hide();
	}
	if ( options['hide_main_tab_friend'] == true ) {
		$(".nfTagB.clearfix").hide();
	}
	if ( options['hide_main_filter_friend'] == true ) {
		$(".newFilter.W_texta").hide();
	}
	if ( options['hide_main_micro_friend'] == true ) {
		$(".info.W_linkb.W_textb").hide();
	}
	if ( options['hide_other_bot_friend'] == true ) {
		$("#global_footer global_footer_narrow").hide();
	}
}
/*
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
*/
function doit(options) {
	checkUpdate();
	if ( options['enable_all'] == false ) return;
	
	if ( $(document).attr('title').match("我的首页") || $(document).attr('title').match("我的首頁") ||
		 $(document).attr('title').match("@我的微博") || $(document).attr('title').match("@我的微博") ||
		 $(document).attr('title').match("@我的评论") || $(document).attr('title').match("@我的評論") ||
		 $(document).attr('title').match("收到的评论") || $(document).attr('title').match("我的評論") ||
		 $(document).attr('title').match("发出的评论") || $(document).attr('title').match("我的評論") ||
		 $(document).attr('title').match("我的私信") || $(document).attr('title').match("我的私人訊息") ||
		 $(document).attr('title').match("我的收藏") || $(document).attr('title').match("我的收藏")
	){
		$("<style type='text/css'> .kong_button_original { color:" + $('.MIB_linkbl > a').css("color") + "; } </style>").appendTo("head");
		topnav(options);
		rightside(options);
		mainboard(options);
		others(options);
		filter(options);
		//notification(options);
	}
	else if ( $(document).attr('title').match("微博搜索") || $(document).attr('title').match("微博搜尋") ){
		//searchpage(options);
	}
	else {
		if ( options['enable_friend'] == false ) return;
		friendpage(options);
	}
}

/*
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
*/
chrome.extension.sendRequest({'action' : 'getOptions'}, doit);
