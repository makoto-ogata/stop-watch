var action = document.getElementById('action');
var message = 'ボタンを押しました';
var number = document.getElementById('number');
var count = 0;


action.onclick = function(){
	countUp();
}

function alertFuncton (){
	alert(message);
}

var countUp = function() {
	number.innerHTML = count;
	count++;
	setTimeout(countUp, 1000);
}

