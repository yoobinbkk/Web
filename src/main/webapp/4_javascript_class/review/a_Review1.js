/**
 * 
 */
 
window.onload = function() {
	
	let cell = document.getElementsByClassName('item');
	
	for(let i=0 ; i<cell.length ; i++) {
		
		cell[i].onclick = function(evt) {
		
		alert("OK")
		evt.stopPropagation();
		evt.preventDefault();
		
		let price = evt.target.getAttribute('data-price');
		if(price) {
			alert("값 : " + price)
			}
		}
	}
	
};