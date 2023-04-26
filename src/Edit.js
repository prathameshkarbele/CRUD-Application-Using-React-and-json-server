import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Edit = () => {

    const {id} = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();


    console.log("params", id);

 useEffect(()=>{
   axios.get('http://localhost:3000/users/'+id).then(res=>{
      setData(res.data)
   }).catch(err =>{
    console.log(err);
   })
 }, [])

 const handleEvent = (event) =>{
   event.preventDefault();
   axios.put('http://localhost:3000/users/'+id, data).then(res=>{
    alert("data Updateded Succesfully !")
    navigate('/');
   })
 }

  return (
    <div className="d-flex w-100 vh-100 justify-content align-items-center">
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleEvent}>
          <div>
            <label htmlFor="name">ID:</label>
            <input
              type="text"
              disabled
              name="name"
              className="form-control"
              value={data.id}

            />
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={data.name}
              onChange={e =>setData({...data, name:e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
               value={data.email}
               onChange={e=>setData({...data, email:e.target.value})}
            />
          </div>
          <br />
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  )
}

export default Edit