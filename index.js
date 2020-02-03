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