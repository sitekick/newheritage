'use strict';

$(function () {
	//user agents abbr to html class; because reasons
	(function uaVersion() {

		switch (true) {

			case bowser.name == 'Internet Explorer':
				addUAClass('ie', Math.floor(bowser.version));
				break;
			case bowser.name == 'Safari':
				ver = (bowser.version * 1).toString();
				addUAClass('sf', ver.replace('.', '-'));
				break;
			case bowser.name == 'Chrome':
				addUAClass('ch', Math.floor(bowser.version));
				break;
			case bowser.name == 'Opera':
				addUAClass('op', Math.floor(bowser.version));
				break;
			case bowser.name == 'Firefox':
				addUAClass('ff', Math.floor(bowser.version));
				break;
		}

		function addUAClass(slug, ver) {
			if (slug !== undefined && ver !== undefined) {
				$('html').addClass(slug + ver);
			}
		}
	})();
});