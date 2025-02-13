import Login from './pages/login';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/employeeDashboard" element={<employeeDashboard />} />
        <Route path="/resultHistory" element={<resultHistory />} />
        <Route path="/assessmentForm" element={<assessmentForm />} />
        <Route path="/results" element={<results />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
      </>
  );
}

export default App;

