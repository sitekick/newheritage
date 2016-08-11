var dragScroll = (function (){
	
	var scrollElm = function (selector, mode, onClickObj) {
		
		var objpos,delta,dragging,mousestart;
		var scrollobj = document.getElementById(selector);
		var vertical = (mode === true || mode === undefined) ? true : false;
		var scrollDir = (vertical == false) ? 'scrollLeft' : 'scrollTop';
		
		
		scrollobj.addEventListener("mousedown", function (e) {
			dragging = true;
			mousestart = (vertical == false) ? e.clientX : e.clientY;
			objpos = this[scrollDir];
			
		}, true);
	
		scrollobj.addEventListener("mousemove", function (e) {
			delta = mousestart - ((vertical == false) ? e.clientX : e.clientY);
			if(dragging === true){
				this[scrollDir] = objpos + delta;
			}
		}, true);
		
		scrollobj.addEventListener("mouseup", function (e) {
			dragging = false;
			mousestart = (vertical == false) ? e.clientX : e.clientY;
			
			if(objpos == this[scrollDir]){
				onClickObj.func.call(this, e.target, onClickObj.params)
			}
			
		}, true);
		
	}

	return scrollElm;


})();