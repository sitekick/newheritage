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
		// !element remove all but element
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
	
function hideSelector(){
	$('#selector').css('display','none');
}

function layoutToggle(text) {
	 
	var button = document.getElementById('selector_button');
	var selector = document.getElementById('selector');
	var main = document.querySelector('main')	
	
	if(text){
		button.innerText = text;
		addClass(main, 'fade');
		
	} else {
		button.innerText = '';
		removeClass(main, 'fade');
		resetLayout('!selector');
		selector.style.display = 'block';
	}
}