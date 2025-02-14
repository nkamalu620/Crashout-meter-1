import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const results: React.FC = () => {

    const location = useLocation();
    const { totalScore } = location.state as { totalScore: number };

    return (
        <>
        <div>
            <h2 class='nav-link'>Results</h2>
            <p class='nav-link'>Your Crashout meter is: {totalScore}</p>
            <p>
                {totalScore <= 10 && 'Your crashout meter is low. Keep up the good work!'}
                {totalScore > 10 && totalScore <= 20 && 'Your crashout meter is moderate. Consider some relaxation techniques.'}
                {totalScore > 20 && 'Your crashout level is high. It might be a good idea to talk to a professional.'}
            </p>
        </div><div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/resultHistory">Show Past Results</Link>
                        </li>
                        <li>
                            <Link to="/employeeDashboard">Back to Dashboard</Link>
                        </li>
                    </ul>
                </nav>
            </div></>
    )

};

export default results;