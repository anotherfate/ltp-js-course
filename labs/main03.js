window.onload = function() {
	document.getElementById("playButton").addEventListener("click", randomNumber);
	alert("Let's play! Think of a rock, a peice of paper or a pair of scissors.");
};

function randomNumber(e) { 
	var computerAnswer = Math.random();
	if (computerAnswer <= 0.33) {
		alert('Computer chose ROCK!');
	} else if (computerAnswer > 0.33 && computerAnswer <= 0.67) {
		alert('Computer chose PAPER!');
	} else {
		alert('Computer chose SCISSORS!');
	}
};

