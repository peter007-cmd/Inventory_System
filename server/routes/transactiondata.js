import express from "express";
import { connection } from '../index.js'
const router = express.Router()
router.get("/", async (req, res) => {
    const result = await connection.promise().query(
        "SELECT TransactionID, Date,Type,UserID,TotalAmount FROM Transactions"
    )
    res.json(result[0])
})

export {router as trRouter}