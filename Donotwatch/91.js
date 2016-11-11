el=document.getElementById("A2")
el.addEventListener("click" ,function(){
alert("AHAHAHA!!!")
})
setInterval(function(){
var ev=new Event("click");
el.dispatchEvent(ev)
},1000);
