import express from 'express';
import { getEmployees, getEmployeeById, updateEmployee, deleteEmployee } from '../../controllers/employeeController.js';
import authenticateToken from '../../middleware/auth.js';

const router = express.Router();

// Use the authenticateToken middleware for routes that require authentication
router.get('/', authenticateToken, getEmployees);
router.get('/:id', authenticateToken, getEmployeeById);
router.put('/:id', authenticateToken, updateEmployee);
router.delete('/:id', authenticateToken, deleteEmployee);

export default router;