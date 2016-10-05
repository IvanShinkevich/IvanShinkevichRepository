var n=prompt("n=")*1;
var a=0;
	function figna(n)
	{
		var c=[];
		function rand(a,n)
			{
			return g=Math.round(0+Math.random()*(n-0));
			}
		while(c.length<n)
		{
		c.push(rand(0,n));
		}

	return(c);
	}

	var f=[];
	f=figna(n);
	console.log(f);
var i=0;
var j=0;
while(i<n)
{
	if(f[i]%3==0)
	{
		j++;
	}
	i++;
}
alert(j);