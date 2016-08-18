var keyFocus = (function () {
	
	/* Handles event listeners on tab focused groups for WAI tabbing/keyboard compliance
	* A) Parent element containing focusable children requires:
	* 	1) attribute: tabindex="0"
	* 	2) class: class="kf-group"
	*	Option) class kf-noclick to prevent click event being fired on keydown
	* B) Focusable children require:
	*	1) attribute: tabindex="-1"
	*/ 
	
	var tabindexes = document.querySelectorAll('*[tabindex="0"]');
	
	var kf_groups = [];
	
	for(var i=0; i < tabindexes.length; i++){
		
		let kf_group = classCheck(tabindexes[i], 'kf-group');
		
		if(kf_group) {
			let kf_noclick = classCheck(tabindexes[i], 'kf-noclick');
			kf_groups[i] = new FocusGroup(tabindexes[i], kf_noclick);
		}
		
	}
	
	function classCheck(el, classname) {
		if(el.classList)
			return el.classList.contains(classname);
		else
			return !!el.className.match(new RegExp('(\\s|^)' + classname + '(\\s|$)'));
	}
	
	function FocusGroup(el, noclick) {
		
		var thisObj = this;
		
		this.el = el;
		this.focusable = el.querySelectorAll('*[tabindex="-1"]');
		this.focus_pos = 0;
		this.focus_end = this.focusable.length - 1;
		this.clickEvent = (noclick === true) ? false : true;
		
		this.el.addEventListener('focus', function(e) {
			
			return thisObj.elementFocus(e, this)
			
			});
		
		for(var i = 0; i <= this.focus_end; i++){
			
			this.focusable[i].addEventListener('keydown', function(e) {
				
				return thisObj.childFocus(e, this)
			
			});

		};
	};
	
	FocusGroup.prototype.elementFocus = function(e, el) {
		//when parent element focused; switch to first focusable child
		var first = this.focusable[this.focus_pos];
		first.focus();
		return false;
		}
		
	FocusGroup.prototype.childFocus = function(e, el) {
		
		if(e.key == 'ArrowRight' || e.key == 'ArrowDown' ){
			//act on arrow events
			(this.focus_pos < this.focus_end ) ? this.focus_pos++ : this.focus_pos = 0;
		} else if(e.key == 'ArrowLeft' || e.key == 'ArrowUp'){
			(this.focus_pos > 0 ) ? this.focus_pos-- : this.focus_pos = this.focus_end;
		} else if(e.key == ' ' || e.key == 'Enter' && (this.clickEvent === true) ) {
			//act on spacebar and enter events
			el.click();
			return false;
		} else {
			//do nothing
			return true;
		}
		
		var next = this.focusable[this.focus_pos];
		next.focus();
		return false;
		
		}

});