var s= prompt("Enter s(number of seconds left,to count it use calculator):")*1;
// var f=prompt("Enter function f:");
// function l(){
// 	JSON.parse(f);
// 	}

var elem=document.getElementById("A1");
var d = setInterval(function(){
	elem.innerHTML=s+" ";
	s--;
	if(s==-2)
		{
		clearInterval(d);
		elem.innerHTML="0";
		// JSON.parse(f);
		alert("Time is out!");
		}
},1000);