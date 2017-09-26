window.onload = function()
{
	var myObject = {a: 93, b: 72, c: 56, d: 88, e: 85, f: 91};
	var myKeys = [];
	var i = 0;

	for(myKeys[i++] in myObject)
		console.log(myKeys);

	// for(var counter = 0; counter < 45; counter++ )
	// 	{
	// 		out += counter;
	// 		out += "<br/>";
	// 	}
	// document.getElementById('result').innerHTML = out;


}