import { useState } from "react";
import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { createUser } from "./services/action";
import { connect } from "react-redux";
function AddUser(props) {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  const [warning, SetWarning] = useState(false);
  let navigatePage = useNavigate();
  function handleaddUser() {
   let submitData= {
      "email":email,
      "title":title,
      "firstName":firstName,
      "lastName":lastName,
      "role":role,
      "password":password,
      "confirmPassword":confirmPassword
  }
    navigatePage("/home");
    props.createUser(submitData)
  }
return (
    <div className="LoginApp">
      <div className="login-form-container">
        <div className="login-form">
          <div className="login-form-content">
            <h3 className="login-form-title">Add User</h3>
            <div className="text-center">
              
              <span className="link-primary"></span>
            </div>
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>title</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter title"
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>FIrstname</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter title"
                onChange={(event) => setfirstName(event.target.value)}
              />
            </div>

            <div className="form-group mt-3">
              <label>LastName</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter title"
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

            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter confirm password"
                onChange={(event) => setConfirmpassword(event.target.value)}
              />
            </div>

            <div className="d-grid gap-2 mt-3">
              <button className="btn btn-primary" onClick={ handleaddUser}>
                Submit
              </button>
            </div>
          </div>
          {warning && (
            <Alert>
              <p> Please fill the details</p>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default connect(state =>{
  console.log("State ",state)
  return({users: state.users})},{createUser})(AddUser);
