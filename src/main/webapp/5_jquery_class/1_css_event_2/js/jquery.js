
$(function(){
	
	$('div.header > ul.menu .rollover').hover(function(){
		$(this).find('img').attr('src', $(this).find('img').attr("src").replace("off","on"));
	}, function(){
		$(this).find('img').attr('src', $(this).find('img').attr("src").replace("on","off"));
	});
})




/*
	$(".rollover").mouseover(function() {
		$(this).attr("src", $(this).attr("src").replace("Before","After"));
	});
		
	$(".rollover").mouseout(function() {
		$(this).attr("src", $(this).attr("src").replace("After", "Before"));
	});
	
	
	$(this).html(function(){
			var src = $(this).attr('src');
			$(this).attr('src', src.replace('off','on'));
		})
	
*/