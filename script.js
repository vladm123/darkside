if (typeof jQuery !== undefined) {
	jQuery(document).ready(function() {
		console.log('JQUERY works!!!111one');
		
		$('body').append('<div class="theme-switcher"><ul><li class="white"><div/></li><li class="dark"><div/></li></ul></div>');
		setInterval(function() {
			$('svg > rect.highcharts-background').attr('fill', '#4c516b');
			$('svg path[fill=none]').attr('stroke', '#6c718b');
			$('svg g text').css('fill', '#acb1cb');
		}, 100);
	});
}