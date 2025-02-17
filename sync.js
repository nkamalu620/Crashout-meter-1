import sequelize from './client/src/database.js';
import employee from './server/src/models/employee.js';
import { Assessment } from './server/src/models/assessment.js';

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
}).catch(error => {
  console.error('Error creating database & tables:', error);
});