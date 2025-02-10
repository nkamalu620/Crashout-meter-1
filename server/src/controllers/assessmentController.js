const { assessment } = require('../Models/assessment.js');
const { employee } = require('../Models/employee.js');

const getAssessments = async (req, res) => {
    try {
        const assessments = await assessment.findAll();
        res.status(200).json(assessments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching assessments', error });
    }
};

const getAssessmentsById = async (req, res) => {
    const { id } = req.params;
    try {
        const assessment = await Assessment.findByPk(id, { include: employee });
        if (!assessment) {
          return res.status(404).json({ message: 'Assessment not found' });
        }
        res.status(200).json(assessment);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching assessment', error });
      }
    };

const createAssessment = async (req, res) => {
    const { employeeId, stressLevel, date } = req.body;
  try {
    const employee = await Employee.findByPk(employeeId);
    if (!employee) {
      return res.status(404).json({ message: 'User not found' });
    }
    const assessment = await Assessment.create({ employeeId, stressLevel, date });
    res.status(201).json({ message: 'Assessment created successfully', assessment });
  } catch (error) {
    res.status(500).json({ message: 'Error creating assessment', error });
  }
};

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

    module.exports = { getAssessments, getAssessmentById, createAssessment, deleteAssessment };


