$(function(){
	$('header .right a.rog').click(function(){
		$('header #cart').slideToggle()
	})
	$('.orders .content ul li .procu a').click(function(){
		$(this).offsetParent().remove();
		var num=$(".orders .content ul").children().size()
		$('.orders .title span').html('<div class="cart-title">'+num+' items in Your Cart</div>')
		
	});
	
	
	//这是初始化数量的值
	$('.orders .content ul li .price .count input').val(1)
	//这是点击增加的变化
	
	
	//这是总数列的总和求和；
	function box(){
		var reg=/[^\d\.]/g;
	var atr=[]
	var ulsum=0;
	var lisum=$('.orders .content ul li .usd');
	for (i=0;i<lisum.length;i++) {
    atr.push($(lisum[i]).text().replace(reg,''));
    ulsum+=Number(atr[i])
	};
	return $('.orders .orders-btm H3').text('$ '+ulsum.toFixed(2)+' USD')
	}
	
	
	
	$('.orders .content ul li .price .count i.right').click(function(){
		
		//获取数量的值
		var num=$(this).prev().val();
//		获取产品的字符串
		var length=$(this).offsetParent().find('span').text();
		//截取字符串中的数字
	var m=length.slice(1,(length.length-10));
		num++;
		//点击后input输入框数量的加
		$(this).prev().val(num);
		//相对产品的数量和价格相加后的结果
		var listsum=m*$(this).prev().val();
		//保留小数点后两位
		var listsums=listsum.toFixed(2);
		//相对产品价格最终显示的样式 字符串加数字
		$(this).offsetParent().find('.usd').text('$'+listsums+'USD');
		box()
	});
	//这是点击减的变化效果
	$('.orders .content ul li .price .count i.left').click(function(){
		var num=$(this).next().val();
		var length=$(this).offsetParent().find('span').text();
		//截取字符串中的数字
	var m=length.slice(1,(length.length-10));
		num<=1?num=1:num--;
		$(this).next().val(num);
		var listsum=m*$(this).next().val();
		//保留小数点后两位
		var listsums=listsum.toFixed(2);
		$(this).offsetParent().find('.usd').text('$'+listsums+'USD');
		box();
	});
})
