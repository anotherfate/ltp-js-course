window.onload = function()
{
	document.getElementById('btnCalc').addEventListener('click', calculateInterest)

}

function calculateInterest(e)
{
	var amount = parseFloat(document.getElementById('amount').value);
	var term = parseFloat(document.getElementById('term').value);
	var rate = parseFloat(document.getElementById('interest').value);

	// console.log(amount);
	// console.log(term);
	// console.log(rate);

	var x = 0;
	while(x < term)
	{
		amount = amount + (amount * (rate/12));
		x++;
	}
		console.log(amount.toFixed(2));

}