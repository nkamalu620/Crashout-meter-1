import { DataTypes } from 'sequelize';
import sequelize from '../../../client/src/database.js';

const User = sequelize.define('User', {
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

module.exports = { User };