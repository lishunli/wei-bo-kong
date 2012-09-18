window.addEvent("domready", function () {
    new FancySettings.initWithManifest(function (settings) {
    	var _settings = new Store("settings", {});
      	var options = _settings.toObject();
		document.getElementById("settings-label").innerHTML = "微博新控";
		document.getElementById("search").placeholder = "请输入\"New\"试试";
		document.getElementById("search-label").innerHTML = "搜索";
		WB2.login(function(){});
		if ( WB2.checkLogin() == false ) {
			settings.manifest.auth_status.element.innerHTML += "<a style='color:red'>未授权</a>";
		}
		else {
			settings.manifest.auth_status.element.innerHTML += "<a style='color:green'>已授权</a>";
		}		
		settings.manifest.auth_btn.addEvent("action", function (value) {
			localStorage["auth_status"] = "code";
		    location.href = "https://api.weibo.com/oauth2/authorize?client_id=3916367922&repsonse_type=code&redirect_uri=chrome-extension://iedfopegeoohmgbhiflbjhbnejeiejie/auth.html";
		});
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