// Signup3.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup3 = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', formData);
      
      // Assuming the response contains a user object with an ID, adjust this line based on your actual response structure
      const userId = response.data.id;

      // Store user ID in localStorage or cookies
      localStorage.setItem('userId', userId);

      // Redirect to a protected route (e.g., dashboard) after signup
      navigate('/home3');
    } catch (error) {
      console.error('Signup failed:', error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
        Signup <br />(using JWT)
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup3;
