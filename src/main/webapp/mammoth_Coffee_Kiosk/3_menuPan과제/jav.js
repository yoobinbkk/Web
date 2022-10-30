$(function(){
	
	// 옵션 배열
	let options = ['hot_cold', 'size', 'syrup', 'shot']
	
	// radio의 값을 가져오는 걸 Test
	for (let i=1 ; i<=options.length ; i++) {
		
		// 버튼 선택자를 임시 변수에 넣기
		let chk_btn = $('table.optiontbl button:nth-child(' + i + ')');
		
		// 확인 버튼을 클릭하면
		chk_btn.click(function() {
		    var value = $('input:radio[name=' + options[i-1] + ']:checked').val();
		    // 라디오의 현재 값을 출력
		    alert(value);
		});
		
	}
	
	// radio 버튼 초기화하는 함수
	function reset(){
		$("table.optiontbl input:radio").prop('checked', false);
		$("input#medium").prop('checked', true);
		$("input#Hot").prop('checked', true);
		$("input#noSyrup").prop('checked', true);
		$("input#noShot").prop('checked', true);
	}
	
	// radio 버튼 초기화하는 버튼
	$('table.optiontbl button:nth-child(5)').click(function() {
		reset();
	})
	
	// modal.close() + reset
	function m_close(){
		reset();
		$.modal.close();
	}
	
	//----------------------------------------------------------------------------
	
	
	// 메뉴의 가격과 이름
	var oriPrice = 0;
	var name = null;
	
	
	// radio의 선택자를 변수에 넣기
	let opt1 = $('input:radio[name=hot_cold]');
	let opt2 = $('input:radio[name=size]');
	let opt3 = $('input:radio[name=syrup]');
	let opt4 = $('input:radio[name=shot]');
	
	// radio의 값을 변수에 넣기
	let opt1V = $('input:radio[name=hot_cold]:checked').val();
	let opt2V = $('input:radio[name=size]:checked').val();
	let opt3V = $('input:radio[name=syrup]:checked').val();
	let opt4V = $('input:radio[name=shot]:checked').val();
	
	// radio를 클릭했을 때 그 radio의 값을 변수에 넣기
	opt1.click(function(){
		opt1V = $(this).val();
	});
	
	opt2.click(function(){
		opt2V = $(this).val();
	});
	
	opt3.click(function(){
		opt3V = $(this).val();
	});
	
	opt4.click(function(){
		opt4V = $(this).val();
	});
	
	
	// optionTotal = Number(oriPrice) + Number(opt2V) + Number(opt3V) + Number(opt4V);
	// drinkName = name + " (" + opt1V + ")";
	
	
	// 메뉴 이미지 클릭하면
	$('table.menutbl img').click(function(){
		
		// 모달(옵션)창 띄우기
		$('#modal1').modal();
		
		// 변수 선언
		oriPrice 	= 	$(this).parent().find('span:eq(1)').attr('value');
		name 		= 	$(this).parent().find('span:eq(0)').attr('value');
		
		// 옵션창의 총액과 이름에 값을 넣기
		// $('#priceCenter').text(tempOP);
		// $('#drinkName').text(tempN);
		
		// 위의 값을 변수에 넣기
		// oriPrice = Number(tempOP);
		// name = tempN;
		
		// 옵션 값을 넣기
		$('#priceCenter').text(Number(oriPrice) + Number(opt2V) + Number(opt3V) + Number(opt4V));
		$('#drinkName').text(name);
		
	});
	
	
	$('#damgi').click(function(){
		
		// 확인
		// alert(drinkName + " " + optionTotal);
		// alert($('#priceCenter').text() + " " + $('#drinkName').text());
		// alert(name + " " + oriPrice);
		alert(oriPrice + " " + opt2V + " " + opt3V + " " + opt4V);
		
		// 주문 내역에 값을 넣기
		for (let i=0 ; i<15 ; i++) {
			
			if($('tr.list:eq(' + i + ') > td:eq(0)').text() != '') {
			
			} else {
				
				$('tr.list:eq(' + i + ') > td:eq(0)').text(name + " (" + opt1V + ")");
				// $('tr.list:eq(' + i + ') > td:eq(1)').append
				// $('tr.list:eq(' + i + ') > td:eq(2)').append()
				
				// 총액에 값을 넣기
				$('#totallist > td').text((currentTotal + Number(oriPrice) + Number(opt2V) + Number(opt3V) + Number(opt4V)) + "원");
				break;
				
			}
			
		}
		
		m_close();
		
	});
	
	var currentTotal = parseInt($('#totallist > td').text());
	

});