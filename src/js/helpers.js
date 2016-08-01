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

