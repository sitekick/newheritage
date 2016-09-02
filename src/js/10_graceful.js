$(function () {

	(function safariSvg(){
		
		let browser = bowser;
		
		if(browser.name == 'Safari' && browser.version == '5.1'){
			let logo = document.querySelector('.logo img');
			let logo_png = rewriteExtension(logo.src, '.svg', '.png');
			if( logo_png !== false)
			logo.src = logo_png;
		}
			
	})();
	
});