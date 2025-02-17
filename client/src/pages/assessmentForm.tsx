import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// manages the assessment form, where the user can answer 5 questions about their work experience. The answers are stored in a state variable and submitted to the server when the form is submitted. The total score is calculated and passed to the result page.
const assessmentForm: React.FC = () => {
    const [responses, setResponses] = useState({
        question1: 0,
        question2: 0,
        question3: 0,
        question4: 0,
        question5: 0,
      });

      const [error, setError] = useState<string | null>(null);
      const navigate = useNavigate();

  // handles the change event for the input fields.
const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setResponses({
          ...responses,
          [name]: Number(value)
        });
      }

// handle form submission
const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
    const totalScore = Object.values(responses).reduce((acc, score) => acc + score, 0);
    navigate('/result', { state: { totalScore } });
    
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/assessments', { responses, totalScore }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate('/result', { state: { totalScore } });
    } catch (err) {
      setError('Error submitting assessment');
      console.error('Error submitting assessment', err);
    }
};

// output the assessment form
return (
    <div className="container">
        <h2>Assessment Form</h2>
        <p>In this form you will be asked 5 questions about the work you do. To the best of you knowledge, please answer the questons below, by choosing a rate between 1 and 5 (1 non stressed and 5 being stressed out)</p>
        <form onSubmit={handleSubmit}>
    <div>
    <label>Question 1: How do you feel when you come into work? </label>
    <input
            type="number"
            name="question1"
            value={responses.question1}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
        </div>
        <div>
    <label>Question 2: How do you feel about the difficulties are tasks you are given</label>
    <input
            type="number"
            name="question2"
            value={responses.question2}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
        </div>
        <div>
    <label>Question 3: How do you feel about the amount of tasks you are given</label>
    <input
            type="number"
            name="question3"
            value={responses.question3}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
        </div>
        <div>
    <label>Question 4: How do you feel about the amount of support you are getting?</label>
    <input
            type="number"
            name="question4"
            value={responses.question4}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
        </div>
        <div>
    <label>Question 5: How do you feel about the overall functions of the job</label>
    <input
            type="number"
            name="question5"
            value={responses.question5}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
        {error && <p className="error">{error}</p>}
        </div>
        <button type="submit">Submit</button>
        </form>
        </div>
);
};
    
export default assessmentForm;



