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
    }
function validation(){
var country_code=document.getElementById('country1').value
document.getElementById('output').innerHTML="selected country is "+ country[country_code]
}
