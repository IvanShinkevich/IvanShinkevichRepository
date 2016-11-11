var a=["Алевтин","Георгий","Григорий","Евгений","Александр","Павел","Руслан","Наздыр","Сергей","Денис","Артём","Аким","Серафим"];
var b=["Минска","Витебска","Гродно","Могилёва","Полоцка","Москвы","Санкт-Петербурга","Орши","Краснодарска"];
var c=["Стул 150","Стул maxi","Стол","Стол люкс","Шкаф","Шкаф L200","Табурет","Кресло","Диван","Диван уголком"];
function rand(h)
	{
	return c=Math.round(0+Math.random()*(h-0));
	}


// 	i=1;
// 	var e=[0];
// 	var t=e[0];
// 	var t=document.getElementById("A1");
// 	setInterval(function(){
// 	var d = new Date
// 	i++;
// 	e.push(i);
// 	t=e[i];
// 	t=document.createElement("<table border=4 align=center >
// <tr>
// <td >" + d.getDate() +" "+ rand(a.length)+"из" + rand(b.length) + "заказал" + Math.round(0+Math.random()*(100-0)) +
// 	"товара" + rand(c.length) + "</td>
// </tr>)");
// 	elem.insertBefore(e[i],e[i-1]);

// },1000);
var elem=document.getElementById("A1");
var d= new Date();
var table="<table border=4 align=center >\
<tr bgcolor=#ACA>\
<td >" + d.getDate() +" "+ rand(a.length)+"из" + rand(b.length) + "заказал" + Math.round(0+Math.random()*(100-0)) + 
 "/</td>
</tr>

 </table>";
//   "<table>
// // // <tr>
// // // <td>"+d.getDate() +" "+ rand(a.length)+"из" + rand(b.length) + "заказал" + Math.round(0+Math.random()*(100-0)) +
// // //  	"товара" + rand(c.length)+"</td>
// // // </tr>
// // // </table>";
elem.innerHTML=table;

// var str="<table border=4 align=center >
//  <tr>
//  <td >" + d.getDate() +" "+ rand(a.length)+"из" + rand(b.length) + "заказал" + Math.round(0+Math.random()*(100-0)) +
//  	"товара" + rand(c.length) + "</td>
// </tr>)";
// alert(str);