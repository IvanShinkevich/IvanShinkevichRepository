(function(){var urls=document.getElementsByTagName('a');
console.log(urls)
var srt=[];
var url=urls[52].innerHTML.substring(0,6);
for(var i=51;i<urls.length;i++)
{	
	if(urls[i].href.substring(7,10)!="www" && ((urls[i].innerHTML.substring(0,6))==url))
	{
		srt.push({anchor: urls[i].children[0].textContent , url: urls[i].href});
	}                          
}
console.log(JSON.stringify(srt))
})()
