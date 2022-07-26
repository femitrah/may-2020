import React from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom"
import { connect } from "react-redux";
import "./adduser.css";
import { postData } from "../services/ActionCreate";
import { Link } from "react-router-dom";
import{useNavigate,} from "react-router-dom";

const Insertdata = (props) => {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [role, setrole] = useState("");
  const [password, setPassword] = useState("");
  const [Conformpass, setConfirmPassword] = useState("");
  let navigate = useNavigate();

  // console.log("role", role);
  const handle = () => {
    let emailTest = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
    let validatEmail = emailTest.test(email);

    if (
      email === "" ||
      title === "" ||
      first === "" ||
      last === "" ||
      password === "" ||
      Conformpass === ""
    ) {
      alert("Please fill all the text filed");
    } else if (password.length < 8) {
      alert("Your Password Should Be 8 character");
    } else if (password !== Conformpass) {
      alert("Your Password And ConfirmPassword is doesn't match");
    } else if (!validatEmail) {
      alert("email invalid");
    } else {
      let submitValues = {
        email: email,
        title: title,
        firstName: first,
        lastName: last,
        role: role,
        password: password,
        confirmPassword: Conformpass,
      };
      console.log("line53", submitValues);
      props.postData(submitValues);
      navigate("/home",{replace:true})
    }
  };
  //   else{
  //     alert("you are already registered")
  //   }

  return (
    <div className="form-container">
      <div className="reg-form">
        <div className="form-content">
          <h2 className="form-title">ADD USER FORM</h2>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="title"
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(event) => setFirst(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(event) => setLast(event.target.value)}
            />
          </div>
          <div className="form-group">
          <label className="role">Role</label>
              <select onClick={(e) => setrole(e.target.value)} className="role">
                <option></option>
                <option>Admin</option>
                <option>User</option>
              </select>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>
          <div className="d-grid">
         
              <button type="submit" className="btn" onClick={handle}>
                Add user
              </button>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  (state) => {
    console.log("State ", state);
    return { item: state.item };
  },
  { postData }
)(Insertdata);
