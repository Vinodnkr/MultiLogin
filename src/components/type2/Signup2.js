// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate=useNavigate()

  const handleSignup = () => {
    // Implement your signup logic here
    console.log('Signup:', username, password);

     // Set cookies with username and password
     Cookies.set('username', username, { expires: 7 }); // Cookie expires in 7 days
     Cookies.set('password', password, { expires: 7 });
     navigate('/login2');

     
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6">Signup</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />
      
      <div className='flex justify-between'>
          <button
            type="submit"
            onClick={handleSignup}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Signup
          </button>
          <a
      href='/login2'
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-center rounded "
    >
    Already have an account? Login
    </a>
    </div>
    </div>
  );
};

export default Signup;
