$(function(){
	
	// 글씨 크기 변경
	$('dd.fontSize > button:eq(0)').click(function(){
		$('#txt').css({	'font-size' : '+=1px' });
	});
	
	$('dd.fontSize > button:eq(1)').click(function(){
		$('#txt').animate({	fontSize : '-=1px' });
	});
	
	// 글귀 변경
	$('select#fontstyle').change(function(){
		$('#txt').css({ 'font-family' : $(this).val()})
	});
	
});