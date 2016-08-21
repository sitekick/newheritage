/* 10_functions.js */
$(function () {
	/* active: active main navigation
		selected: selected item 
	*/
	var appdata, resizeid, selected, viewport;
	var active = 'projects';
	//@todo var contentScroll declared prior to modal function;
	contentScroll = dragScroll('#content', true);
	var events = {
			'(max-width: 768px)' : function() { 
					viewport = 'mobile';
					contentScroll.disableDrag(true);
			},
			'(max-width: 1024px)' : function() { 
					viewport = 'desktop';
					contentScroll.enableDrag();
			},
			'(min-width: 1024px) and (max-width: 1324px)' : function() { 
					viewport = 'desktop';
					contentScroll.enableDrag();
			},
			'(min-width: 1324px)' : function() { 
					viewport = 'desktop';
					contentScroll.enableDrag();
			},
			'(all)' : function() {
				
			}
		};
		
	//with true to set initial state
	resizeQuery(events, true);
	
	$.getJSON('assets/data/data.json')
		.done(function(data) {
			
			appdata = data;
			$('nav .projects').click();
  		})
  		.fail(function() {
  			console.log('error');
  		});
	
	//Main Navigation		
	$('nav a').on('click', function () {
		$('nav a.active').removeClass('active');
		active = $(this).attr('class');
		$(this).addClass('active');
		$('main div.content').css('display', 'none');
		$('main div.' + active).css('display', 'block');
		
		resetLayout('selector');
		
		if (active != 'contact') 
		buildSelector( appdata[active], viewport );
	});
	
	
	// Hover Select Button
	$('header button').on('click', function(){
		$('#selector').css('display','block');
		resetLayout('modal');
	});
	
	// Rebuild Selector on resize
	$(window).resize(function(){
		resetLayout();
		clearTimeout(resizeid);
		resizeid = setTimeout(resizeComplete, 350);
	});
	
	function resizeComplete (){
		buildSelector( appdata[active], viewport );
		
		//when modal present during resize - reset page copy
		var main = document.querySelector('main');
		if( hasClass(main, 'fade') ) removeClass(main, 'fade');
		
	}
	
	
	var a11y_nav = keyFocus('#nav');
	
	//listen for pertinent a11y keys; activate tab focus styles
	var body = document.querySelector('body');
	body.addEventListener('keydown', function (e) {	
		if(e.key == 'Tab' || e.key == ' ' || e.key == 'Enter'){
			var inputs = ['INPUT', 'SELECT', 'TEXTAREA'];
			//active element is not an input; treat keydown as keyboard navigation event
			if (inputs.indexOf(document.activeElement.tagName) != -1 === false) 
				addClass(body, 'tabstyles');
		}
	})
	
});