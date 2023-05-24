import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import data from '../data/userdata'
const UserList = () => {
   let arraydata = JSON.parse(localStorage.getItem("jsondata")|| '[]')

console.log("arraydatazzzzzzzzzzz",arraydata);
  {

  }
    const [deleteData, setDeleteData] = useState(arraydata)

    const navigate = useNavigate();
    const edit = (iduser)=>{
        console.log("iduser",iduser);
        navigate(`/UserEditForm/${iduser}`);

    }

    const Logout = () => {
        localStorage.removeItem("login");
        navigate("/");
    }

    const change = (id) => {
        console.log("deleteData111111111111111111111111111111111111",deleteData);
        let value = deleteData.filter((x) => {
            if (Number(x.id) === Number(id)) {
                return false
                //,localStorage.removeItem("jsondata");
            }
            else {
                return true
            }
        })
        localStorage.setItem("jsondata", JSON.stringify(value));
        console.log("valueeeeeeeeee",value);
        setDeleteData(value)

    }
    const click = (userid) => {
        navigate(`/Userdetails/${userid}`)
    }
console.log("deleteData",deleteData)
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
                                {console.log("deleteDataaaaaaaaaaaaaaaaazzzzzzzzz",deleteData)
}
                                {deleteData.map((e) => {
                                    return (
                                        <>
                                            <div className="inside-card" >
                                                <img src={e.url} alt=""
                                                    className=' img-fluid' onClick={() => click(e.id)} />
                                                <ul>
                                                    <li>Name: {e.name}</li>
                                                    <li>{e.action}</li>
                                                    <li>
                                                        <div className="card-btns">
                                                        
                                                            <Button className='bg-primary' onClick={() =>edit(e.id)}> Edite</Button>
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