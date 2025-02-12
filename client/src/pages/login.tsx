//import React, { FormEvent, useState } from 'react';
//import axios from 'axios';
//import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({
      username: '',
      password: ''
    });
  
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setLoginData({
        ...loginData,
        [name]: value
      });
    };
  
    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      try {
        const data = await Login(loginData);
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
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}