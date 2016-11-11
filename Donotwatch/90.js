var el=document.getElementById("A2");
el.addEventListener("click" ,function(){
document.getElementById("popup").style.display="block";
})
document.getElementById("popup").addEventListener("click" ,function(){
	this.style.display="none";
})
document.getElementById("container").addEventListener("click" ,function(ev){
	ev.stopImmediatePropagation();
})