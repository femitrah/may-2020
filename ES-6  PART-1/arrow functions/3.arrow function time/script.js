var time =  new Date();
var hours= time.getHours();
var ampm = hours >= 12 ? 'PM' : 'AM';
var date = time.getDate();
var year = time.getFullYear();
var month  = time.getMonth()+1;
var hoursTime = hours;
let minutes = time.getMinutes();
let currentTime= date+'-'+month+'-'+year+' '+ hoursTime+':'+minutes+' '+ampm;
let localTime = () => currentTime
console.log(currentTime)