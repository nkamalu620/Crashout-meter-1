import sequelize from './client/src/database.js';
import User from './server/src/Models/employee.js';

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
}).catch(error => {
  console.error('Error creating database & tables:', error);
});