const normal=()=>{
var newTime =  new Date();
var hoursTime= newTime.getHours();
var ampm = hoursTime >= 12 ? 'PM' : 'AM';
var date = newTime.getDate();
var year = newTime.getFullYear();
var month  = newTime.getMonth()+1;
var hours = hoursTime;
var minutes = newTime.getMinutes();
var currentTime= date+'-'+month+'-'+year+' '+ hours+':'+minutes+' '+ampm;
document.getElementById("validation").innerHTML= `${currentTime}`

console.log("line7",currentTime)
 }
