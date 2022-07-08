import React from 'react'
import {Link} from 'react-router-dom'
import "./home.css";
import pic from "/home/mitrah178/Desktop/login-page/src/eyes.avif"

const Home=()=> {

    // let navigate = useNavigate();
    const validation=()=> {
    
    const value =JSON.parse(localStorage.getItem('items'))
    
    const current= value.map ((e) => {
        if(e.activeUser===true){
            e.activeUser=false
        }
        return e
    })
    console.log(current);

 localStorage.setItem('items', JSON.stringify(value));
    // console.log("line26", getValue);
}
    

    


    return (
        <div className="home-container">
            <div className="home-form">
                <div className="home-content">
                   <Link to={"/login"}><button className='butt' onClick={validation}>logout</button></Link>
                    <img className="icon" src={pic} alt=""/>

                </div>
            </div>
        </div>
    )
}

export default Home