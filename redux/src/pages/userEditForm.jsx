import { Button } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import data from '../data/userdata'
import { useSelector, useDispatch } from 'react-redux'
import { updateUsers } from '../redux/actionCreater'
import { UPDATE_USER } from '../redux/actionType';
const UserEditForm = () => {
  let { id } = useParams();
  const currentUser = useSelector((state) => state.userDetails);
  console.log("currentUser", currentUser);
  // console.log("Abc",abc,"id",id);
  const dispatch = useDispatch();
  let arraydata = JSON.parse(localStorage.getItem("jsondata"))
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [job, setJob] = useState("");
  const [error, setError] = useState("");
  // const [update, setUpdate] = useState(arraydata);
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  console.log("userid", id);
  const abc = currentUser.filter((x) => Number(id) === Number(x.id))
  console.log("Abc", abc, "id", id);
  useEffect(() => {
    currentUser.map((e) => {
      if (Number(id) === Number(e.id)) {
        console.log("mapppp", e.name, e.id, e.job)
        setName(e.name)
        setUrl(e.profile_picture)
        setJob(e.job)
        // setValue(e.gender)
        console.log("e.gender",e.gender);
      }
    })
  }, [])
  const Submite = () => {
    if (name === "" || url === "" || job === "" || value === "") {
      setError("enter the all value")
    } else {
      let regdata = { name: name, gender: value, job: job, profile_img: url }

      dispatch(updateUsers(regdata, id))
      setError("")
      navigate("/UserList")
    }
  }
  console.log("update", [name, job, url, value]);
  return (
    <>
      <div className="main-userEditForm  ">
        <Button className='bg-success m-5' onClick={() => navigate('/UserList')}>Back</Button>
        <h1 className='text-center'> Edit User Form</h1>
        <div className="userEditForm-form ">
          <div className="form">
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <div className='editimg '>
              <div className="editurl">
                <label htmlFor="">Profile Image URL</label>
                <input className='imgurl' type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
              </div>
              <div className="urlimg">
                <img className='url-Img' src={url} alt="" />
              </div>
            </div>
            <label htmlFor="">Job</label>
            <input type="text" value={job} onChange={(e) => setJob(e.target.value)} />
            <div className="gender">
              <label htmlFor="">Gender</label>
              <input type="radio" name="gender" c value="Male" id="" onChange={(e) => setValue(e.target.value)} />Male
              <input type="radio" name="gender" value="Female" id="" onChange={(e) => setValue(e.target.value)} />Female
            </div>
            <p className='text-danger fw-bold'>{error}</p>
            <Button className='bg-success' onClick={() => Submite()}>Submite</Button>
          </div>
        </div>
      </div>
    </>)
}
export default UserEditForm