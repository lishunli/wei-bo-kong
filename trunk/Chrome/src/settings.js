window.addEvent("domready", function () {
    new FancySettings.initWithManifest(function (settings) {
		document.getElementById("settings-label").innerHTML = "微博新控设置";
		document.getElementById("search").placeholder = "在此输入\"New\"试试";
		document.getElementById("search-label").innerHTML = "搜索";
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