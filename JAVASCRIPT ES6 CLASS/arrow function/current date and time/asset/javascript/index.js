var dateAndTime=()=>{
var dateAndTime=new Date();                       
var date=dateAndTime.getDate();
var month=dateAndTime.getMonth()+1;
var year=dateAndTime.getFullYear();                 
var hours=dateAndTime.getHours();                
var minutes=dateAndTime.getMinutes();
var amOrPm=hours>=12 ? 'PM':'AM';                
document.getElementById("messageLable").innerHTML = "DATE AND TIME";                    
document.getElementById("errorMessage").innerHTML = `${date}-${month}-${year} ${hours}:${minutes} ${amOrPm}`; 
}
