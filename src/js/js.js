$(function () {
	/* active: active main navigation
		selected: selected item 
	*/
	var resizeid, active, selected;
	var options = [];
	var projects = [];
	var people = [];
	var viewport = ( $(window).width() >= 600 ) ? 'desktop' : 'mobile';
	
	getProjects();
	getPeople();
	
	//Main Navigation		
	$('nav a').on('click', function () {
		$('nav a.active').removeClass('active');
		active = $(this).attr('class');
		$(this).addClass('active');
		$('main div.content').css('display', 'none');
		$('main div.' + active).css('display', 'block');
		resetLayout('selector');

		switch(active){
			case 'projects':
				options = projects;
				// reset button
				$('header button').text('Select Project...');
			break;
			case 'people':
				options = people;
				// reset button
				$('header button').text('Select Person...');
			break;
		}
		
		buildSelector(options);
	});
	
	
	function init(){
		headClass();
		$('nav .projects').click();
	}
	

	
	//Data
		
	function getProjects(){
		
		$.getJSON('/js/data.projects.json')
		.done(function(data) {
			$.each( data.projects.project, function( i, item ) {
 					var specs = {
 						'id' : 'canvas-' + i,
 						'name' : item.name,
 						'location' : item.location,
 						'summary' : item.summary,
 						'image' : item.image
						}
				projects.push(specs);
			});
			//default page
			init();
  		})
  		.fail(function() {
  			console.log( "error" );
  		})
	}
	function getPeople(){
		
		$.getJSON('/js/data.people.json')
		.done(function(data) {
			$.each( data.people.person, function( i, item ) {
					var specs = {
 						'id' : 'canvas-' + i,
 						'name' : item.name,
 						'title' : item.title,
 						'summary' : item.summary,
 						'image' : item.image
						}
					people.push(specs);
			});
  		})
  		.fail(function() {
  			console.log( "error" );
  		})
	}
	
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
		viewport = ( $(window).width() >= 600 ) ? 'desktop' : 'mobile';
		headClass();
		
		buildSelector(options);
	}
	
	function headClass() {
		$('html').removeClass('desktop mobile').addClass(viewport);
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
		
		var modal;
		var modal_props = modalProperties();
		
		modal = '<div id="modal">';
		modal += '<div class="wrapper"><div class="info">';
		modal += '<div class="icons">&nbsp;</div>';
		
		switch(active){
			case 'projects':
				modal += '<section><h3>Location</h3><p>' + selected.location + '</p></section>';
			break;
			case 'people' :
				modal += '<section><h3>Title</h3><p>' + selected.title + '</p></section>';
			break;
		}
		modal += '<section><h3>Summary</h3><p>' + selected.summary + '</p></section>';
		modal += '</div></div></div>';
		
		$('body').append(modal);
		
		$('#modal').css({'bottom' : 0, 'height' : modal_props.height, 'width' : modal_props.width });
		$('#modal .info').css({'width' : modal_props.info.width});
		
		desktopImage();
		modalEvents()
		
	}
	
	function buildMobileModal(){
		
		var modal;
		var modal_props = modalProperties();

		modal = '<div id="modal"><div class="wrapper">';
		modal += '<div class="icons">&nbsp;</div><div class="info">';
		
		switch(active){
			case 'projects':
				modal += '<section><h3>Location</h3><p>' + selected.location + '</p></section>';
			break;
			case 'people' :
				modal += '<section><h3>Title</h3><p>' + selected.title + '</p></section>';
			break;
		}
		modal += '<section><h3>Summary</h3><p>' + selected.summary + '</p></section>';
		modal += '</div></div></div>';
		
		$('body').append(modal);
		$('#modal').css({ 'top' : modal_props.top, 'width' : modal_props.width });
				
		mobileImage();
		modalEvents();
	}

	function modalEvents(){
		// Close Modal Button
		$('#modal .icons').on('click', function(){
// 			$('#modal').remove();
			resetLayout('modal');
			resetLayout('background');
			$('#selector').css('display','block');
		});
	}
	

	
	function vignetteCanvas(canvas){
		
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
		var props = {
				desktop : {
					element : 'body',
					top : 0,
					left : Math.floor(dropdown_offset.left),
					width : dropdown_width,
					height : $(window).height()
					},
				mobile : {
					element : 'main',
					top : 0,
					left : 0,
					width : $(window).width(),
					height : 175
					}
			}
		
		switch(viewport){
			case 'mobile' :
				return props.mobile;
			break;
			default :
				return props.desktop;
		}
		
	}
	function selectorCanvasProperties(dims, selector_obj, padding) {
		
		var props = {
			desktop : {
				width : selector_obj.width - (padding * 2),
				height : canvasDimension(dims, 'height', selector_obj.width - (padding * 2))
				},
			mobile : {
				width : canvasDimension(dims, 'width', selector_obj.height - (padding * 2)),
				height : selector_obj.height - (padding * 2)
				}
			}
		
		switch(viewport){
			case 'mobile' :
				return props.mobile;
			break;
			default :
				return props.desktop;
		}
		
	}

	function buildSelector(options_array){
		
		// attach selector
		var op = '<div id="selector" class="' + active + '"><div class="wrapper">';
  		for(i = 0; i < options_array.length; i++) {
	  		switch(active){
		  		case 'people' :
		  		case 'projects' : 
		  			op += '<div class="option"><canvas id="' + options_array[i].id + '" data-src="' + options_array[i].image + '"></div>'
		  		break;
		  		default: 
		  			return;
		  		break;
	  		}
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
			selected = options_array[nth];
			$('header button').text(selected.name);
			resetLayout('background');
			hideSelector();
			
			switch(viewport){
				case 'mobile' :
					buildMobileModal();
				break;
				default :
					buildDesktopModal();
			}
		})
		
		$('#selector').on('swipe', function(event){
		//console.log('swipe detect');
			touchEvents(this);
		});

		
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
			//calculate
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
	
	function readFileName(imagepath){
		//return [width,height]
		var delimeters = imagepath.split('/')
		var filename = delimeters[3];
		var src_width = Number( filename.substring(0, delimeters[3].indexOf("x") ) );
		var src_height = Number( filename.substring(delimeters[3].indexOf("x") + 1, delimeters[3].indexOf(".jpg")) );
		
		return [src_width,src_height];
	}
	
	
	
		
})