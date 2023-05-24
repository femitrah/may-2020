import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
// import data from '../data/userdata'
import { useNavigate, useParams } from 'react-router-dom';
const UserDetails = () => {
    let arraydata = JSON.parse(localStorage.getItem("jsondata"))

    let { id } = useParams();
    console.log("iddddddddddddd1", id);
    const navigate = useNavigate()
    const [first, setfirst] = useState(arraydata)

    useEffect(() => {
        let value = arraydata.filter((x) => {
            return Number(x.id) === Number(id)
        })
        setfirst(value)
    }, [])

    return (
        <>
            <div className="listMain container">
                <h1 className='text-success text-center'>User Details</h1>
                <Button onClick={() => navigate("/UserList")}>Back</Button>
                {first.map((element) => {
                    return (
                        <>
                            <div className="listcard mt-5">
                                <div className="list-card-text">
                                    <h3 className='text-success'>Name :{element.name}</h3>
                                    <ul className='text-success'>
                                        <li>ID :{element.id}</li>
                                        <li>Web Developer</li>
                                        <li>React Developer</li>
                                    </ul>
                                </div>
                                <div className="list-card-img">
                                    <img src={element.url} alt="" className=' img-fluid' />
                                </div>
                            </div>
                        </>
                    )

                })

                }
            </div>
        </>
    )
}

export default UserDetails