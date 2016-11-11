var c=prompt("Введите коэффициенты через пробел:").split(" ");
var x=prompt("Введите x:")*1;
var i=0;
var b=0;
while(i<c.length){
	b=b+c[i]*Math.pow(x,i);
	i++;
}
alert(b);