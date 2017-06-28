$(function(){
	$('header .right a.log').click(function(){
		$('header #user').slideToggle()
	});
	$('.content .content-box .address').click(function(){
		$('.content .content-box .address .selfadd').css({display:'block'})
	})
	
	//这里是删除地址信息
	$('.content .content-box .address .address-content a').click(function(){
		$('.content .content-box .address .address-content').css({display:'none'})
	})
		
	$('.out1').click(function(){
		$(document).scrollTop(0);
		$('.out').css('display','block');
		$('.out').css('opacity','1');
		$('body').css('overflow','hidden')
	})


	$('.out span').click(function(){
		$(document).scrollTop(0);
		$('.out').css('display','none');
		$('body').css('overflow','scroll');
	})
	
	$('.add a').click(function(){
		$(this).offsetParent().remove()
	});
   $('.address .default a').click(function(){
   	$(window).scrollTop(0);
   	 $('#default').show();
   	 $('body').css('overflow','hidden');
   });
   $('.content .set span').click(function(){
   	 $('#default').hide();
   	 $('body').css('overflow','scroll');
   });
   
      $('.content .content-box .address .add em').click(function(){
      that=this;
   	$(window).scrollTop(0);
   	 $('.tan').show();
   	 $('body').css('overflow','hidden');
   });
   $('.tan-box .set span').click(function(){
   	 $('.tan').hide();
   	 $('body').css('overflow','scroll');
   });
   
   $('.tan .tan-box .set em').click(function(){
   	    if($('.tan .tan-box .tan-content .check input').is(":checked")){
  	$(that).offsetParent().find('strong').show();
     $(that).offsetParent().siblings().find('strong').hide();
     $('.tan').hide();
     $('body').css('overflow','scroll');
  }else{
  	$('.tan').hide();
     $('body').css('overflow','scroll');
     $(that).offsetParent().find('strong').hide();
  }
   })
// 
});
