// Found this from : https://codepen.io/fawority/pen/aVqWey

// technique for this demo found here 
// http://stackoverflow.com/questions/22003491/animating-canvas-to-look-like-tv-noise





document.addEventListener('DOMContentLoaded', function() {
	const canvas = document.querySelector('canvas');
	const panel = document.getElementById('panel');
	canvas.width = canvas.height = 128

	resize();
	window.onresize = resize;

	
	function noise(ctx) {
		const w = ctx.canvas.width
		const h = ctx.canvas.height
		const iData = ctx.createImageData(w, h)
		const buffer32 = new Uint32Array(iData.data.buffer)
		const len = buffer32.length
		let i = 0
		
		for (; i < len;i++)
			if (Math.random() < 0.5) buffer32[i] = 0xffffffff;
		ctx.putImageData(iData, 0, 0);
	}
	
	function resize() {
		canvas.width = window.innerWidth * window.devicePixelRatio
		canvas.height = panel.offsetHeight * window.devicePixelRatio
		canvas.style.width = window.innerWidth + 'px'
		canvas.style.height = panel.offsetHeight + 'px'
		noise(canvas.getContext('2d'));
	}
	
	noise(canvas.getContext('2d'));
	

});


