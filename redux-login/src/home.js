
import React, { useState,useEffect} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import "./home.css";
// import pic from "/home/mitrah178/Desktop/login-page/src/eyes.avif"

const Home=()=> {
   const[users,setUser]=useState([])
   const[get,setGet]=useState("")
   const update=users.data;
   const navigate=useNavigate();

   console.log("line13",update)
    const fetchGet=  ()=>{
        fetch("https://api.scripture.api.bible/v1/bibles",{
            method: 'GET',
            headers: {"api-key" : "6d77d726b980143eff391187ac316c51"},
        }).then(response =>{
            return response.json()
        })
        .then(data=>{
            setUser(data)
        })
    }
    useEffect(() => {
        fetchGet();
      }, []);

const goToDetails=()=>{
    navigate({
        pathname:'/details',
    })
}


// console.log("line25",users.data);

    // let navigate = useNavigate();
    const validation=()=> {
    
    const value =JSON.parse(localStorage.getItem('items'))
    
    const current= value.map ((e) => {
        if(e.activeUser===true){
            e.activeUser=false
        }
        return e
    })
    console.log("line37",current);

 localStorage.setItem('items', JSON.stringify(value));
    // console.log("line26", getValue);
}
    return (
        <>


        <div className="home-container">
            <div className="home-form">
                <div className="home-content">
                    <label className='home'>Home Page</label>
                    {/* <div>{get}</div> */}
                    <div className='flex-input'>
                       
                        <input type="text" className="search-input" placeholder='Search.....' onChange={(e)=>setGet(e.target.value)} />
           
                        <Link to={"/login"}><button className='butt' onClick={validation}>logout</button></Link>
                          {/* <img className="icon" src={pic} alt=""/> */}
                    </div>
                    
                    <div className="App">
                        
                        {users.data?.length>0 ? (
                            <div className='search-table'>
                                <table className='table1'>
                                 <thead>
                                            <tr>
                                                <th className='header1'>S.no</th>
                                                <th className='header1'>Name</th>
                                                <th className='header1'>Description</th>
                                                <th className='header1'>Action button</th>
                                            </tr>
                                        </thead>
                                        {update.filter((user)=>user.name.toLowerCase().includes(get)).map((user,i) =>(
                                    
                                       
                                        <tbody>
                                            <tr>
                                                <td className='footer1'>{i+1}</td>
                                                <td className='footer1'>{user.name}</td>
                                                <td className='footer1'>{user.description}</td>
                                                <td className='footer1'><Link to={`/${user.id}`}><button onClick={goToDetails} className='view' >View</button></Link></td>
                                            </tr>
                                        </tbody>
                                    
                               
                                ))}
                                </table>
                            </div>
                        ):null}



                    </div>   
       
                
                </div>
                
            </div>
        </div>
        </>
    )
    
}

export default Home

