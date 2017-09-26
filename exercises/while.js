window.onload = function()
{
	var counter = 0;
	while(counter < 1001)
	{
		document.getElementById('result').innerHTML += "<br/>" +
		counter;
		counter = counter + 10;
	}
}