/* 04_layout.js */
function resetLayout(element) {
		
	switch(element) {
		case 'selector':
			$('#selector').remove();
		break;
		case 'modal' :
			$('#modal').remove();
		break;
		case 'background' :
			$('#backcanvas').remove();
		break;
		case '!selector':
			$('#modal').remove();
			$('#backcanvas').remove();
		break;
		case '!modal':
			$('#selector').remove();
			$('#backcanvas').remove();
		break;	

		default:
			$('#selector').remove();
			$('#modal').remove();
			$('#backcanvas').remove();
		break;
	}
}
	
function layoutToggle(state, contentScroll) {
	 
	//pass contentScroll to disable #content scrolling when modal activated
	var selector = document.getElementById('selector');
	var main = document.querySelector('main');	
	var body = document.querySelector('body');	
	var focus = selector.querySelector('.selected');
	var nav = document.querySelector('nav');
	
	if(state == 'modal'){
		//modal state
		addClass(main, 'fade');
		selector.style.display = 'none';
		nav.style.display = 'none';
		addClass(body, 'modal');
		contentScroll.disableDrag(true);
		var a11y_modal = keyFocus('#modal');
	} else {
		//selector state
		removeClass(main, 'fade');
		removeClass(body, 'modal');
		resetLayout('!selector');
		selector.style.display = 'block';
		nav.style.display = 'block';
		contentScroll.enableDrag();
		focus.focus();
	}
}