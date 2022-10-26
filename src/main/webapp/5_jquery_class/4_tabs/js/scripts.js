$(function(){
	
	let topDiv = $('div.tabSet');
	let anchors = topDiv.find('ul.tabs > li > a');
	let panelDivs = topDiv.find('div.panels > div.panel');
	
	anchors.show();
	panelDivs.hide();
	
	let lastAnchor = anchors.filter('.on');
	let lastPanel = $(lastAnchor.attr('href'));
	lastPanel.show();
	
	anchors.click(function(){
		let currentAnchor = $(this);
		let currentPanel = $(currentAnchor.attr('href'));
		
		lastPanel.hide();
		currentPanel.show();
		
		lastAnchor.removeClass('on');
		currentAnchor.addClass('on');
		
		lastAnchor = currentAnchor;
		lastPanel = currentPanel;
		
	});
	
});