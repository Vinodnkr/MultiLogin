// src/components/Home.js
import React from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const n = useNavigate();
  const handleLogout = () => {
    //localStorage.removeItem('userData');
    localStorage.setItem("LoginStatus", false);
    n("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">Welcome to the Home Page</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
        
      </div>
    </div>
  );
};

export default Home;
