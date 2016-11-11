var a="",b="",c,k=0;
pl=document.getElementById("Pl");mi=document.getElementById("Mi"),fi=document.getElementById("Field");
var mp=document.getElementById("Mp"),div=document.getElementById("Di"),p=document.getElementById("P"),eq=document.getElementById("Eq");
var n1=document.getElementById("N1"),n2=document.getElementById("N2"),n3=document.getElementById("N3"),n4=document.getElementById("N4");
var n5=document.getElementById("N5"),n6=document.getElementById("N6");
var n7=document.getElementById("N7"),n8=document.getElementById("N8"),n9=document.getElementById("N9"),n0=document.getElementById("N0");
n1.addEventListener("click",function(){
	if (c==undefined) {
		a+="1";
		fi.innerText=a;
	}else{
		b+="1";
		fi.innerText=b;
	}
})
n2.addEventListener("click",function(){
	if (c==undefined) {
		a+="2";
		fi.innerText=a;
	}else{
		b+="2";
		fi.innerText=b;
	}
})
n3.addEventListener("click",function(){
	if (c==undefined) {
		a+='3';
		fi.innerText=a;
	}else{
		b+="3";
		fi.innerText=b;
	}
})
n4.addEventListener("click",function(){
	if (c==undefined) {
		a+="4";
		fi.innerText=a;
	}else{
		b+="4";
		fi.innerText=b;
	}
})
n5.addEventListener("click",function(){
	if (c==undefined) {
		a+="5";
		fi.innerText=a;
	}else{
		b+="5";
		fi.innerText=b;
	}
})
n6.addEventListener("click",function(){
	if (c==undefined) {
		a+="6";
		fi.innerText=a;
	}else{
		b+="6";
		fi.innerText=b;
	}
})
n7.addEventListener("click",function(){
	if (c==undefined) {
		a+="7";
		fi.innerText=a;
	}else{
		b+="7";
		fi.innerText=b;
	}
})
n8.addEventListener("click",function(){
	if (c==undefined) {
		a+="8";
		fi.innerText=a;
	}else{
		b+="8";
		fi.innerText=b;
	}
})
n9.addEventListener("click",function(){
	if (c==undefined) {
		a+="9";
		fi.innerText=a;
	}else{
		b+="9";
		fi.innerText=b;
	}
})
n0.addEventListener("click",function(){
	if (c==undefined) {
		a+="0";
		fi.innerText=a;
	}else{
		b+="0";
		fi.innerText=b;
	}
})
pl.addEventListener("click",function(){
	c='+';
});
mi.addEventListener("click",function(){
	c='-';
});
mp.addEventListener("click",function(){
	c='*';
});
div.addEventListener("click",function(){
	c='/';
});
p.addEventListener("click",function(){
	if (c==undefined) {
		a+=".";
		fi.innerText=a;
	}else{
		b+=".";
		fi.innerText=b;
	}
})
eq.addEventListener("click",function(){
	a=parseFloat(a);
	b=parseFloat(b);
	switch(c){
		case '+':
			a=a+b
			fi.innerText=a;
			c=undefined;
			break;
		case '-':
			a=a-b
			fi.innerText=a;
			c=undefined;
			break;	
		case '*':
			a=a*b
			fi.innerText=a;
			c=undefined;
			break;	
		case '/':
			a=a/b;
			fi.innerText=a;
			c=undefined;	
			break;
	}
	b="";
});