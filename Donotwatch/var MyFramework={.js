var MyFramework={
		append:function(el2){
			 el2.appendChild(el2)
		},
		By:
		{
			id:function(id){
				return document.getElementById(id+'');
			},
			className:function(cl){
				return document.getElementsByClassName(cl+'');
			},
			tagName:function(tag){
				return document.getElementsByTagName(tag+'');\
			}
			// },
			// selector:function(s){
			// 	return document.getElementBySelector(s+'');
			// },

		},
		remove:function(el){
			 el.remove(el);
		},
		appendTo:function(el,target){
			 target.appendChild(el,target.firstChild)
		},
		prependTo:function(el,target){
			 target.appendChild(el);
		},
		before:function(el,target){
			 target.parentNode.insertBefore(el,target)
		},
		after:function(el,target){
			 target.parentNode.insertBefore(el,target.NextSibling);
		}, 
		replace:function(el,target){
			 el.replace(target,el);
		},
		copyTo:function(el,target){
			target.appendChild(el.cloneNodes(true));
		},
		random:function(a,b){
		 (Math.random()*(b-a)+a);
		},
		event:function(el,ev,f){
		if(typeof(el.add.eventListener(ev+'',f))=="function")
		el.addEventListener(ev+'',f);
		else el.attachEvent(ev+'',f);
		}
		unevent:function(el,ev,f){
		if(typeof(el.removeEventListener(ev+'',f))=="function")
		el.removeEventListener(ev+'',f)
		else el.detachEvent(ev+'',f);
		}
		
}