var a=fr.get.byId('f');
a.onsubmit=function(e){
	if (this.checkValidity()==false && document.getElementByName("p1")==document.getElementByName("p11")) alert("Not valid");
	if (this.checkValidity()==true && document.getElementByName("p1")==document.getElementByName("p11")) alert("Valid");
	e.preventDefault();
	}
a.onreset=function(e){
	var t=confirm("Do you really wanna reset the form?")
	if (t==false) e.preventDefault();
}
