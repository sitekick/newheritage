$(function () {
	/* active: active main navigation
		selected: selected item 
	*/
	var appdata, resizeid, selected, viewport;
	var active = 'projects';

	var events = {
			'(max-width: 768px)' : function() { 
					viewport = 'mobile';
			},
			'(max-width: 1024px)' : function() { 
					viewport = 'desktop';
			},
			'(min-width: 1024px) and (max-width: 1324px)' : function() { 
					viewport = 'desktop';
			},
			'(min-width: 1324px)' : function() { 
					viewport = 'desktop';
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
		resizeid = setTimeout(resizeComplete, 100);
	});
	
	function resizeComplete (){
		buildSelector( appdata[active], viewport );
		
		//when modal present during resize - reset page copy
		var main = document.querySelector('main');
		if( hasClass(main, 'fade') ) removeClass(main, 'fade');
		
	}
	

	keyFocus('#nav');
});