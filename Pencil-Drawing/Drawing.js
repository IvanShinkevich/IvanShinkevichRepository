
var canvas;
var context;

window.onload = function() {
      canvas = document.getElementById("сanv");
      context = canvas.getContext("2d");
    

      canvas.onmousedown = startDrawing;
      canvas.onmouseup = stopDrawing;
      canvas.onmouseout = stopDrawing;
      canvas.onmousemove = draw;
   }


var isDrawing;
function draw(e) {
	if (isDrawing == true)
	{
		var x = e.pageX - canvas.offsetLeft;
		var y = e.pageY - canvas.offsetTop;
		

		context.lineTo(x, y);
		context.stroke();
	}
}


function startDrawing(e) {
	isDrawing = true;
	context.beginPath();
	context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
}


function stopDrawing() {
    isDrawing = false;	
}


document.getElementById("clearcanv").addEventListener("click",function(){
	context.clearRect(0, 0, canvas.width, canvas.height);
})