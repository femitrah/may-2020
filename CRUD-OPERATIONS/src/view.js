import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import {viewUser} from "./services/action";
 function GetDetails(props) {
 console.log( "pv",props.viewed)
  return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Title</th>
            <th>FirstName</th>
            <th>LastName</th>
          </tr>
        </thead>
        {props.viewed
          .map((user, index) => (
            <tbody className="tableData" key={index}>
              <tr>
                <td> {user.id}</td>
                <td> {user.email}</td>
                <td> {user.title}</td>
                <td> {user.firstName}</td>
                <td> {user.lastName}</td>
              </tr>
            </tbody>
          ))}
      </table>
  );
}
const mapStatetoProps = (state) => {
  console.log("state",state)

  return { viewed:state.viewed}
  };
  export default connect(mapStatetoProps,{viewUser})(GetDetails);
