import express from "express";
import { connection } from '../index.js'
import jwt from 'jsonwebtoken'
const router = express.Router()
router.get('/userDetails', verifyToken, (req, res) => {
    const userId = req.userId;
    connection.query('SELECT id, username, email FROM users WHERE id = ?', userId, (error, results) => {
      if (error) {
        res.status(500).json({ message: 'Error fetching user details' });
      } else {
        if (results.length === 0) {
          res.status(404).json({ message: 'User not found' });
        } else {
          const user = results[0];
          res.status(200).json(user);
        }
      }
    });
  });
  
  function verifyToken(req, res, next) {
    const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, 'your_secret_key', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.userId = decoded.userId; 
    next();
  })}
export {router as userDetailsRouter}