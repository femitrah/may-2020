function printTheTotalValue(){
var valueOne=parseInt(document.getElementById("firstInputBox").value);  
var valueTwo=parseInt(document.getElementById("secondInputBox").value);  
var operators=document.getElementById("action").value;                                    
document.getElementById("errorMesssage").style.color="green";
if(operators==="add"){
   var result=valueOne + valueTwo;                            
   document.getElementById("errorMesssage").innerHTML=`${result}`;
} else if(operators==="Sub"){
    var result=valueOne - valueTwo;
    document.getElementById("errorMesssage").innerHTML=`${result}`;
    console.log("add",result);
} else{
    document.getElementById("errorMesssage").innerHTML=`please selecte the Action`;
}
} 