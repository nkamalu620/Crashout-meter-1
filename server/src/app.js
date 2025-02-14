import express from 'express';
import authRoutes from './middleware/auth.js';
import employeeRoutes from './routes/api/employeeRoutes.js';
import assessmentRoutes from './routes/api/assessmentRoutes.js';
import sequelize from './config/connection.js';

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/assessments', assessmentRoutes);

const PORT = process.env.PORT || 3001;
sequelize.sync({ force: false }).then(() => {

  app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
});