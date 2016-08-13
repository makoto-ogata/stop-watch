var number = document.getElementById('number');
var reset = document.getElementById('reset');
var count = 0;
var btnText = 0;

action.onclick = function(){
	if (btnText == 0){
		$('#action').text('ストップ');
		$('#reset').text('ラップ');
		btnText = 1;
		myInterval = setInterval(countUp ,1000);
	} else {
		btnText = 0;
		$('#action').text('スタート');
		$('#reset').text('リセット');
		clearInterval(myInterval);
	}
}

reset.onclick = function() {
	$(number).text(0);
	count = 0;
}

var countUp = function(){
	count++;
	$(number).text(count);
	console.log('count: ' + count);
}
