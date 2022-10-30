$(function(){

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
	// 미리 addClass를 한다.
	$('#tabmenu > .tab_btn1 > a').addClass('on');
	
	let allTab = $('#tabmenu > dt > a');
	let lastTab = allTab.filter('.on');
	
	allTab.click(function(){
		
		let currentTab = $(this);
		
		// 만약 클릭한 탭의 주소가 전 탭의 주소와 같다면 건너뛰기
		if (currentTab.find('img').attr('src') == lastTab.find('img').attr('src')) {
			
		} else {
			
			// 탭의 주소를 변경
			currentTab.find('img').attr('src', currentTab.find('img').attr('src').replace('out','over'));
   			lastTab.find('img').attr('src', lastTab.find('img').attr('src').replace('over','out'));
   			
   			currentTab.addClass('on');
			lastTab.removeClass('on');
		  
			lastTab = currentTab;
			
			// 패널 변화
			$('#tabmenu > dd').hide();
			currentTab.parent().next('dd').show();
			
		}
		
		
	});
	
	
	// (4) 이미지슬라이드 구현 (10점)
	$('#best_bg > ul').bxSlider({
	    slideWidth: 150,
	    slideMargin: 0,
	    captions: true,
		controls : false, 			//좌우 화살표
		pager:false, 				//페이징
		auto: true, 				//자동으로 슬라이드
		autoControls: false,
		moveSlides: 1,
		minSlides: 4,
		maxSlides: 5,
		speed: 500
  	});
  	
  	
  	// (5) [로그인]을 누르면 로그인 창이 보이고 [Close]를 누르면 다시 안 보임  (20점)
  	$('#util_menu .login_wrap img[alt=로그인]').click(function(){
		// $("#log_f").css({ "top" : "20px", "left" : "0px" });
		$('#login_f').css('top','20px');
	});
	
	$('#login_f img[alt=닫기버튼]').click(function(){
		$('#login_f').css('top','-500px');
	});
	
	
	// (6) [전체메뉴]를 선택하면 전체메뉴가 보이고 [Close] 누르면 다시 안 보임 (20점)
	$('#total_btn img[alt=전체메뉴]').click(function(){
		$(this).attr('src',$(this).attr('src').replace('out','over'));
		$('#total_menu').css('display','inline');
	});
	
	$('#total_close img').click(function(){
		$('#total_btn img').attr('src',$('#total_btn img').attr('src').replace('over','out'));
		$('#total_menu').css('display','none');
	});
	
	
	// (7) 그 외 추가적으로 구현하면 해당 화면 캡쳐하고 코드를 작성합니다. (20점)
	
	// 배너의 버튼을 클릭했을 때 배너의 이미지를 바꾸기
	// 그리고 play 버튼을 실행하면 4초마다 배너의 이미지를 바꾸고 stop 버튼을 누르면 슬라이드쇼를 멈추기
	
	// 버튼의 변수를 설정
	let pop_btns = $('#roll_banner_wrap dt > a');
	let lastPop = pop_btns.filter('.active');
	let banners = $('#roll_banner_wrap dd');
	
	pop_btns.click(function(){
		
		// 버튼의 변수를 설정 2
		let currentPop = $(this);
		let currentBanner = currentPop.parent().next();
		
		// 만약 클릭한 탭의 주소가 전 탭의 주소와 같다면 건너뛰기
		if (currentPop.find('img').attr('src') == lastPop.find('img').attr('src')) {
			
		} else {
			
			// 탭의 주소를 변경
			currentPop.find('img').attr('src', currentPop.find('img').attr('src').replace('out','over'));
   			lastPop.find('img').attr('src', lastPop.find('img').attr('src').replace('over','out'));
   			
   			currentPop.addClass('active');
			lastPop.removeClass('active');
		  
			lastPop = currentPop;
			
			// 배너 바꾸기
			banners.hide();
			currentBanner.show();
			
		}
		
	});
	
	let play_btn = $('#roll_banner_wrap p.ctl_btn > a.playBtn');
	let stop_btn = $('#roll_banner_wrap p.ctl_btn > a.stopBtn');
	
	let lastBanner = lastPop.parent().next();
	let pop_num = lastPop.find('img').attr('src').substr(-10,1);
	
	play_btn.click(function(){
		
		setInterval(function(){
			
			if(pop_num == 5) {
				
				
				
			} else {
				
				lastPop.find('img').attr('src', lastPop.attr('src').replace(pop_num,pop_num+1));
				
				banners.hide();
				lastBanner.show();
				
			}
			
		}, 4000);
		
	});
	
	stop_btn.click(function(){
		
		alert(pop_num);
		
	});
	
	
});