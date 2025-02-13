import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import ResultHistory from './pages/resultHistory';
import AssessmentForm from './pages/assessmentForm';
import Results from './pages/results';
import EmployeeDashboard from './pages/employeeDashboard';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resultHistory" element={<ResultHistory />} />
        <Route path="/assessmentForm" element={<AssessmentForm />} />
        <Route path="/employeeDashboard" element={<EmployeeDashboard />} />
        <Route path="/results" element={<Results />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
      </>
  );
}

export default App;

