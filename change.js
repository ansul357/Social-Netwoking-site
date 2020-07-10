	function change()
{
	var x=confirm("You know them?");
	if(x==1)
	{
		alert("You have accepted Ansul Kumar Friend Request");
	}
	else
	{
		var y=confirm("Is This is spam?");
		if(y==1)
		{
			alert("Thanks for your feedback");
		}
		else
		{
			alert("OK");
		}
	}

}