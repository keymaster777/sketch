
$(document).ready(function(){
	FillGrid(gridSize);
	$('.cell').mouseenter(function(){
		$(this).css('background-color', chosenColor);
	});
	$('.tab').click(function(){
		$(this).prev().slideToggle('slow');
	});
	$('.cp').on("change", function(){
		chosenColor = $('.cp:checked').val();
	});
});
var chosenColor = 'black';
var gridSize = 16;
function FillGrid (gridsize){
	var divSize = (540/gridsize);
	for(i=0;i<gridSize;i++){
		for(x=0;x<gridSize;x++){
			$('.board').append('<div class ="cell"></div>');
		}
	}
	$('.cell').width(divSize);
	$('.cell').height(divSize);
	$('.cell').css('background-color','gray');
}
