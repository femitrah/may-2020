let submit=()=>{
    var start =parseInt(document.getElementById("firstName").value);
   var end =parseInt(document.getElementById("lastName").value);
   var option =document.getElementById("selection").value;
   var added =document.getElementById("add").value;
   var subb =document.getElementById("sub").value;

   var add = start + end;
   var sub = start - end;

   if(added===option){
    document.getElementById("addAnswer").innerHTML=`${add}`;
   }
   else {
    document.getElementById("addAnswer").innerHTML=`${sub}`
   }
   
   console.log("line4",add)
}





















// `This is the final result ____________ for the above function.`