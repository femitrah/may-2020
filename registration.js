import React, { useState } from "react";
import{useNavigate,} from "react-router-dom";
// import Login from "./login";
import "./reg.css";

const Register=()=>{


        const [name,setName]=useState('');
        const [userName,setUserName]=useState('');
        const [email,setEmail]=useState('');
        const [password,setPassword]=useState('');
        const [Conformpass,setConfirmPassword]=useState('');
        let navigate = useNavigate();
      

        const handle=(e) => {
          e.preventDefault();
          if(name===""||userName===""||email===""||password===""||Conformpass===""){
            alert("Please fill all the text filed")
          }else if(password.length < 8){
            alert("Your Password Should Be 8 character")
          }
          else if(password!==Conformpass){
            alert("Your Password And ConfirmPassword is doesn't match")
          }
           else  {
            
             let formData=JSON.parse(localStorage.getItem('items'))||[];
             console.log("line26" ,formData);
             let exist=formData.length && JSON.parse(localStorage.getItem('items')).some(data=>data.email.toLowerCase()===email.toLowerCase() )
             if(!exist){
             formData.push({
                email: email,
                password: password,
                activeUser:false
             });
              localStorage.setItem('items',JSON.stringify(formData))
              // console.log(localStorage.setItem('items',JSON.stringify(formData)))
             navigate("/",{replace:true})
            }
            else{
              alert("you are already registered")
            }
        }
        }

  
        return(
          
    <div className="form-container">
      
      <div className="reg-form" >
        <div className="form-content">
          <h2 className="form-title">Register Form</h2>
          <div className="form-group">
            <label>Full Name</label>
            <input
            
              type="text"
              className="form-control"
              placeholder="e.g Jane Doe"
              onChange={(event)=>setName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>User name</label>
            <input
              type="text"
              className="form-control"
              placeholder="User Name"
              onChange={(event)=>setUserName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              onChange={(event)=>setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(event)=>setPassword(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(event)=>setConfirmPassword(event.target.value)}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn" onClick={handle} >
              Register now
            </button>
          </div>
        </div>
      </div>
     
    </div>
          
        )
    }

export default Register;