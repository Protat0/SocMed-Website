import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "tw-elements";
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/About" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
