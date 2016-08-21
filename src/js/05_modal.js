/* 05_modal.js */
var contentScroll;
function buildModal(data, mode, method){
	
	var modal_props = _modalProperties();
	var modal = `<div id="modal" class="${method} ${mode}" tabindex="0"><div class="wrapper">	
	<div class="controls" tabindex="-1" role="button" aria-label="Close"><div class="icon" ></div></div>
	<div class="info quadrant-${data.text.quadrant} ${data.text.color}"><section><h2>${data.name}</h2><h3>${data.title}</h3>
	<p>${data.summary}</p></section>
	</div></div></div>`;
		
	$('body').append(modal);
	
	layoutToggle('modal', contentScroll);	
	
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
		'left' : main_offset.left,
		'width' : $(window).width() - ( main_offset.left * 2 ),
 		'height' : $(window).height() - $('header').height()
	};
		
}
	

function _modalEvents(mode, method){
	
	var modal = document.getElementById('modal');
	var button = modal.querySelector('.controls');
	
	//if(method == 'tabbed') button.focus();
	
	button.addEventListener('keydown', function (e){
		if(e.key == ' ' || e.key == 'Enter'){
			//prevent #selector scroll to end of container
			e.preventDefault();
			layoutToggle('selector', contentScroll);
		}
	});
	
	button.addEventListener('click', function (e){
		layoutToggle('selector', contentScroll);
	}, false);	
	
	if(mode == 'desktop'){
		setTimeout(
    		function() {
			var div = modal.querySelector('.info');
			addClass(div, 'expand');
    	}, 300);
	}	
}
