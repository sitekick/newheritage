/* 05_modal.js */

function buildModal(data, mode, method){
	
	var modal_props = _modalProperties();
	var modal = `<div id="modal" class="${method} ${mode}" tabindex="0"><div class="wrapper">	
	<div class="controls" tabindex="-1" role="button" aria-label="Close"><div class="icon" ></div></div>
	<div class="info quadrant-${data.text.quadrant} ${data.text.color}"><section><h2>${data.name}</h2><h3>${data.title}</h3>
	<p>${data.summary}</p></section>
	</div></div></div>`;
		
	$('body').append(modal);
	
	layoutControl.selectorState(false);
	
	if(mode == 'mobile'){
		
		$('#modal').css({'left' : modal_props.left,'top' : modal_props.top, 'width' : modal_props.width });
			
		_mobileImage(data.image);
				
	} else {
			
		$('#modal').css({'left' : modal_props.left, 'top' : modal_props.top, 'height' : modal_props.height, 'width' : modal_props.width });
			
		_desktopImage(data.image);
			
	}
		
	_modalEvents(mode, method);
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
		$('body').prepend(backCanvas);
 		vignetteImage(backCanvas);
 		tintImage(backCtx,vw,vh,239,65,54);
	}
			
	srcImage.src = srcImagePath;
		
}

function vignetteImage(canvas){
		
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
	vignetteContext.drawImage(canvas,offx,offy,cw,ch,0,0,cw,ch );		
		$('#modal .wrapper').append(vignetteCanvas);
}


function _mobileImage(srcImagePath) {
		
	if(typeof(srcImagePath) == 'undefined') return;
		
	let mobileCanvas = document.createElement('canvas');
	let mobileCtx = mobileCanvas.getContext('2d');
	
	let srcImage = new Image();
	let dims = _readFileName(srcImagePath);
	let cw = $('#modal .wrapper').width();
	let ch = canvasDimension(dims, 'height', cw);
	mobileCanvas.width = cw;
	mobileCanvas.height = ch;
	mobileCanvas.id = 'mobilecanvas';
		
	srcImage.onload = function(){
		mobileCtx.drawImage(srcImage,0,0,cw,ch);
	}
	
	srcImage.src = srcImagePath;
		
	$('#modal .wrapper').prepend(mobileCanvas);
}
	
function _modalProperties() {
		
	var main_offset = $('main > .wrapper').offset();
	var height_header = $('header').height();
	
	return {
		'top' : height_header,
		'left' : main_offset.left,
		'width' : $(window).width() - ( main_offset.left * 2 ),
 		'height' : $(window).height() - $('header').height()
	};
		
}
	

function _modalEvents(mode, method){
	
	var modal = document.getElementById('modal');
	var button = modal.querySelector('.controls');
	
	button.addEventListener('keydown', function (e){
		if(e.key == ' ' || e.key == 'Enter'){
			//prevent #selector scroll to end of container
			e.preventDefault();
			layoutControl.selectorState(true);
		}
	}, false);
	
	button.addEventListener('click', function (e){
		layoutControl.selectorState(true);
	}, false);	
	
	if(mode == 'desktop'){
		setTimeout(
    		function() {
			let div = modal.querySelector('.info');
			addClass(div, 'expand');
    	}, 300);
	}	
}
