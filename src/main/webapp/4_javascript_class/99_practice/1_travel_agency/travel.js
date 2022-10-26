

window.onload = function() {
	
	/*for (let i=0 ; i<=10 ; i++) {
		document.getElementById('aPay').add( new Option(i, i));
		document.getElementById('yPay').add( new Option(i, i));
		document.getElementById('bPay').add( new Option(i, i));
	}*/
	
	// 가격 계산
	let aPay 	= document.getElementById('aPay');
	let yPay 	= document.getElementById('yPay');
	let bPay 	= document.getElementById('bPay');
	let total 	= document.getElementById('total');
	
	aPay.oninput = calc;
	yPay.oninput = calc;
	bPay.oninput = calc;
	
	function calc () {
		total.value = (aPay.value*39000 + yPay.value*29000 + bPay.value*19000) + '원';
	}
	
	let frm = document.getElementById('frm');
	
	/* let name = document.getElementById('name');
	let engFam = document.getElementById('engFam');
	let engName = document.getElementById('engName'); */
	
	let r1 = document.getElementById('radio');
	let r2 = document.getElementById('radio2');
	
	// 필수 조건 걸기
	frm.onsubmit = function(evt) {
		evt.stopPropagation();
		evt.preventDefault();
		
		/* if(!frm.checkbox.checked) {
			alert('여행 약관에 반드시 동의하셔야 합니다.');
			return;
		} else if (!frm.checkbox2.checked) {
			alert('개인정보보호정책에 반드시 동의하셔야 합니다.');
			return;
		} else if (!r1.checked && !r2.checked) {
			alert('성별을 선택하셔야 합니다.');
			return;
		} */
		
		// alert('ok');
		
		/* if(!name.matches(/^[가-힣]{2,4}$/)) {
			alert('한글 이름을 적으세요.')
			return;
		} else if (engFam.matches(/^[a-zA-Z]{2,30}$/)) {
			alert('영어 이름의 성을 적으세요.')
			return;
		} else if (engName.matches(/^[a-zA-Z]{2,50}$/)) {
			alert('영어 이름을 적으세요.')
			return;
		} */
		
		if (!r1.checked && !r2.checked) {
			alert('성별을 선택하셔야 합니다.');
			return;
		} else if (total.value=='0원') {
			alert('여행 인원수를 정하셔야 합니다.');
			return;
		}
		
		frm.submit();
			
	}
	
	
}