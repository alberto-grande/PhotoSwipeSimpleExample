
function activateWithID(id) {

	var pswpElement = document.querySelectorAll('.pswp')[0];

	// build items array
	var items = [
	    {
	        src: 'http://placehold.it/600x400',
	        w: 600,
	        h: 400,
	        msrc: 'http://placehold.it/60x40'
	    },
	    {
	        src: 'http://placehold.it/1200x900',
	        w: 1200,
	        h: 900,
	        msrc: 'http://placehold.it/120x90'
	    },
	    {
	        src: 'http://placehold.it/800x600',
	        w: 800,
	        h: 600,
	        msrc: 'http://placehold.it/80x60'
	    }
	];

	// define options (if needed)
	var options = {
	    // optionName: 'option value'
	    // for example:
	    index: id // start at first slide
	};

	// Initializes and opens PhotoSwipe
	var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
	gallery.init();
}

function activate() {
	activateWithID(0);
}