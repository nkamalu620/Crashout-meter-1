import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';


interface Assessment {
    id: number;
    stressLevel: number;
    date: string;
    employeeName: string;
}

const managerDashboard: React.FC = () => {
    const [results, setResults] = useState<Assessment[]>([]);
    const [error, setError] = useState('');
useEffect(() => {
    const fetchResults = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/assessments', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setResults(response.data);
      } catch (err) {
        setError('Error fetching results');
      }
    };

    fetchResults();
  }, []);

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Date</th>
            <th>Stress Level</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.id}>
              <td>{result.employeeName}</td>
              <td>{new Date(result.date).toLocaleDateString()}</td>
              <td>{result.stressLevel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default managerDashboard;
 

