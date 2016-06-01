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
		$('.work-wrap2').show();
	});
	
	$('#menu-unit3').click(function(){
		$('.work-belt').css('left','-100%');
		$('.work-wrap3').show();
	});
	
	$('.work-return').click(function(){
		$('.work-belt').css('left','0%');
		$('.work-wrap').hide(400);
		$('.work-wrap2').hide(400);
		$('.work-wrap3').hide(400);
	});
}