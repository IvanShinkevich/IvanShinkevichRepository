		// input=document.getElementsByClassName('input');
		// radio=document.getElementsByClassName('radio');
		// checkbox=document.getElementsByClassName('checkbox');
		// num=document.getElementsByClassName('age');
// document.getElementById('form').oninput=function(){
// 	remember()
// }

var form=document.getElementById('form').elements;
console.log(form)
form.oninput= function(){
	for(var i=0;i<form.length;i++)
	{
		console.log(form[i])
		
			var val=' ';
			
				console.log(form[i].type)
				switch(form[i].type)
				{
					case 'input':
					{
						val = form[i].value+"";
						break;
					}
					case 'radio':
					{
						val = form[i].checked ? "1" : "0";
						break;
					}
					case 'checkbox':
					{
						val = form[i].checked ? "1" : "0";
						break;
					}

				}
				try{
					fact(-3)
				}catch(e){
					console.log(e.message)
				}finally{
					alert("AHAHA!")
				}
				window.localStorage.setItem(form[i].name+i+"",val)
			
		}
	
}
fact=function (n){
	if(n!=parseInt(n) || n<0) throw(new Error("Incorrect number!"))
	if(n!=1) return n*fact(n-1) 
		return 1;
}
// onchange = function(){remember();}
// function remember(){
// 	//input=document.getElementsByClassName('input');
// 	//чипполино - 22
// 	//простоквашино - 31

// 	for(var i=0;i<input.length;i++)
// 	{
// 			window.localStorage.setItem(input[i].name,input[i].value);
// 	}

// 	for(var i=0;i<num.length;i++){
// 		 console.log(window.localStorage.getItem(num[i].name))
// 		var s=num[i].value+" ";
// 		window.localStorage.setItem(num[i].name,s)
// 	}
	
// 	for(var i=0;i<radio.length;i++)
// 	{
// 		var s= radio[i].checked ? "1" : "0";
// 			window.localStorage.setItem(radio[i].name+i,s);
// 			// console.log(window.localStorage.getItem(radio[i].name))
// 	}

// 	for(var i=0;i<checkbox.length;i++)
// 	{
// 		var s= checkbox[i].checked ? "1" : "0";
// 			window.localStorage.setItem(checkbox[i].name+i,s);
// 	}

// }

onload=function(){
	for(var i=0;i<form.length;i++)
	{
		if(form[i].type=='checkbox' || 'radio')
		form[i].checked = window.localStorage.getItem(form[i].name+i+'')
	else if(form[i].type=='input')
		form[i].value = window.localStorage.getItem(form[i].name+i+'')

	}

	// for(var i=0;i<input.length;i++)
	// {
	// 	input[i].value=window.localStorage.getItem(input[i].name)
	// }
	
	// for(var i=0;i<num.length;i++)
	// {
	// 	 console.log(window.localStorage.getItem(num[i].name))
	// 	num[i].value=(window.localStorage.getItem(num[i].name)*1)
	// }

	// for(var i=0;i<radio.length;i++)
	// {
	// 	radio[i].checked=window.localStorage.getItem(radio[i].name+i)*1
	// }

	// for(var i=0;i<checkbox.length;i++)
	// {
	// 	checkbox[i].checked=(localStorage.getItem(checkbox[i].name+i))*1;
	// }
	// remember()
}

onreset=function()
{
	window.localStorage.clear()
}

