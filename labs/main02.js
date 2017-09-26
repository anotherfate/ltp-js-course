window.onload = function() {
	document.getElementById("addingButton").addEventListener("click", addNumbers);
	
};

function addNumbers(e) { 
	var answer = "";
	answer += + document.getElementById('inputOne').value + + document.getElementById('inputTwo').value;
	alert(answer)
}


