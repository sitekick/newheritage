//js class manipulation
function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}



/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-flexbox-mq-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),g.push((o?"":"no-")+a.join("-"))}}function s(e){var n=S.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?S.className.baseVal=n:S.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=i(x?"svg":"body"),e.fake=!0),e}function l(e,t,r,o){var s,l,f,u,d="modernizr",c=i("div"),p=a();if(parseInt(r,10))for(;r--;)f=i("div"),f.id=o?o[r]:d+(r+1),c.appendChild(f);return s=i("style"),s.type="text/css",s.id="s"+d,(p.fake?p:c).appendChild(s),p.appendChild(c),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),c.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",u=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),l=t(c,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=u,S.offsetHeight):c.parentNode.removeChild(c),!!l}function f(e,n){return!!~(""+e).indexOf(n)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function d(e,n){return function(){return e.apply(n,arguments)}}function c(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?d(o,t||n):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+p(n[o])+":"+r+")");return s=s.join(" or "),l("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,n,o,s){function a(){d&&(delete N.style,delete N.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var l=m(e,o);if(!r(l,"undefined"))return l}for(var d,c,p,h,v,y=["modernizr","tspan","samp"];!N.style&&y.length;)d=!0,N.modElem=i(y.shift()),N.style=N.modElem.style;for(p=e.length,c=0;p>c;c++)if(h=e[c],v=N.style[h],f(h,"-")&&(h=u(h)),N.style[h]!==t){if(s||r(o,"undefined"))return a(),"pfx"==n?h:!0;try{N.style[h]=o}catch(g){}if(N.style[h]!=v)return a(),"pfx"==n?h:!0}return a(),!1}function v(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+z.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?h(a,n,o,s):(a=(e+" "+E.join(i+" ")+i).split(" "),c(a,n,t))}function y(e,n,r){return v(e,t,t,n,r)}var g=[],C=[],w={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var S=n.documentElement,x="svg"===S.nodeName.toLowerCase(),_=function(){var n=e.matchMedia||e.msMatchMedia;return n?function(e){var t=n(e);return t&&t.matches||!1}:function(n){var t=!1;return l("@media "+n+" { #modernizr { position: absolute; } }",function(n){t="absolute"==(e.getComputedStyle?e.getComputedStyle(n,null):n.currentStyle).position}),t}}();w.mq=_;var b="Moz O ms Webkit",z=w._config.usePrefixes?b.split(" "):[];w._cssomPrefixes=z;var E=w._config.usePrefixes?b.toLowerCase().split(" "):[];w._domPrefixes=E;var P={elem:i("modernizr")};Modernizr._q.push(function(){delete P.elem});var N={style:P.elem.style};Modernizr._q.unshift(function(){delete N.style}),w.testAllProps=v,w.testAllProps=y,Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),o(),s(g),delete w.addTest,delete w.addAsyncTest;for(var T=0;T<Modernizr._q.length;T++)Modernizr._q[T]();e.Modernizr=Modernizr}(window,document);
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
var resizeQuery = (function () {
	
		var mQueries = ['(max-width: 768px)','(max-width: 1024px)','(min-width: 1024px) and (max-width: 1324px)','(min-width: 1324px)'];
		var currentMQ = idQuery();
	
		var monitorMQ = function (eventsobj, init) {
			
			var tmpMQ = currentMQ;
			
			if(init){
				fireCallback(eventsobj,currentMQ);
			}
			
			window.onresize = function() {
				var newMQ = idQuery();
			
				if(newMQ != tmpMQ){
					fireCallback(eventsobj,newMQ);
					
					if(eventsobj['(all)']){
						fireCallback(eventsobj,'(all)');
					}
					
					tmpMQ = newMQ;
				};
			};

		}
		
		function idQuery() {
			for (var i=0 ;i < mQueries.length; i++) {
				if(Modernizr.mq(mQueries[i]) == true){
					
					return mQueries[i];
				
				break;
				}
			}
		}
		
		function fireCallback(events,index) {
			
			if( typeof(events[index]) === 'function' ){
				return events[index]();
				}
		}
		
		return monitorMQ; 
	
})();
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
        nw = iw * r,   // new prop. width
        nh = ih * r,   // new prop. height
        cx, cy, cw, ch, ar = 1;

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
    ctx.drawImage(img, cx, cy, cw, ch,  x, y, w, h);
     
}

function grayscaleImg(ctx, width, height) {

    var imgData = ctx.getImageData(0, 0, width, height);
	var data = imgData.data;
        
    for (var i = 0; i < data.length; i += 4) {
          
	    var value = data[i] * .3 + data[i+1] * .59 + data[i+2] * .11;
			  	
		data[i] = value;        // red
		data[i+1] = value;      // green
		data[i+2] = value;       // blue
    }
        
    ctx.putImageData(imgData, 0, 0);
}

function tintImg(ctx, width, height, hex) {

	grayscaleImg(ctx,width,height);
	        
	ctx.globalCompositeOperation = 'overlay';
	ctx.fillStyle = hex;
	ctx.fillRect(0, 0, width, height);
			
	ctx.getImageData(0, 0, width, height);
        
}


function canvasClone(canvas) {
		
	var colCanvas = document.createElement('canvas');
	var colContext = colCanvas.getContext('2d');
	colCanvas.id = canvas.id + '-color';
	colCanvas.className = 'canvas-color';
	colCanvas.width = canvas.width;
	colCanvas.height = canvas.height;
	colContext.drawImage(canvas, 0, 0, canvas.width, canvas.height  );
	
	return colCanvas;
}
	
function canvasDimension(src_dimensions, mode, calc_value){
	// src_dimensions: array [0]width [1]height of source image
	// mode: string to determine what to calculate ('width' || 'height')
	// calc_value: number to use for calculation (width || height)
	var perc;
		
	switch(mode){
			
		case 'height' :
			//calculate height;
			perc = calc_value / src_dimensions[0];
			return Math.floor(perc * src_dimensions[1]);
			break;
		case 'width' :
			//calculate width;
			perc = calc_value / src_dimensions[1];
			return Math.floor(perc * src_dimensions[0]);
		break;
		default :
			return 300;
			break;
		}
}


function vignetteCanvas(canvas){
		
	//apply sized/cropped background image to modal window
		
	var vignetteCanvas = document.createElement('canvas');
	var vignetteContext = vignetteCanvas.getContext('2d');
	var modal_offset = $('#modal .wrapper').offset();
		
	var border = 4;
	var offx = modal_offset.left + border;
	var offy = modal_offset.top + border;
	var cw = $('#modal').width();
	var ch = $('#modal').height() ;
		
	vignetteCanvas.id = 'vignette';
	vignetteCanvas.width = cw;
	vignetteCanvas.height = ch;
	vignetteContext.drawImage(canvas,offx,offy,cw,ch,border,border,cw-(border*2),ch );
		
		$('#modal .wrapper').append(vignetteCanvas);
}
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
		case '!selector':
			$('#modal').remove();
			$('#backcanvas').remove();
		break;
		case '!modal':
			$('#selector').remove();
			$('#backcanvas').remove();
		break;	

		default:
			$('#selector').remove();
			$('#modal').remove();
			$('#backcanvas').remove();
		break;
	}
}
	
function layoutToggle(text) {
	 
	var button = document.getElementById('selector_button');
	var selector = document.getElementById('selector');
	var main = document.querySelector('main');	
	var focus = selector.querySelector('.selected');
	
	if(text){
		//modal state
		button.style.display = 'block';
		button.innerText = text;
		addClass(main, 'fade');
		selector.style.display = 'none';
		
	} else {
		//selector state
		button.style.display = 'none';
		removeClass(main, 'fade');
		resetLayout('!selector');
		selector.style.display = 'block';
		focus.focus();
	}
}
function buildModal(data, mode, method){
		
	layoutToggle(data.name);
		
	var modal_props = _modalProperties();
	var modal = `<div id="modal" class="${method} ${mode}" tabindex="1"><div class="wrapper">	
	<div class="controls" tabindex="1" role="button" aria-label="Close"><div class="icon" ></div></div>
	<div class="info"><section><h3>Location</h3><p>${data.title}</p></section>
	<section><h3>Summary</h3><p>${data.summary}</p></section>
	</div></div></div>`;
		
	$('body').append(modal);
		
	if(mode == 'mobile'){
		
			$('#modal').css({ 'top' : modal_props.top, 'width' : modal_props.width });
			
			_mobileImage(data.image);
				
	} else {
			
			$('#modal').css({'bottom' : 0, 'height' : modal_props.height, 'width' : modal_props.width });
			$('#modal .info').css({'width' : modal_props.info.width});		
			
			_desktopImage(data.image);
			
	}
		
	_modalEvents(method);
}


function _desktopImage(srcImagePath){
		
	if(typeof(srcImagePath) == 'undefined') return;
		
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
		drawImageProp(backCtx,srcImage,0,0,vw,vh);
		$('#content').prepend(backCanvas);
 		vignetteCanvas(backCanvas);
 		tintImg(backCtx,vw,vh,'#9797A6');
	}
			
	srcImage.src = srcImagePath;
		
}

function _mobileImage(srcImagePath) {
		
	if(typeof(srcImagePath) == 'undefined') return;
		
	var mobileCanvas = document.createElement('canvas');
	var mobileCtx = mobileCanvas.getContext('2d');
	
	var srcImage = new Image();
	var border = 2;
	var dims = _readFileName(srcImagePath);
	var cw = $('#modal .wrapper').width();
	var ch = canvasDimension(dims, 'height', cw);
	mobileCanvas.width = cw;
	mobileCanvas.height = ch;
	mobileCanvas.id = 'mobilecanvas';
		
	srcImage.onload = function(){
		mobileCtx.drawImage(srcImage,border,border,cw-(border*2),ch-(border*2));
	}
	
	srcImage.src = srcImagePath;
		
	$('#modal .wrapper').prepend(mobileCanvas);
}
	
function _modalProperties() {
		
	var main_offset = $('main > .wrapper').offset();
	var height_header = $('header').height();
		
	return {
		'top' : height_header,
		'width' : $(window).width() - ( main_offset.left * 2 ),
		'height' : $(window).height() - $('header').height(),
		'info' : {
			'width' : $('.dropdown').width()
		}
	};
		
}
	

function _modalEvents(method){
	
	var modal = document.getElementById('modal');
	var button = modal.querySelector('.controls');
	
	if(method == 'tabbed') modal.focus();
	
	button.addEventListener('keydown', function (e){
		if(e.key == ' '){
			//prevent scroll to end of container
			e.preventDefault();
			layoutToggle();
		}
	});
	button.addEventListener('click', function (e){
		layoutToggle();
	}, false);	
	
		
}

function buildSelector(options, mode){
	
  	var op = `<div id="selector" tabindex="0" class="ds-element ${(mode == 'desktop') ? 'ds-vertical ' : ' '}kf-group kf-noclick"><div class="wrapper">`;	
  	
  	for(var i = 0; i < options.length; i++) {
  		op += `<div class="option" tabindex="-1" role="button" aria-label="View"><canvas id="canvas-${i}" data-src="${options[i].image}"></div>`

  	}
  		
  	op += '</div></div>';
		
	var selector_props = _selectorProperties(mode);
		
	$(selector_props.element).prepend(op);
	var sh = selector_props.height;
	var sw = selector_props.width;
	$('#selector').height(sh).width(sw).css({'left' : selector_props.left});
		
	var canvases = $('#selector canvas');

	$.each(canvases, function(key, value){
			
		var img_src = $(value).attr('data-src');
		var context = value.getContext('2d');
		var img = new Image();
 		var dims = _readFileName(img_src);
 		var canvas_props = _selectorCanvasProperties(dims, selector_props, 10, mode);

 		value.width = canvas_props.width;
 		value.height = canvas_props.height;
			
		img.onload = function () {
			context.drawImage(img,0,0,canvas_props.width,canvas_props.height);
			var color = canvasClone(value);
			$(value).parent().prepend(color) 
			tintImg(context,canvas_props.width,canvas_props.height,'#9797A6');
		}
			
		img.src = img_src;
		
	});
		
	//Events
	
	dragScroll();
	keyFocus();
	//keydown focused option
	var focus_options = document.querySelectorAll('.option');
	
	for(var i=0; i < focus_options.length; i++){
			
			focus_options[i].addEventListener('keydown', function (e){
				 //space key for buttons;
				 if(e.key == ' ' || e.key == 'Enter'){
				 	var target = this.querySelector('.canvas-color')
				 	var params = {
					 	targetEl : 'canvas',
					 	data : options,
					 	mode : mode,
					 	method: 'tabbed'
				 	}
				 	_activateEvent(target, params);
				 	}
				}, true);
				
			focus_options[i].addEventListener('mouseup', function (e){
				 
				 	var target = this.querySelector('.canvas-color')
				 	//console.log(this);
				 	var params = {
					 	targetEl : 'canvas',
					 	data : options,
					 	mode : mode,
					 	method: 'tabbed'
				 	}
				 	_activateEvent(target, params);

				}, true);
	};
	
	// Drag 
/*
	var callback = {
		func : _activateEvent,
		params : {
			targetEl : 'canvas',
			data : options,
			mode : mode,
			method : 'clicked'
		}
	};
		
	dragScroll('selector', (mode == 'desktop') ? true : false, callback);
*/
		
}//buildSelector



function _selectorProperties(mode) {
		
	var dropdown_offset = $('div.dropdown').offset();
	var dropdown_width = $('div.dropdown').width();
	var props;
		
	if(mode == 'mobile'){
		return {
			element : 'main',
			top : 0,
			left : 0,
			width : $(window).width(),
			height : 175
		};
	} else {
		return {
			element : 'body',
			top : 0,
			left : Math.floor(dropdown_offset.left),
			width : dropdown_width,
			height : $(window).height()
		};
	};
		
}
	
function _selectorCanvasProperties(dims, selector_obj, padding, mode) {
		
	if (mode == 'mobile'){
		return  {
			width : canvasDimension(dims, 'width', selector_obj.height - (padding * 2)),
			height : selector_obj.height - (padding * 2)
		};	
	} else {
		return   {
			width : selector_obj.width - (padding * 2),
			height : canvasDimension(dims, 'height', selector_obj.width - (padding * 2))
		};
	};
}

function _readFileName(imagepath){
		
	//get image dimensions from filename; example 1000x669.jpg
	var delimeters = imagepath.split('/')
	var filename = delimeters[4];
	var src_width = Number( filename.substring(0, filename.indexOf("x") ) );
	var src_height = Number( filename.substring(filename.indexOf("x") + 1, filename.indexOf(".jpg")) );
		
	return [src_width,src_height];
}


function _activateEvent(clicked, params){
	
	//receives target of click event object; check for proper type 
	
	var type = clicked.tagName.toLowerCase();
	
	if(type != params.targetEl) return;
	
	var cid = clicked.id;
	//affect navigation
	var prev = document.querySelector('.option.selected');
	if(prev) removeClass(prev, 'selected');
	var option = document.getElementById(cid).parentNode;
	addClass(option, 'selected');
	
	// determine id of clicked option from c
	// i.e. canvas-0-color; canvas-12-color
	var start = (cid.indexOf('-')) + 1;
	var end = (cid.lastIndexOf('-'));
	var cindex = Number(cid.substring(start, end ));	
	
	//retrieve data
	var options = params.data;
	var selected = (options[cindex]);
	
	
	buildModal(selected, params.mode, params.method);	

}

$(function () {
	/* active: active main navigation
		selected: selected item 
	*/
	var appdata, resizeid, selected, viewport;
	var active = 'projects';

	var events = {
			'(max-width: 768px)' : function() { 
					viewport = 'mobile';
			},
			'(max-width: 1024px)' : function() { 
					viewport = 'desktop';
			},
			'(min-width: 1024px) and (max-width: 1324px)' : function() { 
					viewport = 'desktop';
			},
			'(min-width: 1324px)' : function() { 
					viewport = 'desktop';
			}
		};
		
	//with true to set initial state
	resizeQuery(events, true);
	
	$.getJSON('assets/data/data.json')
		.done(function(data) {
			
			appdata = data;
			$('nav .projects').click();
  		})
  		.fail(function() {
  			console.log('error');
  		});
	
	//Main Navigation		
	$('nav a').on('click', function () {
		$('nav a.active').removeClass('active');
		active = $(this).attr('class');
		$(this).addClass('active');
		$('main div.content').css('display', 'none');
		$('main div.' + active).css('display', 'block');
		
		resetLayout('selector');
		
		buildSelector( appdata[active], viewport );
	});
	
	
	// Hover Select Button
	$('header button').on('click', function(){
		$('#selector').css('display','block');
		resetLayout('modal');
	});
	
	// Rebuild Selector on resize
	$(window).resize(function(){
		resetLayout();
		clearTimeout(resizeid);
		resizeid = setTimeout(resizeComplete, 100);
	});
	
	function resizeComplete (){
		buildSelector( appdata[active], viewport );
		
		//when modal present during resize - reset page copy
		var main = document.querySelector('main');
		if( hasClass(main, 'fade') ) removeClass(main, 'fade');
		
	}
	
// 	dragScroll();

	
});