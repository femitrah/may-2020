  const integer:number= 6;
  const float:number = 6.66;
  const hex :number  = 0xf00d;
  const binary :number = 0b1010011010;
  const octal :number = 0o744;
  const negZero :number  = -0;
  const actuallyNumber :number  = NaN;
  const largestNumber :number  = Number.MAX_VALUE;
  const mostBiglyNumber :number = Infinity;



console.log("Result",OnlyString(5,6));
console.log("OnlyString",OnlyString("palani","selvam"))

function OnlyString(a:any,b:any){
      if(typeof a ==="string" && typeof b ==="string")
    {  if(a.length>=1&&b.length>=1){
       return `${a}${b}`
    }  else if(a.length>=1||b.length>=1){
        var result=a+""+b
        return ""
    }
     
} 
return testFunction(a,b);
}

function testFunction(valueOne:any,valueTwo:any){
       if(typeof valueOne ==="number" && typeof valueTwo==="number"){   
        return valueOne+valueTwo
    } else {
       console.log("success")       
        }
         
    } 
anyDataType("palaniselvam",-10);

function anyDataType(a:any,b:any){
    console.log(`AllOw all DataType: A,${a},is ${typeof(a)},DataType: B,${b} is ${typeof(a)}`)
}

stringAndBooleanOnly("string",true);
function stringAndBooleanOnly(stringAndBooleanOne:string | boolean , stringAndBooleanTwo:string | boolean){
    var dataTypeOne=typeof(stringAndBooleanOne);
    var dataTypeTwo=typeof(stringAndBooleanTwo);
    console.log(`String and boolean DataType Only: A,${stringAndBooleanOne},is ${dataTypeOne},DataType: B,${stringAndBooleanTwo} is ${dataTypeTwo}`)
}

interface MitrahSohtkovilpattiBranch{
    kovilpattiEmployees_id:number;
    name:string;
}
interface MitrahSohtMaduraiBranch{
    maduraiEmployees_id:number;
    emplyoyees_name:string;   
}
type inatersection_type=MitrahSohtkovilpattiBranch&MitrahSohtMaduraiBranch;
const employee:inatersection_type={
    kovilpattiEmployees_id:323,
    name:"S.Palaniselvam",
    maduraiEmployees_id:333,
    emplyoyees_name:"sathish",
}
console.log(employee.kovilpattiEmployees_id,employee.name,employee.maduraiEmployees_id,employee.emplyoyees_name);




 