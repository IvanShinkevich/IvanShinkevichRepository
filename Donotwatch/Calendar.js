MyFramework.By.id('buty').addEventListener('click',function(){
	MyFramework.By.id("secret2").innerHTML=MyFramework.By.id("year").value+"";
	var year=MyFramework.By.id("secret2").innerHTML*1;
	var month=MyFramework.By.id("secret1").innerHTML*1;
	for(var i=1;i<=6;i++)
			for(var j=0;j<=6;j++)
				MyFramework.By.id("tbody").children[i].children[j].innerHTML=' ';
	calendar('tbody',year,month);

})

function calendar(tbody,year,month){
	t=new Date();
	t.setMonth(month);
	t.setFullYear(year);
	t.setDate(1);
	var d;


	if((year%4==0 && year%100!=0) || (year%400==0) ){
		switch(month){
			case 0:
			{
				d="Январь";
				amo=31;
				break;
			}
			case 1:
			{
				d="Февраль";
				amo=29;
				break;
			}
			case 2:
			{
				d="Март";
				amo=31
				break;
			}
			case 3:
			{
				d="Апрель";
				amo=30;
				break;
			}
			case 4:
			{
				d="Май";
				amo=31;
				break;
			}
			case 5:
			{
				d="Июнь";
				amo=30;
				break;
			}
			case 6:
			{
				d="Июль";
				amo=31;
				break;
			}
			case 7:
			{
				d="Август";
				amo=31;
				break;
			}
			case 8:
			{
				d="Сентябрь";
				amo=30;
				break;
			}
			case 9:
			{
				d="Октябрь";
				amo=31;
				break;
			}
			case 10:
			{
				d="Ноябрь";
				amo=30;
				break;
			}
			case 11:
			{
				d="Декабрь";
				amo=31;
				break;
			}
		}
}
	else {
	switch(month){
			case 0:
			{
				d="Январь";
				amo=31;
				break;
			}
			case 1:
			{
				d="Февраль";
				amo=28;
				break;
			}
			case 2:
			{
				d="Март";
				amo=31
				break;
			}
			case 3:
			{
				d="Апрель";
				amo=30;
				break;
			}
			case 4:
			{
				d="Май";
				amo=31;
				break;
			}
			case 5:
			{
				d="Июнь";
				amo=30;
				break;
			}
			case 6:
			{
				d="Июль";
				amo=31;
				break;
			}
			case 7:
			{
				d="Август";
				amo=31;
				break;
			}
			case 8:
			{
				d="Сентябрь";
				amo=30;
				break;
			}
			case 9:
			{
				d="Октябрь";
				amo=31;
				break;
			}
			case 10:
			{
				d="Ноябрь";
				amo=30;
				break;
			}
			case 11:
			{
				d="Декабрь";
				amo=31;
				break;
			}
		}
	}



	MyFramework.By.id('header').innerHTML=d+" "+year;
	w=t.getDay();
	var tbody = MyFramework.By.id("tbody");
	if(w<=0)
		w=1;
	for(var day=0;day<amo;day++)
	{
		tbody.children[Math.ceil((day+w)/7)].children[(day+w-1)%7].innerHTML=day+1;
	}
	MyFramework.By.id("secret1").innerHTML=month;
	MyFramework.By.id("secret2").innerHTML=t.getFullYear();
// 	while(i<=31){
// 			while(i!=t.getDay()){
// 			i++;
// 			tr=tr.nextSibling;
// 		}
// 		tr.innerHTML=t.getDate()+'';
// 		t.setDate(t.getDay()+1);
// 		tr.nextSibling;
// 		if(t.getDay()/7==0)
// 			tr=tr.parentNode.nextSibling;
// 	}
// }
}
MyFramework.By.id('but1').addEventListener('click', function (){
	var month=MyFramework.By.id("secret1").innerHTML*1;
	var year=MyFramework.By.id("secret2").innerHTML*1;
	
	month=month-1;
	if (month<0){
		month=month+12;
		year=year-1;
	}
		for(var i=1;i<=6;i++)
			for(var j=0;j<=6;j++)
				MyFramework.By.id("tbody").children[i].children[j].innerHTML=' ';

	calendar("tbody",year,month)

})

MyFramework.By.id('but2').addEventListener('click', function (){
	var month=MyFramework.By.id("secret1").innerHTML*1;
	var year=MyFramework.By.id("secret2").innerHTML*1;
	
	month=month+1;
	if (month>11){
		month=month-12;
		year=year+1;
	}
		for(var i=1;i<=6;i++)
			for(var j=0;j<=6;j++)
				MyFramework.By.id("tbody").children[i].children[j].innerHTML=' ';

	calendar("tbody",year,month)

})

calendar("tbody",2000,1)

function Human(){};
Human.prototype.age=10;
Human.prototype.name="Alex";
var h1=new Human();
var h2=new Human()
h1.age//10
h2.name//"Alex"