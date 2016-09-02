'use strict';

$(function () {

	(function safariSvg() {

		var browser = bowser;

		if (browser.name == 'Safari' && browser.version == '5.1') {
			var logo = document.querySelector('.logo img');
			var logo_png = rewriteExtension(logo.src, '.svg', '.png');
			if (logo_png !== false) logo.src = logo_png;
		}
	})();
});