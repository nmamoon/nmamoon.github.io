$(document).ready(function() {
// all your jQuery code goes in here!



	//function 1 fadeOut
	$("#button").click(function() {
		$("#button").fadeOut()
	});


	//function 2 css
	$("#button").hover(function() {
		$("#button").css('color', 'red')
	});


	//function 3 click
	$(".gif5").click(function() {
		$(".gif5").css('color', 'red')
	});



	//function 4 hover
	$(".gif5").hover(function() {
		$(".gif5").css('color', 'red')
	});


	//function 5 fadeOut
	$("#logo").click(function() {
		$("#logo").fadeIn();
		$("#logo").fadeOut();

	});


	//function 6 text
	$(".movie-title3").click(function(){
    	$(".movie-title3").text("Please check out more!");
	});








});