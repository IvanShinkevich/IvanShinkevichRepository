var s=prompt("Введите строку:");
var i=0;
var a=0;
var b=0;
while(i<s.length){
	if(s.charAt(i)=="(") a++;
	if(s.charAt(i)==")") b++;
	if(b>a) break;
	i++;
}
if(b==a) alert("OK");
else alert("Problems!");
