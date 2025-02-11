import { Router } from 'express';
import { getAssessments, getAssessmentsById, createAssessment, deleteAssessment } from '../../controllers/assessmentController.js';
import authenticateToken from '../../middleware/auth.js';

const router = Router();

// Use the authenticateToken middleware for routes that require authentication
router.get('/', authenticateToken, getAssessments);
router.get('/:id', authenticateToken, getAssessmentsById);
router.put('/:id', authenticateToken, createAssessment);
router.delete('/:id', authenticateToken, deleteAssessment);

export default router;