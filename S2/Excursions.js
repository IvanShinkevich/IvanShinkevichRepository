var p=0;
var t=0;
var buck=0;
localStorage.clear()
var addElem=function(el){
	// console.log(el.parent().find('div.total').text().substring(0, el.parent().find('div.total').text().length - 1)*1+1)
	console.log(el.parent().find('.total').text())
	var buckcl=el.text()
	if(localStorage.getItem(buckcl))
	{
		
		localStorage.setItem(buckcl,(localStorage.getItem(buckcl)*1+1)+"")
		document.getElementById(buckcl+'').innerHTML=buckcl+':'+localStorage.getItem(buckcl)
		// console.log(el.parent().find($('div.total')).text()*1)
		document.getElementById('Total').innerHTML=$('#Total').text()*1+el.parent().find('.total').text().substring(0, el.parent().find('.total').text().length - 1)*1

	}
	else{
		localStorage.setItem(buckcl,1)
		// alert(buckcl)
		$('div.goods').append($('<p id='+buckcl+'>'+buckcl+': 1 <p>'))
		document.getElementById('Total').innerHTML=$('#Total').text()*1+el.parent().find('.total').text().substring(0, el.parent().find('.total').text().length - 1)*1
	}

}


$(document).ready(function(){
        //Скрыть PopUp при загрузке страницы    
        $('div.b-popup').hide()
    });


var bucket=$("<div class='b-popup'>\
	<div class='b-popup-content'>\
        Text in Popup<img src='images/close.png'></img>\
       <div class='goods'></div>\
       <p>Total: <span id='Total'>0</span><p>\
    </div>\
</div>")
bucket.find('img').css({
	'top':"0",
	"right":"0",
	"width":'35px',
	"height":'35px',
	'float':"right"

})
bucket.find('p#Total').css({
	'margin':"0"
})
bucket.find('img').click(function(){
	$(this).parent().parent().hide()
})

$('body').append(bucket)

var el1=$("<div>Element added</div>")
el1.css({
	'border-radius':"15px",
	"width":"25%",
	"height":"50px",
	"font-size":"25px",
	"position":"fixed",
	"top":"0",
	"text-align":"center",
	"background-color":"grey",
	"margin-left":"33%",
	'opacity':'hidden'
});
$('body').append(el1)
el1.hide()

function serve(){
	var h=location.hash;
	var path="";
	if(p!=0)
	{
		MFR.ajax("GET","Shop.json",function(a){
			var data=JSON.parse(a);
			var i=0;
			data.forEach(function(a){
				var o=0;
				if(h=="#"+a.title){
					for(var j=0;j<a.type.length;j++){
						var el=MFR.By.Id("a"+i)
						$(el).append($("<p><input type='button' value='"+a.type[j].title+"'/></p>"))
						$(el).find("p").css({
							"margin-left":"30px"
						})
						$(el).find($('input')).css({
							"width":"270px",
							"height":"55px",
							"border-radius":"15px",
							"font-size":"35px",


						})
						$(el).find($('input')).click(function(){
							var el=$('<div></div>')
							ev(data,el,$(this))
						})
						o++;
					}
				}
				i++;
			})
		})
	}
	
	
		
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
			document.getElementById("field").innerHTML=this.responseText;
			if(h=="#cat")
			{

					MFR.ajax("GET","Excursions.json",function(a){
					var data=JSON.parse(a);
					var i=0;
					var el=MFR.By.Id("list");
					var bucket=$("<div id='bucket'><span id='zero'>0</span><img src='images/bucket.png'></img></div>");
					bucket.css({
						"position":"fixed",
						"width":"100px",
						"heigth":"40px",
						"bottom":"5px",
						"right":"5px",

					})
					$(bucket).find("img").css({
						"height":"35px",
						"width":"35px",
						"float":"left",
						"left":"0"
					});
					bucket.click(function(){
						$('div.b-popup').show();
					});
					$('ul').after($(bucket))
					// console.log($(bucket))
					data.forEach(function(a){

					$(el).append($("<li><p>\
					<img src='"+a.image+"' width='300px' heigth='300px'/></p>\
					<input type='button' value='"+a.title+"'/>\
					</li><ul id='a"+i+"'></ul>"));
					$(el).find($("img")).css({
						"float":"none"
					})
					$('input').css({
						"width":"300px",
						"height":"70px",
						"border-radius":"15px",
						"font-size":"35px",
						"margin":"2px"
					})					
					$('input').click(function(){
						window.location.hash="#"+$(this).val()
						p++;

					});
					i++;
				
					})
				})

			}
			
		


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
	var ev=function(data,obj,obj1){

			// console.log(data)
			data.forEach(function(a){
				for(var u=0;u<a.type.length;u++){
					if($(obj1).val()==a.type[u].title){
						for(var j=0;j<a.type[u].goods.length;j++){							
							var el=$("<div><h1>"+a.type[u].goods[j].title+"</h1>\
							<img src='"+a.type[u].goods[j].image+"'></img>\
							<p><b>price:<span class='total'>"+a.type[u].goods[j].price+"</span>\
							</b><input type='button'/> </p></div>")
							 // el=st(j%4,el);
							 $(el).css({
							 	"border":"1px solid black",
								"display":"inline-block",
								 "width":"24.9%",
								 "vertical-align":"top",
								 "font-size":"20px",
								 "border-radius":"15px",
								 "box-sizing":"border-box"
							 })

							$(el).find('img').css({
								"margin-left":"-65%",
								"width":"150px",
								"height":"150px",
								"margin-top":"-3%"
							});	
							$(el).find('h1').css({
								"margin-left":"-70%",
								"margin-top":"-1.8%"
							});	
							$(el).find('p').css(
							{
								"font-size":"35px",
								"margin-bottom":"1px"
							});	
							$(el).find('input').css({
								"background-image":"url(images/add.png)",
								"background-repeat":"no-repeat",
								"background-position":"center" ,
								"width":"35px",
								"height":"35px",
								"border-radius": "3px"
							});


							$(el).find('input').click(function(){
								el1.fadeIn(3000,function(){
									$(this).fadeOut(5000)
								})

							// console.log($(this).parent().children('h1'))

								
								buck++;
								// console.log(el)
								console.log($(this).parent().parent().children('h1'))
								$('#zero').detach()
								document.getElementById("bucket").innerHTML=" "
								document.getElementById("bucket").innerHTML=buck;

								//function for checking whether I have such an item in localStorage ang changing second parametr(amount of items of such a type)
								//finish bucket
								//add 'view more' on items(?)
								//всплывающее при нажатии на корзину тип поверх - как делали
								addElem($(this).parent().parent().children('h1'))

							})
							$(obj1).after($(obj).append($(el)))
						

						}

						
					}
			
				}
			})

	}