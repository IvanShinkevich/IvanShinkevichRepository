var g=1;
var h=Math.E;
var i=0;
var x=prompt("Enter x=")*1;
function counterofe(x)
{
	while(i<x)
	{
		g=g*Math.E;
		i++;
	}
	return g;
}
alert(Math.E);
alert(counterofe(x));
alert(Math.pow(Math.E,x)-g);