var elem=document.getElementById("A1");
var q=":";
var i=0;
setInterval(function(){
	i++;
	if(i%2==0)
		q=":";
	else q=" ";
},100);
var d = setInterval(function(){
	var d = new Date();
	var o=d.getHours();
	var g=d.getMinutes();
	var n=d.getSeconds();
	if(d.getHours()<10){
		o="0"+d.getHours();
		};
	if(d.getMinutes()<10){
		 g="0"+d.getMinutes()}
	if(d.getSeconds()<10){
		 n="0"+d.getSeconds()}

	var s=o+q+g+q+n;
	elem.innerHTML=s;
	
},100);


console.log(document.getElementsByTagName("p"));