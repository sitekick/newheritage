/* 04_layout.js */
function resetLayout(element) {
		
/*
	let elements = {
			selector : {
				parent : null,
				child : '#selector'
			},
			modal : {
				parent : 'body',
				child : '#modal'
			},
			background : {
				parent : 'body',
				child : '#backcanvas'
			}
	};
*/
	
	if( typeof(element) == 'object'){
			for(el in element)
				_removeElement(element[el]);
	} else {
		_removeElement(element);
	}
		
	function _removeElement(element){

// 		var child_el = elements[element].child,
			//console.log(element);
		var	child = document.querySelector(element);
		if(child != null){
			parent = child.parentNode;
			if(parent != null)
				parent.removeChild(child);
		} else {
			return;
		}
		
		
/*
			if(parent === null){
				return;
			}
*/
/*
		if(child && child_el != '#selector'){
			let parent_el = elements[element].parent;
			parent = document.querySelector(parent_el);
		} else if(child && child_el == '#selector'){
			parent = child.parentNode;
		} else {
			return;
		}
*/
/*
		if(child.parentNode ==  parent)
			parent.removeChild(child);
*/
	}
}
	
function layoutToggle(state, remove_elements) {
	 
	var selector = document.querySelector('#selector'),
		main = document.querySelector('main'),	
		body = document.querySelector('body'),	
		nav = document.querySelector('nav'),
		content,
		a11y_modal;
		
	if(state == 'modal'){
		//modal state
		content = document.querySelector('#content');
		addClass(main, 'fade');
		selector.style.display = 'none';
		nav.style.display = 'none';
		addClass(body, 'modal');
		a11y_modal = keyFocus('#modal');
		if(content.scrollTop > 0);
			content.scrollTop = 0;
	} else {
		//selector state
		removeClass(main, 'fade');
		removeClass(body, 'modal');
		//resetLayout(remove_elements);
		if(selector) selector.style.display = 'block';
		nav.style.display = 'block';
	}
}