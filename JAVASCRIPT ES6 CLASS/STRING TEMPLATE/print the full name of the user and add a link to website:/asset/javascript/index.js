function printFullName(){
    var firstName=document.getElementById("firstName").value.trim().replace(/[ ]/g,""); 
    var lastName=document.getElementById("lastName").value.trim().replace(/[ ]/g,""); 
    var websitelink=document.getElementById("website").value.trim().replace(/[ ]/g,""); 
    document.getElementById("errorMesssage").innerHTML=`customer name:${firstName}${lastName}`;
    document.getElementById("errorMesssage").style.color="green"
    document.getElementById("link").href=`${websitelink}`;          
    document.getElementById("link").innerHTML=`${websitelink}`;       console.log("innerText",websitelink)             

}