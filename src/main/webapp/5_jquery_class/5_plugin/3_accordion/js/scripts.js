// accordion() 플러그인

$(function(){
	
	$('dl.accordion').accordion({
		'heightStyle' : 'content',		// heightStyle 따옴표를 적지 않아도 됨
		'event' : 'mouseover',
		'active' : 2
	});
	
	
})