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
	
	resizeQuery(events);
	
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
		
		buildSelector();
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
		buildSelector();
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
			default:
				$('#selector').remove();
				$('#modal').remove();
				$('#backcanvas').remove();
			break;
		}
	}
	
	function hideSelector(){
		$('#selector').css('display','none');
	}
	
	function desktopImage(){
		
		if(!selected) return;
		
		var srcImagePath = selected.image;
		
		//viewport(v) dimensions
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
	
	function mobileImage() {
		
		var mobileCanvas = document.createElement('canvas');
		var mobileCtx = mobileCanvas.getContext('2d');
		var srcImagePath = selected.image;
		var srcImage = new Image();
		var border = 2;
		var dims = readFileName(srcImagePath);
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
	
	function modalProperties() {
		
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
	
	function buildDesktopModal(){
		
		var modal_props = modalProperties();
		var modal = `<div id="modal"><div class="wrapper"><div class="info"><div class="icons">&nbsp;</div>
		<section><h3>Location</h3><p>${selected.title}</p></section>
		<section><h3>Summary</h3><p>${selected.summary}</p></section>
		</div></div></div>`;
		
		$('body').append(modal);
		
		$('#modal').css({'bottom' : 0, 'height' : modal_props.height, 'width' : modal_props.width });
		$('#modal .info').css({'width' : modal_props.info.width});
		
		desktopImage();
		modalEvents();
		
	}
	
	function buildMobileModal(){
		
		var modal_props = modalProperties();
		var modal = `<div id="modal"><div class="wrapper"><div class="icons">&nbsp;</div><div class="info">
		<section><h3>Location</h3><p>${selected.title}</p></section>
		<section><h3>Summary</h3><p>${selected.summary}</p></section>
		</div></div></div>`;
		
		$('body').append(modal);
		$('#modal').css({ 'top' : modal_props.top, 'width' : modal_props.width });
				
		mobileImage();
		modalEvents();
	}

	function modalEvents(){
		// Close Modal Button
		$('#modal .icons').on('click', function(){
			resetLayout('modal');
			resetLayout('background');
			$('#selector').css('display','block');
		});
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
	
	function selectorProperties() {
		
		var dropdown_offset = $('div.dropdown').offset();
		var dropdown_width = $('div.dropdown').width();
		var props;
		
		if(viewport == 'mobile'){
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
	
	function selectorCanvasProperties(dims, selector_obj, padding) {
		
		if (viewport == 'mobile'){
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


	function buildSelector(){
		// attach selector
		var options = appdata[active];
		
		var op = `<div id="selector" class="${active}"><div class="wrapper">`;
  		
  		for(var i = 0; i < options.length; i++) {
  			op += `<div class="option"><canvas id="${options[i].id}" data-src="${options[i].image}"></div>`
  		}
  		
  		op += '</div></div>';
		
		var selector_props = selectorProperties();
		
		$(selector_props.element).prepend(op);
		var sh = selector_props.height;
		var sw = selector_props.width;
		$('#selector').height(sh).width(sw).css({'left' : selector_props.left});
		
		
	var canvases = $('#selector canvas');

		$.each(canvases, function(key, value){
			
			var img_src = $(value).attr('data-src');
			var context = value.getContext('2d');
			var img = new Image();
 			var dims = readFileName(img_src);
 			var canvas_props = selectorCanvasProperties(dims, selector_props, 10);

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
		
		// EVENTS
		// Click
		$('#selector div.option').on('click', function(){
			$('#selector div.selected').removeClass('selected');
			$(this).toggleClass('selected');
			
			var nth = $(this).index();
			selected = options[nth];
			
			$('header button').text(selected.name);
			resetLayout('background');
			hideSelector();
			
			if(viewport == 'mobile'){
				buildMobileModal();
			} else {
				buildDesktopModal();
			}
			
		})
	}
})