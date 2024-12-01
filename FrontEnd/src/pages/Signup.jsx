import React, { useState } from "react";

const Signup = ({ setUser, setIsLoggedIn, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jobType, setJobType] = useState(""); 
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    const credentials = {
      name,
      email,
      password,
      jobType,
    };
  
    try {
      console.log(credentials);
      const response = await fetch("http://localhost:8000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
  
      const data = await response.json();
      if (response.ok) {
        setIsLoggedIn(true);
        setUser({ name: data.username });  // Update login state
        onClose(); // Redirect on successful signup
        console.log("Signup successful", data);
      } else {
        console.log(response);
        setError(data.message || "Signup failed");
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong. Please try again.");
    }
  };
  


  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30 z-50 w-[100%] h-[100%]">
      <div className="bg-transparent p-8 rounded-xl shadow-lg backdrop-blur-lg w-[25%] h-[70%]">
        {/* Signup form */}
        <form onSubmit={handleSubmit}>
          <div>
            <h2 className="text-white mb-2">UserName</h2>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded-md mb-4 bg-white/20 text-white placeholder-white/60 outline-none"
              required
            />
            <h2 className="text-white mb-2">Email</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded-md mb-4 bg-white/20 text-white placeholder-white/60 outline-none"
              required
            />
          </div>
          <div>
            <h2 className="text-white mb-2">Password</h2>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded-md mb-4 bg-white/20 text-white placeholder-white/60 outline-none"
              required
            />
            <h2 className="text-white mb-2">Job Type</h2>
            <input
              type="text"
              placeholder="Your Job Type"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="w-full p-2 rounded-md mb-4 bg-white/20 text-white placeholder-white/60 outline-none"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full p-2 rounded-md bg-blue-500 hover:bg-blue-700 text-white"
            >
              SignUp
            </button>
          </div>
          <button
            type="button" // Change to type="button" for Go Back button
            className="mt-2 w-full p-2 rounded-md bg-red-500 hover:bg-red-700 text-white"
            onClick={onClose}
          >
            Go Back
          </button>
        </form>
        {error && <p className="text-red-500 mb-4">{error}</p>}
      </div>
    </div>
  );
};

export default Signup;
