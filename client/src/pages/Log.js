import React, { useState } from 'react';
import axios from 'axios';
import './Log.css';

const Log = () => {
  const initialState = {
    pid: 0,
    type: '',
    quantity: 0,
  };

  const [info, setInfo] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/log', info);
    alert(res.data.message);
  };

  const handleRadioChange = (e) => {
    setInfo({ ...info, type: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Sell/Purchase</h2>
        <div>
          <label htmlFor="pid">Product ID:</label>
          <input
            type="int"
            name="pid"
            id="pid"
            value={info.pid}
            onChange={(e) => setInfo({ ...info, pid: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="name">Quantity:</label>
          <input
            type="int"
            name="name"
            id="quantity"
            value={info.name}
            onChange={(e) => setInfo({ ...info, quantity: e.target.value })}
          />
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="type"
              value="Sell"
              checked={info.type === 'Sell'}
              onChange={handleRadioChange}
            />
            Sell
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="Purchase"
              checked={info.type === 'Purchase'}
              onChange={handleRadioChange}
            />
            Purchase
          </label>
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Log;

