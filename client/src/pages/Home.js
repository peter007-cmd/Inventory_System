import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './Log.css';
const Home = () => {
  return (
    <div className='home'>
      <h1>Inventory Management System</h1>
      
      <Link to='/addprod' className="link-card">
        <div className="card-content">
         
        </div>
        <h2>Add New Products</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem beatae repellendus laboriosam rerum reiciendis quae temporibus sit, in a eius eligendi aut adipisci ratione dolores qui corrupti delectus odit fuga.</p>
      </Link>
      
      <Link to='/addsup' className="link-card">
        <div className="card-content">
          <h2>Add Suppliers Information</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, non quaerat repudiandae, maxime veniam dolor nobis quibusdam fugiat nulla pariatur, soluta a iusto minima ex fugit facere eaque provident? Ad?</p>
        </div>
       
      </Link>
      
      <Link to='/data' className="link-card">
        <div className="card-content">
          <h2>View Supplier Details</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum suscipit enim, dolorem culpa reiciendis ad omnis aliquam quis tenetur in? Exercitationem doloremque quis voluptates possimus? Ducimus impedit ad magni at?</p>
        </div>
        
      </Link>
      <Link to='/trdata' className="link-card">
        <div className="card-content">
          <h2>Transaction Details</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum suscipit enim, dolorem culpa reiciendis ad omnis aliquam quis tenetur in? Exercitationem doloremque quis voluptates possimus? Ducimus impedit ad magni at?</p>
        </div>
        
      </Link>
      <Link to='/log' className="link-card">
        <div className="card-content">
          <h2>Log your Sale/Purchase</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum suscipit enim, dolorem culpa reiciendis ad omnis aliquam quis tenetur in? Exercitationem doloremque quis voluptates possimus? Ducimus impedit ad magni at?</p>
        </div>
        
      </Link>
    </div>
  );
};

export default Home;
