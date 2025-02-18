import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// displays the results of assessment
const results: React.FC = () => {

    const location = useLocation();
    const { totalScore } = location.state as { totalScore: number };

    return (
        <>
        <div className="container results-page">
            <h2>Results</h2>
            <p className="message">Your Crashout meter is: {totalScore}</p>
            <p className="message">
                {totalScore <= 10 && 'Your crashout meter is low. Keep up the good work!'}
                {totalScore > 10 && totalScore <= 20 && 'Your crashout meter is moderate. Consider some relaxation techniques.'}
                {totalScore > 20 && 'Your crashout level is high. It might be a good idea to talk to a professional.'}
            </p>
        </div>
        <div className="navigation-links">
            <Link to="/resultHistory" className="nav-link">Show Past Results</Link>
            <Link to="/employeeDashboard" className="nav-link">Back to Dashboard</Link>
        </div>
            </>
    )

};

export default results;