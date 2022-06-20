function normal() {
    var start =document.getElementById('firstNumber').value;
    var end  =document.getElementById('secondNumber').value;
    var startNum = parseInt(start)
    var endNum = parseInt(end)
    if(startNum > endNum){
        document.getElementById('display').innerHTML=`${startNum} is largest number`
    }
    else {
        document.getElementById('display').innerHTML=`${endNum} is largest number`
    }
}

let arrow = () => {
    var start =document.getElementById('firstNumber').value;
    var end  =document.getElementById('secondNumber').value;
    var startNum = parseInt(start)
    var endNum = parseInt(end)
    if(startNum > endNum){
        document.getElementById('display').innerHTML=`${startNum} is largest number`
    }
    else {
        document.getElementById('display').innerHTML=`${endNum} is largest number`
    }
}