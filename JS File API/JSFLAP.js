document.getElementById('fil').addEventListener("change",function(){
	console.log(this.files);
	var file=this.files[0]
	var reader = new FileReader();
	reader.onload=function(){
			var img = new Image();
			img.src=reader.result;
			document.body.appendChild(img)
		console.log(reader.result)
	}
	reader.readAsDataURL(file);
})

var place = document.getElementById('place');
// place.style.width=300;
// place.style.height=300;
// place.style.border=5;
// place.style.border-color='solid black0'
var prev=function(e)
{
	e.preventDefault();
	e.stopPropagation();
}
place.addEventListener('dragenter',function(e){
	place.innerHTML+="stop!!!";
	prev(e);
})

place.addEventListener('dragleave',function(e){
	place.innerHTML=" ";
	prev(e);
})

place.addEventListener('dragover',function(e){
	prev(e);
})

place.addEventListener('drop',function(e){
	console.log(e.dataTransfer.files);
	var file=e.dataTransfer.files[0]
	var reader = new FileReader();
	reader.onload=function(){
		place.innerText=reader.result;
	}
	reader.readAsText(file);
	prev(e);
})



