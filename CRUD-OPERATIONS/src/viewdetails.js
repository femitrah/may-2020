import React from "react";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {singleData,updateUser} from "./services/action";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
function UpdateUser(props) {
  const [emaillog, setEmaillog] = useState(props.single.email);
  const [titlelog, setTitle] = useState(props.single.title);
  const [firstNamelog, setfirstName] = useState(props.single.firstName);
  const [lastNamelog, setlastName] = useState(props.single.lastName);
  const [rolelog, setRole] = useState(props.single.role);
 
let navigatePage = useNavigate();
useEffect(()=>{
 if( props.single.email!==undefined){
  setEmaillog(props.single.email)
  setTitle(props.single.title)
  setfirstName(props.single.firstName)
  setlastName(props.single.lastName)
  setRole(props.single.role)
 }
},[props.single])
  useEffect(() => {
    console.log("ps",props.single)
    let inputData= {
      "email":emaillog,
      "title":titlelog,
      "firstName":firstNamelog,
      "lastName":lastNamelog,
      "role":rolelog,
  }
  console.log("id",inputData)
  },[props.single]);
  let inputData= {
    "email":emaillog,
    "title":titlelog,
    "firstName":firstNamelog,
    "lastName":lastNamelog,
    "role":rolelog,
}
  function handleupdateUser() {
  props.updateUser(inputData,props.single.id)
  console.log("ud",inputData)
    navigatePage("/home");
  }
return (
    <div className="LoginApp">
      <div className="login-form-container">
        <div className="login-form">
          <div className="login-form-content">
            <h3 className="login-form-title">Update User</h3>
            <div className="text-center">
              <span className="link-primary"></span>
            </div>
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                 defaultValue={props.single.email}
                 value={emaillog}
                 onChange={(event) => setEmaillog(event.target.value)}
              
              />
            </div>
            <div className="form-group mt-3">
              <label>title</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter title"
                defaultValue={props.single.title}
                value={titlelog}

                onChange={(event) => setTitle(event.target.value)}    
              />
            </div>
            <div className="form-group mt-3">
              <label>Firstname</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter title"
                defaultValue={props.single.firstName}
                value={firstNamelog}

                onChange={(event) => setfirstName(event.target.value)}
                
              
              />
            </div>

            <div className="form-group mt-3">
              <label>LastName</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter title"
                defaultValue={props.single.lastName}
                value={lastNamelog}

                onChange={(event) => setlastName(event.target.value)}

              
              />
            </div>

            <div className="form-group mt-3">
              <label>Role</label>
                <div>
                  <select className="dropDown" onChange={(event) => setRole(event.target.value)}>
                      <option>Role</option>
                      <option>Admin</option>
                  </select>
                </div>
            </div>


            <div className="d-grid gap-2 mt-3">
              <button className="btn btn-primary" onClick={ handleupdateUser}>
                Submit
              </button>
            </div>
            
          </div>
          {/* {warning && (
            <Alert>
              <p> Please fill the details</p>
            </Alert>
          )} */}
        </div>
      </div>
    </div>
  );
}
const mapStatetoProps = (state) => {
return { single:state.single,updated:state.updated}
};
export default connect(mapStatetoProps,{singleData,updateUser})(UpdateUser);






