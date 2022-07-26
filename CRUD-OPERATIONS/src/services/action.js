import axios from "axios";
import { GETUSER, SINGLEGETUSER, PUTUSER, VIEWUSER,SHOWLOAD,HIDELOAD } from "./action type";
import { useNavigate } from "react-router-dom";

const viewData = () => (dispatch) => {
  axios
    .get("http://localhost:4000/users")
    .then((res) => {
      dispatch({ type: GETUSER, payload: res });
    })
    .catch((err) => {});
};
export { viewData };

const singleData = (id) => (dispatch) => {
  axios
    .get(`http://localhost:4000/users/${id}`)
    .then((result) => {
      dispatch({ type: SINGLEGETUSER, payload: result });
    })
    .catch((err) => {});
};
export { singleData };

const delUser = (id) => (dispatch) => {
  console.log("id", id);
  axios
    .delete(`http://localhost:4000/users/${id}`)
    .then((response) => {
      dispatch(viewData());
    })
    .catch((err) => {});
};
export { delUser };

export const createUser = (submitData) => (dispatch) => {
  let data = { ...submitData };
  console.log("sd", submitData);
  axios
    .post("http://localhost:4000/users", data)
    .then((response1) => {
      dispatch(viewData());
    })
    .catch((err) => {});
};

export const updateUser = (inputData, id) => (dispatch) => {
  let data1 = { ...inputData };
  console.log("sd", inputData, id);
  axios
    .put(`http://localhost:4000/users/${id}`, data1)
    .then((response2) => {
      console.log("del", response2.data);
      dispatch(viewData());
    })
    .catch((err) => {});
};

const viewUser = (id) => (dispatch) => {
  console.log("i", id);
  axios
    .get(`http://localhost:4000/users/${id}`)
    .then((res) => {
      console.log("res9559282", res.data);
      dispatch({ type: VIEWUSER, payload: [res.data] });
    })
    .catch((err) => {});
};
export {viewUser}

export const showUser=()=>dispatch=>{
  dispatch({
    type:"SHOWLOAD"
  })

}


