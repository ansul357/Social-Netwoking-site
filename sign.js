function check()
  {
var a=document.getElementById("password").value;
var b=a.length;
if(b<=6)
{
  alert("You have Entered short password");
  return false;
}
}
function final()
{
  gen();
var x=document.getElementById("username").value;
var y=document.getElementById("usernames").value;
if(x==null||x==""&& y==null||y=="")
  {
    alert("You have to fill  All this Field");
  }
    
var a=document.getElementById("condition").checked;
if(a==false)
{
  alert("You have to accept  Term and Condition");
} 
 else
    {
      window.open('index.html');
    
    }

}

function gen()
{
  var x= document.getElementById("gender").checked;
  var y=document.getElementById("gender1").checked;
  if(x==false&&y==false)
  {
      alert("MALE OR FEMALE?");
      window.open('sign.html')
    
  }
}
function vali()
  {
    var x=document.getElementById("password").value;
    var y=document.getElementById("confirmyourpassword").value;
     if(x!=y)
    {
      alert("Your Passwords Does not match");
    }
    return false;
  }
  

  