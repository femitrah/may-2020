import { Button } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { createUser } from '../redux/actionCreater'
import { CREATE_USER } from '../redux/actionType';

const Adduser = () => {
  // let arraydata = JSON.parse(localStorage.getItem("jsondata"))

  const currentUser = useSelector((state) => state);

  const dispatch = useDispatch();


  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [job, setJob] = useState("");
  const [error, setError] = useState("");
  const [update, setUpdate] = useState([]); //arraydata
  const [value, setValue] = useState("");
  // const [age,setAge]=useState("");
  // const [usergender, setUsergender] = useState("");

  const navigate = useNavigate();
  let { id } = useParams


  //   useEffect(() => {
  //     let dataUpdate = arraydata.filter((x) => {
  //       if (Number(x.id) === Number(id)) {
  //         setName(x.name)
  //         setJob(x.action)
  //         setUrl(x.url)
  //         return {
  //           id: id,
  //           name: name,
  //           age: age,
  //           gender: value,
  //           action: job,
  //           url: url,
  //         }
  //       }
  //       console.log(`"kpppppppp", x.id ${x.id}, 
  //     id  ${id},
  //        name${name},
  //        age${x.age},
  //        value ${value},
  //        job${job},
  //        url${url}`);
  //     })

  //     setUpdate(dataUpdate)
  //     console.log("dataUpdate", dataUpdate);
  //   }, [])
  const Submite = () => {
    // update.filter((x) => {
      if (name === "" || url === "" || job === "" || value === "") {
        setError("enter the all value")

      }
      // else if (Number(x.id) === Number(id)) {
      //   setError("id Already Exists")
      // }

      else {
        console.log("pandiyan");
        // let array = [...arraydata];
        // ...array,
        let sdata = {
          name: name,
          gender: value,
          // age:age,
          job: job,
          profile_img: url,
        }

        // localStorage.setItem("jsondata", JSON.stringify(sdata) || "[]")
        // console.log("update sdata", sdata);
        // setUpdate(sdata)
        // setError("")
       
        dispatch(createUser(sdata))
        navigate("/UserList")


      }

    // })


  }


  // console.log("update", [name, job, url, value]);
  return (
    <>
      <div className="main-userEditForm  ">
        <Button className='bg-success m-5' onClick={() => navigate('/UserList')}>Back</Button>
        <h1 className='text-center'> Add User Form</h1>
        <div className="userEditForm-form ">
          <>
            <div className="form">
              <label htmlFor="">Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              {/* <label htmlFor="">Age</label>
              <input type="text" value={age} onChange={(e) => setAge(Number(e.target.value))} /> */}
              {/* <label htmlFor="">Gender</label>
              <input type="text" value={usergender} onChange={(e) => setUsergender(e.target.value)} /> */}
              <label htmlFor="">Profile Image URL</label>
              <input type="text" value={url}
                onChange={(e) => setUrl(e.target.value)} />
              <label htmlFor="">Job</label>
              <input type="text" value={job} onChange={(e) => setJob(e.target.value)} />
              <div className="gender">
                <label htmlFor="">Gender</label>
                <input type="radio" name="gender" value="Male" id="" onChange={(e) => setValue(e.target.value)} />Male
                <input type="radio" name="gender" value="Female" id="" onChange={(e) => setValue(e.target.value)} />Female
              </div>
              <p className='text-danger fw-bold'>{error}</p>
              <Button className='bg-success' onClick={() => Submite()}>Submite</Button>
            </div>
          </>

        </div>
      </div>


    </>)
}

export default Adduser