// src/components/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import statement


const Login = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const data = localStorage.getItem("LoginStatus");
    if (data === "true") {
      navigate("/home");
    }
    console.log("dsdsdsds", data);
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("username"), // Use "username" here instead of "email"
      password: data.get("password"),
    });

    const enteredEmail = data.get("username"); // Use "username" here instead of "email"
    const enteredPassword = data.get("password");
    const existingUsers = JSON.parse(localStorage.getItem("userData")) || [];

    const user = existingUsers.find((user) => user.email === enteredEmail);
    localStorage.setItem("LoginStatus", false);

    if (!user) {
      alert("User Not Exist! please Register");
      navigate("/signup");
    }

    if (user && user.password === enteredPassword) {
      localStorage.setItem("LoginStatus", true);
      localStorage.setItem("userEmail", enteredEmail);
      navigate("/home");
    } else {
      alert("Invalid email or password. Please try again.");
      localStorage.setItem("LoginStatus", false);
      // navigate("/register");
    }
  };


  return (
    <>
    
    <div className="min-h-screen flex  justify-center bg-gray-50">
      <div className="max-w-md w-full">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">Login <br/>(using local storage)</h2>
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
          </div>
          <div className='flex justify-between'> 

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>

          <a
            href='/signup'
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
          >
            Signup
          </a>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
