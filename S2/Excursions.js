var addElem=function(el){
	var buckcl=el.text()
	if(JSON.parse(localStorage.getItem('goods'))){
		var goods=JSON.parse(localStorage.getItem('goods'))
		for(var i=0;i<(JSON.parse(localStorage.getItem('goods'))).length;i++)
		{
			if(goods[i][0]==buckcl)
			{
				goods[i][1]++;
				$('#'+buckcl).html(buckcl+':'+goods[i][1])
				$('#Total').html($('#Total').text()*1+el.parent().find('.total').text().substring(0,el.parent().find('.total').text().length-1)*1)
				localStorage.setItem('goods',JSON.stringify(goods))
			}
		}
	}
	else{
		var goods= (localStorage.getItem('goods'))? JSON.parse(localStorage.getItem('goods')): []
		goods[goods.length]=[''+buckcl,1,el.parent().find('.total').text().substring(0,el.parent().find('.total').text().length-1)*1]
		localStorage.setItem('goods',JSON.stringify(goods))
		$('div.goods').append($('<p id='+buckcl+'>'+buckcl+': 1 <p>'))
		$('#Total').html($('#Total').text()*1+el.parent().find('.total').text().substring(0,el.parent().find('.total').text().length-1)*1)
	}
}
var bucket=function(){
	var bucketB=$("<div id='bucket'><span class='zero'>0</span><img src='images/bucket.png'></img></div>");
	bucketB.css({
		"position":"fixed",
		"width":"100px",
		"heigth":"40px",
		"bottom":"5px",
		"right":"5px"
	})
	$(bucketB).find("img").css({
		"height":"35px",
		"width":"35px",
		"float":"left",
		"left":"0"
	});
	bucketB.click(function(){
		$('div.b-popup').show();
	});
	$('ul').after($(bucketB))
	var bucketL=$("<div class='b-popup'>\
		<div class='b-popup-content'>\
		    Text in Popup<img src='images/close.png'></img>\
		   <div class='goods'></div>\
		   <p>Total: <span id='Total'><span class='zero'>0</span></span><p>\
		   <input type='button' id='clear' value='Сбросить покупки'/>\
		</div>\
	</div>");
	$('#clear').css({
		"width":"200px",
		"height":"45px",
		"border-radius":"7px"
	})
	$('#clear').click(function(){
		window.localStorage.clear();
	})
	bucketL.find('img').css({
		'top':"0",
		"right":"0",
		"width":'35px',
		"height":'35px',
		'float':"right"
	})
	bucketL.find('img').click(function(){
	$(this).parent().parent().hide()
	})
	$('body').append(bucketL)
	$('div.b-popup').hide()
	var adv=$("<div id='add'>Element added</div>")
	adv.css({
		'border-radius':"15px",
		"width":"25%",
		"height":"50px",
		"font-size":"30px",
		"position":"fixed",
		"top":"0",
		"text-align":"center",
		"background-color":"grey",
		"margin-left":"33%",
		'opacity':'hidden'
	});
	$('body').append(adv)
	adv.hide()
}
function serve(){
	var h=location.hash;
	var path="";
	switch(h)
	{
		case "#main":
		
			path="main.html";
			break;
		
		case "#cat":
		
			path="cat.html";
			break;
		
		case "#popu":
		
			path="popusers.html";
			break;
		
		case "#about":
		
			path="aboutus.html";
			break;
		
		case "#contacts":
		
			path="contacts.html";
			break;
		
		case "#entrance":
		
			path="signlogin.html";
			break;
		
		default:return;
	}
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(this.readyState==4 && this.status==200)
		{
			$("#field").html(this.responseText);
			if(h=="#cat")
			{
				MFR.ajax("GET","Excursions.json",function(a){
					var data=JSON.parse(a);
					var el=$("#list");
					bucket()
					data.forEach(function(a){
						var el1=$("<li><p>\
						<img src='"+a.image+"' width='300px' heigth='300px'/></p>\
						<input type='button' value='"+a.title+"'/>\
						</li><ul id='a"+a.title+"'></ul>")
						el.append(el1);
						el1.find($("img")).css({
							"float":"none"
						})
						el1.find($('input')).css({
							"width":"300px",
							"height":"70px",
							"border-radius":"15px",
							"font-size":"35px",
							"margin":"2px"
						})					
						el1.find($('input')).click(function(e){
							if(!(($("#a"+$(this).val() )).children().length))
							{
							loadCat($(this).val())	
							}
							else{
								$("#a"+$(this).val()).html('')
							}
						});
					})
				})
			}
		}
	}
	xhr.open("GET",path,true);
	xhr.send();
}
window.onload=function(){
	buck=0;
	if(!window.location.hash)
	window.location.hash='#main';
	serve();
	window.onhashchange=serve;
	if(localStorage.getItem('goods'))
	{
		bucket()
		var goods=JSON.parse(localStorage.getItem('goods'))
		console.log(goods[0][2])
		for(var l=0;l<goods.length;l++)
		{
			$('div.goods').append($('<p id='+goods[l][0]+'>'+goods[l][0]+': '+goods[l][1]+' <p>'))
		console.log(goods[1])
			$('#Total').html($('#Total').text()*1+goods[l][2])
		}
			
	}
}
var loadCat=function(title){
	MFR.ajax("GET","Shop.json",function(a){
		var data=JSON.parse(a);
		data.forEach(function(a){
			if(title==a.title){
				var el=$("#a"+a.title)
				for(var j=0;j<a.type.length;j++){
					var el1=$("<p><input type='button' value='"+a.type[j].title+"'/></p>")
					el.append(el1)
					el.find("p").css({
						"margin-left":"30px"
					})
					el.find($('input')).css({
						"width":"270px",
						"height":"55px",
						"border-radius":"15px",
						"font-size":"35px",
						"margin":'5px'
					})
					el1.find($('input')).click(function(){
						var str=findName($(this).val())
						if(!(($('.'+str)).children().length))
						{
							var el=$('<div class='+str+'></div>')
							ev(data,el,$(this))
						}
						else{
							($('.'+str)).detach()
						}				
					})
				}
			}
		})
	})
}
var ev=function(data,obj,obj1){
	data.forEach(function(a){
		for(var u=0;u<a.type.length;u++){
			if($(obj1).val()==a.type[u].title){
				for(var j=0;j<a.type[u].goods.length;j++){							
					var el=$("<div><h1>"+a.type[u].goods[j].title+"</h1>\
					<img src='"+a.type[u].goods[j].image+"'></img>\
					<p><b>price:<span class='total'>"+a.type[u].goods[j].price+"</span>\
					</b><input type='button'/> </p></div>")
					 el.css({
					 	"border":"3px solid black",
						"display":"inline-block",
						 "width":"22%",
						 "vertical-align":"top",
						 "font-size":"20px",
						 "border-radius":"15px",
						 "box-sizing":"border-box",
						 "margin":"2px"
					 })
					el.find('img').css({
						"vertical-align":"center",
						"width":"150px",
						"height":"150px",
						"horizontal-align":"left"
					});	
					el.find('h1').css({
						"vertical-align":"top",
						"horizontal-align":"left"
					});	
					el.find('p').css(
					{
						"font-size":"35px",
						"margin-bottom":"1px"
					});	
					el.find('input').css({
						"background-image":"url(images/add.png)",
						"background-repeat":"no-repeat",
						"background-position":"center" ,
						"width":"35px",
						"height":"35px",
						"border-radius": "3px"
					});
					el.find('input').click(function(){
						$('#add').fadeIn(3000,function(){
							$(this).fadeOut(5000)
						})						
						buck++;
						$('.zero').detach()
						$("#bucket").html(buck);
						//function for checking whether I have such an item in localStorage ang changing second parametr(amount of items of such a type)
						//finish bucket
						//add 'view more' on items(?)
						addElem($(this).parent().parent().children('h1'))
					})
					$(obj1).after($(obj).append(el))
				}						
			}
		}
	})
}
var findName=function(str){
	var finStr=' ';
	for(var i=0;i<str.length;i++)
	{
		if(str[i]==' ')
		{
			finStr=str.substring(0,i)
			break;
		}
	}
	return finStr
}