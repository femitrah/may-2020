import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { register } from '../redux/actionCreater'
import {  useDispatch } from 'react-redux'
import { SIGNUP } from '../redux/actionType';

const UserRegister = () => {
    // const currentUser = useSelector((state) => state);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [error, setError] = useState("")
    const Registers = () => {


        let regx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        let regdata = { first_name: firstName, last_name: lastName, email: mail, password: password }

        let value = regx.test(mail)

        if (firstName === "") {
            setError("Enter the firstName")

        } else if (lastName === "") {
            setError("Enter the lastName")

        }
        else if (mail === "") {
            setError("Enter the email")
        }
        else if (password === "") {
            setError("Enter the Password")
        }
        else if (!value) {
            setError("Enter the mail like abc@gmail.com")
        } else if (password.length < 7) {
            setError("Enter the password morethen 7 char ")
        }

        else {
            setError("")
            dispatch(register(regdata))
            navigate("/")
        }
    }

    return (
        <>
            <h3 className='text-center m-5'> Register user</h3>
            <div className="userRegister-main container">
                <div className="userRegister-form">
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className='image' alt="" />
                    <label >First Name</label>
                    <input type="text" placeholder='enter First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <label >Last Name</label>
                    <input type="text" placeholder='enter Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <label >EmailAddress</label>
                    <input type="text" placeholder='enter Email address' value={mail} onChange={(e) => setMail(e.target.value)} />
                    <label >Password</label>
                    <input type="password" inlength="8" placeholder='enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Button className='bg- success' onClick={Registers}>Register</Button>
                    <p className='text-danger fw-bold'>{error}</p>
                    <p>Don't have an account? <Link to={"/"}>Login</Link> </p>
                </div>
            </div>
        </>
    )
}
export default UserRegister