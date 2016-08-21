var number = document.getElementById('number');
var count = 0;
var btnText = 0;

$('#left-button').on('click', function(){
	if (btnText == 0){
		$('#left-button').text('ストップ');
		$('#right-button').text('ラップ');
		btnText = 1;
		myInterval = setInterval(countUp ,1000);
	} else {
		btnText = 0;
		$('#left-button').text('スタート');
		$('#right-button').text('リセット');
		clearInterval(myInterval);

		$('#right-button').on('click',function() {
			$(number).text(0);
			count = 0;
		});
	}
});

var countUp = function(){
	count++;
	$(number).text(count);
	console.log('count: ' + count);
}
