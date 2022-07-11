import React,{useState} from "react";
import{Link,useNavigate} from "react-router-dom";
import "./home"
import "./App.css";

function Login(){
    const [emailLog,setEmailLog] = useState("");
    const [passwordLog,setPasswordLog] = useState("");
 
    let navigate = useNavigate();

    const handleLogin=()=>{
      const item=JSON.parse(localStorage.getItem('items'));
      console.log("line13",item);
      if(item != null)
      {
      const mail =item.findIndex((value)=>value.email===emailLog)
      const pass =item.findIndex((value)=>value.password===passwordLog)
      const negative=-1;
      console.log("mail:pass:",mail,pass,passwordLog)
      if(emailLog===""|| passwordLog===""){
        alert("Please fill all the text filed")
      }
      else if(mail === negative){
        alert("email is invalid")
      } 
      else if(pass === negative){
        alert("password is invalid")
      }
      else if(mail === negative||pass === negative){
        alert("email and passsword is invalid")
      } 
      else if(mail!==pass||mail===pass){
        console.log("chec37")
        let updateUser= item.map(mapData=>{
          if(mapData.email===emailLog){
            return ({...mapData,activeUser:true}) 
          }else {
            return mapData
          }
        })
        console.log("updateUse",updateUser);
        localStorage.setItem('items', JSON.stringify(updateUser))
        
        navigate("/home")
      }
      else{
        alert("you did not registered")
      }

      }
      else
      {
        alert("please register and login")
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

