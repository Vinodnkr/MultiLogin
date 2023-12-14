// TypeComponent.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Type = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState('1');

  const handleAuth = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);

    // Programmatically navigate to the desired route based on the selected value
    switch (newValue) {
      case '1':
        navigate('/login');
        break;
      case '2':
        navigate('/login2');
        break;
      case '3':
        navigate('/login3');
        break;
      case '4':
        navigate('/type4');
        break;
      case '5':
        navigate('/type5');
        break;
      default:
        // Handle other cases if needed
        break;
    }
  };

  return (
    <div className="flex flex-col items-center mt-8 bg-gray-100 p-8 rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Select the method of Authentication</h1>
      <select
        value={selectedValue}
        onChange={handleAuth}
        className="w-full max-w-md p-3 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800"
      >
        <option value="1">Local Storage</option>
        <option value="2">Cookies</option>
        <option value="3">JWT</option>
        <option value="4">Redux</option>
        <option value="5">Auth0</option>
      </select>
      
    </div>
  );
};

export default Type;
