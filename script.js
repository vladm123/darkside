console.log('origin', window.location.origin);
if (window.location.origin == 'http://debitoor-app.staging.e-conomic.ws' && typeof jQuery !== undefined) {
	jQuery(document).ready(function() {

		console.log('JQUERY works!!!111one', jQuery.fn.jquery);
		
		var $switcher = $('<div class="theme-switcher"><ul><li class="white"><div/></li><li class="dark"><div/></li></ul></div>');
		$switcher.on('click', 'li', function(e) {
			toggleTheme($(e.target).closest('li').hasClass('dark'));
		});
		$('body').append($switcher);

		function toggleTheme(isDark) {
			console.log('toggling theme to isDark?' + isDark)
			isDark = isDark || false;
			localStorage.setItem('isDark', isDark);
			$('body').toggleClass('dark-theme', isDark);
			setTimeout(function() {
				$('svg > rect.highcharts-background').attr('fill', isDark ? '#4c516b' : '#FFFFFF');
				$('svg path[fill=none]').attr('stroke', isDark ? '#6c718b' : '#CFCFCF');
				$('svg g text').css('fill', isDark ? '#acb1cb' : "rgb(146, 146, 146)");
			}, 300);
		}

		toggleTheme(localStorage.getItem('isDark') === 'true');
	});
}