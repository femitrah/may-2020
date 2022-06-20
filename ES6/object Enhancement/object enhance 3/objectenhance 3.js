let country = {
    "IE": "Ireland",
    "IM": "Isle of Man",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan"
}


function update(){
    var countryWay =document.getElementById("count").value;

    document.getElementById("validation").innerHTML ="selected country is " + country[countryWay]
    console.log("line23",countryWay);
    
}
// console.log("line23",countryWay);