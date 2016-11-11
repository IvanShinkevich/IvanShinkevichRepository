function minutes()
{
var d = new Date();
return(24*60-d.getMinutes()-d.getHours()*60);
}
alert(minutes());
