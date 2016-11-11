var c=[1,2,3,4,5,6,7,8,9,10];

// f=function(e){
// 	return e*2;
// }
// a=c.map(f);
// // a.forEach(function(e){
// // 	console.log(e)
// // })
// console.log(a.toString());
// c=c.filter(function(e){
// 	return(e%2==1)
// });
// var a=c.reduce(function(prev,curr){
// 	return prev+curr;
// })
// alert(a);
// c.forEach(function(e){console.log(e)});

// for(var i=0;i<10;i++){
// c[i]=(function(x){
// 	return function(){
// 	alert(x);
// }
// })(i);
// }
// c[3]()


// 
function ad(name1){					//пародия на создание класса.паттерн квазипрограммирования
return{name:name1,
sayname:function(){alert(this.name);
	}
}}
console.log(ad("FRSDF"),ad("Fedya"))
ad("dfg").sayname();