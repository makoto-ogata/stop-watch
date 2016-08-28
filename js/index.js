var number = document.getElementsByClassName('number');
var count = 0;
var clickNum = 0;

$('.start').on('click', function(){
		myInterval = setInterval(countUp ,1000);
		$(this).removeClass('active');
		$('.stop').addClass('active');
});

$('.stop').on('click', function(){
		clearInterval(myInterval);
		$(this).removeClass('active');
		$('.start').addClass('active');
		$('.lap').removeClass('active');
		$('.reset').addClass('active');
});


$('.reset').on('click', function(){
		$(number).text(0);
		count = 0;
		$('.lap-time-addArea').empty();
		$(this).removeClass('active');
		$('.lap').addClass('active');
});

$('.lap').on('click', function(){
		$(this).data('click', clickNum++); //クリックされた回数
		var clickCount = $(this).data('click');
		var lapCount = count;

		if(clickCount > 0){
			$('.lap-time-addArea').append('<p class="underline-text">'+ count +'</p>');
		}else{
			lapTime = count - lapCount;
			$('.lap-time-addArea').append('<p class="underline-text">'+ lapTime +'</p>');
		}
});

var countUp = function(){
	count++;
	$(number).text(count);
	//console.log('count: ' + count);
}
