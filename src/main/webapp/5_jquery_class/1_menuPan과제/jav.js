$(function(){

	const body = document.querySelector('body');
      const modal = document.querySelector('.modal');
      const btnOpenPopup = document.querySelector('.btn-open-popup');

      btnOpenPopup.addEventListener('click', () => {
        modal.classList.toggle('show');

        if (modal.classList.contains('show')) {
          body.style.overflow = 'hidden';
        }
      });

      modal.addEventListener('click', (event) => {
        if (event.target === modal) {
          modal.classList.toggle('show');

          if (!modal.classList.contains('show')) {
            body.style.overflow = 'auto';
          }
        }
      });
	
	

	var oriPrice;
	var nameV;
	
	$('.menu > img').click(function(){
		
		modal.classList.toggle('show');

		if (modal.classList.contains('show')) {
			body.style.overflow = 'hidden';
		}
		
		oriPrice 	= 	$(this).parent().find('span:eq(1)').attr('value');
		nameV 		= 	$(this).parent().find('span:eq(0)').attr('value');
		
		$('span#priceCenter').text(oriPrice + "원");

	});

	var hotCold = $('.hot/ice > img');
	var size = $('.sml > img');
	var syrup = $('.syrup > img');
	var shot = $('.shot > img');

	var hotColdV = hotCold.parent().find('span:eq(1)').attr('value');
	var sizeP = size.parent().find('span:eq(1)').attr('value');
	var syruP = syrup.parent().find('span:eq(1)').attr('value');
	var shotP = shot.parent().find('span:eq(1)').attr('value');

	hotCold.click(function(){
		hotColdV = $(this).find('span:eq(1)').attr('value');
		alert(hotColdV)
	});

	size.click(function(){
		sizeP = $(this).find('span:eq(1)').attr('value');
		alert(sizeP)
	});

	syrup.click(function(){
		syruP = $(this).find('span:eq(1)').attr('value');
		alert(syruP)
	});

	shot.click(function(){
		shotP = $(this).find('span:eq(1)').attr('value');
		alert(shotP)
	});



});