import employee from '../models/employee.js';

// retrieves all employees
const getEmployees = async (req, res) => {
    try {
        const employees = await employee.findAll();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching employees', error });
    }
};

// retrieves specific employee by ID
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

    // creates a new employee
    const createEmployee = async (req, res) => {
      const { name, email, position } = req.body;
      try {
        const employee = await employee.create({ name, email, position });
        res.status(201).json({ message: 'Employee created successfully', employee });
      } catch (error) {
        res.status(500).json({ message: 'Error creating employee', error });
      }
    };

// updates employee information
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

// deletes an employee
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

export {getEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee};