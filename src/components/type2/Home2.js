import React from "react";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function Home2() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Delete the 'username' and 'password' cookies (or any other cookies you've set)
    Cookies.remove('username');
    Cookies.remove('password');

    // Redirect to the login page
    navigate('/login2');
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
}

export default Home2;
