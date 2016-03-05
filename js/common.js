$(document).ready(function(){
	var current_pic = $("#imagewrapper .imagecontainer:first-child");
	
	$("#left").click(function() {
		if(current_pic.prev().length) {
			current_pic = current_pic.prev();
			$("#imagewrapper").animate({"left": -current_pic.position().left}, "fast", "swing");
		}
	});
	
	$("#right").click(function() {
		if(current_pic.next().length) {
			current_pic = current_pic.next();
			$("#imagewrapper").animate({"left": -current_pic.position().left}, "fast", "swing");
		}
	});

	$("#bigmouth").hover(function(e) {
		$("#bigmouthimg").css({"left": e.pageX + 10 + "px", "top": e.pageY + 10 + "px"}).fadeIn("slow");
	}, function() {
		$("#bigmouthimg").fadeOut("slow");
	});

	$("#credits").hover(function () {
		$(this).hide();
		$("#credlink").fadeIn();
	}, null);
	
	$("#credlink").hover(null, function () {
		$(this).hide();
		$("#credits").fadeIn();
	});
});

Shadowbox.init({
	players: ["img","qt", "wmp"],
	autoplayMovies: true,
	autoDimensions: true,
	showMovieControls: false
});