// LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


function LoginPage({ onLogin }) {
  const navigate=useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onLogin({ username, password });
    //navigate('/home2')
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
      <input
        type="submit"
        value="Submit"
        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
      />
    </form>
  );
}

export default LoginPage;
