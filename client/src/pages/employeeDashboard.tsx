



const EmployeeDashboard = () => {

    const employeeName = 'John Smith';
    const employeePicture = 'https://via.placeholder.com/150';

return (
    <div className="employee-dashboard">
      <div className="employee-info">
        <img src={employeePictureUrl} alt="Employee" className="employee-picture" />
        <h2>{employeeName}</h2>
      </div>
      <nav className="employee-nav">
        <ul>
          <li>
            <Link to="/resultHistory">Show Past Results</Link>
          </li>
          <li>
            <Link to="/assessmentForm">Start New Assessment</Link>
          </li>
        </ul>
      </nav>
    </div>
  );


}




