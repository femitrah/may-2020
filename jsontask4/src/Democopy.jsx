import React, { useEffect, useState } from 'react'
import data from './data/data'

const Demo = () => {
    const [search, setSearch] = useState("")
    const [demoData, setDemoData] = useState()
    const [datavalue, setdataValue] = useState(data)
    const [one, setOne] = useState(true);
    const [two, settwo] = useState(true);
    const [three, setThree] = useState(true);
    const [four, SetFour] = useState(true);


    useEffect(() => {
        let demo = data.brands.map((x) => (x.models.map((data) => (data.storageCapacity))))

        let demoData = demo.map((x) => {
            console.log(one, two, three, four, "1234", "x", ...x);

            return x

        })

        let valueDemoData = demo.filter((element) => {
console.log("elementtt",element);
            return (demoData === "64" && one) || (demoData == "128" && two) || (demoData == "256" && three) || (demoData == "512" && four)


        })
        console.log("valueDemodata", valueDemoData);

        // setDemoData(valueDemoData)
        setdataValue(valueDemoData)
        console.log("demoooooo", demoData);
    }, [one, two, three, four])


    // let demo = data.brands
    // console.log("data",data.brands);

    console.log("search..", search);
    console.log(one, two, three, four, "values");

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

                        {data.brands.filter((data) => {
                            // let processorData = data.models.map((x)=>(x.processor))
                            // return search === "" ? data : (data.brand.toLocaleLowerCase().includes(search) )
                            // console.log("data.models.map((x)=>(x.processor))",String(data.models.map((x)=>(x.processor.toLocaleLowerCase()))));
                            return search === "" ? data : String(data.models.map((x) => (x.processor.toLocaleLowerCase().trim()))).toLocaleLowerCase().includes(search) || (data.brand.toLocaleLowerCase().includes(search))
                        })


                            .map((element) => {
                                return (
                                    // console.log("element",element.brand); 
                                     <>                  
                                    {/* <tr >
                                        <td  rowSpan={1}>{element.brand}</td>
                                        <td className='data'>{element.models.map((x) =><tr className=''>{(x.name)} </tr>)}</td>
                                        <td className='data'>{element.models.map((x) =><td className='datavalue'>{(x.price)}</td>)}</td>
                                        <td className='data'>{element.models.map((x) =><td className='datavalue'>{(x.processor)}</td>)}</td>
                                        <td className='data '>{element.models.map((x) =><td className='datavalue'>{(x.colors.map((e)=><td>{(e)}</td>))}</td>)}</td>
                                        <td className='data '>{element.models.map((x) =><td className='datavalue'>{(x.storageCapacity.map((e)=><td>{(e)}</td>))}</td> )}</td>
                                    </tr> */}


                                    <tr>
                                        <td>{element.brand}</td>
                                        <td>{element.models.map((x)=><li><td>{x.name}</td></li>)}</td>  
                                        <td>{element.models.map((x)=><li><td>{x.price}</td></li>)}</td>  
                                        <td>{element.models.map((x)=><li>{x.processor}</li>)}</td>  
                                        <td>{element.models.map((x)=><li><td>{x.colors.map((e)=>(<li>{e}</li>))}</td></li>)}</td>  
                                        <td>{element.models.map((x)=><li><td>{x.storageCapacity.map((e)=>(<li>{e}</li>))}</td></li>)}</td>  



                                    </tr>
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














_________________________________________________________

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


        let demo = data.brands.map((e) => (e.models));
        let abb = demo.map((element) => {
            // console.log("element.storageCapacity", element);
        
            return Object.keys(element).map((ele) => {
                console.log(" element[ele].storageCapacity", element[ele].storageCapacity)
                element[ele].storageCapacity
                
                .filter((dataValue) => {
                    // console.log(dataValue,"dataaaaaaaaaa");
                    // console.log("one, two, three, four",one, two, three, four);
                    // console.log("(dataValue === 64 && one)",(dataValue !== "64" && one)  || (dataValue !== "128" && two) || (dataValue !== "256" && three) || (dataValue !== "512" && four));
                    // console.log("dataValue",dataValue);
                    console.log("dataValue",dataValue);
              return (dataValue !== "64" && one) ?  console.log(" 64 YES") : console.log(" 64 NO")|| (dataValue !== "128" && two) ?  console.log(" 128 YES") : console.log(" 128 NO") ||
               (dataValue !== "256" && three) ?  console.log(" 256YES") : console.log(" 256 NO") || (dataValue == "512" && four)?  console.log(" 512  YES") : console.log(" 512 NO") ;
                    // return ((demoData !== "64" && one) || (demoData !== "128" && two) || (demoData !== "256" && three) || (demoData !== "512" && four))
                })
              
            }) //mapending
            //  .filter((element)=>{
            //     })
            // return (Object.keys(element.storageCapacity))
            // .filter
          
        })
        // console.log("demo",demo);
        // console.log("data",abb);

        //         let demo = data.brands.map((x) => (x.models.map((data) => (data.storageCapacity))))

        //         let demoData = demo.map((x) => {
        //             console.log(one, two, three, four, "1234", "x", ...x);

        //             return x

        //         })

        //         let valueDemoData = demo.filter((element) => {
        // console.log("elementtt",element);
        //             return (demoData === "64" && one) || (demoData == "128" && two) || (demoData == "256" && three) || (demoData == "512" && four)


        //         })
        //         console.log("valueDemodata", valueDemoData);

        setDemoData(abb)

        // setdataValue(abb)
        //         console.log("demoooooo", demoData);

        console.log("abb",abb);

    }, [one, two, three, four])

    // let demo = data.brands
    // console.log("data",data.brands);

    // console.log("search..", search);
    // console.log(one, two, three, four, "values");

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

                        {data.brands.filter((data) => {
                            // let processorData = data.models.map((x)=>(x.processor))
                            // return search === "" ? data : (data.brand.toLocaleLowerCase().includes(search) )
                            // console.log("data.models.map((x)=>(x.processor))",String(data.models.map((x)=>(x.processor.toLocaleLowerCase()))));
                            return search === "" ? data : String(data.models.map((x) => (x.processor.toLocaleLowerCase().trim()))).toLocaleLowerCase().includes(search) || (data.brand.toLocaleLowerCase().includes(search))
                        })


                            .map((element) => {
                                return (
                                    // console.log("element",element.brand); 
                                    <>
                                        {/* <tr >
                                        <td  rowSpan={1}>{element.brand}</td>
                                        <td className='data'>{element.models.map((x) =><tr className=''>{(x.name)} </tr>)}</td>
                                        <td className='data'>{element.models.map((x) =><td className='datavalue'>{(x.price)}</td>)}</td>
                                        <td className='data'>{element.models.map((x) =><td className='datavalue'>{(x.processor)}</td>)}</td>
                                        <td className='data '>{element.models.map((x) =><td className='datavalue'>{(x.colors.map((e)=><td>{(e)}</td>))}</td>)}</td>
                                        <td className='data '>{element.models.map((x) =><td className='datavalue'>{(x.storageCapacity.map((e)=><td>{(e)}</td>))}</td> )}</td>
                                    </tr> */}


                                        <tr>
                                            <td>{element.brand}</td>
                                            <td>{element.models.map((x) => <li><td>{x.name}</td></li>)}</td>
                                            <td>{element.models.map((x) => <li><td>{x.price}</td></li>)}</td>
                                            <td>{element.models.map((x) => <li><td>{x.processor}</td></li>)}</td>
                                            <td>{element.models.map((x) => <li>{x.colors.map((e) => <tr><td>{e}</td></tr>)}</li>)}</td>
                                            <td>{element.models.map((x) => <li>{x.storageCapacity.map((e) =><tr><li>{e}</li></tr>)}</li>)}</td>



                                        </tr>
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
















// ==================================================\

import React, { useEffect, useState } from 'react'
import data from './data/data'

const Demo = () => {
    const [search, setSearch] = useState("")
    const [dataValue, setDataValue] = useState(data)
    const [demoData, setDemoData] = useState([])
    const [one, setOne] = useState(true);
    const [two, settwo] = useState(true);
    const [three, setThree] = useState(true);
    const [four, SetFour] = useState(true);

    useEffect(() => {


        let demo = data.brands.map((e) => (e.models));
        console.log("demo", demo);
        let array= {};
        let abb = demo.map((element) => {
            // console.log("element.storageCapacity", element);
            // console.log("demoData",demoData);
            return Object.keys(element).map((ele) => {
                // console.log("element[ele].storageCapacity", element[ele].storageCapacity)
                // console.log("ele",ele)
                // console.log("element[ele].storageCapacity filter", element[ele].storageCapacity) 
                // console.log("ele",ele);            
              array ={
                 ...array,[ele]:{
                 ...element[ele],models:element[ele].storageCapacity 
                .filter((e) => {
                    console.log("ele", ele)
                    console.log("element[ele].storageCapacity filter", element[ele].storageCapacity)
                    console.log("data", e);
                    console.log(e,(Number(e) === 64 && one)|| (Number(e) === 128 && two) || (Number(e) === 246 && three) || (Number(e) === 512 && four));

                    return (
                        // (Number(e) === 128 && one) ? console.log("aaaa") : console.log("bbbb")
                        (Number(e) === 64 && one) || (Number(e) === 128 && two) || (Number(e) === 246 && three) || (Number(e) === 512 && four)
                    )
                })
            }
            }    
            console.log("array",array);          
                // return (
                //     element[ele].storageCapacity
                //     .filter((e) => {
                //         console.log("ele", ele)
                //         console.log("element[ele].storageCapacity filter", element[ele].storageCapacity)
                //         console.log("data", e);
                //         console.log(e,(Number(e) === 64 && one)|| (Number(e) === 128 && two) || (Number(e) === 246 && three) || (Number(e) === 512 && four));

                //         return (
                //             // (Number(e) === 128 && one) ? console.log("aaaa") : console.log("bbbb")
                //             (Number(e) === 64 && one) || (Number(e) === 128 && two) || (Number(e) === 246 && three) || (Number(e) === 512 && four)
                //         )

                //     })
                // )}


            })

        })
        //      .filter((dataValue) => {
        //         console.log("(dataValue === 64 && one)",(dataValue !== "64" && one)  || (dataValue !== "128" && two) || (dataValue !== "256" && three) || (dataValue !== "512" && four));
        //                 console.log("dataValue",dataValue);
        // //   return (dataValue !== "64" && one) ?  console.log(" 64 YES") : console.log(" 64 NO")|| (dataValue !== "128" && two) ?  console.log(" 128 YES") : console.log(" 128 NO") ||
        // //    (dataValue !== "256" && three) ?  console.log(" 256YES") : console.log(" 256 NO") || (dataValue == "512" && four)?  console.log(" 512  YES") : console.log(" 512 NO") ;
        //         return ((dataValue === "64" && one) || (dataValue === "128" && two) || (dataValue === "256" && three) || (dataValue === "512" && four))
        //     })
        // console.log("demo",demo);
        // console.log("data",abb);
        //         let demo = data.brands.map((x) => (x.models.map((data) => (data.storageCapacity))))
        //         let demoData = demo.map((x) => {
        //             console.log(one, two, three, four, "1234", "x", ...x);
        //             return x
        //         })

        //         let valueDemoData = demo.filter((element) => {
        // console.log("elementtt",element);
        //             return (demoData === "64" && one) || (demoData == "128" && two) || (demoData == "256" && three) || (demoData == "512" && four)


        //         })
        //         console.log("valueDemodata", valueDemoData);

        setDemoData(array)

        // setDataValue(abb)
        //         console.log("demoooooo", demoData);

        console.log("abb", abb);
        console.log("number",one, two, three, four);

    }, [one, two, three, four])

    // let demo = data.brands
    // console.log("data",data.brands);

    // console.log("search..", search);
    // console.log(one, two, three, four, "values");

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
                        {dataValue.brands.filter((dataElement) => {
                            return search === "" ? dataElement : String(dataElement.models.map((x) => (x.processor.toLocaleLowerCase().trim()))).toLocaleLowerCase().includes(search) || (dataElement.brand.toLocaleLowerCase().includes(search))
                        }).map((element) => {
                            return (
                                <>


                                    <tr>
                                        <td>{element.brand}</td>
                                        <td>{element.models.map((x) => <li><td>{x.name}</td></li>)}</td>
                                        <td>{element.models.map((x) => <li><td>{x.price}</td></li>)}</td>
                                        <td>{element.models.map((x) => <li><td>{x.processor}</td></li>)}</td>
                                        <td>{element.models.map((x) => <li>{x.colors.map((e) => <tr><td>{e}</td></tr>)}</li>)}</td>
                                        <td>{element.models.map((x) => <li>{x.storageCapacity.map((e) => <tr><li>{e}</li></tr>)}</li>)}</td>



                                    </tr>
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