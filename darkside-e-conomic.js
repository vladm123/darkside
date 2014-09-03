	if (window.location.origin == 'http://bho' && typeof jQuery !== undefined) {
		jQuery(document).ready(function() {
			setTimeout(function() {
				$('svg > rect').attr('fill', '#4c516b');
				$('svg path[fill=none]').attr('stroke', '#6c718b');
				$('svg g text').css('fill', '#acb1cb');
			}, 300);
			
			console.log($('frame').length);
		});
	}
