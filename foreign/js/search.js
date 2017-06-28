$(function(){
	$('.sub-left .select h4').css('background','url(img/SEARCHicon2.png) no-repeat right center')
	$('.sub-left .select h4').eq(0).click(function(){
		$('.shai .shai-box .sub-left .select .sub-select').eq(0).slideToggle();
		$('.sub-left .select h4').eq(0).toggleClass('add');
	});
	$('.sub-left .select h4').eq(1).click(function(){
		$('.shai .shai-box .sub-left .select .sub-select').eq(1).slideToggle();
		$('.sub-left .select h4').eq(1).toggleClass('add');
	});
	$('.sub-left .select h4').eq(2).click(function(){
		$('.shai .shai-box .sub-left .select .sub-select').eq(2).slideToggle();
		$('.sub-left .select h4').eq(2).toggleClass('add');
	});
	$('.sub-left .select h4').eq(3).click(function(){
		$('.shai .shai-box .sub-left .select .sub-select').eq(3).slideToggle();
		$('.sub-left .select h4').eq(3).toggleClass('add');
	});
	$('.sub-left .select h4').eq(4).click(function(){
		$('.shai .shai-box .sub-left .select .sub-select').eq(4).slideToggle();
		$('.sub-left .select h4').eq(4).toggleClass('add');
	});
	$('.sub-left .select h4').eq(5).css('background','url(img/SEARCHicon.png) no-repeat right center');
	
	
	//这是自按钮
	$('.sub-select .span1').html('<i class="iconfont icon-shangxiajiantou1"></i>')
	$('.sub-select .span1').click(function(){
		$('.wid-sub').slideToggle()
		$('span i').toggleClass('icon-shangxiajiantou1')
		$('span i').toggleClass('icon-shangxiajiantou')
	})
	
	//这是分页
	var num=1

	
	$('.shai .shai-box .right-content .right-title a.right').click(function(){
		num++
		$('.shai .shai-box .right-content .right-title span').text('page '+ num+ ' of 104')
		$('.shai .shai-box .right-content .right-title em').text('Results '+ ((num-1)*18+1) +"-"+(num*18)+ ' of 1872')
		$('.shai .shai-box .right-content .right-title a.left').css('display','block');
		
		if(num>=104){
			$('.shai .shai-box .right-content .right-title a.right').css('display','none')
		}
	})
	$('.shai .shai-box .right-content .right-title a.left').click(function(){
//		var num= $('.shai .shai-box .right-content .right-title span').get(0).innerText;
		num<=1?num=1:num--;
		
		$('.shai .shai-box .right-content .right-title span').text('page '+ num+ ' of 104')
		$('.shai .shai-box .right-content .right-title em').text('Results '+ ((num-1)*18+1) +"-"+(num*18)+ ' of 4777')
		$('.shai .shai-box .right-content .right-title a.right').css('display','block')
		if(num<=1){
			$('.shai .shai-box .right-content .right-title a.left').css('display','none')
		}
	});
	
	$('.resign-box .address select').click(function(){
		$(this).css({background:'#eee'});
		$(this).children().css('background','#fff');
	})
	
	//购物车累加
 var che=0
	$('.shai .shai-box .right-content .right-box ul li a p').click(function(){
		che++;
		$('header .right em').text(che)
	});
	
	//这是购物车飞的效果；
//	var flat=true
    var shan=0
          $('.shai .shai-box .right-content .right-box ul li .sell').click(function(){
          that=$(this).parent().children('a[class="lian"]:last')

          	MoveBox(that);
          	$(this).css('top','160px').css('opacity','0.5');
         });
         
         function MoveBox(obj) {
        var divTop = $(obj).offset().top;
        var divLeft = $(obj).offset().left;
        $(obj).css({ "position": "absolute", "z-index": "0", "left": divLeft + "px", "top": divTop + "px" });

        $(obj).parent().append($(obj).clone());

        $(obj).animate({ "left": ($("#posBtnR").offset().left) + "px", "top": $("#posBtnR").offset().top + "px", "width": "100px", "height": "70px" }, 100, function () {
        $(obj).animate({ "left": $("#posBtnR").offset().left + "px", "top": $("#posBtnR").offset().top + "px" }, 100);
             
         if($(obj).get(0).style.left==$("#posBtnR").offset().left+ "px"){
            	$(obj).css('display','none');
            }
        });
    }

	
})

