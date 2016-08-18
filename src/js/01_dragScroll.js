var dragScroll = (function (){
	
	var draggables = document.querySelectorAll('.ds-element');
	var ds_elements = [];
	
	for(var i = 0; i < draggables.length; i++){
		
		let ds_vertical = classCheck(draggables[i], 'ds-vertical');
		
		ds_elements[i] = new DragScroll(draggables[i], ds_vertical );
	}
	
	function classCheck(el, classname) {
		if(el.classList)
			return el.classList.contains(classname);
		else
			return !!el.className.match(new RegExp('(\\s|^)' + classname + '(\\s|$)'));
	}
	
	function DragScroll(el, vertical){
		
		var thisObj = this;
		this.el = el;
		this.vertical = (vertical === true) ? true : false;
		this.scrollDir = (this.vertical === false) ? 'scrollLeft' : 'scrollTop';
		this.scrolling = {
			dragging : false,
			delta : undefined,
			mouseStart : undefined,
			objPos : undefined 
		};
		
		this.el.addEventListener('mousedown', function(e){
			return thisObj.scrollStart(e, this);
		}, true)
		this.el.addEventListener('mousemove', function(e){
			return thisObj.scrollSet(e, this);
		}, true)
		this.el.addEventListener('mouseup', function(e){
			return thisObj.scrollStop(e, this);
		}, true)
	}
	
	DragScroll.prototype.scrollStart = function (e, el) {
		this.scrolling.dragging = true;
		this.scrolling.mouseStart = (this.vertical === false) ? e.clientX : e.clientY;
		this.scrolling.objPos = el[this.scrollDir];
		
	};
	
	DragScroll.prototype.scrollSet = function (e, el) {
		this.scrolling.delta = this.scrolling.mouseStart - ((this.vertical === false) ? e.clientX : e.clientY);
		if(this.scrolling.dragging === true){
				el[this.scrollDir] = this.scrolling.objPos + this.scrolling.delta;
			}	
	};
	
	DragScroll.prototype.scrollStop = function (e, el) {
		this.scrolling.dragging = false;
		this.scrolling.mouseStart = (this.vertical === false) ? e.clientX : e.clientY;
		//check to see if element was scrolled
		if(this.scrolling.objPos != el[this.scrollDir]){
				//was scrolled so prevent bubbling mouseup
				e.stopPropagation();
			} 
	}

});