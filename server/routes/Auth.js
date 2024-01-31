import express from "express";
import { connection } from '../index.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
const router = express.Router()
router.post('/register', (req, res) => {
    const { username, password, email } = req.body;
  
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        res.status(500).json({ message: 'Error registering user' });
      } else {
        connection.query('SELECT * FROM user WHERE username = ? OR email = ?', [username, email], (error, results) => {

          if (error) {
            res.status(500).json({ message: 'Error registering user' });
          } else {
            if (results.length > 0) {
              res.status(409).json({ message: 'Username or email already exists' });
            } else {
              connection.query('INSERT INTO user (username, password, email) VALUES (?, ?, ?)', [username, hashedPassword, email], (err) => {
                if (err) {
                  res.status(500).json({ message: 'Error registering user' });
                } else {
                  res.status(201).json({ message: 'User registered successfully' });
                }
              });
            }
          }
        });
      }
    });
  });
  router.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    connection.query('SELECT id, password FROM user WHERE username = ?', username, (error, results) => {
      if (error) {
        res.status(500).json({ message: 'Error logging in' });
      } else {
        if (results.length > 0) {
          const { id, password: hashedPassword } = results[0];
          bcrypt.compare(password, hashedPassword, (err, result) => {
            if (result) {
              const token = jwt.sign({ userId: id }, 'your_secret_key', { expiresIn: '1h' });
              res.status(200).json({ token });
            } else {
              res.status(401).json({ message: 'Invalid credentials' });
            }
          });
        } else {
          res.status(401).json({ message: 'Invalid credentials' });
        }
      }
    });
  });
  export {router as authRouter}