import { DataTypes } from 'sequelize';
import sequelize from '../../../client/src/database.js';
import { employee } from './employee.js';

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

Employee.hasMany(Assessment, { foreignKey: 'employeeId' });
Assessment.belongsTo(Employee, { foreignKey: 'employeeId' });

export { assessment };
