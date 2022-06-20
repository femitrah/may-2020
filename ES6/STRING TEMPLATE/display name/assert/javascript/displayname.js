function submit(){
   var start =document.getElementById("firstName").value;
   var end =document.getElementById("lastName").value;

   var web=document.getElementById("addWebsite").value;

   document.getElementById("validateText").innerHTML=`customer name: ${start}${end} `;
   document.getElementById("webText").href=  `${web}`;
   document.getElementById("webText").innerText= `${web}`;
  
}
// function webLink(){
//    // var link= "https://www.w3schools.com/jsref/jsref_replace.asp";
//    var link =document.getElementById("addWebsite").value;
//    location.replace(link)
//    console.log("line13",link)
// }
//${start}${end} 