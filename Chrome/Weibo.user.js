// WeiboKong
// version 0.9.7
// 2011-07-09
//
// ==UserScript==
// @name          WeiboKong
// @namespace     
// @description   
// @include       http://weibo.com/*
// @include		  http://t.sina.com.cn/*
// ==/UserScript==

var VERSION = chrome.i18n.getMessage("appVersion");
var UPDATE = "+隐藏右边栏人气用户<br>";
var DATE = "2011-07-09"

function topnav(options) {
	if ( options['hide_top'] == true ) {
		$(".tsina_gnbarea").hide();
	} else {
		if ( options['hide_top_left'] ) {
			$(".gnb_l").hide();
		}
		if ( options['hide_top_right'] ) {
			$(".gnb_r").hide();
		}
	}
}

function secondnav(options) {
	if ( options['hide_secondnav'] == true ) {
		$(".head_menu").hide();
		$(".newlogo.festival").hide();
	} else {
		if ( options['hide_secondnav_logo'] == true ) {
			$(".newlogo.festival").hide();
		}
		if ( options['hide_secondnav_nav'] == true ) {
			$(".head_menu").hide();
		}
	}
}

function rightside(options) {
	if ( options['hide_right'] == true ) {
		$(".mainR.MIB_200.MIB_txtar.MIB_linkar").hide();
		$(".MIB_mblogbgr ").css("width", "600px");	
	}
	else {
		if ( options['hide_right_widgets'] ) {
			$('div[name^="app"]').hide();
		}
		if ( options['hide_right_ads'] == true ) {
			$("#ads_35").hide();
			$("#ads_36").hide();
			$("#ads_37").hide();
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
	if ( options['enable_filter_keyword_origin'] == true ) {
		if ( options['filter_keyword'] != "" ) {
			allDivs = document.evaluate(
				"//p[@class='sms']",
				document,
				null,
				XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
				null);
			for (var i = 0; i < allDivs.snapshotLength; i++) {
				thisDiv = allDivs.snapshotItem(i);
				var keywords = options['filter_keyword'].toString().split(",");
				var html = thisDiv.innerHTML;
				
				for (var k in keywords) {
					if ( html.search( keywords[k] ) != -1 ) {
						thisDiv = thisDiv.parentNode;
						thisDiv = thisDiv.parentNode;
						thisDiv.parentNode.removeChild(thisDiv);
						break;
					}
				}
				
			}
		}
	}
	if ( options['enable_filter_keyword_forward'] == true ) {
		if ( options['filter_keyword'] != "" ) {
			allDivs = document.evaluate(
				"//div[@class='MIB_assign']",
				document,
				null,
				XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
				null);
			for (var i = 0; i < allDivs.snapshotLength; i++) {
				thisDiv = allDivs.snapshotItem(i);
				var keywords = options['filter_keyword'].toString().split(",");
				var html = thisDiv.innerHTML;
				
				for (var k in keywords) {
					if ( html.search( keywords[k] ) != -1 ) {
						thisDiv = thisDiv.parentNode;
						thisDiv = thisDiv.parentNode;
						thisDiv.parentNode.removeChild(thisDiv);
						break;
					}
				}
				
			}
		}
	}
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

function checkNew(notified1,notified2,notified3,notified4,options) {
	var flag = false;
	if ( options['notification_post'] == true ) {
		allDivs = document.evaluate(
			"//a[@class='newMblog_ts1']",
			document,
			null,
			XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
			null);
		for (var i = 0; i < allDivs.snapshotLength; i++) {
			thisDiv = allDivs.snapshotItem(i);
			if ( thisDiv.style.display != "none" ) {
				flag = true;
				if ( notified1 == false ) {
					chrome.extension.sendRequest({'action' : 'notify', 'type' : 'post'}, function(){});
					notified1 = true;
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
	
	
	var intervals = options['notification_intervals'];
	if ( intervals < 10 ) intervals = 10;
	t = setTimeout(function(){checkNew(notified1,notified2,notified3,notified4,options);}, intervals * 1000 );
}

function notification(options) {
	if ( options['enable_notification'] == false ) {
		return;
	}
	checkNew(false,false,false,false,options);
}

function doit(options) {
	checkUpdate();
	
	$("<style type='text/css'> .kong_button_original { color:" + $('.MIB_linkbl > a').css("color") + "; } </style>").appendTo("head");
	//Enable all the functions
	if ( options['enable_all'] == false ) return;
	
	topnav(options);
	secondnav(options);
	rightside(options);
	mainboard(options);
	others(options);
	filter(options);
	notification(options);
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