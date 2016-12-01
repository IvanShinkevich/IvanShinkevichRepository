var p=0;var n=0;
var t=0;var path="list1.json";
function show(){
var h=location.hash;
	switch(h)
	{
		case "#list1":
		
			path="list1.json";
			break;
		
		case "#list2":
		
			path="list2.json";
			break;
		
		case "#list3":
		
			path="list3.json";
			break;
		
		case "#list4":
		
			path="list4.json";
			break;
		
		case "#list5":
		
			path="list5.json";
			break;
		
		case "#list6":
		
			path="list6.json";
			break;
		
		

	}
			if(h.substring(0,4)!="#vid"){console.log(h.substring(0,4))
					MFR.ajax("GET","list1.json",function(a){
					var data=JSON.parse(a);
					data.forEach(function(a){
							MFR.By.Id(h.substring(1,h.length)).innerHTML+="<ul type='none'><li>\
							<img src='"+a.image+"' width='100px' heigth='100px'/>\
							<a href='#vid"+a.url+"'>"+a.name+"</a>\
							</li></ul><hr>"
					})
				})
			}
			else {
				var xhr=new XMLHttpRequest();
				xhr.onreadystatechange=function(){
				if(this.readyState==4 && this.status==200)
				{
						console.log(h.substring(0,4))
						console.log(this.responseText)
						document.getElementById("main").innerHTML=this.responseText;
						MFR.ajax("GET",path,function(a){
							var data=JSON.parse(a);
							console.log(data)
							console.log(data[0].id)
							data.forEach(function(a){
								if(h.substring(4,h.length+1)==a.url){
									console.log(a.url)
									console.log(a.id)
									player(a.url,a.name,a.id)
								}
							})
		

						})

		
					}

			
				}
	xhr.open("GET","video.html",true);
	xhr.send();

}
}

window.onhashchange=show;
show();



function player(s,n,i){
	console.log(i)
	i=i*1;
	i++;
MFR.By.Id("name").innerHTML=n;
var a=document.getElementById("vid");
a.src=s;
a.controls=false;
a.addEventListener("loadeddata",function(){
	MFR.By.Id("time").innerHTML="00:00/"+time(a.duration);
	MFR.By.Id("progr").max=a.duration;
})

MFR.By.Id("play").addEventListener("click",function(){
	if(a.paused){
		a.play()
		MFR.By.Id("play").style.backgroundImage="url('icons/pause.jpg')"

	}
	else {
		a.pause()
		MFR.By.Id("play").style.backgroundImage="url('icons/play.jpg')"
	}
})

MFR.By.Id("stop").addEventListener("click",function(){
	a.pause()
	a.currentTime=0;
	MFR.By.Id("play").style.backgroundImage="url('icons/play.jpg')";
	MFR.By.Id("time").innerHTML="00:00/"+time(a.duration);
	interval();

})

MFR.By.Id("mute").addEventListener("click",function(){
	if(a.muted){
		a.muted=false;
		MFR.By.Id("mute").style.backgroundImage="url('icons/volume.png')"
		
		MFR.By.Id("rang").value=0.5
	}
	else {
		a.muted=true;
		MFR.By.Id("mute").style.backgroundImage="url('icons/mute.jpg')"; MFR.By.Id("rang").value=0
	}

})

MFR.By.Id("rang").addEventListener("change",function(){
	a.volume=this.value
	if(!(this.value*1))
		MFR.By.Id("mute").style.backgroundImage="url('icons/mute.jpg')"
	else MFR.By.Id("mute").style.backgroundImage="url('icons/volume.png')"
})

MFR.By.Id("rewind").addEventListener("click",function(){
	// if(!(a.playbackRate*1.5>2.25)) 
		a.playbackRate*=1.5
})

MFR.By.Id("rewindb").addEventListener("click",function(){
	// if(!(a.playbackRate/1.5<1/1.5))
	 a.playbackRate/=1.5
})

MFR.By.Id("reload").addEventListener("click",function(){
	if(!a.loop) {a.loop=true;
	 this.style.backgroundColor="grey"
	}
		else {a.loop=false ;
			this.style.removeProperty("background-color")
	}
})

function time(sec){
	sec=Math.round(sec)
	var seconds= ((sec%60)<10 ? "0"+ Math.round(sec%60) : Math.round(sec%60));
	var minutes= ((sec%3600)/60<10) ? "0"+ parseInt((sec%3600)/60) : parseInt((sec%3600)/60);
	var hours= (Math.round(sec/3600)<10) ? "0"+parseInt(sec/3600) : parseInt(sec/3600);
	
	return hours+":"+minutes+":"+seconds;

}

var d;
function interval(){
		MFR.By.Id("time").innerHTML=time(a.currentTime)+"/"+time(a.duration);
		MFR.By.Id("progr").value=a.currentTime;
 

}
a.addEventListener("play",function(){
	d=setInterval(function(){
		MFR.By.Id("time").innerHTML=time(a.currentTime)+"/"+time(a.duration);
		MFR.By.Id("progr").value=a.currentTime;

// 				if(!a.loop && a.currentTime+5>=a.duration)    - неработающий таймер
// 		{
				
// 				var s=15;
// 				var p = setInterval(function(){
// 					MFR.By.Id("timer").innerHTML=s+"<div> Seconds left.If you do not want to watch the next video - please press the button\
// 					<input type='button' id='butt'/>"
// 					MFR.By.Id("butt").addEventListener("click",function(){
// 						a.loop=true;
// 						clearInterval(p);						
// 					})
// 					s--;
// 					if(s==-1)
// 						{
// 						clearInterval(p)
// 						n=1;
						
	
							
						
						
// 					}
// 				},1000);
// 		}
// if(n==1)
// {
// 	MFR.ajax("GET","list1.json",function(a){
// 							var data=JSON.parse(a);
// 							console.log(i)
// 							player(data[i].url,data[i].name,data[i].id);
// 	})
// }

	},1000)
})

a.addEventListener("pause",function(){
	window.clearInterval(d);
})

MFR.By.Id("progr").addEventListener("click",function(event){
	
	 a.currentTime= event.offsetX/this.getBoundingClientRect().width*a.duration;
    this.value=a.currentTime;
    interval();

})


}


	