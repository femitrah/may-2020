import React, { useEffect, useState } from "react";
import {
  viewData,
  delUser,
  singleData,
  createUser,
  updateUser,
  viewUser,
} from "../services/action";
import { connect } from "react-redux";
import { BsTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import CreateUser from "../adduser";
import { useNavigate } from "react-router-dom";

const UserData = (props) => {
  const [search, setSearch] = useState("");

  const validateRoute = () => {
    const valueData = JSON.parse(localStorage.getItem("Data"));
    valueData.map((ele) => {
      if (ele.activeStatus === true) {
        ele.activeStatus = false;
      }
      return ele;
    });
    localStorage.setItem("Data", JSON.stringify(valueData));
  };

  useEffect(() => {
    props.viewData();
  }, []);
  let navigatePage = useNavigate();
  function naviCreate() {
    navigatePage("/adduser");
  }
  function editUser(user) {
    props.singleData(user);
    navigatePage(`/updateuser/${user}`);
  }

  function viewUser1(user) {
    props.viewUser(user);
    navigatePage(`/view/${user}`);
  }
  return (
    <>
      <div>
        <button className="onclic" onClick={() => naviCreate()}>Add User</button>
        <Link to={"/login"}>
          <button className="" onClick={validateRoute}>
            logout
          </button>
        </Link>
        <div className="countryScroll">
          <input
            type="text"
            placeholder="Enter a name..."
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {props.users.length === 0 ? (
          <h1 className="loadingData">Loading....</h1>
        ) : (
          <div className="tableData">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Email</th>
                <th>Title</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Actions update</th>
                <th>Actions delete</th>
                <th>Actions view</th>
              </tr>
            </thead>
            {props.users
              .filter((val) =>
                val.firstName.toLowerCase().includes(search.toLowerCase())
              )
              .map((user, index) => (
                <tbody className="tableData" key={index}>
                  <tr>
                    <td> {user.id}</td>
                    <td> {user.email}</td>
                    <td> {user.title}</td>
                    <td> {user.firstName}</td>
                    <td> {user.lastName}</td>
                    <td>
                      {" "}
                      <span id="click1" onClick={() => editUser(user.id)}>
                        <AiFillEdit />
                      </span>
                    </td>
                    <td>
                      {" "}
                      <span id="click" onClick={() => props.delUser(user.id)}>
                        <BsTrashFill />
                      </span>
                    </td>
                    <td>
                      {" "}
                      <button id="click" onClick={() => viewUser1(user.id)}>
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
                   ))}
              </table>
            </div>
        )}
      </div>
    </>
  );
};

const mapStatetoProps = (state) => {
  return { users: state.users, deletestate: state.delete };
};
const StoreData = connect(mapStatetoProps, {
  viewData,
  delUser,
  createUser,
  singleData,
  updateUser,
  viewUser,
})(UserData);
export default StoreData;
