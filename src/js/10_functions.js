/* 10_functions.js : document ready */
$(function () {
	/* active: active main navigation
		selected: selected item 
	*/
	var active, appdata, resizeid, selected, viewport, contentScroll;
	
	var events = {
			'(max-width: 768px)' : function() { 
					viewport = 'mobile';
					contentScroll = undefined;
			},
			'(max-width: 1024px)' : function() { 
					viewport = 'desktop';
					contentScroll = dragScroll('#content', true);
			},
			'(min-width: 1024px) and (max-width: 1324px)' : function() { 
					viewport = 'desktop';
					contentScroll = dragScroll('#content', true);
			},
			'(min-width: 1324px)' : function() { 
					viewport = 'desktop';
					contentScroll = dragScroll('#content', true);
			},
			'(all)' : function() {
				
			}
		};
	
		
	//with true to set initial state
	resizeQuery(events, true);
	
	$.getJSON('assets/data/data.json')
		.done(function(data) {
			appdata = data;
			// initial page
			firstPage();
  		})
  		.fail(function() {
  			console.log('error');
  		});
	
/*
	$.ajax({
		url: 'assets/data/data.json',
		cache: false,
		dataType: 'json',
		success: function(data) {
			appdata = data;
			// initial page
			firstPage();
  		},
  		error: function (request, status, error) { 
	  		console.log('data error'); 
	  	}
	});
*/
	
	var nav = document.querySelectorAll('nav a');
	
	for(let i=0;i<nav.length;i++){
		nav[i].addEventListener('click', function(e){

		 	active = this.id;
		 	
		 	{
				let prev = activeClass('nav', true);
				addClass(this, 'active');
				activeContent(prev, active);
			} 
		 
		 if(active == 'contact')
		 	layoutControl.removeElement('#selector');
		 else
		 	layoutControl.selectorState(true, appdata[active], viewport);
		
		}, false);
	}//for()
		
	function firstPage(){
		
		let init = activeClass('nav');
		active = init;
		layoutControl.selectorState(true, appdata[active], viewport);
		
	}
	
	function activeContent(prev, curr){
		
		if(prev != null){
			let previous = document.querySelector('main .content.' + prev);
			removeClass(previous, 'active');
		}
		
		let current = document.querySelector('main .content.' + curr);
			addClass(current, 'active');
			
	}
	
	
	function activeClass(el, remove) {
		/* with remove to remove Class */
		let active_element = document.querySelector(el + ' .active');
		
		if(active_element == null) 
			return false;
		
		if(remove === true)
			removeClass(active_element, 'active');
		  
		return active_element.id;
		
	};
	
	window.addEventListener('resize', resizeThrottle, false);
	
	function resizeThrottle() {
		if ( !resizeid ) {
		 	resizeid = setTimeout(function() {
		 		resizeid = null;
		 		resizeComplete();
       		}, 66);
    	}
	}
	
	// Rebuild on resize
	function resizeComplete(){
		layoutControl.selectorState(true, appdata[active], viewport);
	}
	
	var a11y_nav = keyFocus('#nav');
	
	//listen for pertinent a11y keys; activate tab focus styles
	var body = document.querySelector('body');
	body.addEventListener('keydown', function (e) {	
		if(e.key == 'Tab' || e.key == ' ' || e.key == 'Enter'){
			let inputs = ['INPUT', 'SELECT', 'TEXTAREA'];
			//active element is not an input; treat keydown as keyboard navigation event
			if (inputs.indexOf(document.activeElement.tagName) != -1 === false) 
				addClass(body, 'tabstyles');
		}
	}, false);
	
	
});