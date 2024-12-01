import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import { Outlet } from "react-router-dom";
import Home from "../components/Home";
import Services from "../components/Services";
import Contact from "../components/Contact";
import { useNavigate } from 'react-router-dom';

function Dashboard({ isLoggedIn, setIsLoggedIn }) {
  return (
    <>
      <div className="scroll-smooth">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Home />
        <hr className="h-1" />
        <About />
        <hr className="h-1" />
        <Services />
        <hr className="h-1" />
        <Contact />
        <hr className="h-1" />
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
