import express from "express";
import { connection } from '../index.js'
const router = express.Router()
router.get("/", async (req, res) => {
    const result = await connection.promise().query(
        "SELECT Products.ProductID, Products.Name AS ProductName, Products.Quantity, Products.Price, Suppliers.Name AS SupplierName FROM Products JOIN Suppliers ON Products.SupplierID = Suppliers.SupplierID ORDER BY Suppliers.Name, Products.Name"
    )
    res.json(result[0])
})

export {router as dataRouter}