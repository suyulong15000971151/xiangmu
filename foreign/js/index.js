$(function(){

	$('.fabrics .zhuan-sub ul li img').hover(function(){

		$(this).addClass('pulse')
	},function(){
		$(this).removeClass('pulse');
		
	});
	//这是轮播；
//	$('.banner').css('width',100%)
var width=document.body.clientWidth
$('html').css('width',width)
	$('.index_focus .bd').css('width',width)
	$('.index_focus ul').css('width',width)
	$('.index_focus li').css('width',width)
	$('.index_focus li img').css('width',width)
//		$(".index_focus").hover(function(){
//		$(this).find(".index_focus_pre,.index_focus_next").stop(true, true).fadeTo("show", 1)
//	},function(){
//		$(this).find(".index_focus_pre,.index_focus_next").fadeOut()
//	});
	
	$(".index_focus").slide({
		titCell: ".slide_nav a ",
		mainCell: ".bd ul",
		delayTime: 500,
		interTime: 2000,
		prevCell:".index_focus_pre",
		nextCell:".index_focus_next",
		effect: "fold",
		autoPlay: true,
		trigger: "click",
		startFun:function(i){
			$(".index_focus_info").eq(i).find("h3").css("display","block").fadeTo(1000,1);
			$(".index_focus_info").eq(i).find(".text").css("display","block").fadeTo(1000,1);
		}
	});
	
	
})
