const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth.js');
const employeeRoutes = require('./routes/api/employeeRoutes.js');
const assessmentRoutes = require('./routes/api/assessmentRoutes.js');

const app = express();

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/assessments', assessmentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});