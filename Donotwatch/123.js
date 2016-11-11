var ravno=document.getElementById("A4");
ravno.addEventListener("click",function(){
var elem1=document.getElementById("A1");
var elem2=document.getElementById("A3");
	var sign=document.getElementById("A2");
switch (sign.value){
		case "+":
		{

		alert(elem1.value*1+elem2.value*1);

	break;
		}

		case "-":
		{
		alert(elem1.value*1-elem2.value*1);

	break;
		}

		case "/":
		{

		alert(elem1.value*1/(elem2.value*1));

	break;
		}

		case "*":
		{
		alert(elem1.value*1*elem2.value*1);

	break;
		}
	}
})



// el.addEventListener("click",function(e){
// 	alert();
// })