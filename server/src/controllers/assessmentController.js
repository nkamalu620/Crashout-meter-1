import assessment  from '../models/assessment.js';
import employee from '../models/employee.js';

// retrieves all assessments
const getAssessments = async (req, res) => {
    try {
        const assessments = await assessment.findAll();
        res.status(200).json(assessments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching assessments', error });
    }
};

// retrieves specific assessment by ID
const getAssessmentsById = async (req, res) => {
    const { id } = req.params;
    try {
        const assessment = await assessment.findByPk(id, { include: employee });
        if (!assessment) {
          return res.status(404).json({ message: 'Assessment not found' });
        }
        res.status(200).json(assessment);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching assessment', error });
      }
    };

// creates a new assessment
const createAssessment = async (req, res) => {
    const { employeeId, stressLevel, date } = req.body;
  try {
    const employee = await employee.findByPk(employeeId);
    if (!employee) {
      return res.status(404).json({ message: 'User not found' });
    }
    const assessment = await assessment.create({ employeeId, stressLevel, date });
    res.status(201).json({ message: 'Assessment created successfully', assessment });
  } catch (error) {
    res.status(500).json({ message: 'Error creating assessment', error });
  }
};

// deletes an assessment
const deleteAssessment = async (req, res) => {
    const { id } = req.params;
    try {
        const assessment = await Assessment.findByPk(id);
        if (!assessment) {
          return res.status(404).json({ message: 'Assessment not found' });
        }
        await assessment.destroy();
        res.status(200).json({ message: 'Assessment deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Error deleting assessment', error });
      }
    };

    export { getAssessments, getAssessmentsById, createAssessment, deleteAssessment };


