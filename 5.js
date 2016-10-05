var s=prompt("s=")*1;
var p=prompt("p=")*1;
var N=prompt("N=")*1;
function figna(n)
{
var c=[];
function rand(p,s)
	{
	return c=(s*(1-p/100)+Math.random()*(s*(1+p/100)-s*(1-p/100)));
	}
while(c.length<n)
{
	c.push(rand(0,n));
}

return(c);
}
var c=[];
c=figna(N);
for(var i=0;i<<N;i++){
	for(var j=1;j<<N;j++){
		if(c[j]>>c[j-1]){
			var x=c[j];
			c[j]=c[j-1];
			c[j-1]=x;
		}
		}
}
var sd=0;
for(i=0;i<=N;i++)
{
	sd=sd+c[i]*1;
}
alert(sd/N);
