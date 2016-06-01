$(function(){
	workBelt();
});

function workBelt(){
	$('.menuUnit').click(function(){
		$('.work-belt').css('left','-100%');
	});
	
	$('.work-return').click(function(){
		$('.work-belt').css('left','0%');
	});
}