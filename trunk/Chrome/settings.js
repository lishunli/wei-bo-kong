window.addEvent("domready", function () {
    new FancySettings.initWithManifest(function (settings) {
	
		document.getElementById("settings-label").innerHTML = "Œ¢≤©øÿ…Ë÷√";
		document.getElementById("search").placeholder = "À—À˜…Ë÷√—°œÓ...";
		document.getElementById("search-label").innerHTML = "À—À˜";
		
		
		var me = settings.manifest.hide_top.label;
		me.addEventListener("mouseover", function(){hover("100px","400px","hide_top");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_top_left.label;
		me.addEventListener("mouseover", function(){hover("150px","400px","hide_top_left");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_top_right.label;
		me.addEventListener("mouseover", function(){hover("200px","400px","hide_top_right");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_secondnav.label;
		me.addEventListener("mouseover", function(){hover("100px","400px","hide_secondnav");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_secondnav_logo.label;
		me.addEventListener("mouseover", function(){hover("150px","400px","hide_secondnav_logo");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_secondnav_nav.label;
		me.addEventListener("mouseover", function(){hover("200px","400px","hide_secondnav_nav");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right.label;
		me.addEventListener("mouseover", function(){hover("100px","400px","hide_right");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_info.label;
		me.addEventListener("mouseover", function(){hover("150px","400px","hide_right_info");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_app.label;
		me.addEventListener("mouseover", function(){hover("200px","400px","hide_right_app");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_nav.label;
		me.addEventListener("mouseover", function(){hover("225px","400px","hide_right_nav");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_ads.label;
		me.addEventListener("mouseover", function(){hover("250px","400px","hide_right_ads");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_topic.label;
		me.addEventListener("mouseover", function(){hover("275px","400px","hide_right_topic");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_people.label;
		me.addEventListener("mouseover", function(){hover("300px","400px","hide_right_people");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_alltopic.label;
		me.addEventListener("mouseover", function(){hover("325px","400px","hide_right_alltopic");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_group.label;
		me.addEventListener("mouseover", function(){hover("350px","400px","hide_right_group");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_cf.label;
		me.addEventListener("mouseover", function(){hover("375px","400px","hide_right_cf");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_right_report.label;
		me.addEventListener("mouseover", function(){hover("400px","400px","hide_right_report");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_main_post.label;
		me.addEventListener("mouseover", function(){hover("100px","400px","hide_main_post");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_main_tips.label;
		me.addEventListener("mouseover", function(){hover("125px","400px","hide_main_tips");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_main_sort.label;
		me.addEventListener("mouseover", function(){hover("150px","400px","hide_main_sort");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_main_forward.label;
		me.addEventListener("mouseover", function(){hover("175px","400px","hide_main_forward");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_main_image.label;
		me.addEventListener("mouseover", function(){hover("200px","400px","hide_main_image");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_main_micro.label;
		me.addEventListener("mouseover", function(){hover("225px","400px","hide_main_micro");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_other_nav.label;
		me.addEventListener("mouseover", function(){hover("100px","400px","hide_other_nav");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_other_ads.label;
		me.addEventListener("mouseover", function(){hover("125px","400px","hide_other_ads");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.hide_other_bot.label;
		me.addEventListener("mouseover", function(){hover("150px","400px","hide_other_bot");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		me = settings.manifest.filter.label;
		me.addEventListener("mouseover", function(){hover("150px","400px","filter");}, false);
		me.addEventListener("mouseout", unhover, false);
		
		
		
    });

});

function hover(x, y, img) {
	var hover = document.getElementById("hover");
	hover.style.position = "fixed";
	hover.style.top = x;
	hover.style.left = y;
	hover.innerHTML = "<img src=img/" + img + ".png />";
	hover.style.display = "block";
}

function unhover() {
	var hover = document.getElementById("hover");
	hover.style.display = "none";
}