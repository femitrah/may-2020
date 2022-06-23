const validation=()=>{
var userName=document.getElementById('string').value
var recordID=document.getElementById('string1').value
var status=document.getElementById('vehicle1').checked
var from=document.getElementById('string2').value
var to=document.getElementById('string3').value
var cc=document.getElementById('string4').value
var comments=document.getElementById('string5').value
document.getElementById('output').innerHTML=`<p>This is an automatically generated notification to inform you about the following</p>
<p>Greetings</p>
<p> User ${userName} changed Status of ${recordID} to ${status} with below comments</p>
<p> from: ${from} </p
<p> to: ${to} </p>
<p> cc: ${cc} </p>
<p> Comments: ${comments} </p>
Best Regards
<div>
MitrahSoft </div>`
document.getElementById('output').style.border='2px solid black'; 
}


