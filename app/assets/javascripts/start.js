// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
function attachHandler(jQuery) {
	
	$('#post-image').css('height', (window.height- 102));	
	var mainbottom = $('#myCarousel').offset().top + ($('#myCarousel').height()*2)-10;
	var about_bottom = $('#post').offset().top +  $('#post-image').height() - 102;
	var post_bottom = $('.feature-post-text').offset().top +  $('.feature-post-text').height() -102;
	
	// on scroll, 
	$(window).on('scroll',function(){

	    // we round here to reduce a little workload
	    stop = Math.round($(document).scrollTop());
	    if (stop > mainbottom) {
	        $('.navbar-inner').addClass('past-main');
	    } else {
	        $('.navbar-inner').removeClass('past-main');
	   }

	});
	
	// on scroll, 
	$(window).on('scroll',function(){

	    // we round here to reduce a little workload
	    stop = Math.round($(document).scrollTop());
	    if (stop > about_bottom) {
	        $('#post-image').addClass('affix top-affix ');
	    } else {
	        $('#post-image').removeClass('affix top-affix ');
	   }

	});
	
	// on scroll, 
	$(window).on('scroll',function(){

	    // we round here to reduce a little workload
	    stop = Math.round($(document).scrollTop());
	    if (stop > post_bottom && stop > about_bottom) {
	        $('#post-image').removeClass('affix top-affix ');
		   var textsize = $('.feature-post-text').height() - $('#post-image').height()/2 - 80;
		   $('#post-image').css('margin-top', textsize);
	    } else {
	    		$('#post-image').css('margin-top', '0');
			$('#post-image').css('top', (($(document).scrollTop() - about_bottom - 102)) * -0.1);
	    }

	});
	
	// scroll to 'header'
	$("#btn-logo").click(function() {
	    event.preventDefault();
	    $('html, body').animate({
	        scrollTop: $("#myCarousel").offset().top
	    }, 1000);
	});
	
	// scroll to 'sobre'
	$("#btn-sobre").click(function() {
	    event.preventDefault();
	    $('html, body').animate({
	        scrollTop: ($("#sobre").offset().top - 150)
	    }, 1000);
	});
	
	// scroll to 'post'
	$("#btn-post").click(function() {
	    event.preventDefault();
	    $('html, body').animate({
	        scrollTop: ($("#post").offset().top - 50)
	    }, 1000);
	});
	
	$( window ).resize(function(){
		$('#post-image').css('height', (window.height- 102));	
		var mainbottom = $('#myCarousel').offset().top + ($('#myCarousel').height()*2)-10;
		var about_bottom = $('#post').offset().top +  $('#post-image').height() - 102;
		var post_bottom = $('.feature-post-text').offset().top +  $('.feature-post-text').height() -102;
	});
};

$(document).ready(attachHandler);
$(document).load(attachHandler);