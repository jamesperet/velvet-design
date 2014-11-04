// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
$( document ).ready(function() {
	var mainbottom = $('#myCarousel').offset().top + ($('#myCarousel').height()*2)-10;
	var about_bottom = $('#post').offset().top +  $('#post-image').height() - (screen.height - $('#post-image').height() + 152);
	var post_bottom = $('.feature-post-text').offset().top +  $('.feature-post-text').height() - (screen.height - $('.feature-post-text').height() + 232);

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
	
	// on scroll, 
	$(window).on('scroll',function(){

	    // we round here to reduce a little workload
	    stop = Math.round($(window).scrollTop());
	    if (stop > about_bottom) {
	        $('#post-image').addClass('affix top-affix ');
	    } else {
	        $('#post-image').removeClass('affix top-affix ');
	   }

	});
	
	// on scroll, 
	$(window).on('scroll',function(){

	    // we round here to reduce a little workload
	    stop = Math.round($(window).scrollTop());
	    if (stop > post_bottom && stop > about_bottom) {
	        $('#post-image').removeClass('affix top-affix ');
		   var textsize = $('.feature-post-text').height() - $('#post-image').height()/2 - 80
		   $('#post-image').css('margin-top', textsize);
	    } else {
	    		$('#post-image').css('margin-top', '0');
	    }

	});
	

});