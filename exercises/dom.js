window.onload = function() 
{
	document.getElementById("main").innerHTML += 
		"<p>This element was added dynamically</p>"
	console.log(document.getElementById("main"));
	var content = document.getElementById("main");
	content.setAttribute('class', 'blue');
	content.style.backgroundColor = "yellow";

};




