// { red: true, green: false, blue: false } 
function color1(num){
    let color ={
        red:false,
        blue:false,
        green:false
    }
    if(num =='red')
    {
        // document.getElementById('validation').innerHTML=color;
        color['red']=true
    }
    else if (num =='blue')
    {
        color['blue']=true

    }
    else if (num =='green')
    {
        color['green']=true
        
    }
    console.log(color)
    
}
