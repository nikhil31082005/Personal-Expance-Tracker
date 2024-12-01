import React, { useState, useEffect } from "react";
import "./App.css";
import Login from './pages/Login';
import Dashboard from "./pages/Dashboard";


function App() {
  const [message, setMessage] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Dashboard isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    </>
  );
}

export default App