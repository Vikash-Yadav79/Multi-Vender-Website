window.jQuery(document).ready(function($) {
	
	'use strict';
	
	$('#navigation .nav').affix({
		offset: parseInt($('#content').offset().top, 0) - 40
	});
	
	$(window).resize(function() {
		$('#navigation .nav').affix({
			offset: parseInt($('#content').offset().top, 0) - 40
		});
	});
	
	window.SyntaxHighlighter.all();
	
});

    // Current year
    var d = new Date();
    document.getElementById("year").innerHTML = d.getFullYear();