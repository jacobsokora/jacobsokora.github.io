$(() => {
	$('#showPortfolio').click((e) => {
		$('#main').hide();
		$('#portfolio').show();
	});
	$('.delete').click(() => {
		$('#main').show();
		$('#portfolio').hide();
	});
});

var code = [ 38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 66, 65];
var pos = 0;

document.addEventListener('keydown', (e) => {
	if (code[pos] == e.keyCode) {
		pos += 1;
		if (pos == code.length) {
			pos = 0;
		}
	} else {
		pos = 0;
	}
});