import React from 'react'
const array =[1,2,3,4,5]
let assetDetails = [{
  name: "kamaraj", assets: {
    lubricantAsset: ["car", "bike", "cycle"],
    staticAsset: ["home", "shop"]
  }
}, {
  name: "pandian", assets: {
    lubricantAsset: ["car", "bike",],
    staticAsset: ["home", "shop"]
  }
}, {
  name: "Leo", assets: {
    lubricantAsset: ["car",],
    staticAsset: ["home", "shop"]
  }
}, {
  name: "raj", assets: {
    lubricantAsset: ["car", "bike", "cycle"],
    staticAsset: ["home", "shop"]
  }
}];

let aa =assetDetails.map((e)=>{
  return e.assets
  // return e.assets.staticAsset.map((x)=>{
  //   // return {propertyName:x}
  // })
})

console.log(aa);
let value ={};
let cc =assetDetails.map((e)=>{
return  {
    name:e.name,assets:{
      lubricantAsset:e.assets.lubricantAsset.filter((e)=>{
        console.log("eee",e);
        return e === "cycle" ? false : true
       
      }),
      staticAsset :e.assets.staticAsset.map((x)=>{
          return {propertyName:x}
        })


    }
  }


  // return e.assets.lubricantAsset.filter((x)=>{
  //   if (x==="cycle") {
  //     return false
      
  //   }else{
  //     return true
  //   }
  // })
})
console.log("value",value);
console.log("cc",cc);

// const lubricantAsset = {lubricantAsset:[cc]}
// const staticAsset={staticAsset:aa}
// console.log("staticAsset",staticAsset);
// console.log("lubricantAsset",lubricantAsset);

// const output = [...assetDetails,...staticAsset]
// console.log("outputtt",output);


const kp = () => {
let bb= array.map((element)=>{
    return {number:element}
})



  return (
    <div>
        {/* {aa} */}
    </div>
  )
}

export default kp






