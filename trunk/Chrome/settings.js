window.addEvent("domready", function () {
    new FancySettings.initWithManifest(function (settings) {
	
		document.getElementById("settings-label").innerHTML = "Œ¢≤©øÿ…Ë÷√";
		document.getElementById("search").placeholder = "À—À˜…Ë÷√—°œÓ...";
		document.getElementById("search-label").innerHTML = "À—À˜";
		
		
		var me = settings.manifest.hide_top.label;
		me.addEventListener("mouseover", function(){hover("hide_top");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_top_left.label;
		me.addEventListener("mouseover", function(){hover("hide_top_left");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_top_right.label;
		me.addEventListener("mouseover", function(){hover("hide_top_right");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_top_tip.label;
		me.addEventListener("mouseover", function(){hover("hide_top_tip");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_secondnav.label;
		me.addEventListener("mouseover", function(){hover("hide_secondnav");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_secondnav_logo.label;
		me.addEventListener("mouseover", function(){hover("hide_secondnav_logo");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_secondnav_nav.label;
		me.addEventListener("mouseover", function(){hover("hide_secondnav_nav");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right.label;
		me.addEventListener("mouseover", function(){hover("hide_right");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_widgets.label;
		me.addEventListener("mouseover", function(){hover("hide_right_widgets");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_ads.label;
		me.addEventListener("mouseover", function(){hover("hide_right_ads");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_tip.label;
		me.addEventListener("mouseover", function(){hover("hide_right_tip");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_info.label;
		me.addEventListener("mouseover", function(){hover("hide_right_info");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_app.label;
		me.addEventListener("mouseover", function(){hover("hide_right_app");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_nav.label;
		me.addEventListener("mouseover", function(){hover("hide_right_nav");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_cf.label;
		me.addEventListener("mouseover", function(){hover("hide_right_cf");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_report.label;
		me.addEventListener("mouseover", function(){hover("hide_right_report");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_topic.label;
		me.addEventListener("mouseover", function(){hover("hide_right_topic");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_people.label;
		me.addEventListener("mouseover", function(){hover("hide_right_people");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_alltopic.label;
		me.addEventListener("mouseover", function(){hover("hide_right_alltopic");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_group.label;
		me.addEventListener("mouseover", function(){hover("hide_right_group");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_popuser.label;
		me.addEventListener("mouseover", function(){hover("hide_right_popuser");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_main_post.label;
		me.addEventListener("mouseover", function(){hover("hide_main_post");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_main_tips.label;
		me.addEventListener("mouseover", function(){hover("hide_main_tips");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_main_sort.label;
		me.addEventListener("mouseover", function(){hover("hide_main_sort");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_main_forward.label;
		me.addEventListener("mouseover", function(){hover("hide_main_forward");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_main_image.label;
		me.addEventListener("mouseover", function(){hover("hide_main_image");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_main_micro.label;
		me.addEventListener("mouseover", function(){hover("hide_main_micro");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_other_nav.label;
		me.addEventListener("mouseover", function(){hover("hide_other_nav");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_other_ads.label;
		me.addEventListener("mouseover", function(){hover("hide_other_ads");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_other_bot.label;
		me.addEventListener("mouseover", function(){hover("hide_other_bot");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_top_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_top");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_top_left_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_top_left");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_top_right_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_top_right");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_secondnav_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_secondnav");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_secondnav_logo_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_secondnav_logo");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_secondnav_nav_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_secondnav_nav");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_other_nav_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_other_nav");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_other_ads_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_other_ads");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_other_bot_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_other_bot");}, false);
		me.addEventListener("mouseout", unhover, false);
		
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
		
		me = settings.manifest.hide_right_profile_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_right_profile_friend");}, false);
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
		
		me = settings.manifest.hide_right_group_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_right_group_friend");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_feedback_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_right_feedback_friend");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_report_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_right_report_friend");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_main_relation_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_main_relation_friend");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_main_handle_friend.label;
		me.addEventListener("mouseover", function(){hover("hide_main_handle_friend");}, false);
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
		
		me = settings.manifest.filter.label;
		me.addEventListener("mouseover", function(){hover("filter");}, false);
		me.addEventListener("mouseout", unhover, false);

    });

});


function hover(img) {
	var hover = document.getElementById("hover");
	hover.style.position = "fixed";
	hover.style.top = "55px";
	hover.style.left = "550px";
	hover.innerHTML = "<img src=img/" + img + ".png />";
	hover.style.display = "block";
}

function unhover() {
	var hover = document.getElementById("hover");
	hover.style.display = "none";
}