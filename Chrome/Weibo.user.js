// WeiboKong
// version 0.9.5
// 2011-06-21
//
// ==UserScript==
// @name          WeiboKong
// @namespace     
// @description   
// @include       http://weibo.com/*
// @include		  http://t.sina.com.cn/*
// ==/UserScript==

var VERSION = "0.9.5";
var UPDATE = "*压缩了扩展的体积<br>+过滤关键字<br>+新微博桌面提醒<br>";
var DATE = "2011-06-21"

function topnav(options) {
	var allDivs, thisDiv;
	if ( options['hide_top'] == true ) {
		allDivs = document.evaluate(
			"//div[@class='tsina_gnbarea']",
			document,
			null,
			XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
			null);
		for (var i = 0; i < allDivs.snapshotLength; i++) {
			thisDiv = allDivs.snapshotItem(i);
			thisDiv.parentNode.removeChild(thisDiv);
		}
	} else {
		if ( options['hide_top_left'] ) {
			allDivs = document.evaluate(
				"//ul[@class='gnb_l']",
				document,
				null,
				XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
				null);
			for (var i = 0; i < allDivs.snapshotLength; i++) {
				thisDiv = allDivs.snapshotItem(i);
				thisDiv.parentNode.removeChild(thisDiv);
			}
		}
		if ( options['hide_top_right'] ) {
			allDivs = document.evaluate(
				"//ul[@class='gnb_r']",
				document,
				null,
				XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
				null);
			for (var i = 0; i < allDivs.snapshotLength; i++) {
				thisDiv = allDivs.snapshotItem(i);
				thisDiv.parentNode.removeChild(thisDiv);
			}
		}
	}
}

function secondnav(options) {
	var allDivs, thisDiv;
	if ( options['hide_secondnav'] == true ) {
		allDivs = document.evaluate(
			"//div[@class='head_menu']",
			document,
			null,
			XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
			null);
		for (var i = 0; i < allDivs.snapshotLength; i++) {
			thisDiv = allDivs.snapshotItem(i);
			thisDiv.parentNode.removeChild(thisDiv);
		}
		allDivs = document.evaluate(
			"//div[@class='newlogo festival']",
			document,
			null,
			XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
			null);
		for (var i = 0; i < allDivs.snapshotLength; i++) {
			thisDiv = allDivs.snapshotItem(i);
			thisDiv.parentNode.removeChild(thisDiv);
		}
	} else {
		if ( options['hide_secondnav_logo'] == true ) {
			allDivs = document.evaluate(
				"//div[@class='newlogo festival']",
				document,
				null,
				XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
				null);
			for (var i = 0; i < allDivs.snapshotLength; i++) {
				thisDiv = allDivs.snapshotItem(i);
				thisDiv.parentNode.removeChild(thisDiv);
			}
		}
		if ( options['hide_secondnav_nav'] == true ) {
			allDivs = document.evaluate(
				"//div[@class='head_menu']",
				document,
				null,
				XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
				null);
			for (var i = 0; i < allDivs.snapshotLength; i++) {
				thisDiv = allDivs.snapshotItem(i);
				thisDiv.parentNode.removeChild(thisDiv);
			}
		}
	}
}

function rightside(options) {
	var allDivs, thisDiv;
	if ( options['hide_right'] == true ) {
		allDivs = document.evaluate(
			"//div[@class='mainR MIB_200 MIB_txtar MIB_linkar']",
			document,
			null,
			XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
			null);
		for (var i = 0; i < allDivs.snapshotLength; i++) {
			thisDiv = allDivs.snapshotItem(i);
			thisDiv.parentNode.removeChild(thisDiv);
		}
		allDivs = document.evaluate(
			"//div[@class='MIB_mblogbgr ']",
			document,
			null,
			XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
			null);
		for (var i = 0; i < allDivs.snapshotLength; i++) {
			thisDiv = allDivs.snapshotItem(i);
			thisDiv.style.width='600px';
		}
		
	}
	else {
		if ( options['hide_right_info'] == true ) {
			allDivs = document.evaluate(
				"//div[@class='userinfo']",
				document,
				null,
				XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
				null);
			for (var i = 0; i < allDivs.snapshotLength; i++) {
				thisDiv = allDivs.snapshotItem(i);
				thisDiv.parentNode.removeChild(thisDiv);
			}
		}
		if ( options['hide_right_app'] == true ) {
			allDivs = document.evaluate(
				"//div[@class='widgetIntroduce widgetH2']",
				document,
				null,
				XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
				null);
			for (var i = 0; i < allDivs.snapshotLength; i++) {
				thisDiv = allDivs.snapshotItem(i);
				thisDiv.parentNode.removeChild(thisDiv);
			}
		}
		if ( options['hide_right_nav'] == true ) {
			allDivs = document.evaluate(
				"//div[@class='right_nav']",
				document,
				null,
				XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
				null);
			for (var i = 0; i < allDivs.snapshotLength; i++) {
				thisDiv = allDivs.snapshotItem(i);
				thisDiv.parentNode.removeChild(thisDiv);
			}
		}
		if ( options['hide_right_ads'] == true ) {
			thisDiv = document.getElementById('ads_35');
			thisDiv.parentNode.removeChild(thisDiv);
			thisDiv = document.getElementById('ads_36');
			thisDiv.parentNode.removeChild(thisDiv);
			thisDiv = document.getElementById('ads_37');
			thisDiv.parentNode.removeChild(thisDiv);
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
		if ( options['hide_right_cf'] == true ) {
			allDivs = document.evaluate(
				"//div[@class='f_pro']",
				document,
				null,
				XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
				null);
			for (var i = 0; i < allDivs.snapshotLength; i++) {
				thisDiv = allDivs.snapshotItem(i);
				thisDiv.parentNode.removeChild(thisDiv);
			}
		}
		if ( options['hide_right_report'] == true ) {
			allDivs = document.evaluate(
				"//div[@class='rightTxtList']",
				document,
				null,
				XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
				null);
			for (var i = 0; i < allDivs.snapshotLength; i++) {
				thisDiv = allDivs.snapshotItem(i);
				thisDiv.parentNode.removeChild(thisDiv);
			}
		}
	}
}

function mainboard(options) {
	if ( options['hide_main_post'] == true ) {
		allDivs = document.evaluate(
			"//div[@class='MIB_mbloghead']",
			document,
			null,
			XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
			null);
		for (var i = 0; i < allDivs.snapshotLength; i++) {
			thisDiv = allDivs.snapshotItem(i);
			thisDiv.parentNode.removeChild(thisDiv);
		}
	}
	if ( options['hide_main_sort'] == true ) {
		thisDiv = document.getElementById('MIB_newFilter');
		thisDiv.parentNode.removeChild(thisDiv);
	}
	if ( options['hide_main_micro'] == true ) {
		allDivs = document.evaluate(
			"//div[@class='feed_att MIB_linkbl MIB_txtbl']",
			document,
			null,
			XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
			null);
		for (var i = 0; i < allDivs.snapshotLength; i++) {
			thisDiv = allDivs.snapshotItem(i);
			thisDiv.parentNode.removeChild(thisDiv);
		}
	}
	if ( options['hide_main_forward'] == true ) {
		allDivs = document.evaluate(
			"//p[@class='sms']",
			document,
			null,
			XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
			null);
		for (var i = 0; i < allDivs.snapshotLength; i++) {
			thisDiv = allDivs.snapshotItem(i);
			var html = thisDiv.innerHTML;
			var pos = getSlash(html);
			if ( pos == -1 ) continue;
			var mine = html.substring(0, pos);
			var theirs = html.substring(pos + 2, html.length);
			thisDiv.innerHTML = mine;
			thisDiv.innerHTML += "<a id=\"kong_display_" + i + "\" href=\"\" class=\"kong_expand\" onClick=\"document.getElementById('kong_foward_" + i + "').style.display = 'block'; document.getElementById('kong_display_" + i + "').style.display = 'none'; return false;\">展开</a>"
			thisDiv.innerHTML += "<span id= \"kong_foward_" + i + "\" style=\" display: none; margin-left: 40px; \"><hr class=\"kong_hr\">" + theirs + "</span>"
		}
	}
}

function others(options) {
	if ( options['hide_other_nav'] == true ) {
		allDivs = document.evaluate(
			"//div[@class='cmn_nav cn_away']",
			document,
			null,
			XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
			null);
		for (var i = 0; i < allDivs.snapshotLength; i++) {
			thisDiv = allDivs.snapshotItem(i);
			thisDiv.parentNode.removeChild(thisDiv);
		}
	}
	
	if ( options['hide_other_ads'] == true ) {
		thisDiv = document.getElementById('ads_bottom_1');
		thisDiv.parentNode.removeChild(thisDiv);
	}
	
	if ( options['hide_other_bot'] == true ) {
		thisDiv = document.getElementById('bottomborder');
		thisDiv.parentNode.removeChild(thisDiv);
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
	t = setTimeout(function(){checkNew(notified,options);}, options['notification_intervals'] * 1000 );
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

function getSlash(html) {
	var i = 0;
	var ina = false;
	for ( i = 0;i < html.length;i++ ) {
		if ( html[i] == '<' ) ina = true;
		if (html[i] == '<' && html[i+1] == '/' ) ina = false;
		if ( ina == true ) continue;
		if ( html[i] == '/' && html[i + 1] == '/' ) return i;
	}
	return -1;
}

chrome.extension.sendRequest({'action' : 'getOptions'}, doit);