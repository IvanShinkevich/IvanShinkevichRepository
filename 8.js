function minutes()
{
var d = new Date();

return((d/1000/60/60+24)*1000*60*60-d)/1000/60/60;
}
alert(minutes());
