var windowWidth = 0;
var windowWidth = $(window).width();

//Debounce Function

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


var trocarDimDest = debounce(function() {
	windowWidth = $(window).width();
	asertaFundoDestaque();
}, 250);

function asertaFundoDestaque(){
	$('.header-content').css({
		'width': windowWidth + 'px',
		'height': ((windowWidth * 55) / 144) + 'px'
	});
}
$(document).ready(function(){
	windowWidth = $(window).width();
	asertaFundoDestaque();
});

window.addEventListener('resize', trocarDimDest);

/* $(window).resize(function() {
	windowWidth = $(window).width();
       asertaFundoDestaque();
}); */

	