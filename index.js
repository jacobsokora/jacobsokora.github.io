var $cover = $('.cover');
function generateStars() {
	var iter = 0;
	var num = window.innerWidth / 10;
	while(iter <= num) {
		var x = Math.floor(Math.random() * window.innerWidth);
		var y = Math.floor(Math.random() * window.innerHeight);
		var t = Math.floor((Math.random() * 3) + 1);
		$('<div class="star star-type' + t + '"></div>').prependTo($cover).css({
			"top" : y,
			"left" : x
		});
		iter++;
	}
};

function clearStars() {
	$(".star").remove();
}

$(document).ready(function() {
	generateStars();
});

$(window).resize(function() {
	clearStars();
	generateStars();
});