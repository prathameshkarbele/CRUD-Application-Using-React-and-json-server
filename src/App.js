import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  const handleDelete = (id) =>{
   const conf = window.confirm("Do you Want to Delete ")
   if(conf) {
    axios.delete('http://localhost:3000/users/'+id).then(res=>{
       alert("record is deleted ");
        navigate('/');

    }).catch(err=>{
      console.log(err);
    })
   }
  }

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {
      setUsers(Object.keys(res.data[0]));
      setRecords(res.data);
    });
  }, []);
 console.log("users", records)
  return (
    <div className="container mt-5">
    <div className="text-end"><Link to="/create" className="btn btn-primary">Add+</Link></div>
      <table className="table">
        <thead>
          <tr>
            {users?.map((c, index) => (
              <th key={index}>{c}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records?.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>
                <Link to={`/update/${data.id}`} className="btn btn-sm  btn-success">Update</Link>
                <button onClick={e=> handleDelete(data.id)} className="btn btn-sm btn-danger ms-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
