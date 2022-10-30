$(function(){

	var oriPrice = 0;
	var name = null;
	
	var hotCold = $("input:radio[name=hot_cold]");
	var size = $("input:radio[name=size]");
	var syrup = $("input:radio[name=syrup]");
	var shot = $("input:radio[name=shot]");
	
	var hotColdV = $("input:radio[name=hot_cold]:checked").val();
	var sizeV = $("input:radio[name=size]:checked").val();
	var syrupV = $("input:radio[name=syrup]:checked").val();
	var shotV = $("input:radio[name=shot]:checked").val();
	
	var optionTotal = $('#priceCenter').text();
	
	$('.menu > img').click(function(){
		
		$('#modal1').modal();
		
		oriPrice = $(this).parent().find('span:eq(1)').attr('value');
		name = $(this).parent().find('span:eq(0)').attr('value');
		
		$('#priceCenter').text(oriPrice);
		$('#drinkName').text(name);
		
	});
	
	
	
	/*
	// 라디오의 값을 span#priceCenter에 주는 경우
	hotCold.change(function(){
		hotCold.prop('checked', false);
		$(this).prop('checked', true);
		
		Number(optionTotal)
	});
	
	size.change(function(){
		sizeP.prop('checked', false);
		$(this).prop('checked', true);
		alert($(this).val())
	});
	
	syrup.change(function(){
		syrup.prop('checked', false);
		$(this).prop('checked', true);
		alert($(this).val())
	});
	
	shot.change(function(){
		shot.prop('checked', false);
		$(this).prop('checked', true);
		alert($(this).val())
	});
	*/
	
	
	// var optionTotal = Number(oriPrice) + Number(sizeP) + Number(syruP) + Number(shotP);
	
	
	$('input#damgi').click(function(){
		alert(hotColdV + " " + sizeV + " " + syrupV + " " + shotV)
		// alert(optionTotal)
		
	});
	



});