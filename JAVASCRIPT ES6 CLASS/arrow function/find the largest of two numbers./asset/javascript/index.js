function normalFunction(){
var inputOne=parseInt(document.getElementById("textBoxOne").value.trim().replace(/[ ]/g,""));   console.log("inputOne",inputOne);
var inputTwo=parseInt(document.getElementById("textBoxTwo").value.trim().replace(/[ ]/g,""));   console.log("inputTwo",inputTwo);  
if (inputOne>inputTwo) {
    document.getElementById("errorMessage").innerHTML="Largest number is"+" "+inputOne;
    document.getElementById("errorMessage").style.color="green";
} else if (inputOne<inputTwo) {
    document.getElementById("errorMessage").innerHTML="Largest number is"+" "+inputTwo;
    document.getElementById("errorMessage").style.color="green";
} 
 else{
    document.getElementById("errorMessage").innerHTML="Both Are Same"+" "+inputTwo;
    document.getElementById("errorMessage").style.color="green";
}
}
arrowFunction=()=>{
    var inputOne=parseInt(document.getElementById("textBoxOne").value.trim().replace(/[ ]/g,""));   console.log("inputOne",inputOne);
    var inputTwo=parseInt(document.getElementById("textBoxTwo").value.trim().replace(/[ ]/g,""));   console.log("inputTwo",inputTwo); 
       if (inputOne>inputTwo) {
        document.getElementById("errorMessage").innerHTML="Largest number is"+" "+inputOne;
        document.getElementById("errorMessage").style.color="green";
    } else if (inputOne<inputTwo) {
        document.getElementById("errorMessage").innerHTML="Largest number is"+" "+inputTwo;
        document.getElementById("errorMessage").style.color="green";
    } 
     else{
        document.getElementById("errorMessage").innerHTML="Both Are Same"+" "+inputOne;
        document.getElementById("errorMessage").style.color="green";
    }
    }