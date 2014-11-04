// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
$( document ).ready(function() {
	var mainbottom = $('#myCarousel').offset().top + $('#myCarousel').height();


	// on scroll, 
	$(window).on('scroll',function(){

	    // we round here to reduce a little workload
	    stop = Math.round($(window).scrollTop());
	    if (stop > mainbottom) {
	        $('.navbar-inner').addClass('past-main');
	    } else {
	        $('.navbar-inner').removeClass('past-main');
	   }

	});

});