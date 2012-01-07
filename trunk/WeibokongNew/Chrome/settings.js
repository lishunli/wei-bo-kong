	window.addEvent("domready", function () {
    new FancySettings.initWithManifest(function (settings) {
	
		document.getElementById("settings-label").innerHTML = "Œ¢≤©–¬øÿ…Ë÷√";
		document.getElementById("search").placeholder = "‘⁄¥À ‰»Î\"New\" ‘ ‘";
		document.getElementById("search-label").innerHTML = "À—À˜";
		/*
			Top
		*/
		var me = settings.manifest.hide_top.label;
		me.addEventListener("mouseover", function(){hover("hide_top");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_top_logo.label;
		me.addEventListener("mouseover", function(){hover("hide_top_logo");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_top_left.label;
		me.addEventListener("mouseover", function(){hover("hide_top_left");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_top_search.label;
		me.addEventListener("mouseover", function(){hover("hide_top_search");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_top_right.label;
		me.addEventListener("mouseover", function(){hover("hide_top_right");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		/*
			Left
		*/
		me = settings.manifest.hide_left_info.label;
		me.addEventListener("mouseover", function(){hover("hide_left_info");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_left_nav.label;
		me.addEventListener("mouseover", function(){hover("hide_left_nav");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_left_link.label;
		me.addEventListener("mouseover", function(){hover("hide_left_link");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_left_game.label;
		me.addEventListener("mouseover", function(){hover("hide_left_game");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_left_app.label;
		me.addEventListener("mouseover", function(){hover("hide_left_app");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		
		/*
			Right
		*/
		me = settings.manifest.hide_right_game.label;
		me.addEventListener("mouseover", function(){hover("hide_right_game");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_mood.label;
		me.addEventListener("mouseover", function(){hover("hide_right_mood");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_ads.label;
		me.addEventListener("mouseover", function(){hover("hide_right_ads");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_tips.label;
		me.addEventListener("mouseover", function(){hover("hide_right_tips");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_info.label;
		me.addEventListener("mouseover", function(){hover("hide_right_info");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_medals.label;
		me.addEventListener("mouseover", function(){hover("hide_right_medals");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_nav.label;
		me.addEventListener("mouseover", function(){hover("hide_right_nav");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_topic.label;
		me.addEventListener("mouseover", function(){hover("hide_right_topic");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_popuser.label;
		me.addEventListener("mouseover", function(){hover("hide_right_popuser");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_interestgroup.label;
		me.addEventListener("mouseover", function(){hover("hide_right_interestgroup");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_allinone.label;
		me.addEventListener("mouseover", function(){hover("hide_right_allinone");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_alltopic.label;
		me.addEventListener("mouseover", function(){hover("hide_right_alltopic");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_notice.label;
		me.addEventListener("mouseover", function(){hover("hide_right_notice");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_help.label;
		me.addEventListener("mouseover", function(){hover("hide_right_help");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_feedback.label;
		me.addEventListener("mouseover", function(){hover("hide_right_feedback");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		
		/*
			Main
		*/
		me = settings.manifest.enlarge_main_post.label;
		me.addEventListener("mouseover", function(){hover("enlarge_main_post");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hover_main_img.label;
		me.addEventListener("mouseover", function(){hover("hover_main_img");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_main_post.label;
		me.addEventListener("mouseover", function(){hover("hide_main_post");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_main_title.label;
		me.addEventListener("mouseover", function(){hover("hide_main_title");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_main_tips.label;
		me.addEventListener("mouseover", function(){hover("hide_main_tips");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_main_nav.label;
		me.addEventListener("mouseover", function(){hover("hide_main_nav");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_main_micro.label;
		me.addEventListener("mouseover", function(){hover("hide_main_micro");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		
		/*
			Other
		*/
		me = settings.manifest.hide_other_ads.label;
		me.addEventListener("mouseover", function(){hover("hide_other_ads");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_other_bot.label;
		me.addEventListener("mouseover", function(){hover("hide_other_bot");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		
		/*
			Friend
		*/
		/*
			Top
		*/
		var me = settings.manifest.hide_top_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_top");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_top_logo_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_top_logo");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_top_left_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_top_left");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_top_search_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_top_search");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_top_right_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_top_right");}, false);
		me.addEventListener("mouseout", unhover, false);

		/*
			Right
		*/
		me = settings.manifest.hide_right_info_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_right_info_friend");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_medal_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_right_medal_friend");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_follow_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_right_follow_friend");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_bothfollow_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_right_bothfollow_friend");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_tag_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_right_tag_friend");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_topic_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_right_topic_friend");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_fan_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_right_fan_friend");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_feedback_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_right_feedback_friend");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_report_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_right_report_friend");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		/*
			Main
		*/
		me = settings.manifest.hide_main_relation_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_main_relation_friend");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_main_handle_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_main_handle_friend");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_main_album_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_main_album_friend");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_main_tab_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_main_tab_friend");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_main_filter_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_main_filter_friend");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_main_micro_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_main_micro");}, false);
		me.addEventListener("mouseout", unhover, false);
	
		/*
			Other
		*/
		me = settings.manifest.hide_other_bot_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_other_bot");}, false);
		me.addEventListener("mouseout", unhover, false);

    });

});


function hover(img) {
	var hover = document.getElementById("hover");
	hover.style.position = "fixed";
	hover.style.top = "55px";
	hover.style.left = "550px";
	hover.innerHTML = "<img src=img/" + img + ".jpg />";
	hover.style.display = "block";
}

function unhover() {
	var hover = document.getElementById("hover");
	hover.style.display = "none";
}