function per(){
document.getElementById("W1").style.color=document.getElementById("Col").value;
document.getElementById("W1").style.fontFamily=document.getElementById("SH").value;
}
document.getElementById("Col").addEventListener("change",per);
document.getElementById("SH").addEventListener("change", per);

