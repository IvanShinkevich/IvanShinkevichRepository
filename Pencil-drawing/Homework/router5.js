function serve(){
	var h=location.hash;
	var path="";
	switch(h)
	{
		case "#main":
		
			path="main.html";
			break;
		
		case "#exc":
		
			path="excursions.html";
			break;
		
		case "#popu":
		
			path="popusers.html";
			break;
		
		case "#about":
		
			path="aboutus.html";
			break;
		
		case "#contacts":
		
			path="contacts.html";
			break;
		
		case "#entrance":
		
			path="signlogin.html";
			break;
		
		default:return;
	}
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(this.readyState==4 && this.status==200)
		{
			document.getElementById("field").innerHTML=this.responseText;
			switch(h)
			{
				case "#entrance":
				document.getElementById("cl").addEventListener("click",function(){
					alert(document.getElementById("texts").innerHTML)
				})
				break;
				case "#contacts":
				document.getElementById("smth").addEventListener("click",function(){
					alert("Sorry,but nothing interesting - well,in later versions - I`ll try to place form here:)")
				});
				break;
			}
		}
	}
	xhr.open("GET",path,true);
	xhr.send();
	
}

window.onhashchange=serve;
serve();
