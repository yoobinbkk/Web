$(function(){
	
	$('p#intro').animate({
		padding : '20px',
		fontSize : '30px'
	}, 2000);
	
	$('div#navigation li').hover(function(){
		$(this).animate({ paddingLeft : '+=15px'}, 200);
	}, function(){
		$(this).animate({ paddingLeft : '-=15px'}, 200);
	});
	
	// 고정퀵 메뉴 원리
	$(window).scroll(function(){
		$('navigation').css({'top' : $(document).scrollTop()})		// css 여러 개 적용할 때 {} 사용함
	})
	
})