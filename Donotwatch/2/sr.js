var s=prompt("s=")*1;
var p=prompt("p=")*1;
var N=prompt("N=")*1;

var c=[];
function rand(p,s)
	{
	return d=(s*(1-p/100)+Math.random()*(s*(1+p/100)-s*(1-p/100)));
	}
while(c.length<N)
{
	c.push(rand(p,s));
}

	c.sort();

var sd=0;
var i=0;
for(i=0;i<N;i++)
{
	sd=sd+c[i]*1;
	
}
sd=sd/N;
alert(sd);
