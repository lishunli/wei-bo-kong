// WeiboKongNew
// version 2.1.0
// 2012-03-25
//
// ==UserScript==
// @name          WeiboKongNew
// @namespace     
// @description   
// @include       http://weibo.com/*
// @include		  http://www.weibo.com/*
// ==/UserScript==


/*define global extension variables*/
var VERSION = chrome.i18n.getMessage("appVersion");
var UPDATE = chrome.i18n.getMessage("appChangelog");
var DATE = chrome.i18n.getMessage("appReleaseDate");


/* reading mode*/
function reading( options ) {
	if ( options["enable_reading_manual"] == true ) {
		$("body").append( "<div class=\"kong_reading_button\" ><a id=\"kong_reading_button\" href=\"\" style=\"color:white\" onClick=\"if (document.getElementById('kong_reading_button').innerHTML == '启用阅读模式'){document.getElementById('kong_mask').style.display='block'; document.getElementsByClassName('feed_lists')[0].className += ' kong_read'; document.getElementById('kong_reading_button').innerHTML = '退出阅读模式'; return false;}else{document.getElementById('kong_reading_button').innerHTML = '启用阅读模式'; document.getElementById('kong_mask').style.display='none'; document.getElementsByClassName('feed_lists')[0].className = 'feed_lists W_linka W_texta'; return false;}\">启用阅读模式</a><div>" );
		//$('ul[node-type="feedGroup"]').append("<li><a href=\"\" onClick=\"document.getElementById('kong_mask').style.display='block'; document.getElementsByClassName('feed_lists')[0].className += ' kong_read'; return false;\">启用阅读模式</a></li>");
	}
	if ( options["enable_reading_auto"] == true ) {
		$(".kong_mask").show();
		$(".feed_lists.W_linka.W_texta").addClass( "kong_read" );
	}
	if ( options["enable_reading_hotkey"] == true ) {
		$("body").keypress(function(event) {
			if ( $("*:focus").is("textarea") || $("*:focus").is("input") ){
				return;
			}
		  	if ( event.which == 114) {
		  		$(".kong_mask").show();
				$(".feed_lists.W_linka.W_texta").addClass( "kong_read" );
				if ( options["enable_reading_manual"] == true ) $("#kong_reading_button").html( "退出阅读模式" );
				/*var children = $('div[node-type="feed_list"]').children();
				children[0].className += " kong_current_item";
				$('body').scrollTop( children[0].offsetTop );*/
		  	}
		  	/*
		  	if ( event.which == 110) {
		  		if ( $('.kong_current_item').length == 0 ) {
		  			var children = $('div[node-type="feed_list"]').children();
		  			children[0].className += " kong_current_item";
					$('body').scrollTop( children[0].offsetTop );
		  		}
		  		$('.kong_current_item').addClass("kong_previous_item");
		  		$('.kong_current_item').next().addClass( "kong_current_item" );
		  		$(".kong_previous_item").removeClass( "kong_current_item" );
				$('body').scrollTop( $('.kong_current_item').offset().top - 20);
		  	}
		  	*/
		});
		$("body").keydown(function(event) {
			if ( $("*:focus").is("textarea") || $("*:focus").is("input") ){
				return;
			}
		  	if ( event.which == 27) {
		  		$(".kong_mask").hide();
				$(".feed_lists.W_linka.W_texta").removeClass( "kong_read" );
				if ( options["enable_reading_manual"] == true ) $("#kong_reading_button").html( "启用阅读模式" );
		  	}
		});
		
	}
}

/*operations for navigation bar on top*/
function topnav(options) {
	if ( options['hide_top'] == true ) {
		$("#pl_content_top").hide();
	} else {
		if ( options['hide_top_logo'] == true ) {
			$(".logo").hide();
		}
		if ( options['hide_top_left'] == true ) {
			$(".logo").next().hide();
			$(".search").css("margin-left", "150px");
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
	t = setTimeout(function(){topnav(options);}, 2000 );
}

/*operations for navigation bar on lelf, only avaiable for 体验版*/
function leftside(options) {
	if ( options['hide_left_info'] == true ) {
		$("#pl_leftNav_common div:first-child").hide();
	}
	if ( options['hide_left_nav'] == true ) {
		$("#pl_leftNav_common div:first-child").next().hide();
	}
	if ( options['hide_left_link'] == true ) {
		$("#pl_leftNav_common div:first-child").next().next().hide();
	}
	if ( options['hide_left_game'] == true ) {
		$("#pl_leftNav_game").hide();
	}
	if ( options['hide_left_app'] == true ) {
		$("#pl_leftNav_app").hide();
	}

}

/*operations for navigation bar on right*/
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
			$('div[ad-data]').hide();

		}
		if ( options['hide_right_tips'] == true ) {
			$("#pl_content_userTips").hide();
		}
		if ( options['hide_right_info'] == true ) {
			$("#pl_content_personInfo").hide();
		}
		if ( options['hide_right_mood'] == true ) {
			$("#pl_content_mood").hide();
		}
		if ( options['hide_right_medals'] == true ) {
			$("#pl_content_medal").hide();
		}
		if ( options['hide_right_nav'] == true ) {
			$("#pl_nav_outlookBar").hide();
		}
		if ( options['hide_right_game'] == true ) {
			$('#pl_common_fun').hide();
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
		
		if ( options['hide_right_interestgroup'] == true ) {
			$('#pl_common_thirdmodule_1005').hide();
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
	t = setTimeout(function(){rightside(options);}, 2000 );
}

/*popup images*/
function hoverimg()
{
	$(".bigcursor").each( function (){
		$(this).hover(function(){
			var x = event.clientX + document.body.scrollLeft;
			var y = event.clientY + document.body.scrollTop;
				
			$("#kong_hover_img").attr( "src", $(this).attr( "src" ).replace( "thumbnail", "bmiddle"  ) );
			$("#kong_hover_img").css( "top", y - 50 );
			$("#kong_hover_img").css( "left", x + 150 );
			$("#kong_hover_img").css( "position", "absolute" );
			$("#kong_hover_img").css( "border", "3px solid white" );
			$("#kong_hover_img").show();
		},function(){
			$("#kong_hover_img").hide();
		});
	});
	t = setTimeout(function(){hoverimg();}, 2000 );
}

function hover(img,x,y) {
	var hover = document.getElementById("hover");
	hover.style.position = "fixed";
	hover.style.top = x;
	hover.style.left = y;
	hover.innerHTML = "<img src=img/" + img + ".jpg />";
	hover.style.display = "block";
}

function unhover() {
	var hover = document.getElementById("hover");
	hover.style.display = "none";
}

/*operations for main contents*/
function mainboard(options) {
	//var theme = "kong_button" + getTheme( options['global_theme'] );
	//var theme_hover = "kong_button_hover" + getTheme( options['global_theme'] );
	if ( options['hover_main_img'] == true ) {
		hoverimg();
	}
	if ( options['enlarge_main_post'] == true ) {
		$('textarea[title=\"微博输入框"]').css( "height", "150px" );
	}
	if ( options['hide_main_post'] == true ) {
		$("#pl_content_publisherTop").hide();
	}
	if ( options['hide_main_title'] == true ) {
		$(".key.W_textb").hide();
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
	if ( options["enable_reading_indicator"] == true ) {
		reading_indicator();
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

function reading_indicator() {
	$('dl[action-type="feed_list_item"]').each( function (){
		$(this).hover(function(){
			$(this).addClass( "kong_current_item" );
		},function(){
			$(this).removeClass( "kong_current_item" );
		});
	});
	t = setTimeout(function(){reading_indicator();}, 2000 );
}

/*other operations*/
function others(options) {
	if ( options['hide_other_ads'] == true ) {
		$("#ads_bottom_1").hide();
	}
	if ( options['hide_other_bot'] == true ) {
		$(".global_footer.global_footer_narrow").hide();
		$(".global_footer").hide();
	}
}


/*filter functions*/
function filter(options) {
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

/* auto updater */
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

/* blink title */
function blink_info(msg) {
	var timeoutId = setInterval(function() {
        document.title = document.title == msg ? '【您有新消息】' : msg;
    }, 1000);
}

/* notification */
function checkNew(notified1,notified2,notified3,options) {
	var html = $("a[action-type='feed_list_newBar']").html();
	var flag = false;
	if ( html != null && html.indexOf("点击查看") != -1 ) {
		if ( options['notification_post'] == true ) {
			flag = true;
			if ( notified1 == false ) {
				chrome.extension.sendRequest({'action' : 'notify', 'type' : 'post'}, function(){});
				notified1 = true;
			}
		}
		if ( flag == false ) notified1 = false;
		if ( options['notification_post_title'] == true ) {
			blink_info("【新微博！】");
		}
	}

	html = $(".layer_message_box").html();
	if ( html != null ) {
		flag = false;
		if ( options['notification_comment'] == true && html.indexOf("查看评论") != -1 ) {
			flag = true;
			if ( notified2 == false ) {
				chrome.extension.sendRequest({'action' : 'notify', 'type' : 'comment'}, function(){});
				notified2 = true;
			}
		}
		if ( flag == false ) notified2 = false;
		flag = false;
		if ( options['notification_atme'] == true && html.indexOf("查看@我") != -1 ) {
			flag = true;
			if ( notified3 == false ) {
				chrome.extension.sendRequest({'action' : 'notify', 'type' : 'atme'}, function(){});
				notified3 = true;
			}
		}
		if ( flag == false ) notified3 = false;
		if ( options['notification_comment_title']  == true && html.indexOf("查看评论") != -1 ) {
			blink_info("【新评论！】");
		}
		if ( options['notification_atme_title']  == true && html.indexOf("查看@我") != -1 ) {
			blink_info("【新@提到我！】");
		}
	}
	//var intervals = options['notification_intervals'];
	//if ( intervals < 10 ) intervals = 10;
	var intervals = 10;
	t = setTimeout(function(){checkNew(notified1,notified2,notified3,options);}, intervals * 1000 );
}

function notification(options) {
	if ( options['enable_notification'] == false ) {
		return;
	}
	checkNew(false,false,false,options);
}

/* */
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
			$(".search").css("margin-left", "150px");
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
		$("<div><img id=\"kong_hover_img\" /></div>").appendTo("body");
		$("<div id=\"kong_mask\" class=\"kong_mask\">hello</div>").appendTo("body");
		reading( options );
		topnav(options);
		leftside(options);
		rightside(options);
		mainboard(options);
		others(options);
		filter(options);
		notification(options);
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

/*get settings*/
chrome.extension.sendRequest({'action' : 'getOptions'}, doit);