import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Employee from '../models/employee.js'; 
import dotenv from 'dotenv';

dotenv.config();

// registers a new employee
export const register = async (req, res) => {
  const { name, email, password, position } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await Employee.create({ name, email, password: hashedPassword, position });
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

// manages user login
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Employee.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};