const express = require('express');
const { getAssessments, getAssessmentsById, createAssessment, deleteAssessment} = //require('../../controllers/employeeController.js');
const authenticateToken = require('../../middleware/auth.js');

const router = express.Router();

// Use the authenticateToken middleware for routes that require authentication
router.get('/', authenticateToken, getAssessments);
router.get('/:id', authenticateToken, getAssessmentsById);
router.put('/:id', authenticateToken, createAssessments);
router.delete('/:id', authenticateToken, deleteAssessments);

module.exports = router;