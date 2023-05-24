import React, { useEffect, useState } from 'react'
import data from './data/data'

const Demo = () => {
    const [search, setSearch] = useState("")
    const [demoData, setDemoData] = useState([])
    const [one, setOne] = useState(true);
    const [two, settwo] = useState(true);
    const [three, setThree] = useState(true);
    const [four, SetFour] = useState(true);

    

    useEffect(() => {
        let output = data.brands.map((e) => {
            return {
                brands: e,
         
                        brand: e.brand,
                        models: e.models.map((ele) => {
                            // console.log("eleeeeee",ele.name);
                            return {
                                name: ele.name,
                                price: ele.price,
                                processor: ele.processor,
                                colors: ele.colors.map((x) => (x)),
                                storageCapacity: ele.storageCapacity.filter((e) => {
                                    console.log("eeeeeeeeeeeee",e);
                                    return (
                                            (Number(e) === 64 && one) || (Number(e) === 128 && two) || (Number(e) === 256 && three) || (Number(e) === 512 && four)
                                    )
                                })
                            }



                        })

                    // }
                // }),


            }


           
        })
        console.log("output", output);


        setDemoData(output)
console.log("demoData" ,demoData);
    }, [one, two, three, four])

    return (
        <>
            <div className="main">
                <div className="search">
                    <label htmlFor="">Search</label>
                    <input type="text" onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())} />
                </div>

                <div className="checkboxs">
                    <label className="" >Storage</label>
                    <input type="checkbox" checked={one} name="" id="" onChange={(e) => setOne(e.target.checked)} />64
                    <input type="checkbox" checked={two} name="" id="" onChange={(e) => settwo(e.target.checked)} />128
                    <input type="checkbox" checked={three} name="" id="" onChange={(e) => setThree(e.target.checked)} />256
                    <input type="checkbox" checked={four} name="" id="" onChange={(e) => SetFour(e.target.checked)} />512
                </div>
                <div className="table">
                    <table>
                        <tr>
                            <th>{'Brand'}</th>
                            <th>{"Name"}</th>
                            <th>{"Price"}</th>
                            <th>{"Processor"}</th>
                            <th>{"Colors"}</th>
                            <th>{"Storagecapacity"}</th>
                        </tr>
                        {demoData
                        .filter((dataElement) => {
                            return search === "" ? dataElement : String(dataElement.models.map((x) => (x.processor.toLocaleLowerCase().trim()))).toLocaleLowerCase().includes(search) || (dataElement.brand.toLocaleLowerCase().includes(search))
                        }).map((element) => {
                            console.log("howmanyTR")
                            return (
                                <>
                                    {element.models.map((x,index)=>
                                    <tr>
                                       {index==0&& <td rowSpan={element.models.length  }>{element.brand}</td>}
                                        <td>{x.name}</td>
                                        <td><li>{x.price}</li></td>
                                        <td><li>{x.processor}</li></td>
                                        <td>{(x.colors).map((e)=><li>{e}</li>)}</td>
                                        <td>{(x.storageCapacity).map((e)=><li>{e}</li>)}</td>
                                    </tr>
                                    )}

                                </>

                            )
                        })}


                    </table>
                </div>
            </div>
        </>
    )
}

export default Demo





















 // array = {
            //     ...array, brands: element,
            //     models: element.models.map((x) => (x)),
            //     name: element.models.map((e) => (e.name)),
            //     price: element.models.map((e) => (e.price)),
            //     processor: element.models.map((e) => (e.processor)),
            //     colors: element.models.map((e) => (e.colors)),
            //     storageCapacity: element.models.map((e) => (e.storageCapacity))
            //         .filter((e) => {
            //             console.log(e, (Number(e) === 64 && one) || (Number(e) === 128 && two) || (Number(e) === 246 && three) || (Number(e) === 512 && four));
            //             return (
            //                 // (Number(e) === 128 && one) ? console.log("aaaa") : console.log("bbbb")
            //                 (Number(e) === 64 && one) || (Number(e) === 128 && two) || (Number(e) === 246 && three) || (Number(e) === 512 && four)
            //             )
            //         })

            // }



            // console.log("Array", array);




// useEffect(() => {


    //     // let demo = data.brands.map((e) => (e.models));
    //     // console.log("demooo", demo);
    //     let array = {};
    //     let abb = data.brands.map((element) => {
    //         // console.log("element.storageCapacity", element);
    //         // console.log("demoData",demoData);
    //        map((ele) => {
    //             // console.log("element[ele].storageCapacity", element[ele].storageCapacity)
    //             console.log("ele", ele)
    //             // console.log("element[ele].storageCapacity filter", element[ele].storageCapacity)             
    //             array = {
    //                 ...array,brands:brands,models:models.map(),
    //                 storageCapacity: element[ele].storageCapacity
    //                     // .filter((e) => {
    //                     //    console.log (Number(e) === 128 && one) ? console.log("aaaa") : console.log("bbbb")
    //                     //     return   ( (Number(e) === 64 && one) || (Number(e) === 128 && two) || (Number(e) === 246 && three) || (Number(e) === 512 && four))

    //                     // })

    //             }
    //             // console.log("array", array);
    //             // return (
    //             //     element[ele].storageCapacity.filter((e) => {
    //             //         console.log("ele", ele)
    //             //         console.log("element[ele].storageCapacity filter", element[ele].storageCapacity)
    //             //         console.log("data", e);
    //             //         console.log(e,(Number(e) === 64 && one)|| (Number(e) === 128 && two) || (Number(e) === 246 && three) || (Number(e) === 512 && four));
    //             //         return (
    //             //             // (Number(e) === 128 && one) ? console.log("aaaa") : console.log("bbbb")
    //             //             (Number(e) === 64 && one) || (Number(e) === 128 && two) || (Number(e) === 246 && three) || (Number(e) === 512 && four)
    //             //         )

    //             //     })
    //             // )


    //         })

    //     })
    //     console.log("arrayyyy",array);
    //     //      .filter((dataValue) => {
    //     //         console.log("(dataValue === 64 && one)",(dataValue !== "64" && one)  || (dataValue !== "128" && two) || (dataValue !== "256" && three) || (dataValue !== "512" && four));
    //     //                 console.log("dataValue",dataValue);
    //     // //   return (dataValue !== "64" && one) ?  console.log(" 64 YES") : console.log(" 64 NO")|| (dataValue !== "128" && two) ?  console.log(" 128 YES") : console.log(" 128 NO") ||
    //     // //    (dataValue !== "256" && three) ?  console.log(" 256YES") : console.log(" 256 NO") || (dataValue == "512" && four)?  console.log(" 512  YES") : console.log(" 512 NO") ;
    //     //         return ((dataValue === "64" && one) || (dataValue === "128" && two) || (dataValue === "256" && three) || (dataValue === "512" && four))
    //     //     })
    //     // console.log("demo",demo);
    //     // console.log("data",abb);
    //     //         let demo = data.brands.map((x) => (x.models.map((data) => (data.storageCapacity))))
    //     //         let demoData = demo.map((x) => {
    //     //             console.log(one, two, three, four, "1234", "x", ...x);
    //     //             return x
    //     //         })

    //     //         let valueDemoData = demo.filter((element) => {
    //     // console.log("elementtt",element);
    //     //             return (demoData === "64" && one) || (demoData == "128" && two) || (demoData == "256" && three) || (demoData == "512" && four)


    //     //         })
    //     //         console.log("valueDemodata", valueDemoData);

    //     setDemoData(array)

    //     // setDataValue(abb)
    //     //         console.log("demoooooo", demoData);

    //     // console.log("abb", abb);
    //     console.log("number", one, two, three, four);

    // }, [one, two, three, four])

    // let demo = data.brands
    // console.log("data",data.brands);

    // console.log("search..", search);
    // console.log(one, two, three, four, "values");