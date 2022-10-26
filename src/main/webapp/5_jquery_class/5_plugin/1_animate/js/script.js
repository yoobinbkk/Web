$(function(){
	
	$('#bio h3').css({'cursor':'pointer'});
	
	$('#bio div').hide();
	// $('#bio div').first().show();
	$('#bio div:eq(0)').show();
	
	// 이름을 클릭하면 해당 사진만 나오도록
	$('#bio > h3').click(function(){
		$('#bio div').hide();
		// $(this).next().show();
		$(this).next().animate({'height':'toggle'}, 1000, 'easeOutBounce');
	});
	
});