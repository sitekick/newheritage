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

function selectorButtonToggle(text) {
	//control button 
	var button = document.getElementById('selector_button');
		
	if(text){
		button.innerText = text;
	} else {
		button.css('display','none');
	}
}