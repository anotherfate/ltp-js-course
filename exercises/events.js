var target;

window.onload=function()
{
	target = document.getElementById('target');
	result = document.getElementById('result');
	target.onclick = function()
	{
		result.innerHTML = "Click Event!"
	}

	target.addEventListener('mouseover', function()
									{
			result.innerHTML = "Mouse Over Event!"
			console.log(e);
									}
		);

	target.addEventListener('mouseout', function()
									{
			result.innerHTML = "Mouse Out Event!"
									}
		);

	var textBox = document.getElementById('myText');
	textBox.onkeypress = function(e)
	{
		console.log(e);
	}

	var myForm = document.getElementById('myForm');
	myForm.onsubmit = function()
	{
		//alert(document.getElementById('name').value);
		if(document.getElementById('name').value == "Grover")
		{
			return false;
		}
	}		

	var a = document.getElementById('targetA');
	var b = document.getElementById('targetB');

	a.addEventListener('click', processEvent);
	b.addEventListener('click', processEvent);

	function processEvent(e)
	{
		console.log(e);
	}



}