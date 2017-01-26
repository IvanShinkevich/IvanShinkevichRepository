var AJAX={
	// {
	// 	method:"GET",
	// 	path:"www.google.com",
	// 	data:"oncodeURI",
	// 	onsuccess:function(text,xhr){},
	// 	onerror:function(xhr){},
	// 	timeout:100,
	// 	ontimeout:function(xhr){}
	// }
	go :function(obj){
		var xhr=new XMLHttpRequest();
		if(obj.timeout)
		{
			xhr.timeout=obj.timeout;
		}
		if(obj.ontimeout)
		{
			xhr.ontimeout=obj.ontimeout(xhr);				
		}
		if(obj.onsuccess)
		xhr.onload=obj.onsuccess(xhr.responseText,xhr) //on each step,from 0 to 4?
		if(obj.onerror)	
		xhr.onerror= obj.onerror(xhr)

		var method= (obj.method)? obj.method : "GET";
		//content-type?
		xhr.open(method,obj.path,true);

		if(obj.data)
		{
			send(obj.data)
		}




			

	},
	get:function(p,d,f,e,ep){
		var xhr=new XMLHttpRequest();
		xhr.onerror=ep();
		xhr.onreadystatechange=function(){
			var hf=function(f,e){
				try {
					f(x,d)
				} catch(err){
					e(x)
				}
			}
			var obj={
					method:"GET",
		path:p,
		data:d,
		onsuccess:hr(f,e),
		onerror:ep,
	// 	timeout:100,
	// 	ontimeout:function(xhr){}

			}
			AJAX.go(obj) // If it`s correct - than everything is like this
		
		// 	if(this.readystate==4 && this.status==200)
		// 		try{
		// 			f(xhr.responseText,xhr);
		// 		} catch(err){
		// 			e(xhr)
		// 		}
		// }
		// xhr.open("GET",p,true);
		// if(d)
		// {
		// 	send(d)
		// }
		// if(d)
		// {
		// 	send(d)
		// }
		


		// try{
		// 	this.go({ 
		// 	method:"GET",
		// 	path:p,
		// 	data:d,
		// 	onsuccess:f,
		// 	onerror:e,
		// 	})
		// } catch(ex){
		// 	return ep(ex)
		// }
	},
	
	post:function(p,d,f,e,ep)
	{
		var xhr=new XMLHttpRequest();
		xhr.onerror=ep();
		xhr.onreadystatechange=function(){
			if(this.readystate==4 && this.status==200)//a lot of answers - for example,201 if smth created
				try{
					f(xhr.responseText,xhr);
				} catch(err){
					e(xhr)
				}
		}
		xhr.open("POST",p,true);
		if(d)
		{
			send(d)
		}
		
	},
	put:function(p,d,f,e,ep)
	{
		var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
			if(this.readystate==4 && this.status==200)//201 - if some resource was created(?)
				try{
					f(xhr.responseText,xhr);
				} catch(err){
					e(xhr)
				}
		}
		xhr.onerror=ep();
		xhr.open("PUT",p,true);
		if(d)
		{
			send(d)
		}
		
	},
	delete:function(p,d,f,e,ep)
	{
		var xhr=new XMLHttpRequest();
		xhr.onerror=ep();
		xhr.onreadystatechange=function(){
			if(this.readystate==4 && this.status==200)
				try{
					f(xhr.responseText,xhr);
				} catch(err){
					e(xhr)
				}
		}
		xhr.open("DELETE",p,true);
		if(d)
		{
			send(d)
		}

	},
	head:function(p,d,f,e,ep){
				var xhr=new XMLHttpRequest();
		xhr.onerror=ep();
		xhr.onreadystatechange=function(){
			if(this.readystate==4 && this.status==200)
				try{
					f(xhr.responseText,xhr);
				} catch(err){
					e(xhr)
				}
		}
		xhr.open("DELETE",p,true);
		if(d)
		{
			send(d)
		}
		
	},
	options:function(p,d,f,e,ep){
		var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
			if(this.readystate==4 && this.status==200)
				try{
					f(xhr.responseText,xhr);
				} catch(err){
					e(xhr)
				}
		}
		xhr.onerror=ep();
		xhr.open("DELETE",p,true);
		if(d)
		{
			send(d)
		}
		
	},
	postJSON:function(p,d,f,e){
		AJAX.post(p,d,function(r,x){
			try{
				var d=JSON.decode(r);
				return(d,x)
			}
			catch(ex){
				return e(r,x);
			}
		},ep)
	}
	getJSON:function(p,d,f,e){
		AJAX.get(p,d,function(r,x){
			try{
				var d=JSON.decode(r);
				return(d,x)
			}
			catch(ex){
				return e(r,x);
			}
		},ep)
	}
}