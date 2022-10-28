$(function(){

/*	
(5) [로그인]을 누르면 로그인 창이 보이고 [Close]를 누르면 다시 안 보임  (20점)
(6) [전체메뉴]를 선택하면 전체메뉴가 보이고 [Close] 누르면 다시 안 보임 (20점)
(7) 그 외 추가적으로 구현하면 해당 화면 캡쳐하고 코드를 작성합니다. (20점)
*/
	
	// (1) 오늘 날짜 출력 (10점)
	let date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth()+1;
	let day = date.getDate();
	
	$('p#date_wrap > span:nth-child(1)').text(year);
	$('p#date_wrap > span:nth-child(2)').text(month);
	$('p#date_wrap > span:nth-child(3)').text(day);
	
	
	// (2) 포커스 가면 ‘검색어를 입력하세요’를 안보이고 다시 포커스가 없으면 다시 출력 (10점)
	
	$('input#keyword').focusin(function(){
		$(this).css({ 'background' : 'url("")' });
	});
	
	$('input#keyword').focusout(function(){
		$(this).css({ 'background' : 'url("./images/sch_guide.gif") no-repeat' });
	});
	
	
	// (3) 탭팬 구현 (10점)
	
	// $('#tabmenu > .tab_btn1 > a').addClass('on');
	
	let lastTab = $('#tabmenu > dt > a').filter('on');
   
   $('#tabmenu > dt > a').click(function(){
      
      $(this).find('img').attr('src', $(this).find('img').attr('src')).replace('out','over');
      lastTab.find('img').attr('src', lastTab.find('img').attr('src')).replace('over','out');
      
      $(this).addClass('on');
      lastTab.removeClass('on');
      
      $('#tabmenu > dd').hide();
      $(this).parent().next('dd').show();
      
   });
	
	
	// (4) 이미지슬라이드 구현 (10점)
	$('#best_bg > ul').bxSlider({
	    captions: true,
	    slideWidth: 160,
	    slideMargin:0,
	    minSlides: 4,
		maxSlides: 5
  	});
	
});