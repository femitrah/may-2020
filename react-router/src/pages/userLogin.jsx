import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
// import data from '../data/userdata'
const UserLogin = () => {
    // localStorage.setItem("jsondata", JSON.stringify(data));
    JSON.parse(localStorage.getItem("jsondata"));
    const navigate = useNavigate();

    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    let regx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    let value = regx.test(mail)
    const Login = () => {
        let logData = { email: mail, password: password };
        console.log("dataaaaaa", logData);
        if (mail === "") {
            setError("Enter the email")
        }
        else if (password === "") {
            setError("Enter the Password")
        }
        else if (!value) {
            setError("Enter the mail like abc@gmail.com")
        }
        else {
            setError("")
            // let array = []
            let item = JSON.parse(localStorage.getItem("login"))
            // console.log("item", item, typeof (item));
            // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa", item);

            if (item) {
                    item.filter((e) => {
                        if (e.mail === mail && e.password === password) {
                            navigate("/UserList")
                        }
                        else {
                            setError("Email or password wrong")
                        }
                    })
                
            }
            else {
                setTimeout(() => {
                    navigate('/UserRegister')
                }, 2000);
            }
        }
    }

    return (
        <>
            <div className="userlogin-main containet m-5">
                <h2 className='text-center m-5'>Login User</h2>
                <div className="form">
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
                    <label >EmailAddress</label>
                    <input type="text" placeholder='enter Email address' value={mail} onChange={(e) => setMail(e.target.value.trim())} />
                    <label >Password</label>
                    <input type="password" placeholder='enter Password' value={password} onChange={(e) => setPassword(e.target.value.trim())} />
                    <span className='text-danger fw-bold'>{error}</span>

                    <Button className='bg- success' onClick={Login}>Login</Button>
                    <p>Don't have an account? <Link to={"/UserRegister"}>Register</Link> </p>
                </div>
            </div>
        </>)
}

export default UserLogin