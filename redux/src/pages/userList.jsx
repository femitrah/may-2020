import { Button } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { users, deleteUsers, updateUsers } from '../redux/actionCreater'
import { ALLUSER, DELETE_USER } from '../redux/actionType';
const UserList = () => {
    let { userid } = useParams();
    const [user, setUser] = useState([])
    console.log("users", users);
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state?.userDetails || []);
    console.log("currentUser", currentUser);
    const edit = (iduser) => {
        console.log("iduser", iduser);
        // dispatch(updateUsers(iduser));
        navigate(`/UserEditForm/${iduser}`);
    }
    const change = (id) => {
        console.log("iddddddddddddddddddddddddddd", currentUser);
        // setUser(currentUser);
        dispatch(deleteUsers(id));
    }
    useEffect(() => {
        if (!currentUser) {
            dispatch(users());
            // setUser(currentUser)
        }
        else {
            setUser(currentUser);
            dispatch(users());
        }
    }, [])
    console.log("userrrrrrrrrrrrr", user);
    const navigate = useNavigate();
    const Logout = () => {
        localStorage.removeItem("auth_token");
        navigate("/");
    }
    const click = (userid) => {
        navigate(`/Userdetails/${userid}`);
    }
    console.log("deleteData", user);
    return (
        <>
            <div className="main ">
                <div className="user-list-main container ">
                    <h1 className='text-success text-center'>User List</h1>
                    <div className="user-list-btns d-flex justify-content-between">
                        <Button onClick={() => navigate("/")}> Back</Button>
                        <Button onClick={() => navigate("/UserList/Adduser")}>Add User</Button>
                    </div>
                    <div className="cardlog  ">
                        <div className="user-list-card ">
                            <div className="list-card col-lg-4">
                                {/* deleteData */}
                                {currentUser.map((e) => {
                                    return (
                                        <>
                                            <div className="inside-card" key={e.id} >
                                                <img src={e.profile_picture}
                                                    className=' img-fluid' onClick={() => click(e.id)} />
                                                <ul>
                                                    <li>Name: {e.name}</li>
                                                    <li> Work:{e.job}</li>
                                                    <li>gender: {e.gender}</li>
                                                    <li>
                                                        <div className="card-btns">
                                                            <Button className='bg-primary' onClick={() => edit(e.id)}> Edit</Button>
                                                            <Button className='bg-danger' onClick={() => change(e.id)}>Delete</Button>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </>
                                    )
                                })}

                            </div>
                        </div>
                        <div className="logout">
                            <Button className='bg-danger Logout' onClick={Logout}>Logout</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserList