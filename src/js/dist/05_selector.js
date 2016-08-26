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