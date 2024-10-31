import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home"; 
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} /> {/* Use Home component */}
        <Route 
          path="/" 
          element={
            <div>
              <h1>Welcome!</h1>
              <p>Please go to <Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link></p>
            </div>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
