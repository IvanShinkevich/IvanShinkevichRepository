

var table="<table border=4 align=center >\
<tr bgcolor=#ACA>\
<td > Ширина области просмотра </td>\
<td >" + window.innerWidth+ "</td>\
</tr>\
<tr>\
<td> Высота области просмотра </td>\
<td>"+ window.innerHeight +" </td>\
</tr>\
<tr bgcolor=#ACA>\
<td> Текущий адрес страницы </td>\
<td>"+ window.location.href +"</td>\
</tr>\
<tr>\
<td> Порт </td>\
<td>"+window.location.port+" </td>\
</tr>\
<tr bgcolor=#ACA>\
<td> Протокол</td>\
<td>"+ window.location.protocol +"</td>\
</tr>\
<tr>\
<td> Строка поиска </td>\
<td>"+ window.location.search +"</td>\
</tr>\
<tr bgcolor=#ACA>\
<td> Хэш-адрес </td>\
<td>"+ window.location.hash +"</td>\
</tr>\
<tr>\
<td> Ардес хоста </td>\
<td>"+ window.location.host+" </td>\
</tr>\
<tr bgcolor=#ACA>\
<td> Кодовое название браузера </td>\
<td>"+ window.navigator.appCodeName +"</td>\
</tr>\
<tr>\
<td> Название браузера </td>\
<td>"+ window.navigator.appName +"</td>\
</tr>\
<tr bgcolor=#ACA>\
<td> Включены куки </td>\
<td> "+window.navigator.coockieEnabled +"</td>\
</tr>\
<tr>\
<td> Автономный режим </td>\
<td> "+window.navigator.onLine +"</td>\
</tr>\
<tr bgcolor=#ACA>\
<td> Глубина цветопередачи экрана </td>\
<td>"+ window.screen.colorDepth +"</td>\
</tr>\
<tr>\
<td> Ширина экрана </td>\
<td> "+window.screen.width+" </td>\
</tr>\
<tr bgcolor=#ACA>\
<td> Высота экрана </td>\
<td>"+ window.screen.height+" </td>\
</tr>\
<tr>\
<td> Длина истории просмотров вкладки </td>\
<td> "+window.history.length+" </td>\
</tr>\
</table>"; 
document.write(table);

alert("Misson completed.Something follows...");
alert("Actually,nothing follows.I`m too sleepy to make you surprised.But some time later-definitely.");
var s=parseInt((10000-window.innerHeight)/5);
var i=0;
var d = setInterval(function(){
	scrollBy(0,5);
	i++;
	if(i==s) {clearInterval(d);
		var j=0;
var f = setInterval(function(){
	scrollBy(0,-5);
	j++;
	if(j==s) {clearInterval(f);
		alert("Thank you for your attention!");}
	
},5);}
},5);


