import { editData, update } from "../services/ActionCreate";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./edit.css";

const Edit = (props) => {
  console.log("Edit", props);
  const [score, setScore] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [role, setrole] = useState("");

  console.log("line18", score);
  useEffect(() => {
    setScore(props.edit);
  }, [props.edit]);

  const handle = () => {
    let updateValues = {
      email: email,
      title: title,
      firstName: first,
      lastName: last,
      role: role,
    };
    console.log("updateValue", props.edit.id);
    props.update(updateValues, props.edit.id);
  };

  console.log("line24", props.edit);
  return (
    <>
      <div className="form-container">
        <div className="reg-form">
          <div className="form-content">
            <h1>Edit User</h1>

            <div className="form-group">
              <label>Email</label>
              <input
                // type="email"
                className="form-control"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                defaultValue={score.email}
              />
            </div>
            <div className="form-group">
              <label>Title</label>
              <input
                // type="email"
                className="form-control"
                placeholder="Email Address"
                onChange={(e) => setTitle(e.target.value)}
                defaultValue={score.title}
              />
            </div>
            <div className="form-group">
              <label>First Name</label>
              <input
                // type="email"
                className="form-control"
                placeholder="Email Address"
                onChange={(e) => setFirst(e.target.value)}
                defaultValue={score.firstName}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                // type="email"
                className="form-control"
                placeholder="Email Address"
                onChange={(e) => setLast(e.target.value)}
                defaultValue={score.lastName}
              />
            </div>
            <div>
              <label className="role">Role</label>
              <select onClick={(e) => setrole(e.target.value)} className="role">
                <option></option>
                <option>Admin</option>
                <option>User</option>
              </select>
              <div className="d-grid">
                <Link to={"/home"}>
                  <button type="submit" className="btn" onClick={handle}>
                    Update now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(
  (state) => {
    console.log("State OBJ", state.edit);
    return { edit: state.edit };
  },
  { editData, update }
)(Edit);
