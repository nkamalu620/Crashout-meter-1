import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const assessmentForm: React.FC = () => {
    const [responses, setResponses] = useState({
        question1: 0,
        question2: 0,
        question3: 0,
        question4: 0,
        question5: 0,
      });

      const navigate = useNavigate();

const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setResponses({
          ...responses,
          [name]: Number(value)
        });
      }

const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
    const totalScore = Object.values(responses).reduce((acc, score) => acc + score, 0);
    navigate('/result', { state: { totalScore } });
};

return (
    <div>
        <h2>Assessment Form</h2>
        <p>In this form you will be asked 5 questions about the work you do. TO the best of you knowledge, please answer the questons below, by choosing a rate between 1 and 5 (1 non stressed and 5 being stressed out)</p>
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
            name="question1"
            value={responses.question2}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
        </div>
        <div>
    <label>Question 3: How do you feel about the amount of takss you are given</label>
    <input
            type="number"
            name="question1"
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
            name="question1"
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
            name="question1"
            value={responses.question5}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
        </div>
        <button type="submit">Submit</button>
        </form>
        </div>
);
};
    
export default assessmentForm;

