var p=0;
var t=0;
function serve(){
	var h=location.hash;
	var path="";
	// if(p!=0)
	// {
	// 		MFR.ajax("GET","Excursions.json",function(a){
	// 				var data=JSON.parse(a);
	// 				var i=0;
	// 				console.log(data)
	// 				data.forEach(function(a){
	// 					var o=0;
				
	// 				if(h=="#"+a.title+">"){
	// 				for(var j=0;j<a.type.length;j++){
	// 				console.log(a.type.length)
	// 				MFR.By.Id("a"+i).innerHTML+="<li>\
	// 				<h1><a href='#"+a.type[j].title+">'</a> "+a.type[j].title+"</h1>\
	// 				<ul id='b"+o+"'></ul></li>";
	// 				o++;

	// 				t++;
	// 						}
	// 					}
	// 				i++;
	// 				})
	// 			})
	// }
	// if(p!=0 && t!=0)
	// {
	// 	MFR.ajax("GET","Excursions.json",function(a){
	// 				var data=JSON.parse(a);
	// 				var i=0;
	// 				console.log(data)
	// 				data.forEach(function(a){
	// 					var o=0;
	// 				for(var u=0;u<a.type.length;u++){
	// 				if(h=="#"+a.type[u].title+">"){
	// 				for(var j=0;j<a.type[u].goods.length;j++){
	// 				console.log(a.type.length)
	// 				MFR.By.Id("b"+i).innerHTML+="<li>\
	// 				<h1>"+a.type[u].goods[j].title+"</h1>\
	// 				<img src='"+a.type[u].goods[j].image+"' width='150px' heigth='300px'/>\
	// 				<div> description:"+a.type[u].goods[j].description+"</div>\
	// 				<p>price:"+a.type[u].goods[j].price+"</li>";
					
	// 						}
	// 					}
	// 					o++;
	// 				i++;
	// 			}
	// 				})
	// 			})
	// }
	switch(h)
	{
		case "#Main":
		
			path="main.html";
			break;
		
		case "#Excursions":
		
			path="Excursions.html";
			break;
		
		case "#About":
		
			path="About.html";
			break;
		
		case "#Orders":
		
			path="Orders.html";
			break;
		
		case "#contacts":
		
			path="contacts.html";
			break;
		
		case "#Login":
		
			path="Login.html";
			break;
		
		default:return;
	}
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(this.readyState==4 && this.status==200)
		{
			console.log(path)
			MFR.By.Id("t1").innerHTML=this.responseText;
			// if(h=="#Excursions")
			// {
			// 		MFR.ajax("GET","Excursions.json",function(a){
			// 		var data=JSON.parse(a);
			// 		var i=0;
			// 		data.forEach(function(a){
			// 		MFR.By.Id("t1").innerHTML+="<ul><li>\
			// 		<h1><a href='#"+a.title+">'</a> "+a.title+"</h1>\
			// 		<img src='"+a.image+"' width='150px' heigth='300px'/>\
			// 		<ul id='a"+i+"'></ul></li></ul>";
			// 		i++;
			// 		p++;
			// 		})
			// 	})

			// }
			
		


		}
	}
	
	xhr.open("GET",path,true);
	xhr.send();
}

window.onhashchange=serve;
serve();



	// var Bucket=[];
	// for(var i=0;i<document.getElementsByTagName("input").length;i++){
	// document.getElementsByTagName("input")[i].addEventListener("click",function(){			
	// 			Bucket.push({title:data[this.getAttribute("data-id")*1].title,
	// 				price:data[this.getAttribute("data-id")*1].price})
	// 		console.log(Bucket)

	// })
