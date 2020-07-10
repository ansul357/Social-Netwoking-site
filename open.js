function vali()
{

	var x=document.getElementById('uname').value;
	var y=document.getElementById('pass').value;
	if(x==null||x==""&& y==null||y=="")
	{
		alert("You have to fill this Field");
		return false;
	}
		
		else
		{
			window.open('index.html');
			return true;
		}
}
function ima()
{
	document.getElementById("imag1").src='bell.gif';
}