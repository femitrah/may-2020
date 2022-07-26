import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { viewData } from "../services/ActionCreate";

export const Details = (props) => {
  const [navGet, navState] = useState([]);
  // const process=navGet.data;
  console.log("line8", navGet);
  useEffect(() => {
    navState(props.item);
  }, [props.item]);

  let { id } = useParams();
  console.log("line27", id);
  let sum1 = navGet.filter((e) => {
    console.log("eagle", e);
    if (JSON.stringify(e.id) === id) {
      return e;
    }
  });

  console.log("line36", sum1);
  return (
    <>
      <h1>Details Info</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Title</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>back to member details</th>
          </tr>
        </thead>
        {sum1.map((e, index) => (
          <tbody key={index}>
            <tr>
              <td>{e.id}</td>
              <td>{e.email}</td>
              <td>{e.title}</td>
              <td>{e.firstName}</td>
              <td>{e.lastName}</td>
              <td>
                <div className="action">
                  <Link to={"/home"}>
                    <button>back</button>
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};
export default connect(
  (state) => {
    console.log("State view", state.item);
    return { item: state.item };
  },
  { viewData }
)(Details);
