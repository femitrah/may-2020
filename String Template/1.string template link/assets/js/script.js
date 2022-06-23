function validation() {
var firstName=document.getElementById('string').value;
var secondName=document.getElementById('string1').value;
 var website=document.getElementById('string2').value;
document.getElementById('output').innerHTML=`Customer Name:${firstName} ${secondName}`;
document.getElementById('output').style.color='darkgreen';

  document.getElementById("anchor").href=`${website}`;
  document.getElementById('anchor').innerText=`${website}`

}
function clearResult() {
    document.getElementById("string").value = ''
    document.getElementById("output").innerHTML = ''
    document.getElementById("string1").value = ''
     document.getElementById("string2").value = ''
}

 

