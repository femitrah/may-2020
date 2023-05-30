import axios from "axios";
import { LOGIN, ALLUSER, SIGNUP, CREATE_USER, UPDATE_USER, DELETE_USER } from './actionType';
const getToken = localStorage.getItem("auth_token");
// const dataToken = users.data.id
// console.log("dataToken", dataToken);
console.log("getToken", getToken);

// SIGNUP---------------------------------------------------------------
const register = (data, data1) => (dispatch, getState) => {
    console.log("data", getState());
    console.log("dispatch", data);
    axios.post('http://node.mitrahsoft.co.in/register', data)
        .then(res => {
            dispatch({ type: SIGNUP, data: res });
        }).catch(err => {
            console.log('err', err)
        })


}
// LOGIN---------------------------------------------------------------
const login = (data, data1) => (dispatch, getState) => {
    // console.log("navigate",navigate );
    console.log("dispatch", data);
    axios.post('http://node.mitrahsoft.co.in/login', data,)
        .then(res => {
            // const auth_token = res.data.token ;
            console.log("test123", res);
            localStorage.setItem("auth_token", res.data.token);
            dispatch({ type: LOGIN, data: res },
                // navigate("/UserList")
            );
        }).catch(err => {
            console.log('err', err)
        })
}
// ALLUSER---------------------------------------------------------------
const users = (data) => (dispatch, getState) => {
    console.log("data", getState());
    // console.log("dispatch", data);
    axios.get('http://node.mitrahsoft.co.in/users', {
        headers: { "Authorization": `Bearer ${getToken}` }
    })
        .then(res => {
            console.log("123res",res)
            dispatch({ type: ALLUSER, data: res?.data?.recordset });
        }).catch(err => {
            console.log('err', err, getToken)
            console.log("getToken", getToken);

        })


}
// CREATE_USER---------------------------------------------------------------
const createUser = (data, data1) => (dispatch, getState) => {
    // console.log("data", navigate());
    console.log("dispatch", data);
    axios.post('http://node.mitrahsoft.co.in/user', data,
        {
            headers: { "Authorization": `Bearer ${getToken}` }
        })
        .then(res => {
            console.log(res, "post data");
            dispatch({ type: CREATE_USER, data: res },
                // navigate("/UserList")
            );
        }).catch(err => {
            console.log('err', err)
        })


}

// UPDATE_USER---------------------------------------------------------------
const updateUsers = (data, userid) => (dispatch, getState) => {
    console.log("data", getState());
    console.log("dispatch", data);
    // axios.put('http://node.mitrahsoft.co.in/user/:id')
    axios.put(`http://node.mitrahsoft.co.in/user/${userid}`,data ,{
        headers: { "Authorization": `Bearer ${getToken}` }
    })

        .then(res => {
            dispatch({ type: UPDATE_USER, data: res });
        }).catch(err => {
            console.log('err', err)
        })

}
// DELETE_USER---------------------------------------------------------------

const deleteUsers = (id, data1) => (dispatch, getState) => {
    axios.delete(`http://node.mitrahsoft.co.in/user/${id}`, {
        headers: { "Authorization": `Bearer ${getToken}` }
    }).then(res => {
        console.log("res,res",res);
        dispatch({ type: DELETE_USER, data: res });
        dispatch(users());
    }).catch(err => {
        console.log('err', err)
    })

    // const loading = "loading "
    //  axios.delete('http://node.mitrahsoft.co.in/user/:id')
}
          
export { register, login, users, createUser, updateUsers, deleteUsers }