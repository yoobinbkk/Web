$(function(){
	
	$('#hideButton').click(function(){
		$('#intro').hide();
	})
	
	$("#showButton").click(function(){
		$("p#intro").show();
	});
	
	
	$("#toggleButton").click(function(){
		$("p#intro").toggle();
	});
	/*
	$("#toggleButton").click(function(){
		if ($('#intro').is(':visible')) {
			$('#intro').fadeOut(1000);
		} else {
			$("p#intro").fadeIn(1000);
		}
	});
	
	fadeToggle
	
	*/
	
	// 테이블의 내용 중 홀수행을 배경색 지정
	// $('#celebs table.data > tbody > tr:even').css({'background' : 'lightblue'});
	// $('#celebs table.data > tbody > tr:even').addClass('table_striping');
	
	// 마우스가 올라갔을 때 배경색 바뀌고 다시 나오면 원상복귀
	$('#celebs tr').hover(function(){
		$(this).addClass('td_mouseover');
	}, function() {
		$(this).removeClass('td_mouseover');
	});
	
});