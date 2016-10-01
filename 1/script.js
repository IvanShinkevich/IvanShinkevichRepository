alert("Занятие")
var x=prompt("x=");
var y=prompt("y=");
var z=prompt("y=");
x=x*1;
y=y*1;
z=z*1;
var max;
if (x>y)
	max=x;
else max=y;
if (z>max)
alert(z)
else alert(max)


function fact(x){
	if(x==0) return 1;
	return x*fact(x-1)
}