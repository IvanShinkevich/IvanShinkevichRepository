(function(){var arr=document.getElementsByClassName("index-list__item is-active");
var Airlines=[]
for(var i=0;i<arr.length;i++)
{
	Airlines[i]=arr[i].textContent;
}
console.log(JSON.stringify({Airlines}))
})()