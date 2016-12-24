alert("Введите х,у и операцию,которую вы хотите сделать(*,/,+,-");
var x=prompt("x=");
var y=prompt("y=");
var op=prompt("op=");

x=x*1;
y=y*1;
switch (op){
case "*":alert(x*y);
break;
case "/":alert(x/y);
break;
case "+":alert(x+y);
break;
case "-":alert(x-y);
break;
default:alert("Ну калькулятор не особо умный,да?");
break;
}

