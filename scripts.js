
$(document).ready(function(){
	FillGrid(gridSize);
	
	$('.tab').click(function(){
		$(this).prev().slideToggle('fast');
	});
	$('.cp').on("change", function(){
		chosenColor = $('.cp:checked').val();
	});
	$('.dp').on("change", function(){
		divmode = $('.dp:checked').val();
			if(divmode==="Circle"){
				$('.cell').css('border-radius','100%');
			}else{
				$('.cell').css('border-radius','0%');
			}
	});
	$('.clear').on("click", function(){
		$('.cell').css('background-color', 'gray');
	});
	$('.resize').on("click", function(){
		gridSize=prompt("Enter a new grid size ranging from 8 to 64");
		if(gridSize>=8&&gridSize<=64){
			$('.board').empty();
			FillGrid(gridSize);
		}else{
			alert("You have entered an invalid figure!");
		}
	})
	$('.borderbutton').on("click", function(){
		if(!borders){
			$('.cell').css('box-shadow','inset 0px 0px 0px 1px gray');
			borders=true;
		}else{
			$('.cell').css('box-shadow','none');
			borders=false;
		}
	});
});
var borders=false;
var gridSize = 16;
divmode = $('.dp:checked').val();
chosenColor = $('.cp:checked').val();


function FillGrid (gridsize){

	var divSize = 100/gridsize;
	for(i=0;i<gridSize;i++){
		for(x=0;x<gridSize;x++){
			$('.board').append('<div class ="cell"></div>');
		}
	}
	$('.cell').width(divSize+"%");
	$('.cell').height(divSize+"%");
	$('.cell').css('background-color','gray');
	$('.cell').mouseenter(function(){
		if(chosenColor==="Rainbow"){
			var letters ='0123456789ABCDEF';
			var rainbow = '#';
			for(var i = 0;i < 6; i++){
				rainbow += letters[Math.floor(Math.random()*16)];
			}
			$(this).css('background-color', rainbow);
		}else{
			$(this).css('background-color', chosenColor);
		}
	});
}
