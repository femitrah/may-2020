
const color=(colorvalues)=>{
const changeColorValues={
    blue:false,
    green:false,
    red:false
}

if(colorvalues=="blue"){
changeColorValues.blue=true;
} else if(colorvalues=="green"){
    changeColorValues.green=true;
} else if(colorvalues=="red"){
    changeColorValues.red=true;
}
console.log(changeColorValues)

}