var ravno=document.getElementById("A4");
var i=0;
ravno.addEventListener("click" ,function(ev){
ev.preventDefault();
alert(this.getAttribute("href"))
})
