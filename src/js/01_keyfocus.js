var keyFocus = (function (id, clickEvent) {
	
	/* Handles event listeners on tab focused groups for WAI tabbing/keyboard compliance
	* A) Parent element containing requires tabindex="0" attribute
	* B) Focusable children require tabindex="-1" attribute
	* Option: clickEvent false to prevent keydown event listeners
	*/ 
	
	var el = document.querySelector(id);
	var kf_group = new FocusGroup(el, clickEvent);
			
	function FocusGroup(el, clickEvent) {
		
		var thisObj = this;
		
		this.el = el;
		this.focusable = el.querySelectorAll('*[tabindex="-1"]');
		this.focus_pos = 0;
		this.focus_end = this.focusable.length - 1;
		this.clickEvent = (clickEvent === false || clickEvent === undefined) ? false : true;
		
		this.el.addEventListener('focus', function(e) {
			
			return thisObj.elementFocus(e, this);
			
			});
		
		for(var i = 0; i <= this.focus_end; i++){
			
			this.focusable[i].addEventListener('keydown', function(e) {
				
				return thisObj.childFocus(e, this);
			
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