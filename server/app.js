import express from 'express';
import authRoutes from './src/middleware/auth.js';
import employeeRoutes from './src/routes/api/employeeRoutes.js';
import assessmentRoutes from './src/routes/api/assessmentRoutes.js';

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/assessments', assessmentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});