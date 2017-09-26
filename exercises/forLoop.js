window.onload = function()
{
	var out = "";
	for(var counter = 0; counter < 45; counter++ )
		{
			out += counter;
			out += "<br/>";
		}
	document.getElementById('result').innerHTML = out;


}