window.onload = function() {
	document.getElementById('findNameBtn').addEventListener('click', lookForName);
};

function lookForName() {
	var myName = "Michael";
	var timesFound = [];
	var text = document.getElementById('inputNameBox').value;

	for (var i = 0; i < text.length; i++) {
		if (text[i] === "M") {
			for (var j = i; j < (myName.length + i); j++){
				timesFound.push(text[j]);
			}
		}
	}


	if (timesFound.length === 0) {
		alert("Michael wasn't found.");
	} else {
		alert("Michael appears " + (timesFound.length / myName.length) + " times.")
	}


}

