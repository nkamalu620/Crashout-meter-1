import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';


const Register: React.FC = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [position, setPosition] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
const handleSumbit = async (e: FormEvent) => {
      e.preventDefault();
      try {
        await registerUser({ name, position, email, password });
        navigate('/login');
      } catch (err) {
        setError('Failed to register');
      }
    }
    const registerUser = async ({ name, position, email, password }: { name: string, position: string, email: string, password: string }) => {
      console.log('User registered:', { name, position, email, password });
    }


return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSumbit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Position:</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;