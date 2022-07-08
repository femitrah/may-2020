import React,{useState} from "react";
import{Link,useNavigate} from "react-router-dom";
import "./App.css";

function Login(){
    const [emailLog,setEmailLog] = useState("");
    const [passwordLog,setPasswordLog] = useState("");
 
    let navigate = useNavigate();

    const handleLogin=()=>{
      const item=JSON.parse(localStorage.getItem('items'));
      console.log("line13",item);
      const mail =item.findIndex((value)=>value.email===emailLog)
      const pass =item.findIndex((value)=>value.password===passwordLog)
      const negative=-1;
      if(emailLog===""|| passwordLog===""){
        alert("Please fill all the text filed")
      }
      else if(mail === negative){
        alert("email is invalid")
      } 
      else if(pass=== negative){
        alert("password is invalid")
      } 

      else if(mail ===negative||pass===negative){
        alert("email and passsword is invalid")
      } 
      else if(mail===pass){

        item[mail].activeUser=true;
        let addNewUser=JSON.stringify(item);
        localStorage.setItem('items',addNewUser)
        console.log(addNewUser)
        navigate("/home",{replace:true})
      }
      else{
        alert("you did not registered")
      }


    }
    
    
    
        return(
          <div className="backImage">
            <div className="container">
            <div className="form-signin">
              <h1>Please sign in</h1>
              <div className="row">
                <div className="col">
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="input-text"
                    onChange={(e)=> setEmailLog(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="input-text"
                    onChange={(e)=> setPasswordLog(e.target.value)}
                  />
                  <div>
                    
                      <input type="submit" value="Login" className="input-text" onClick={handleLogin}  />
                    
                  </div>

                  <div className="linkRef"><Link to={"/register"}>Register now</Link> </div>
                  
                </div>
              </div>
              </div>
          </div>
          </div>
        )
    }

export default Login;

