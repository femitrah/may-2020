let result = () =>{
    var use=document.getElementById("input1").value;
    var change =document.getElementById("input2").value;
    var from =document.getElementById("input3").value;
    var to =document.getElementById("input4").value;
    var cc =document.getElementById("input5").value;
    var comment =document.getElementById("input6").value;
    var status = document.getElementById("toCheck").checked;
    document.getElementById("title").innerHTML="This is an automatically generated notification to inform you about the following:";
    document.getElementById("userGet").innerHTML="User :";
    document.getElementById("changeGet").innerHTML="changed Status of";
    document.getElementById("toGet").innerHTML="to";
    document.getElementById("fromGet").innerHTML="from :";
    document.getElementById("getTo").innerHTML="to :";
    document.getElementById("ccGet").innerHTML="cc :";
    document.getElementById("cmd").innerHTML="Comments :";
    document.getElementById("best").innerHTML="Best Regards,";
    document.getElementById("soft").innerHTML="mitrah soft";



    document.getElementById("toUser").innerHTML=`${use}`;
    document.getElementById("toStatus").innerHTML=`${change}`
    document.getElementById("tochange").innerHTML=`${status}`;
    document.getElementById("toFrom").innerHTML=`${from}`;
    document.getElementById("to1").innerHTML=`${to}`;
    document.getElementById("toCc").innerHTML=`${cc}`;
    document.getElementById("tocomment").innerHTML=`${comment}`;

}