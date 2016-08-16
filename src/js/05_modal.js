function buildModal(data, mode, method){
		
	layoutToggle(data.name);
		
	
	var modal_props = _modalProperties();
	
	//resetLayout('!modal');
	resetLayout('background');
	hideSelector();
	
	var modal = `<div id="modal" class="${method} ${mode}" tabindex="1"><div class="wrapper">	
	<div class="controls" tabindex="1"><div class="icon"></div></div>
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
		if(e.key == 'Enter'){
/*
			resetLayout('!selector');
			$('#selector').css('display','block');
*/
		layoutToggle();
		}
	});
	button.addEventListener('click', function (e){
/*
		resetLayout('!selector');
		$('#selector').css('display','block');
*/
	layoutToggle();
	}, false);	
	
		
}
