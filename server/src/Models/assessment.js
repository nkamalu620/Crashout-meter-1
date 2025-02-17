import { DataTypes, Sequelize } from 'sequelize';
import employee from './employee.js';
import sequelize from '../config/connection.js';

// defines the assessment model using sequelize
const assessment = sequelize.define('assessment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  stressLevel: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

// creates a relationship between the assessment and employee models
employee.hasMany(assessment, { foreignKey: 'employeeId' });
assessment.belongsTo(employee, { foreignKey: 'employeeId' });

export default assessment ;
