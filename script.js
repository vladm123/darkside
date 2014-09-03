console.log('origin', window.location.origin);
if (window.location.origin == 'http://debitoor-app.staging.e-conomic.ws' && typeof jQuery !== undefined) {
	jQuery(document).ready(function() {

		var $switcher = $('<div class="theme-switcher"><ul><li class="white"><div/></li><li class="dark"><div/></li></ul></div>');
		$switcher.on('click', 'li', function(e) {
			toggleTheme($(e.target).closest('li').hasClass('dark'));
		});
		$('body').append($switcher);

		function toggleTheme(isDark) {
			isDark = isDark || false;
			localStorage.setItem('isDark', isDark);
			$('body').toggleClass('dark-theme', isDark);
			setTimeout(function() {
				$('svg > rect.highcharts-background').attr('fill', isDark ? '#4c516b' : '#FFFFFF');
				$('svg path[fill=none]').attr('stroke', isDark ? '#6c718b' : '#CFCFCF');
				$('svg g text').css('fill', isDark ? '#acb1cb' : "rgb(146, 146, 146)");
			}, 500);
		}

		toggleTheme(localStorage.getItem('isDark') === 'true');
	});

	setTimeout(function() {
		var message = 'Tired of accounting?';
		var options = {
			autoclose: false,
			action: openFlappyBird,
			link: 'try this out!'
		};
		sba.shared.NotificationCenter.getDefaultCenter().accountInfo(message, options);
	}, 200);

	function openFlappyBird() {
		var $flappy = $('<div class="flappy-wrapper"><iframe src="http://ghaiklor.github.io/flappy-bird" width="950px" height="550px"></iframe><div class="close">X</div></div>');
		$flappy.find('.close').click(function() {
			$flappy.remove();
		});
		$('body').append($flappy);
	}
}