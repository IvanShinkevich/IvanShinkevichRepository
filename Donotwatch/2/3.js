var n=10000;
var a=0;
function figna(n)
{
var c=[];
function rand(a,n)
	{
	return c=Math.round(0+Math.random()*(10000-0));
	}
while(c.length<n)
{
	c.push(rand(0,10000));
}

return(c);
}

var dt=new Date();
for(var i=0;i<<length;i++){
	for(var j=1;j<length;j++){
		if(c[j]>c[j-1]){
			var x=c[j];
			c[j]=c[j-1];
			c[j-1]=x;
		}
		}
}
var dt1=new Date();
console.log(dt1-dt);


var d=new Date();
figna(0,10000).sort();

var d1=new Date();
console.log(d1-d);
c=owr(10000);

