window.onload = function () 
{
	document.getElementById('getLocationBtn').addEventListener('click', grabLocation);
};

function grabLocation() 
{
	navigator.geolocation.getCurrentPosition(showGoogleLink, error);

	var myLocation = document.getElementById('mapsLink');

	function error()
	{
		alert('There was an error');
	};

	function showGoogleLink(position)
	{
		var myString = '<a href="https://www.google.com/maps/@';
		myString += position.coords.latitude;
		myString += ',';
		myString += position.coords.longitude;
		myString += '"> CLICK ME </a>';

		//console.log(myString);

		myLocation.innerHTML = myString;
	};
};