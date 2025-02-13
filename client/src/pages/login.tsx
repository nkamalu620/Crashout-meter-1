import React, { FormEvent, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Auth from '../auth'; // Ensure you have an Auth module to handle authentication
import { login as loginService } from '../services/authService'; // Ensure you have a login service

import { ChangeEvent, FormEvent } from "react";

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
        const data = await loginService(loginData);
      try {
        const response = await loginService(loginData);
        Auth.login(response.data.token);
      } catch (err) {
        console.error('Failed to login', err);
      }
    };
  function setPassword(value: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input type="text" name="username" value={loginData.username} onChange={handleChange} />
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
}