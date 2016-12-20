(function(){var cities=document.getElementsByTagName("table")[2].getElementsByTagName("tr")
var asked=[];
for(var i=5;i<cities.length;i++)
{
	if(cities[i].children[2].textContent*1<=300000)
	{
		asked.push({city: checkName(cities[i].children[1].textContent),population: checkName(cities[i].children[2].textContent)})
	}
}
console.log(JSON.stringify(asked))

function checkName(a)
{
	while(a.substring(0,1)=="\n")
	{
		a=a.substr(1);
	}
	return a;
}
})()