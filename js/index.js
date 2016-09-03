var count = 0; //変数countに0を代入
var lapCount = 0;

$('.start').on('click', function(){
		myInterval = setInterval(countUp ,1000);
		$(this).removeClass('active');
		$('.stop').addClass('active');
		$('.lap').prop('disabled', false);
});

$('.stop').on('click', function(){
		clearInterval(myInterval);
		$(this).removeClass('active');
		$('.start').addClass('active');
		$('.lap').removeClass('active');
		$('.reset').addClass('active');
});


$('.reset').on('click', function(){
		$('.number').text(0);
		count = 0;
		$('.lap-time-addArea').empty();
		$(this).removeClass('active');
		$('.lap').addClass('active');
		$('.lap').prop('disabled', true);
});

$('.lap').on('click', function(){
		var lapTime = count - lapCount;
		$('.lap-time-addArea').append('<p class="underline-text">'+ lapTime +'</p>');
		lapCount = count;
});


var countUp = function(){
	count++;
	$('.number').text(count);
	//console.log('count: ' + count);
}
