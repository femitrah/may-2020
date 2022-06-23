  function normalLargest(){
    var firstNum = document.getElementById('string').value;
    var secondNum = document.getElementById('string1').value;
    var strNum1=parseInt(firstNum)
    var strNum2=parseInt(secondNum)
    if (strNum1>strNum2){
        document.getElementById("output").innerHTML=`${strNum1} is bigger`;
        document.getElementById("output").style.color="darkgreen"
     } 
    else {
        document.getElementById("output").innerHTML=`${strNum2} is bigger`;
        document.getElementById("output").style.color="darkgreen"
     }
  } 
   let arrowLargest=()=>{
    var firstNum = document.getElementById('string').value;
    var secondNum = document.getElementById('string1').value;
    var strNum1=parseInt(firstNum)
    var strNum2=parseInt(secondNum)
    if (strNum1>strNum2){
        document.getElementById("output").innerHTML=`${strNum1} is bigger`;
        document.getElementById("output").style.color="darkgreen"
    } 
    else {
        document.getElementById("output").innerHTML=`${strNum2} is bigger`;
        document.getElementById("output").style.color="darkgreen"
    }
  } 
  function clearResult(){
    document.getElementById('string').value= ''
    document.getElementById('string1').value = ''
    document.getElementById('output').innerHTML=''
}


 


