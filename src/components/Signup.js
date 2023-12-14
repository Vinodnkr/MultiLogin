
// src/components/Signup.js
import React from 'react';
import { useNavigate } from 'react-router-dom';



const Signup = () => {

  const navigate = useNavigate();

  React.useEffect(() => {
    const data = localStorage.getItem("LoginStatus");
    if (data === "true") {
      navigate("/");
    }
  });

 
  const handleSubmit =  (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userData = {
      email: data.get("username"),
      password: data.get("password"),
          };

    const existingUsers = JSON.parse(localStorage.getItem("userData")) || [];

    if (existingUsers.length > 0) {
      const emailExists = existingUsers.some(
        (user) => user.email === userData.email
      );
      if (emailExists) {
        alert("Email already exists! Please use a different email.");
        return;
      }
    }
   // Add the new user to the array
    const updatedUsers = [...existingUsers, userData];

    // Store the updated array in local storage
    localStorage.setItem("userData", JSON.stringify(updatedUsers));
    navigate("/home");
  };


 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50" flex>
    
      <div className="max-w-md w-full">
      
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              
              className="border rounded w-full py-2 px-3"
              required
            />
          </div >
          <div className='flex justify-between'>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Signup
          </button>
          <a
      href='/login'
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-center rounded "
    >
    Already have an account? Login
    </a>
    </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
