import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Transactions.css'; // Import or create the CSS file

const Transactions = () => {
  const [transactionData, setTransactionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/trdata');
        setTransactionData(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const displayValue = (value) => (value !== null ? value : 'N/A');

  return (
    <div>
      <h1>Transactions</h1>
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Date</th>
            <th>Type</th>
            <th>User ID</th>
            <th>Total Amount</th>
         
          </tr>
        </thead>
        <tbody>
          {transactionData.map((transaction) => (
            <tr key={transaction.TransactionID}>
              <td>{displayValue(transaction.TransactionID)}</td>
              <td>{displayValue(transaction.Date)}</td>
              <td>{displayValue(transaction.Type)}</td>
              <td>{displayValue(transaction.UserID)}</td>
              <td>{displayValue(transaction.TotalAmount)}</td>
        
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
