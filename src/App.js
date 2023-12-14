// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/type1/Signup'; // Correct path
import Login from './components/type1/Login'; // Correct path
import Home from './components/type1/Home'; // Correct path
import NotFound from './components/NotFound';
import Type from './components/Type'

import Login2 from './components/type2/Login2';
import Signup2 from './components/type2/Signup2';
import Home2 from './components/type2/Home2';

import Login3 from './components/type3/Login3';
import Signup3 from './components/type3/Signup3';
import Home3 from './components/type3/Home3';

const App = () => {
  return (
    <Router>
    <Type />
      <Routes>
      
     
      <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login2" element={<Login2 />} />
      <Route path="/signup2" element={<Signup2 />} />
      <Route path="/home2" element={<Home2 />} />

      <Route path="/login3" element={<Login3 />} />
      <Route path="/signup3" element={<Signup3 />} />
          <Route path="/home3" element={<Home3 />} />
      </Routes>
    </Router>
  );
};

export default App;