import { Button } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import data from '../data/userdata'

const UserEditForm = () => {

  let arraydata = JSON.parse(localStorage.getItem("jsondata"))
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [job, setJob] = useState("");
  const [error, setError] = useState("");
  const [update, setUpdate] = useState(arraydata);
  const [value, setValue] = useState("");

  const navigate = useNavigate();
  let { id } = useParams();

  console.log("iddddddddd", id);


  useEffect(() => {
    let dataUpdate = arraydata.map((x) => {
      if (Number(x.id) === Number(id)) {
        setName(x.name)
        setJob(x.action)
        setUrl(x.url)

        return {
          id: id,
          name: name,
          age: x.age,
          gender: value,
          action: job,
          url: url,
        }
      }
      console.log(`"kpppppppp", x.id ${x.id}, 
    id  ${id},
       name${name},
       age${x.age},
       value ${value},
       job${job},
       url${url}`);
    })

    setUpdate(dataUpdate)
    console.log("dataUpdate", dataUpdate);
  }, [])
console.log("updateeeeeeeeeeeeeeee",update);
  const Submite = () => {
    let test = [];
      console.log("id", id);
      if (name === "" || url === "" || job === "" || value === "") {
        setError("enter the all value")

      } else {
        test =  arraydata.map((x) => {
        if (Number(x.id) === Number(id)) {
          // console.log("pandiyan");
          // let array = [];
          let sdata =  {
            id: id,
            name: name,
            age: x.age,
            gender: value,
            action: job,
            url: url,
          };
          return sdata
        }else return x;
        })
        console.log("test ",test);
        localStorage.setItem("jsondata", JSON.stringify(test) || "[]")
        setError("")
        navigate("/UserList")
  }
  console.log("update sdata", test);
  setUpdate(test)

   
      }
  
 

  // console.log("update", sdata);

  console.log("update", [name, job, url, value]);
  return (
    <>
      <div className="main-userEditForm  ">
        <Button className='bg-success m-5' onClick={() => navigate('/UserList')}>Back</Button>
        <h1 className='text-center'> Edit User Form</h1>
        <div className="userEditForm-form ">
          <>
            <div className="form">
              <label htmlFor="">Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              <label htmlFor="">Profile Image URL</label>
              <input type="text" value={url}
                // placeholder='https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg'
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

export default UserEditForm