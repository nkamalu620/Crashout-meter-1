import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Assessment {
    id: number;
    stressLevel: number;
    date: string;
}

const resultHistory: React.FC = () => {
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
          <h2>Previous Results</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Crashout Meter</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result) => (
                <tr key={result.id}>
                  <td>{new Date(result.date).toLocaleDateString()}</td>
                  <td>{result.stressLevel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
};

export default resultHistory;

