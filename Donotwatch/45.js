var sub=document.getElementById("S1");
sub.addEventListener("click",function(event){
	console.log(event)
	var er=document.getElementById("S2");
	var el1=document.getElementById("A1");
	var el2=document.getElementById("A2");
	var el3=document.getElementById("A3");
	var elem=document.createElement("div");
	elem.innerHTML=el1.value+""+el2.value+el3.value;
	elem.addEventListener("click",function(e){

		alert(this.innerHTML)
	})
	er.appendChild(elem);
});

// var elem=document.getElementsByTagName("div")
// elem.addEventListener("click",function(e){
// 	alert(elem.value)
// })