// LoginPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Fetch cookies if they exist
    const storedUsername = Cookies.get('username');
    const storedPassword = Cookies.get('password');

    if (storedUsername) {
      setUsername(storedUsername);
    }

    if (storedPassword) {
      setPassword(storedPassword);
    }
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    // Implement your login logic here
    const storedUsername = Cookies.get('username');
    const storedPassword = Cookies.get('password');

    if (username === storedUsername && password === storedPassword) {
      // Redirect to home2 upon successful login
      navigate('/home2');
    } else {
      console.log('Login failed. Invalid username or password.');
      alert('Login failed. Invalid username or password.'); // Replace with your own error handling logic
      navigate('/signup2')
      // You can display an error message or perform other actions for failed login
    }
  }


  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 ">
      <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6">Login<br/> (Cookies)</h1>
      <label className="block mb-2 text-sm font-bold text-gray-700">
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </label>
      <br />
      <label className="block mb-2 text-sm font-bold text-gray-700">
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </label>
      <br />
      <div className='flex justify-between'> 
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>

        <a
          href='/signup2'
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        >
          Signup
        </a>
      </div>
    </form>
  );
}

export default LoginPage;
