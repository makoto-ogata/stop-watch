var number = document.getElementsByClassName('number');
var count = 0;
var btnText = 0;

$('#left-button').on('click', function(){
	if (btnText == 0){
		$('#left-button').text('ストップ');
		$('#right-button').text('ラップ');
		btnText = 1;
		myInterval = setInterval(countUp ,1000);

	} else {
		$('#left-button').text('スタート');
		$('#right-button').text('リセット');
		btnText = 0;
		clearInterval(myInterval);
	}
});

$('#right-button').on('click',function() {
		if (btnText == 1){
			var lapCount = count;
			$('.lap-time-addArea').append('<p class="underline-text">'+ lapCount +'</p>');
			console.log('count: ' + lapCount);
		} else {
			$(number).text(0);
			count = 0;
			$('.lap-time-addArea').empty();
		}
});

var countUp = function(){
	count++;
	$(number).text(count);
	//console.log('count: ' + count);
}
