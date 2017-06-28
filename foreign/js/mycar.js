$(function(){
	    $('.content ul li a.express').click(function(){
   	$(window).scrollTop(0);
   	 $('.tan1').show();
   	 $('body').css('overflow','hidden');
   });
   $('.tan-box i').click(function(){
   	 $('.tan1').hide();
   	 $('body').css('overflow','scroll');
   });
})
