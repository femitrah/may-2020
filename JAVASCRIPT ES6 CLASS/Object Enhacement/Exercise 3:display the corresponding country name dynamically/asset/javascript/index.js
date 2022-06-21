const country = {
    "IE": "Ireland",
    "IM": "Isle of Man",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan"  
};
let  change=()=>{
var values=document.getElementById("countryCode").value;
document.getElementById("errorMessage").innerHTML=`${country[values]}`;
console.log("values",values);
}