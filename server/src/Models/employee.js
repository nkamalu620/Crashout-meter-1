import { DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/connection';

const employee = sequelize.define('employee', {
  Name: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
 
  position: {
    type: DataTypes.STRING,
    allowNull: true
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default employee;