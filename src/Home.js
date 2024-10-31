// src/Home.js
import React from "react";
import { auth, signOut } from "./firebase";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div className="container">
      <h1>Welcome to DEV@Deakin</h1>
      <button className="sign-out-button" onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default Home;
