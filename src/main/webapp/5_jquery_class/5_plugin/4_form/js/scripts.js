$(function(){
	
	$('div#signup > form').validate({
		
		rules : {
			name	: { required : true },
			email	: { required : true, 
					  	email : true },
			website	: { url : true},
			password : { minlength : 6,
						 maxlength : 12 },
			passconf : { equalTo : '#password'}
		},
		
		success : function(label){
			label.addClass('valid');
			label.text('성공');
		}
	});
	
	//------------------------------------------------------------
	// attr() -> prop()
	
	/*
	$('input.check-all').click(function(){
		
		var chk = $(this).is(":checked");//.attr('checked');
		// var chkU = $(this).is(":checked");
        if(chk) {
			$("input.agree").prop('checked', true); 
		} else {
			$("input.agree").prop('checked', false);
		}
		
	});
	*/
	
	$('input.check-all').click(function(){ 
		$('input.agree').prop('checked', $('input.check-all').is(':checked')) 
	});
	
	
	
	
});