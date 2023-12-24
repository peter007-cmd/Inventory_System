import express from "express";
import { connection } from '../index.js'
const router = express.Router()

router.post("/addprod", async (req, res) => {
  try {
    const { pid, name, description, price, quantity, supplierid, category } = req.body;
    const pids = await connection.promise().query(
      "SELECT COUNT(*) AS count FROM products WHERE ProductID = ?",
      [pid]
    );
    if (pids[0].count > 0) {
      return res.status(400).json({ message: "Duplicate product entries not allowed" });
    }
    await connection.promise().query(
      "SET FOREIGN_KEY_CHECKS = 0"
    );
    
    await connection.promise().query(
      "INSERT INTO products(ProductID,Name,Description,Price,Quantity,SupplierID,Category)VALUES(?, ?,?,?,?,?,?)",
      [pid, name, description, price, quantity, supplierid, category]
    );
    
    await connection.promise().query(
      "SET FOREIGN_KEY_CHECKS = 1"
    );
    
    res.json({ message: "Product added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error processing the request", error: error.sqlMessage });
  }
});

router.post("/addsup", async (req, res) => {
  try {
    const { supid, name, contact, address } = req.body;
    const supids = await connection.promise().query(
      "SELECT COUNT(*) AS count FROM suppliers WHERE SupplierID = ?",
      [supid]
    );
    if (supids[0].count > 0) {
      return res.status(400).json({ message: "Supplier already exists" });
    }
    await connection.promise().query(
      "SET FOREIGN_KEY_CHECKS = 0"
    );
    
    await connection.promise().query(
      "INSERT INTO suppliers(SupplierID,Name,ContactInfo,Address) VALUES (?, ?,?,?)",
      [supid, name, contact, address]
    );
    
    await connection.promise().query(
      "SET FOREIGN_KEY_CHECKS = 1"
    );
    
    res.json({ message: "Supplier information entered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error processing the request", error: error.sqlMessage });
  }
});
router.post("/log", async (req, res) => {
  console.log(req.body)
  try {
    const {pid,type,quantity} = req.body;
    if(type.toLowerCase()=='purchase')
    {
      await connection.promise().query(
        "UPDATE products SET Quantity = Quantity+? WHERE ProductID = ?",
        [quantity, pid]
        
      );
    }
    else
    {
      await connection.promise().query(
        "UPDATE products SET Quantity = Quantity-? WHERE ProductID = ?",
        [quantity, pid]
      );
    }
    
    res.json({ message: "Sale/Purchase Logged Successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error processing the request", error: error.sqlMessage });
  }
});
export { router as productRouter }