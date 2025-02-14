import React, { FormEvent, useState, ChangeEvent } from 'react';
import Auth from '../utils/auth'; 
import { login } from '../api/authAPI';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [loginData, setLoginData] = useState({
      email: '',
      password: ''
    });
  
    const navigate = useNavigate();

  
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      // console.log(loginData, name, value);
      setLoginData({
        ...loginData,
        [name]: value
      });
    };
  
    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      try {
        const data = await login(loginData);
        Auth.login(data.token);
        navigate('/employeeDashboard');
      } catch (err) {
        console.error('Failed to login', err);
      }
    };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            email:
            <input type="text" name="email" value={loginData.email} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" value={loginData.password} onChange={handleChange} />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;





