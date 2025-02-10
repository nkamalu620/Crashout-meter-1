const { employee } = require('../Models/employee.js');

const getEmployees = async (req, res) => {
    try {
        const employees = await employee.findAll();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching employees', error });
    }
};

const getEmployeeById = async (req, res) => {
    const { id } = req.params;
    try {
        const employee = await Assessment.findByPk(id);
        if (!employee) {
          return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(employee);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching employee', error });
      }
    };

const createEmployee = async (req, res) => {
    const { id } = req.params;
  const { name, email, position } = req.body;
  try {
    const employee = await Employee.findByPk(id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    employee.name = name;
    employee.email = email;
    employee.position = position;
    await employee.save();
    res.status(200).json({ message: 'Employee updated successfully', employee });
  } catch (error) {
    res.status(500).json({ message: 'Error updating employee', error });
  }
};

const updateEmployee = async (req, res) => {
    const { id } = req.params;
    const { name, email, position } = req.body;
  try {
    const employee = await Employee.findByPk(id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    employee.name = name;
    employee.email = email;
    employee.position = position;
    await employee.save();
    res.status(200).json({ message: 'Employee updated successfully', employee });
  } catch (error) {
    res.status(500).json({ message: 'Error updating employee', error });
  }
};  

const deleteEmployee = async (req, res) => {
    const { id } = req.params;
    try {
        const employee = await Employee.findByPk(id);
        if (!employee) {
          return res.status(404).json({ message: 'Employee not found' });
        }
        await employee.destroy();
        res.status(200).json({ message: 'Employee deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Error deleting employee', error });
      }
    };

module.exports = { getEmployees, getEmployeeById, createEmployee, deleteEmployee };