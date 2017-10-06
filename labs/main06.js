window.onload = function() {

	var randomBox1 = document.getElementById('eventBox1');
	var randomBox2 = document.getElementById('eventBox2');

	randomBox2.onmouseover = function() {
		alert('You hovered over the red box!');
	}
	randomBox1.onclick = function(e) {
		alert('X=' + e.clientX + ' and Y=' + e.clientY);
	}

	window.onkeypress = function() {
		alert('You pressed a key!');
	}
}