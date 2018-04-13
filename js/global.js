
$(document).ready(function () {
	var isDesktop = (function () {
		return !('ontouchstart' in window) // works on most browsers 
			|| !('onmsgesturechange' in window); // works on ie10
	})();
	//edit, if you want to use this variable outside of this closure, or later use this:
	window.isDesktop = isDesktop;
	if (isDesktop) {
		$("#card-1").hover(function () {
			$("#icon-1").toggleClass("ats-white");
			$("#title-1").toggleClass("ats-white");
		});
		$("#card-2").hover(function () {
			$("#icon-2").toggleClass("ats-white");
			$("#title-2").toggleClass("ats-white");
		});
		$("#card-3").hover(function () {
			$("#icon-3").toggleClass("ats-white");
			$("#title-3").toggleClass("ats-white");
		});
		$("#card-4").hover(function () {
			$("#icon-4").toggleClass("ats-white");
			$("#title-4").toggleClass("ats-white");
		});
		$("#card-5").hover(function () {
			$("#icon-5").toggleClass("ats-white");
			$("#title-5").toggleClass("ats-white");
		});
		$("#card-6").hover(function () {
			$("#icon-6").toggleClass("ats-white");
			$("#title-6").toggleClass("ats-white");
		});
	}
});
