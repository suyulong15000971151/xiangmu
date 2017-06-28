$(function(){
	var atr=[]
	atr.push($('.color-box .right ul li.r1'))
	atr.push($('.color-box .right ul li.r2'))
	atr.push($('.color-box .right ul li.r3'))
	atr.push($('.color-box .right ul li.r4'))
	atr.push($('.color-box .right ul li.r5'))
	atr.push($('.color-box .right ul li.r6'))
	
	var i=0;
	$('.color-box .left .seban span').click(function(){
		
		var color=$(this).get(0).style.backgroundColor;
		atr[i].get(0).style.backgroundColor=color;
		i>=5?i=0:i++;
	})

	
	$('.color-box .right ul li span').click(function(){
		$(this).offsetParent().css('background','none')
	});
	
	$('.color-box .right .contion .remove').click(function(){
		$('.color-box .right ul li').css('background','none');
		i=0;
	});
})
