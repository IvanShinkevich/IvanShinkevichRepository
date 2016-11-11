var a=["Алевтин","Георгий","Григорий","Евгений","Александр","Павел","Руслан","Наздыр","Сергей","Денис","Артём","Аким","Серафим"];
var b=["Минска","Витебска","Гродно","Могилёва","Полоцка","Москвы","Санкт-Петербурга","Орши","Краснодарска"];
var c=["Стул 150","Стул maxi","Стол","Стол люкс","Шкаф","Шкаф L200","Табурет","Кресло","Диван","Диван уголком"];
function rand(h)
	{
	return l=Math.round(0+Math.random()*(h-0));
	}

function f(){
	var d = new Date();
	return k=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+" "+ d.getFullYear()+"-"+d.getMonth()+"-"+d.getDay()+ + " "+" пользователь " + a[rand(a.length)]+" из " + b[rand(b.length)] + " заказал " + 
	Math.round(0+Math.random()*(100)) +	" товара " + c[rand(c.length)]
}


var elem=document.getElementById("A1");
elem.innerHTML=f();
var e2=document.previousSibling;
e2=document.createElement("table")
e2.innerHTML=f();
e2.insertBefore(elem,e2);

alert(f());