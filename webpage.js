//webpage.js

function setMainPage(){
	var imageWidth = $("#main-image").width();

	var windowWidth = $("body").width();

	var leftover = windowWidth - imageWidth;

	var nameHeader = leftover + "px";
	var sectionWidth = nameHeader;

	$("#name-header").css("width", nameHeader);
	$("#contact-section").css({"width": nameHeader, "left": nameHeader});

	$(".sections").css("width", nameHeader);

	var offset1 = leftover/3 + "px";
	var offset2 = leftover/3 * 2 + "px";

	var sectionSize = leftover/3 + "px";

	$(".link") .css("width", sectionSize);

	$("#experience-link").css("left", offset1);
	$("#education-link").css("left", offset2);

	$("#misc-link").css("left", offset1);
	$("#contact-link").css("left", offset2);

	var linkHeight = $("#main-image").height() / 3 + "px";
	//document.write(sectionHeight);
	$(".link").css({"height":linkHeight, "line-height":linkHeight});

}

function init() {
	setMainPage();
	fadeOutLinks();
	fadeInLinks();
}

var currentSection = null;
var contact = 0;

function fadeOutLinks(){
	$(".link").on('click', function() {
		var id = (event.target.id + "");

		id = id.substring(0, id.length-5);

		currentSection = id;

		var section = "#" + id + "-section";

		if( id == "contact"){
			contact = 1;
			var width = $("#name-header").width() * -1;
			$("#name-header").animate({left: width});
			$("#contact-section").animate({left: "0px"});
			//document.write("hello");
			return;
		}
		if(contact){
			contact = 0;
			var width = $("#name-header").width();
			$("#name-header").animate({left: "0px"});
			$("#contact-section").animate({left: width}, function(){

				$(section).css("z-index", "-1");

				$("#name-header").fadeOut();
				$(".link").fadeOut(function() {
					$(section).css("z-index", "1");
				});
			});
			return;
		}

		$(section).css("z-index", "-1");

		$("#name-header").fadeOut();
		$(".link").fadeOut(function() {
			$(section).css("z-index", "1");
		});




		//document.write(id);
	});
}

function fadeInLinks(){
	$(".back-arrow").on('click', function() {
		var id = (event.target.id + "");

		if(currentSection == "contact"){
			document.write("s");
			$(section).css("z-index", "-1");

			$("#name-header").fadeOut();
			$(".link").fadeOut(function() {
				$(section).css("z-index", "1");
			});
			return;
		}

		var section = "#" + currentSection + "-section";

		//document.write(section);

		$(section).css("z-index", "-1");

		$("#name-header").fadeIn();
		$(".link").fadeIn( function() {
			$(section).css("z-index", "-2");
		});

		currentSection = null;
	});
}