var layoutControl = (function (state) {
	
	var states = {
			body : {
				modal : function () {
					addClass(this, 'modal');
				},
				select : function () {
					removeClass(this, 'modal');
				}
			},
			main : {
				modal : function () {
					addClass(this, 'fade');
				},
				select : function () {
					removeClass(this, 'fade');
				}
			},
			nav : {
				modal : function () {
					this.style.display = 'none';
				},
				select : function () {
					this.style.display = 'block';
				}
			},
			'#selector' : {
				modal : function (mode) {
					this.style.display = 'none';
				},
				select : function (mode) {
					this.style.display = 'block';
				}
			},
			'#modal' : {
				modal : null,
				select : function () {
					_removeElement('#modal');
					_removeElement('#backcanvas');
				}
			},
			'#content' : {
				modal : function () {
					if(this.scrollTop > 0);
						this.scrollTop = 0;
				},
				select : function () {
					
				}
			}
	};
	
	
	return {
	
	selectorState : function(select, data, mode) {
		
		/* arguments:
		/* select: boolean; true: selector is displayed; false: modal is displayed
		/* data (optional): when select true; rebuild selector when data is is present; 
		/* 					remove selector when not present
		/* mode (optional): used when select true and rebuild selector is required
		*/
		
		if(select === true){
			
			if(data != null)
				_selectState(true);
			else	
				_selectState(false);
				
		} else {
			_modalState();
		};
		
		function _selectState(rebuild){
			/* when data is present; need to rebuild the selector from scratch; otherwise 
			/* the element is hidden/shown via style.display in various states */
			if(rebuild === true) {
				buildSelector(data, mode);
			}
				
			
			_switcher('select');
		};
		
		function _modalState(){
			_switcher('modal');
		};
		
		function _switcher(state){
			/* state: 'modal' || 'select' */
			for(selector in states) {
				let el = document.querySelector(selector);
				if(el != null)
					if( typeof(states[selector][state]) == 'function')
						states[selector][state].call(el, mode);
			};
		};
		
	
	},
	
	removeElement : function (el){
		_removeElement(el);
	}
	}	 
	
	
	function _removeElement(element_id){
		
		var	child = document.querySelector(element_id);
		
		if(child != null){
			let parent = child.parentNode;
			if(parent != null)
				parent.removeChild(child);
		} else {
			return;
		}
	}
	
	
})();