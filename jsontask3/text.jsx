function UpdatePosition(e) {
    const { value, checked } = e.target

    // setCountryIndia(value)

let array = data.map((x)=>x.country);
console.log("array",array);


    console.log("value", value, "checked", checked);




    let demo = data.filter((filterData) => {
        // if (filterData.country === value && checked  ) {
        //         console.log("demo1", filterData);
        //         return true
        //     }
        //     else{
        //         return false
        //     }
        return filterData.country === value && checked ? filterData : false
        // if (array[0] === filterData.country &&  checked ===true ) {
        //     console.log("filterData",filterData);
        //     return true
        // }
        // else if(array[1] == filterData.country && checked  ){
        //     return true
        //     console.log("filterData",filterData);

        // }  else if(array[2] == filterData.country && checked  ){
        //     console.log("filterData",filterData);

        //     return true
        // }  else if(array[3] !== filterData.country && checked  ){
        //     console.log("filterData",filterData);

        //     return true
        // }  else if(array[4] !== filterData.country && !checked   ){
        //     console.log("filterData",filterData);

        //     return true
        // }else{
        //     return false

        // }
    })

    // console.log("demo", demo);


    setUpdate(pre => [...pre ,...demo])
    setStateData(demo)

        function demoUpdate (demo){
    console.log(demo);
        }demoUpdate(demo)
}

// =============================

// ========================================
// =========================================================


if (India === false ) {
    console.log("indiaaaa")
    let aa = data.filter((x) => {
        if (x.country === "India") {
            return false
        }
        else  {
            
            return true
        }
    })
    setStateData(aa);

}
    if (spain === false) {
        let bb = data.filter((x) => {
            if (x.country === "spain") {
                return false
            }
            else {
                return true
               
            }
        })
        setStateData( bb);
    }
    
    if (italy === false) {
        let bb = data.filter((x) => {
            if (x.country === "Italy") {
                return false
            }
            else {
                return true
            }
        })
        setStateData( bb);
    }

if (korea === false) {
let bb = data.filter((x) => {
if (x.country === "south korea") {
    return false
}
else {
    return true
}
})
setStateData( bb);
}

if (russia === false) {
let bb = data.filter((x) => {
if (x.country === "russia") {
    return false
}
else {
    return true
}
})
setStateData( bb);
}

      let demo = India === true ? data : false 
  ||spain === true ? data : false
  ||korea=== true ? data : false
  ||italy=== true ? data : false
  ||russia === true ? data : false ? data : false
console.log("console.log(datademo[0]", datademo[0]);

if (datademo[0] === "India") {
console.log("datademo",datademo[0]);

}

// if (checked) {
//     setUserInfo({
//       languages: [...languages, value],
//       response: [...languages, value],
//     });
//   }

  // Case 2  : The user unchecks the box
//   else {
//     setUserInfo({
//       languages: languages.filter((e) => e !== value),
//       response: languages.filter((e) => e !== value),

//     });}

// ===============================================




// let valuedemo = datademo.filter((filterData) => {
//     console.log("filterData",filterData);
//     if (India == true) {
//             console.log("demo1", filterData);
//             return filterData
//         }
//         else{

//             return false
//         }

//     })
// console.log("valuedemo",valuedemo);
// setUpdate([...update,valuedemo])
// setStateData(demo)
// console.log("demo",demo);
// console.log("update update",update);


// let dynamicValue = data[data.country]=datademo 
// console.log("dynamicValue",dynamicValue);
//         let demo = data.filter((filterData) => {
//             return filterData.country ==={filterData[filterData.country]= datademo } ? true : false


//         })
//         setStateData(demo)
