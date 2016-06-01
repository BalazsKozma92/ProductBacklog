$(function(){
	workBelt();
});

function workBelt(){
	$('#menu-unit1').click(function(){
		$('.work-belt').css('left','-100%');
		$('.work-wrap').show();
	});
	
	$('#menu-unit2').click(function(){
		$('.work-belt').css('left','-100%');
		$('.work-wrap').show();
	});
	
	$('#menu-unit3').click(function(){
		$('.work-belt').css('left','-100%');
		$('.work-wrap').show();
	});
	
	$('.work-return').click(function(){
		$('.work-belt').css('left','0%');
		$('.work-wrap').hide(400);
	});
}