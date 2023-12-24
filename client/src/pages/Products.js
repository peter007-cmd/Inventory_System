import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import './Products.css'
const Products = () => {

    const initialState = {
        pid:0,
        name:"",
        desc:"",
        price:0,
        quantity:0,
        supplierid:0,
        category:""

    }
    const[info,setinfo] = useState(initialState);
    const handleSubmit = async(e)=>{
        e.preventDefault();
       const res =  await axios.post('http://localhost:5000/addprod',info)
       alert(res.data.message)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add Products</h2>
        <div>
            <label htmlFor="pid">Product ID:</label>
            <input type="int" name="pid" id="pid" value={info.pid} onChange={(e)=>setinfo({...info,pid:e.target.value})}/>
        </div>
        <div>
            <label htmlFor="name">Product Name:</label>
            <input type="text" name="name" id="name" value={info.name} onChange={(e)=>setinfo({...info,name:e.target.value})}/>
        </div>
        <div>
            <label htmlFor="desc">Description:</label>
            <input type="text" name="desc" id="desc" value={info.desc} onChange={(e)=>setinfo({...info,desc:e.target.value})}/>
        </div>
        <div>
            <label htmlFor="price">Price:</label>
            <input type="number" name="price" id="price" value={info.price} onChange={(e)=>setinfo({...info,price:e.target.value})}/>
        </div>
        <div>
            <label htmlFor="quantity">Quantity:</label>
            <input type="int" name="quantity" id="quantity" value={info.quantity} onChange={(e)=>setinfo({...info,quantity:e.target.value})}/>
        </div>
        <div>
            <label htmlFor="supplierid">Supplier ID:</label>
            <input type="int" name="supplierid" id="supplierid" value={info.supplierid} onChange={(e)=>setinfo({...info,supplierid:e.target.value})}/>
        </div>
        <div>
            <label htmlFor="category">Category:</label>
            <input type="text" name="category" id="category" value={info.category} onChange={(e)=>setinfo({...info,category:e.target.value})}/>
        </div>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Products
