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
	
function layoutToggle(text) {
	 
	var button = document.getElementById('selector_button');
	var selector = document.getElementById('selector');
	var main = document.querySelector('main');	
	var body = document.querySelector('body');	
	var focus = selector.querySelector('.selected');
	
	if(text){
		//modal state
		button.style.display = 'block';
		button.innerText = text;
		addClass(main, 'fade');
		selector.style.display = 'none';
		addClass(body, 'modal');
	} else {
		//selector state
		button.style.display = 'none';
		removeClass(main, 'fade');
		removeClass(body, 'modal');
		resetLayout('!selector');
		selector.style.display = 'block';
		focus.focus();
	}
}