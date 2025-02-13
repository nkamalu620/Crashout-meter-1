import React from 'react';
import { useLocation } from 'react-router-dom';

const results = () => {

    const location = useLocation();
    const { totalScore } = location.state as { totalScore: number };

    return (
        <div>
            <h2>Results</h2>
            <p>Your Crashout meter is: {totalScore}</p>
            <p>
            {totalScore <= 10 && 'Your crashout meter is low. Keep up the good work!'}
        {totalScore > 10 && totalScore <= 20 && 'Your crashout meter is moderate. Consider some relaxation techniques.'}
        {totalScore > 20 && 'Your crashout level is high. It might be a good idea to talk to a professional.'}
            </p>
        </div>
    )

};

export default Results;