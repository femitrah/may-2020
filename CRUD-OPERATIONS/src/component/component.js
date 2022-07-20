import React from "react";
import { useState } from "react";
import { viewData } from "../services/action";
import { connect } from "react-redux";
const UserData = (props) => {
  console.log("props2", props.users);
  return (
    <>
      <div>
        <h1>Data</h1>

        {props.users.map((user, index) => (
          <li key={index}>
            {user.email}
            {user.firstname}
          </li>
        ))}
        <button onClick={() => props.viewData()}>hello</button>
      </div>
    </>
  );
};

const mapStatetoProps = (state) => {
  console.log("st", state);
  return { users: state.users };
};

const StoreData = connect(mapStatetoProps, { viewData })(UserData);
export default StoreData;
