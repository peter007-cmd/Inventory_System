import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SupplierDetails.css'
const SupplierDetails = () => {
    const [supplierData, setSupplierData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:5000/data');
                const dataBySupplier = {};

                res.data.forEach((row) => {
                    if (!dataBySupplier[row.SupplierName]) {
                        dataBySupplier[row.SupplierName] = [];
                    }
                    dataBySupplier[row.SupplierName].push(row);
                });

                setSupplierData(Object.entries(dataBySupplier));
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); 
    
    const displayValue = (value) => (value !== null ? value : 'N/A');

    return (
        <div>
            <h1>Supplier Details</h1>
            {supplierData.map(([supplier, products]) => (
                <div key={supplier}>
                    <h2>{supplier}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.ProductID}>
                                    <td>{displayValue(product.ProductID)}</td>
                                    <td>{displayValue(product.ProductName)}</td>
                                    <td>{displayValue(product.Quantity)}</td>
                                    <td>{displayValue(product.Price)}</td>
                                 
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}

export default SupplierDetails;
