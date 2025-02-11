import { DataTypes, Sequelize } from 'sequelize';
import employee from './employee.js';

const assessment = Sequelize.define('assessment', {
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

employee.hasMany(assessment, { foreignKey: 'employeeId' });
assessment.belongsTo(employee, { foreignKey: 'employeeId' });

export default assessment ;
