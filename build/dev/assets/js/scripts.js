/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-flexbox-mq-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),g.push((o?"":"no-")+a.join("-"))}}function s(e){var n=S.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?S.className.baseVal=n:S.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=i(x?"svg":"body"),e.fake=!0),e}function l(e,t,r,o){var s,l,f,u,d="modernizr",c=i("div"),p=a();if(parseInt(r,10))for(;r--;)f=i("div"),f.id=o?o[r]:d+(r+1),c.appendChild(f);return s=i("style"),s.type="text/css",s.id="s"+d,(p.fake?p:c).appendChild(s),p.appendChild(c),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),c.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",u=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),l=t(c,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=u,S.offsetHeight):c.parentNode.removeChild(c),!!l}function f(e,n){return!!~(""+e).indexOf(n)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function d(e,n){return function(){return e.apply(n,arguments)}}function c(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?d(o,t||n):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+p(n[o])+":"+r+")");return s=s.join(" or "),l("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,n,o,s){function a(){d&&(delete N.style,delete N.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var l=m(e,o);if(!r(l,"undefined"))return l}for(var d,c,p,h,v,y=["modernizr","tspan","samp"];!N.style&&y.length;)d=!0,N.modElem=i(y.shift()),N.style=N.modElem.style;for(p=e.length,c=0;p>c;c++)if(h=e[c],v=N.style[h],f(h,"-")&&(h=u(h)),N.style[h]!==t){if(s||r(o,"undefined"))return a(),"pfx"==n?h:!0;try{N.style[h]=o}catch(g){}if(N.style[h]!=v)return a(),"pfx"==n?h:!0}return a(),!1}function v(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+z.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?h(a,n,o,s):(a=(e+" "+E.join(i+" ")+i).split(" "),c(a,n,t))}function y(e,n,r){return v(e,t,t,n,r)}var g=[],C=[],w={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var S=n.documentElement,x="svg"===S.nodeName.toLowerCase(),_=function(){var n=e.matchMedia||e.msMatchMedia;return n?function(e){var t=n(e);return t&&t.matches||!1}:function(n){var t=!1;return l("@media "+n+" { #modernizr { position: absolute; } }",function(n){t="absolute"==(e.getComputedStyle?e.getComputedStyle(n,null):n.currentStyle).position}),t}}();w.mq=_;var b="Moz O ms Webkit",z=w._config.usePrefixes?b.split(" "):[];w._cssomPrefixes=z;var E=w._config.usePrefixes?b.toLowerCase().split(" "):[];w._domPrefixes=E;var P={elem:i("modernizr")};Modernizr._q.push(function(){delete P.elem});var N={style:P.elem.style};Modernizr._q.unshift(function(){delete N.style}),w.testAllProps=v,w.testAllProps=y,Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),o(),s(g),delete w.addTest,delete w.addAsyncTest;for(var T=0;T<Modernizr._q.length;T++)Modernizr._q[T]();e.Modernizr=Modernizr}(window,document);
'use strict';

//js class manipulation
function hasClass(el, className) {
  if (el.classList) return el.classList.contains(className);else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function addClass(el, className) {
  if (el.classList) el.classList.add(className);else if (!hasClass(el, className)) el.className += " " + className;
}

function removeClass(el, className) {
  if (el.classList) el.classList.remove(className);else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    el.className = el.className.replace(reg, ' ');
  }
}
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
'use strict';

var keyFocus = function keyFocus(id, clickEvent) {

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
		this.clickEvent = clickEvent === false ? false : true;
		this.tabbed = false;

		this.el.addEventListener('focus', function (e) {

			return thisObj.elementFocus(e, this);
		}, true);

		for (var i = 0; i <= this.focus_end; i++) {

			this.focusable[i].addEventListener('keydown', function (e) {

				return thisObj.childFocus2(e, this);
			}, true);
		};
	};

	FocusGroup.prototype.elementFocus = function (e, el) {
		//when parent element focused via tab (only); switch to first focusable child

		var focusable = this.focusable;
		var focus_pos = this.focus_pos;

		el.addEventListener('keyup', function (e) {

			var keystroke = e.key ? e.key : e.keyCode.toString();

			if (keystroke == 'Tab' || keystroke == '9') {
				var first = focusable[focus_pos];
				first.focus();
			}
		}, false);
	};

	FocusGroup.prototype.childFocus2 = function (e, el) {

		if (e.defaultPrevented) {
			return; // Should do nothing if the default action has been cancelled
		}
		//console.dir(e)
		var handled = false;
		if (e.key !== undefined) {
			// Handle the event with KeyboardEvent.key and set handled true.
			switch (e.key) {
				case 'ArrowRight':
				case 'Right':
				case 'ArrowDown':
				case 'Down':
					this.focus_pos < this.focus_end ? this.focus_pos++ : this.focus_pos = 0;
					handled = true;
					break;
				case 'ArrowLeft':
				case 'Left':
				case 'ArrowUp':
				case 'Up':
					this.focus_pos > 0 ? this.focus_pos-- : this.focus_pos = this.focus_end;
					handled = true;
					break;
				case ' ':
				case 'Spacebar':
					//space will scroll element; prevent:
					e.preventDefault();
				case 'Enter':
					if (this.clickEvent === true) {
						el.click();
						handled = true;
					}
					break;
			}
		} else if (e.keyCode !== undefined) {
			// Handle the event with KeyboardEvent.keyCode and set handled true.
			switch (e.keyCode) {
				case '39':
				case '40':
					this.focus_pos < this.focus_end ? this.focus_pos++ : this.focus_pos = 0;
					handled = true;
					break;
				case '37':
				case '38':
					this.focus_pos > 0 ? this.focus_pos-- : this.focus_pos = this.focus_end;
					handled = true;
					break;
				case '32':
					//space will scroll element; prevent:
					e.preventDefault();
				case '13':
					if (this.clickEvent === true) {
						el.click();
						handled = true;
					}
					break;
			}
		}

		if (handled) {
			var next = this.focusable[this.focus_pos];
			next.focus();
			// Suppress "double action" if event handled
			e.preventDefault();
		}
	};
};
'use strict';

var resizeQuery = function () {

	var mQueries = ['(max-width: 768px)', '(max-width: 1024px)', '(min-width: 1024px) and (max-width: 1324px)', '(min-width: 1324px)'];
	var currentMQ = idQuery();

	var monitorMQ = function monitorMQ(eventsobj, init) {

		var tmpMQ = currentMQ;

		if (init) {
			fireCallback(eventsobj, currentMQ);
		}

		window.onresize = function () {
			var newMQ = idQuery();

			if (newMQ != tmpMQ) {
				fireCallback(eventsobj, newMQ);

				if (eventsobj['(all)']) {
					fireCallback(eventsobj, '(all)');
				}

				tmpMQ = newMQ;
			};
		};
	};

	function idQuery() {
		for (var i = 0; i < mQueries.length; i++) {
			if (Modernizr.mq(mQueries[i]) == true) {

				return mQueries[i];

				break;
			}
		}
	}

	function fireCallback(events, index) {

		if (typeof events[index] === 'function') {
			return events[index]();
		}
	}

	return monitorMQ;
}();
"use strict";

function drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY) {

  if (arguments.length === 2) {
    x = y = 0;
    w = ctx.canvas.width;
    h = ctx.canvas.height;
  }

  // default offset is center
  offsetX = typeof offsetX === "number" ? offsetX : 0.5;
  offsetY = typeof offsetY === "number" ? offsetY : 0.5;

  // keep bounds [0.0, 1.0]
  if (offsetX < 0) offsetX = 0;
  if (offsetY < 0) offsetY = 0;
  if (offsetX > 1) offsetX = 1;
  if (offsetY > 1) offsetY = 1;

  var iw = img.width,
      ih = img.height,
      r = Math.min(w / iw, h / ih),
      nw = iw * r,
      // new prop. width
  nh = ih * r,
      // new prop. height
  cx,
      cy,
      cw,
      ch,
      ar = 1;

  // decide which gap to fill    
  if (nw < w) ar = w / nw;
  if (nh < h) ar = h / nh;
  nw *= ar;
  nh *= ar;

  // calc source rectangle
  cw = iw / (nw / w);
  ch = ih / (nh / h);

  cx = (iw - cw) * offsetX;
  cy = (ih - ch) * offsetY;

  // make sure source rectangle is valid
  if (cx < 0) cx = 0;
  if (cy < 0) cy = 0;
  if (cw > iw) cw = iw;
  if (ch > ih) ch = ih;

  // fill image in dest. rectangle
  ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
}

function grayscaleImg(ctx, width, height) {

  var imgData = ctx.getImageData(0, 0, width, height);
  var data = imgData.data;

  for (var i = 0; i < data.length; i += 4) {

    var value = data[i] * .3 + data[i + 1] * .59 + data[i + 2] * .11;

    data[i] = value; // red
    data[i + 1] = value; // green
    data[i + 2] = value; // blue
  }

  ctx.putImageData(imgData, 0, 0);
}

function tintImage(ctx, width, height, R, G, B) {

  var imgData = ctx.getImageData(0, 0, width, height);
  var data = imgData.data;

  for (var i = 0; i < data.length; i += 4) {
    data[i] = R * data[i] / 255;
    data[i + 1] = G * data[i + 1] / 255;
    data[i + 2] = B * data[i + 2] / 255;
  }

  ctx.putImageData(imgData, 0, 0);
}

function canvasClone(canvas) {

  var colCanvas = document.createElement('canvas');
  var colContext = colCanvas.getContext('2d');
  colCanvas.id = canvas.id + '-color';
  colCanvas.className = 'canvas-color';
  colCanvas.width = canvas.width;
  colCanvas.height = canvas.height;
  colContext.drawImage(canvas, 0, 0, canvas.width, canvas.height);

  return colCanvas;
}

function canvasDimension(src_dimensions, mode, calc_value) {
  // src_dimensions: array [0]width [1]height of source image
  // mode: string to determine what to calculate ('width' || 'height')
  // calc_value: number to use for calculation (width || height)
  var perc;

  switch (mode) {

    case 'height':
      //calculate height;
      perc = calc_value / src_dimensions[0];
      return Math.floor(perc * src_dimensions[1]);
      break;
    case 'width':
      //calculate width;
      perc = calc_value / src_dimensions[1];
      return Math.floor(perc * src_dimensions[0]);
      break;
    default:
      return 300;
      break;
  }
}
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
			select: function select() {}
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
'use strict';

/* 05_modal.js */

function buildModal(data, mode, method) {

	var modal_props = _modalProperties();
	var modal = '<div id="modal" class="' + method + ' ' + mode + '" tabindex="0"><div class="wrapper">\t\n\t<div class="controls" tabindex="-1" role="button" aria-label="Close"><div class="icon" ></div></div>\n\t<div class="info quadrant-' + data.text.quadrant + ' ' + data.text.color + '"><section><h2>' + data.name + '</h2><h3>' + data.title + '</h3>\n\t<p>' + data.summary + '</p></section>\n\t</div></div></div>';

	$('body').append(modal);

	layoutControl.selectorState(false);

	if (mode == 'mobile') {

		$('#modal').css({ 'left': modal_props.left, 'top': modal_props.top, 'width': modal_props.width });

		_mobileImage(data.image);
	} else {

		$('#modal').css({ 'left': modal_props.left, 'top': modal_props.top, 'height': modal_props.height, 'width': modal_props.width });

		_desktopImage(data.image);
	}

	_modalEvents(mode, method);
}

function _desktopImage(srcImagePath) {

	if (typeof srcImagePath == 'undefined') return;

	//viewport dimensions
	var vw = $(window).width();
	var vh = $(window).height();

	//target background canvas
	var backCanvas = document.createElement('canvas');
	var backCtx = backCanvas.getContext('2d');
	backCanvas.width = vw;
	backCanvas.height = vh;
	backCanvas.id = 'backcanvas';

	var srcImage = new Image();

	srcImage.onload = function () {
		drawImageProp(backCtx, srcImage, 0, 0, vw, vh);
		$('body').prepend(backCanvas);
		vignetteImage(backCanvas);
		tintImage(backCtx, vw, vh, 239, 65, 54);
	};

	srcImage.src = srcImagePath;
}

function vignetteImage(canvas) {

	//apply sized/cropped background image to modal window

	var vignetteCanvas = document.createElement('canvas');
	var vignetteContext = vignetteCanvas.getContext('2d');
	var modal_offset = $('#modal .wrapper').offset();

	var offx = modal_offset.left;
	var offy = modal_offset.top;
	var cw = $('#modal').width();
	var ch = $('#modal').height();

	vignetteCanvas.id = 'vignette';
	vignetteCanvas.width = cw;
	vignetteCanvas.height = ch;
	vignetteContext.drawImage(canvas, offx, offy, cw, ch, 0, 0, cw, ch);
	$('#modal .wrapper').append(vignetteCanvas);
}

function _mobileImage(srcImagePath) {

	if (typeof srcImagePath == 'undefined') return;

	var mobileCanvas = document.createElement('canvas');
	var mobileCtx = mobileCanvas.getContext('2d');

	var srcImage = new Image();
	var dims = _readFileName(srcImagePath);
	var cw = $('#modal .wrapper').width();
	var ch = canvasDimension(dims, 'height', cw);
	mobileCanvas.width = cw;
	mobileCanvas.height = ch;
	mobileCanvas.id = 'mobilecanvas';

	srcImage.onload = function () {
		mobileCtx.drawImage(srcImage, 0, 0, cw, ch);
	};

	srcImage.src = srcImagePath;

	$('#modal .wrapper').prepend(mobileCanvas);
}

function _modalProperties() {

	var main_offset = $('main > .wrapper').offset();
	var height_header = $('header').height();

	return {
		'top': height_header,
		'left': main_offset.left,
		'width': $(window).width() - main_offset.left * 2,
		'height': $(window).height() - $('header').height()
	};
}

function _modalEvents(mode, method) {

	var modal = document.getElementById('modal');
	var button = modal.querySelector('.controls');

	button.addEventListener('keydown', function (e) {
		if (e.key == ' ' || e.key == 'Enter') {
			//prevent #selector scroll to end of container
			e.preventDefault();
			layoutControl.selectorState(true);
		}
	}, false);

	button.addEventListener('click', function (e) {
		layoutControl.selectorState(true);
	}, false);

	if (mode == 'desktop') {
		setTimeout(function () {
			var div = modal.querySelector('.info');
			addClass(div, 'expand');
		}, 300);
	}
}
'use strict';

/* 05_selector.js */

function buildSelector(options, mode) {

	/* if existing; remove */
	{
		var clear = document.querySelector('#selector');
		if (clear != null) {
			var parent = clear.parentNode;
			parent.removeChild(clear);
		}
	}

	var op = '<div id="selector" tabindex="0"><div class="wrapper">';

	for (var i = 0; i < options.length; i++) {
		op += '<div class="option" tabindex="-1" role="button" aria-label="View"><canvas id="canvas-' + i + '" data-src="' + options[i].image + '"></div>';
	}

	op += '</div></div>';

	var selector_props = _selectorProperties(mode);

	$(selector_props.element).prepend(op);

	$('#selector').height(selector_props.height).width(selector_props.width);

	var canvases = $('#selector canvas');

	$.each(canvases, function (key, value) {

		var img_src = $(value).attr('data-src');
		var context = value.getContext('2d');
		var img = new Image();
		var dims = _readFileName(img_src);
		var canvas_props = _selectorCanvasProperties(dims, selector_props, 10, mode);

		value.width = canvas_props.width;
		value.height = canvas_props.height;

		img.onload = function () {
			context.drawImage(img, 0, 0, canvas_props.width, canvas_props.height);
			var color = canvasClone(value);
			$(value).parent().prepend(color);
			grayscaleImg(context, canvas_props.width, canvas_props.height);
		};

		img.src = img_src;
	});

	//Events

	//keydown focused option
	var focus_options = document.querySelectorAll('.option');

	for (var _i = 0; _i < focus_options.length; _i++) {

		focus_options[_i].addEventListener('keydown', function (e) {
			//space key for buttons;
			if (e.key == ' ' || e.key == 'Enter') {
				var target = this.querySelector('.canvas-color');
				var params = {
					targetEl: 'canvas',
					data: options,
					mode: mode,
					method: 'tabbed'
				};
				_activateEvent(target, params);
			}
		}, true);

		focus_options[_i].addEventListener('mouseup', function (e) {

			var target = this.querySelector('.canvas-color');

			var params = {
				targetEl: 'canvas',
				data: options,
				mode: mode,
				method: 'clicked'
			};
			_activateEvent(target, params);
		}, true);
	};

	var a11y_selector = keyFocus('#selector', false);
	var selectorScroll = dragScroll('#selector', mode == 'desktop' ? true : false);
} //buildSelector


function _selectorProperties(mode) {

	var sidebar = document.querySelector('#sidebar');

	if (mode == 'mobile') {
		return {
			element: 'main',
			width: $(window).width(),
			height: 175
		};
	} else {
		return {
			element: '#sidebar',
			width: sidebar.scrollWidth,
			height: $(window).height()
		};
	};
}

function _selectorCanvasProperties(dims, selector_obj, padding, mode) {

	//thick focus outline width ± 5px;
	var padding_sum = 10 + padding * 2;

	if (mode == 'mobile') {
		return {
			width: canvasDimension(dims, 'width', selector_obj.height - padding_sum),
			height: selector_obj.height - padding_sum

		};
	} else {
		return {
			width: selector_obj.width - padding_sum,
			height: canvasDimension(dims, 'height', selector_obj.width - padding_sum)
		};
	};
}

function _readFileName(imagepath) {

	//get image dimensions from filename; example 1000x669.jpg
	var delimeters = imagepath.split('/');
	var filename = delimeters[4];
	var src_width = Number(filename.substring(0, filename.indexOf("x")));
	var src_height = Number(filename.substring(filename.indexOf("x") + 1, filename.indexOf(".jpg")));

	return [src_width, src_height];
}

function _activateEvent(clicked, params) {

	//receives target of click event object; check for proper type 

	var type = clicked.tagName.toLowerCase();

	if (type != params.targetEl) return;

	{
		//affect navigation
		var cid = clicked.id;
		var prev = document.querySelector('.option.selected');
		if (prev) removeClass(prev, 'selected');

		var option = document.getElementById(cid).parentNode;
		addClass(option, 'selected');

		// determine id of clicked option from c
		// i.e. canvas-0-color; canvas-12-color

		var start = cid.indexOf('-') + 1;
		var end = cid.lastIndexOf('-');
		var cindex = Number(cid.substring(start, end));
	}

	//retrieve data
	var options = params.data;
	var selected = options[cindex];

	buildModal(selected, params.mode, params.method);
}
'use strict';

/* 10_functions.js */
$(function () {
	/* active: active main navigation
 	selected: selected item 
 */
	var active, appdata, resizeid, selected, viewport, contentScroll;
	//var active = 'people';

	var events = {
		'(max-width: 768px)': function maxWidth768px() {
			viewport = 'mobile';
			contentScroll = undefined;
		},
		'(max-width: 1024px)': function maxWidth1024px() {
			viewport = 'desktop';
			contentScroll = dragScroll('#content', true);
		},
		'(min-width: 1024px) and (max-width: 1324px)': function minWidth1024pxAndMaxWidth1324px() {
			viewport = 'desktop';
			contentScroll = dragScroll('#content', true);
		},
		'(min-width: 1324px)': function minWidth1324px() {
			viewport = 'desktop';
			contentScroll = dragScroll('#content', true);
		},
		'(all)': function all() {}
	};

	//with true to set initial state
	resizeQuery(events, true);

	/*
 	$.getJSON('assets/data/data.json')
 		.done(function(data) {
 			
 			appdata = data;
 			// initial page
 			let default_nav = document.querySelector('nav a.' + active);
 			console.log(default_nav);
 			default_nav.click();
   		})
   		.fail(function() {
   			console.log('error');
   		});
 */

	$.ajax({
		url: 'assets/data/data.json',
		cache: false,
		dataType: 'json',
		success: function success(data) {
			appdata = data;
			// initial page
			firstPage();
		},
		error: function error(request, status, _error) {
			console.log('data error');
		}
	});

	var nav = document.querySelectorAll('nav a');

	for (var i = 0; i < nav.length; i++) {
		nav[i].addEventListener('click', function (e) {

			active = this.id;

			{
				var prev = activeClass('nav', true);
				addClass(this, 'active');
				activeContent(prev, active);
			}

			if (active == 'contact') layoutControl.removeElement('#selector');else layoutControl.selectorState(true, appdata[active], viewport);
		}, false);
	} //for()

	function firstPage() {

		var init = activeClass('nav');
		active = init;
		layoutControl.selectorState(true, appdata[active], viewport);
	}

	function activeContent(prev, curr) {

		if (prev != null) {
			var previous = document.querySelector('main .content.' + prev);
			removeClass(previous, 'active');
		}

		var current = document.querySelector('main .content.' + curr);
		addClass(current, 'active');
	}

	function activeClass(el, remove) {
		/* with remove to remove Class */
		var active_element = document.querySelector(el + ' .active');

		if (active_element == null) return false;

		if (remove === true) removeClass(active_element, 'active');

		return active_element.id;
	};

	window.addEventListener('resize', resizeThrottle, false);

	function resizeThrottle() {
		if (!resizeid) {
			resizeid = setTimeout(function () {
				resizeid = null;
				resizeComplete();
			}, 66);
		}
	}

	// Rebuild on resize
	function resizeComplete() {
		layoutControl.selectorState(true, appdata[active], viewport);
	}

	var a11y_nav = keyFocus('#nav');

	//listen for pertinent a11y keys; activate tab focus styles
	var body = document.querySelector('body');
	body.addEventListener('keydown', function (e) {
		if (e.key == 'Tab' || e.key == ' ' || e.key == 'Enter') {
			var inputs = ['INPUT', 'SELECT', 'TEXTAREA'];
			//active element is not an input; treat keydown as keyboard navigation event
			if (inputs.indexOf(document.activeElement.tagName) != -1 === false) addClass(body, 'tabstyles');
		}
	}, false);
});