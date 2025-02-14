import { useState } from 'react';
import Auth from '../utils/auth'; 
import { login } from '../api/authAPI';

import { ChangeEvent } from "react";

const Login = () => {
    const [loginData, setLoginData] = useState({
      email: '',
      password: ''
    });
  
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setLoginData({
        ...loginData,
        [name]: value
      });
    };
  
    const handleSubmit = async () => {
      try {
        const data = await login(loginData);
        Auth.login(data.token);
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
            <input type="text" name="username" value={loginData.email} onChange={handleChange} />
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





