// WeiboKong
// version 0.9.6
// 2011-07-02
//
// ==UserScript==
// @name          WeiboKong
// @namespace     
// @description   
// @include       http://weibo.com/*
// @include		  http://t.sina.com.cn/*
// ==/UserScript==

var VERSION = chrome.i18n.getMessage("appVersion");
var UPDATE = "+隐藏主面板推荐区<br>+隐藏右侧栏我加入的群<br>*用jQuery重写精简了很多代码<br>+新的图片浏览模式(COOL)<br>+为微博控按钮添加特别样式";
var DATE = "2011-07-02"

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
		if ( options['hide_right_info'] == true ) {
			$(".userinfo").hide();
		}
		if ( options['hide_right_app'] == true ) {
			$(".widgetIntroduce.widgetH2").hide();
		}
		if ( options['hide_right_nav'] == true ) {
			$(".right_nav").hide();
		}
		if ( options['hide_right_ads'] == true ) {
			$("#ads_35").hide();
			$("#ads_36").hide();
			$("#ads_37").hide();
		}
		if ( options['hide_right_topic'] == true ) {
			allDivs = document.getElementsByName('app4');
			thisDiv = allDivs[0];
			thisDiv.parentNode.removeChild(thisDiv);
		}
		if ( options['hide_right_people'] == true ) {
			allDivs = document.getElementsByName('app20');
			thisDiv = allDivs[0];
			thisDiv.parentNode.removeChild(thisDiv);
		}
		if ( options['hide_right_alltopic'] == true ) {
			allDivs = document.getElementsByName('app5');
			thisDiv = allDivs[0];
			thisDiv.parentNode.removeChild(thisDiv);
		}
		
		if ( options['hide_right_group'] == true ) {
			allDivs = document.getElementsByName('app10003');
			thisDiv = allDivs[0];
			thisDiv.parentNode.removeChild(thisDiv);
		}
		
		if ( options['hide_right_cf'] == true ) {
			$(".f_pro").hide();
		}
		if ( options['hide_right_report'] == true ) {
			$(".rightTxtList").hide();
		}
	}
}

function mainboard(options) {
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
					"<div id=\"kong_display_" + index + "\" class=\"kong_button\" >展开</div><span id= \"kong_foward_" + index 
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
					$(this).addClass("kong_button_hover");
					if ( keep == false ) {
						$(this).html("保持展开");
					}
					else {
						$(this).html("隐藏");
					}
					$("#kong_foward_"+index).show();
				},function(){
					$(this).removeClass("kong_button_hover");
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
			var bmiddle = thumbnail_url.replace("thumbnail", "bmiddle")
			var large = thumbnail_url.replace("thumbnail", "large");
			$(this).parent().append("<span><div class='thumbnail kong_button_left' href='javascript:void(0);'>&nbsp;&nbsp;显示缩略图&nbsp;&nbsp;</div><div class='bmiddle kong_button_middle' href='javascript:void(0);'>&nbsp;&nbsp;&nbsp;&nbsp;显示中图&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='kong_button_right'>新窗口打开大图</div></span><br><br><img style='display:none' />");
			var keep = false;
			$(this).parent().children("span").children(".kong_button_right").click(function() {
				window.open(large,"WeiboKong");
			});
			$(this).parent().children("span").children(".thumbnail").hover(function() {
				$(this).addClass("kong_button_hover");
				$(this).parent().parent().children("img").attr("src", thumbnail_url);
				$(this).parent().parent().children("img").show();
					
				if ( keep == false ) {
					$(this).html("保持图片展开");
				}
				else {
					$(this).html("&nbsp;&nbsp;&nbsp;&nbsp;隐藏图片&nbsp;&nbsp;&nbsp;&nbsp;");
				}
			}, function() {
				$(this).removeClass("kong_button_hover");
				if ( keep == false ) { 
					$(this).html("&nbsp;&nbsp;显示缩略图&nbsp;&nbsp;");
					$(this).parent().parent().children("img").hide();
				}
			});
			
			$(this).parent().children("span").children(".bmiddle").hover(function() {
				$(this).addClass("kong_button_hover");
				$(this).parent().parent().children("img").attr("src", bmiddle);
				$(this).parent().parent().children("img").show();
				if ( keep == false ) {
					$(this).html("保持图片展开");
				}
				else {
					$(this).html("&nbsp;&nbsp;&nbsp;&nbsp;隐藏图片&nbsp;&nbsp;&nbsp;&nbsp;");
				}
			}, function() {
				$(this).removeClass("kong_button_hover");
				if ( keep == false ) { 
					$(this).html("&nbsp;&nbsp;&nbsp;&nbsp;显示中图&nbsp;&nbsp;&nbsp;&nbsp;");
					$(this).parent().parent().children("img").hide();
				}
			});
			
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
		var timer = setTimeout("document.getElementById('kong_update').style.display = 'none';", 10000)
	}
}

function checkNew(notified,options) {
	if ( options['notification_post'] == true ) {
		var flag = false;
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
				if ( notified == false ) {
					chrome.extension.sendRequest({'action' : 'notify'}, function(){});
					notified = true;
				}

			}
		}
		if ( flag == false ) notified = false;
	}
	var intervals = options['notification_intervals'];
	if ( intervals < 10 ) intervals = 10;
	t = setTimeout(function(){checkNew(notified,options);}, intervals * 1000 );
}

function notification(options) {
	if ( options['enable_notification'] == false ) {
		return;
	}
	checkNew(false,options);
}

function doit(options) {
	checkUpdate();
	
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

chrome.extension.sendRequest({'action' : 'getOptions'}, doit);