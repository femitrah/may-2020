const validation=()=>{
var firstNum=document.getElementById('string').value
var secondNum=document.getElementById('string1').value
var optionSelected=document.getElementById('arithmeticOps').value
var strNum1=parseInt(firstNum);
var strNum2=parseInt(secondNum);
const Add=(strNum1,strNum2)=>strNum1+strNum2
const Subtract=(strNum1,strNum2)=>strNum1-strNum2
if (optionSelected=='add'){
document.getElementById('output').innerHTML=`${Add(strNum1,strNum2)}`;
}
else {
document.getElementById('output').innerHTML=`${Subtract(strNum1,strNum2)}`;
}
}
function clearResult() {
document.getElementById("string").value = ''
document.getElementById("output").innerHTML = ''
document.getElementById("string1").value = ''
}


