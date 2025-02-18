import React from 'react';
import { Link } from 'react-router-dom';

// outputs the front page
const FrontPage: React.FC = () => {
    return (
      <div className="front-page">
        <h1>Welcome to Crashout Meter</h1>
        <div className="navigation-links">
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/register" className="nav-link">Register</Link>
        </div>
      </div>
    );
  };
  
  export default FrontPage;