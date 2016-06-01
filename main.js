$(function(){
	workBelt();
});

function workBelt(){
	$('.menuUnit').click(function(){
		$('.work-belt').css('left','-100%');
		$('.work-wrap').show();
	});
	
	$('.work-return').click(function(){
		$('.work-belt').css('left','0%');
		$('.work-wrap').hide(400);
	});
}