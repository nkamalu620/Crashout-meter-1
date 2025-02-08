const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    const secretKey = process.env.JWT_SECRET_KEY || '';

    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }

      req.user = user;
      return next();
    });
  } else {
    res.sendStatus(401); // Unauthorized
  }
};

const express = require('express');
const { register, login } = require('../controllers/authController.js');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);


module.exports = authenticateToken, router;
