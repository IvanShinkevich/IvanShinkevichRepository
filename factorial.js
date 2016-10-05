


alert("Вычисление факториала");
var x=prompt("x=");
if (Number(x)==parseInt(x))
	{
		x=x*1;
	function fact(x)
	{
		if(x==0) return 1;
		return x*fact(x-1);
	}
}
else alert("Факториал вычисляется только для целого числа!");

alert( fact(x));