import React from "react";
import { Link } from "react-router-dom";


const employeeDashboard: React.FC = () => {

    const employeeName = 'John Smith';
    const employeePicture = 'https://via.placeholder.com/150';

// outputs the employee dashboard, which includes the employee's name and picture, as well as links to the result history and assessment form pages.
return (
  <div className="container employee-dashboard">
  <div className="employee-info">
    <h2>{employeeName}</h2>
    <img src={employeePicture} alt="Employee" className="employee-picture" />
  </div>
  <div className="employee-nav">
    <Link to="/resultHistory" className="nav-link">Show Past Results</Link>
    <Link to="/assessmentForm" className="nav-link">Start New Assessment</Link>
  </div>
</div>
  );
};

export default employeeDashboard;




