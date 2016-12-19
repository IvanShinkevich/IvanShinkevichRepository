(function(){
	var table = document.getElementsByTagName("tbody")[1].getElementsByTagName("tr")
	var obj=[["Азия",[[table[0].children[0].textContent,table[0].children[5].textContent]]]]
	for(var i=1;i<table.length;i++)
	{
		var j=0;
		for(j;j<obj.length;j++)
		{
			if(obj[j][0]==table[i].children[6].textContent)
			{
				obj[j][1].push([table[i].children[0].textContent,table[i].children[5].textContent])
				break;
			}
		}
		if(j==obj.length)
		{
			obj.push([table[i].children[6].textContent,[table[i].children[0].textContent
			,table[i].children[5].textContent]]);
		}
	}

	var transform=function(obj){
		var o=[];
		var sub=new Object();
		for(var i=0;i<obj.length;i++)
		{
			var sub=new Object();
			sub.worldSide=obj[i][0];
			sub.value=obj[i][1];
			o.push(sub);
		}
		return o;
	}
	console.log(JSON.stringify(transform(obj)))
})()



https://sites.google.com/view/statslab