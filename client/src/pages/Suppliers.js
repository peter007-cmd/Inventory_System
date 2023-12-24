import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
const Suppliers = () => {

    const initialState = {
        supid:0,
        name:"",
        contact:"",
        address:""

    }
    const[info,setinfo] = useState(initialState);
    
    const handleSubmit = async(e)=>{
        e.preventDefault();
       const res =  await axios.post('http://localhost:5000/addsup',info)
       alert(res.data.message)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add Suppliers</h2>
        <div>
            <label htmlFor="supid">Supplier ID:</label>
            <input type="int" name="supid" id="supid" value={info.supid} onChange={(e)=>setinfo({...info,supid:e.target.value})}/>
        </div>
        <div>
            <label htmlFor="name">Supplier Name:</label>
            <input type="text" name="name" id="nam  e" value={info.name} onChange={(e)=>setinfo({...info,name:e.target.value})}/>
        </div>
        <div>
            <label htmlFor="contact">Contact Info:</label>
            <input type="text" name="contact" id="contact" value={info.contact} onChange={(e)=>setinfo({...info,contact:e.target.value})}/>
        </div>
        <div>
            <label htmlFor="address">Address:</label>
            <input type="address" name="address" id="address" value={info.address} onChange={(e)=>setinfo({...info,address:e.target.value})}/>
        </div>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Suppliers
