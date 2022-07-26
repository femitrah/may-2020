import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  fetchProduct,
  deleteData,
  editData,
  viewData,loadBefore,loadAfter
} from "../services/ActionCreate";
import "./component.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "./loading"


const validation = () => {
  const value = JSON.parse(localStorage.getItem("items"));

  const current = value.map((e) => {
    if (e.activeUser === true) {
      e.activeUser = false;
    }
    return e;
  });
  console.log("line37", current);

  localStorage.setItem("items", JSON.stringify(value));
  // console.log("line26", getValue);
};

const Displaydata = (props) => {
  const [get, setGet] = useState("");
  // const[loading,setLoading]=useState(false)

  const navigate = useNavigate();

  const goToAdd = () => {
    navigate({
      pathname: "/adduser",
    });
  };

  // console.log("line6", props.item);
  useEffect(() => {
  //  setLoading(true)
    // props.load(true)
    props.fetchProduct();
  }, []);

  return (
    <div>
     {props.item.length !== 0 ? <div><h1>Member details</h1>

<input
  type="text"
  className="search-input"
  placeholder="Search....."
  onChange={(e) => setGet(e.target.value)}
/>

<button className="add" onClick={goToAdd}>
  Add New User
</button>
<Link to={"/login"}>
  <button className="butt" onClick={validation}>
    logout
  </button>
</Link>

<table>
  <thead>
    <tr>
      <th>S.No</th>
      <th>Id</th>
      <th>Email</th>
      <th>Title</th>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Edit & Delete</th>
    </tr>
  </thead>
  {props.item
    .filter((user) => user.firstName.toLowerCase().includes(get))
    .map((e, index) => (
      <tbody key={index}>
        <tr>
          <td>{index + 1}</td>
          <td>{e.id}</td>
          <td>{e.email}</td>
          <td>{e.title}</td>
          <td>{e.firstName}</td>
          <td>{e.lastName}</td>
          <td>
            <div className="action">
              <Link to={`${e.id}`}>
                <button onClick={() => props.editData(e.id)}>Edit</button>
              </Link>
              <Link to={`view/${e.id}`}>
                <button onClick={() => props.viewData(e.id)}>View</button>
              </Link>
              <button onClick={() => props.deleteData(e.id)}>
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    ))}
</table>
</div> : <Loading/>} 
      

     
    </div>
  );
};

export default connect(
  (state) => {
    console.log("State OBJ", state.loaded);
    return { item: state.item, delete: state.delete, edit: state.edit,loaded:state.loaded};
  },
  { fetchProduct, deleteData, editData, viewData,loadBefore,loadAfter }
)(Displaydata);
