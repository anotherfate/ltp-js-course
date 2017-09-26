window.onload = function()
{
	var counter = 0;
	do
	{
		document.getElementById('result').innerHTML += "<br/>" +
		counter;
		counter++;
	} while (counter < 15);

	// do while will iterate at least once, a while loop will not if the initial condition is false
}