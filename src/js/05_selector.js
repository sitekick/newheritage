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
