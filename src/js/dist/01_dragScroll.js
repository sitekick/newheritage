'use strict';

/* 01_dragScroll.js */

var dragScroll = function dragScroll(id, vertical) {

	var el = document.querySelector(id);
	var ds_element = new DragScroll(el, vertical);

	function DragScroll(el, vertical) {

		var thisObj = this;

		this.el = el;
		this.vertical = vertical === true ? true : false;
		this.scrollDir = this.vertical === false ? 'scrollLeft' : 'scrollTop';
		this.scrolling = {
			dragging: false,
			delta: undefined,
			mouseStart: undefined,
			objPos: undefined
		};

		this.el.addEventListener('mousedown', function (e) {
			return thisObj.scrollStart(e, this);
		}, true);

		this.el.addEventListener('mousemove', function (e) {
			return thisObj.scrollSet(e, this);
		}, true);
		this.el.addEventListener('mouseup', function (e) {
			return thisObj.scrollStop(e, this);
		}, true);
	}

	DragScroll.prototype.scrollStart = function (e, el) {
		this.scrolling.dragging = true;
		this.scrolling.mouseStart = this.vertical === false ? e.clientX : e.clientY;
		this.scrolling.objPos = el[this.scrollDir];
	};

	DragScroll.prototype.scrollSet = function (e, el) {
		this.scrolling.delta = this.scrolling.mouseStart - (this.vertical === false ? e.clientX : e.clientY);
		if (this.scrolling.dragging === true) {
			el[this.scrollDir] = this.scrolling.objPos + this.scrolling.delta;
			//console.log
		};
	};

	DragScroll.prototype.scrollStop = function (e, el) {
		this.scrolling.dragging = false;
		this.scrolling.mouseStart = this.vertical === false ? e.clientX : e.clientY;
		//check to see if element was scrolled
		if (this.scrolling.objPos != el[this.scrollDir]) {
			//was scrolled so prevent bubbling mouseup
			e.stopPropagation();
		}
	};

	return ds_element;
};