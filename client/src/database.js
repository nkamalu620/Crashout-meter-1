import sequelize from './client/src/database.js';
import { User } from './client/src/Models/User.js';

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql' // or 'postgres', 'sqlite', 'mssql'
});

module.exports = sequelize;