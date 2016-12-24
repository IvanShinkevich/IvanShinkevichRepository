function check(){
	var field=MFR.By.Id("status");
	field.focus();
	field.innerText="Text colour: "+document.queryCommandValue('forecolor')+"\n\
	Background colour: "+document.queryCommandValue('backcolor')+"\n\
	Fontname: "+document.queryCommandValue('fontname')+"\n\
	Fontsize: "+document.queryCommandValue('fontsize')+"\n";
	if (document.queryCommandState('bold')==true) {field.innerText+="Bold\n"}
	if (document.queryCommandState('underline')==true) {field.innerText+="Underlined\n"}
	if (document.queryCommandState('italic')==true) {field.innerText+="Italic\n"}
	if (document.queryCommandState('insertorderedlist')==true) {field.innerText+="Numerated list\n"}
	if (document.queryCommandState('insertunorderedlist')==true) {field.innerText+="Dotted list\n"}
	if (document.queryCommandState('inserthorizontalrule')==true) {field.innerText+="Horizontal line\n"}
	if (document.queryCommandState('justifyleft')==true) {field.innerText+="Left-aligned\n"}
	if (document.queryCommandState('justifyright')==true) {field.innerText+="Rigth-aligned\n"}
	if (document.queryCommandState('justifycenter')==true) {field.innerText+="Center-aligned\n"}
}



MFR.By.Id("bold").addEventListener("click",function(){
	{
   document.execCommand( 'bold', null, null ); 
   check();
}
})
MFR.By.Id("italic").addEventListener("click",function(){
	{
   document.execCommand( 'italic', null, null );
   check();
}
})
MFR.By.Id("underline").addEventListener("click",function(){
	{
   document.execCommand( 'underline', null, null );
   check(); 
}
})
MFR.By.Id("fontsize").addEventListener("click",function(){
	{
   document.execCommand( 'fontsize', null, MFR.By.Id("fontsize").value*1 ); 
   check();
}
})
MFR.By.Id("fontname").addEventListener("click",function(){
	{
   document.execCommand( 'fontname', null, MFR.By.Id("fontname").value ); 
   check();
}
})
MFR.By.Id("fontcolor").addEventListener("click",function(){
	{
   document.execCommand( 'forecolor', null, MFR.By.Id("fontcolor").value ); 
   check();
}
})
MFR.By.Id("bgcolor").addEventListener("click",function(){
	{
   document.execCommand( 'backcolor', null, MFR.By.Id("bgcolor").value ); 
   check();
}
})
MFR.By.Id("leftal").addEventListener("click",function(){
	{
   document.execCommand( 'justifyleft', null, MFR.By.Id("leftal").value ); 
   check();
}
})
MFR.By.Id("centralal").addEventListener("click",function(){
	{
   document.execCommand( 'justifycenter', null, MFR.By.Id("centralal").value ); 
   check();
}
})
MFR.By.Id("rigthal").addEventListener("click",function(){
	{
   document.execCommand( 'justifyright', null, MFR.By.Id("rigthal").value ); 
   check();
}
})
MFR.By.Id("numlist").addEventListener("click",function(){
	{
   document.execCommand( 'insertorderedlist', null, MFR.By.Id("numlist").value ); 
   check();
}
})
MFR.By.Id("dotlist").addEventListener("click",function(){
	{
   document.execCommand( 'insertunorderedlist', null, MFR.By.Id("dotlist").value ); 
   check();
}
})
MFR.By.Id("link").addEventListener("click",function(){
	{
   document.execCommand( 'createlink', null, prompt("Enter a url please:")); 
   check();
}
})
MFR.By.Id("unlinks").addEventListener("click",function(){
	{
   document.execCommand( 'unlink', null, null); 
   check();
}
})
MFR.By.Id("horline").addEventListener("click",function(){
	{
   document.execCommand( 'inserthorizontalrule', null, null); 
   check();
}
})

MFR.By.Id("reset").addEventListener("click",function(){
	{
   document.execCommand( 'removeformat', null, null); 
   check();
}
})


var canvas=MFR.By.Id("canvas");
var context=canvas.getContext("2d");
context.fillStyle="rgba(0,0,0,0.5)"
context.fillRect(0,0,50,70);
context.fillStyle="rgba(255,255,0,0.5)";
context.fillStyle="rgba(0,0,0,0.5)";
context.fillRect(20,30,50,70);
context.clearRect(10,10,10,10);
context.beginPath()

// context.moveTo(100,10);
// context.lineTo(300,99);
context.arc(200,200,100,Math.PI*2,0);
context.moveTo(290,200);
context.arc(200,200,90,Math.PI*2,0);
context.moveTo(280,200);
context.lineTo(265,200);
context.moveTo(120,200);
context.lineTo(135,200);
context.moveTo(200,280);
context.lineTo(200,265);
context.moveTo(200,120);
context.lineTo(200,135);
context.moveTo(200,200);

context.stroke();
context.beginPath()
context.arc(200,200,5,Math.PI*2,0);
context.stroke();

context.font="18px 'Comic Sans'";
context.textBaseline="middle";
context.strokeText("3",245,200);

context.font="18px Comic Sans";
context.textBaseline="middle";
context.strokeText("9",145,200);

context.font="18px Comic Sans";
context.textAlign="center";
context.strokeText("12",200,145);

context.font="18px Comic Sans";
context.textAlign="center";
context.strokeText("6",200,255);
var cx=200;
var cy=200;
var r=90;
context.translate(cx,cy);
context.save();

function per(){
   context.restore();
   context.save();
   context.clearRect(-cx,-cy,2*cx,2*cy);
   context.beginPath()
   context.arc(200-cx,200-cy,100,Math.PI*2,0);
   context.moveTo(290-cx,200-cy);
   context.arc(200-cx,200-cy,90,Math.PI*2,0);
   context.moveTo(280-cx,200-cy);
   context.lineTo(265-cx,200-cy);
   context.moveTo(120-cx,200-cy);
   context.lineTo(135-cx,200-cy);
   context.moveTo(200-cx,280-cy);
   context.lineTo(200-cx,265-cy);
   context.moveTo(200-cx,120-cy);
   context.lineTo(200-cx,135-cy);
   context.moveTo(200-cx,200-cy);

   context.stroke();
   context.beginPath()
   context.arc(200-cx,200-cy,5,Math.PI*2,0);
   context.stroke();

   context.font="18px 'Comic Sans'";
   context.textBaseline="middle";
   context.fillText("3",255-cx,200-cy);

   context.font="18px Comic Sans";
   context.textBaseline="middle";
   context.fillText("9",145-cx,200-cy);

   context.font="18px Comic Sans";
   context.textAlign="center";
   context.fillText("12",200-cx,145-cy);

   context.font="18px Comic Sans";
   context.textAlign="center";
   context.fillText("6",200-cx,255-cy);

   var d=(new Date()).getMilliseconds();

   var d1=(new Date()).getSeconds();
   context.rotate(2*Math.PI*(d1*1000+d)/60000);
   context.beginPath();
   context.moveTo(0,0);
   context.lineTo(0,-r);
   context.stroke();

   // context.rotate(2*Math.PI*(new Date()).getMi()/60);
   // context.beginPath();
   // context.moveTo(0,0);
   // context.lineTo(0,-r);
   // context.stroke();


   // context.rotate(2*Math.PI*d/60);
   // context.beginPath();
   // context.moveTo(0,0);
   // context.lineTo(0,-r);
   // context.stroke();

}

var timer=setInterval(per,15);

<header><Contacts 