
interface employeePersonalInfo {
    userName:String;
    streetName:String;
    postOffice:String;
    thaluka:String;
    district:String;
    }
let objectOne={
    userName:"palaniselvam",
    streetName:"Karaivalainthanpatti",
    postOffice:"Meenachipuram",
    thaluka:"Srivilliputtur",
    district:"Viruthunagar",
   }
   const stringOnly=(objectOne:employeePersonalInfo)=>{
    console.log(objectOne)
    console.log(`${objectOne.userName},${objectOne.streetName},${objectOne.postOffice},${objectOne.thaluka},${objectOne.district}`);
   }
      stringOnly(objectOne);

interface employeeSalarayInfo{
    montlySalary:number;
    pfAmount:number;
    leaveSalary:number;
    salaryincrement:number;
}
const objectTwo={
    montlySalary:5000,
    pfAmount:2000,
    leaveSalary:1000,
    salaryincrement:2000,
}

const numberOnly=(objectTwo:employeeSalarayInfo)=>{
   console.log (`${objectTwo.montlySalary},${objectTwo.pfAmount},${objectTwo.leaveSalary},${objectTwo.salaryincrement}`)
}
numberOnly(objectTwo)

interface employeeOtherInfo{
    marrageStates:string;
    activeUser:string;
    doYouHaveBike:boolean;
    doYouHaveCar:boolean;
}
const objectThree={
    marrageStates:"No",
    activeUser:"Yes",
    doYouHaveBike:true,
    doYouHaveCar:false,
}

const booleanOnly=(objectThree:employeeOtherInfo)=>{
    console.log(`${objectThree.marrageStates},${objectThree.activeUser},${objectThree.doYouHaveBike},${objectThree.doYouHaveCar}`);
 }
 booleanOnly(objectThree);

 interface intersectionOne{
    userName:string;
    password:number;
    
}
interface intersectionTwo{
    profile:string;
    rating:number;
}
const inatersection={
    userName:"palaniselvam",
    password:5500,
    profile:"good",
    rating:4.5,
}
type inatersection=intersectionOne&intersectionTwo;

const inatersectionFunction=(inter:inatersection)=>{
console.log( `${inter.userName},${inter.password},${inter.profile},${inter.rating}`)
}
inatersectionFunction(inatersection);