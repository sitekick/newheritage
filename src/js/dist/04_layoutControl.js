'use strict';

var layoutControl = function (state) {

	var states = {
		body: {
			modal: function modal() {
				addClass(this, 'modal');
			},
			select: function select() {
				removeClass(this, 'modal');
			}
		},
		main: {
			modal: function modal() {
				addClass(this, 'fade');
			},
			select: function select() {
				removeClass(this, 'fade');
			}
		},
		nav: {
			modal: function modal() {
				this.style.display = 'none';
			},
			select: function select() {
				this.style.display = 'block';
			}
		},
		'#selector': {
			modal: function modal(mode) {
				this.style.display = 'none';
			},
			select: function select(mode) {
				this.style.display = 'block';
			}
		},
		'#modal': {
			modal: null,
			select: function select() {
				_removeElement('#modal');
				_removeElement('#backcanvas');
			}
		},
		'#content': {
			modal: function modal() {
				if (this.scrollTop > 0) ;
				this.scrollTop = 0;
			},
			select: null
		}
	};

	return {

		selectorState: function selectorState(select, data, mode) {

			/* arguments:
   /* select: boolean; true: selector is displayed; false: modal is displayed
   /* data (optional): when select true; rebuild selector when data is is present; 
   /* 					remove selector when not present
   /* mode (optional): used when select true and rebuild selector is required
   */

			if (select === true) {

				if (data != null) _selectState(true);else _selectState(false);
			} else {
				_modalState();
			};

			function _selectState(rebuild) {
				/* when data is present; need to rebuild the selector from scratch; otherwise 
    /* the element is hidden/shown via style.display in various states */
				if (rebuild === true) {
					buildSelector(data, mode);
				}

				_switcher('select');
			};

			function _modalState() {
				_switcher('modal');
			};

			function _switcher(state) {
				/* state: 'modal' || 'select' */
				for (selector in states) {
					var el = document.querySelector(selector);
					if (el != null) if (typeof states[selector][state] == 'function') states[selector][state].call(el, mode);
				};
			};
		},

		removeElement: function removeElement(el) {
			_removeElement(el);
		}
	};

	function _removeElement(element_id) {

		var child = document.querySelector(element_id);

		if (child != null) {
			var parent = child.parentNode;
			if (parent != null) parent.removeChild(child);
		} else {
			return;
		}
	}
}();