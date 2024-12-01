import React, { useState, useEffect } from "react";

const Login = ({ setUser, setIsLoggedIn, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if the token exists in localStorage or cookies
    const token = localStorage.getItem("token"); // or check cookies

    if (token) {
      // Make a request to a backend route to verify the token
      fetch("/protected", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "You are authorized to access this route") {
            // User is still authenticated, don't log them out
            console.log("User is logged in");
          } else {
            // Invalid token, redirect to login
            localStorage.removeItem("token");
            window.location.href = "/login";
          }
        })
        .catch((error) => {
          console.error("Error verifying token:", error);
          localStorage.removeItem("token");
          window.location.href = "/login";
        });
    } else {
      // No token found, redirect to login
      window.location.href = "/login";
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const credentials = {
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      // console.log(data.us);
      if (response.ok) {
        // console.log(data.username);
        setUser({ name: data.username });
        setIsLoggedIn(true); // Update login state
        onClose(); // Close the modal after successful login
        console.log("Login successful", data);
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30 z-50">
      <div className="bg-transparent p-8 rounded-xl shadow-lg backdrop-blur-md w-96">
        <form onSubmit={handleSubmit}>
          <div>
            <h2 className="text-white mb-2">Email</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded-md mb-4 bg-white/20 text-white placeholder-white/60 outline-none"
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
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full p-2 rounded-md bg-blue-500 hover:bg-blue-700 text-white"
            >
              Login
            </button>
          </div>
          <button
            type="button"
            className="mt-2 w-full p-2 rounded-md bg-red-500 hover:bg-red-700 text-white"
            onClick={onClose}
          >
            Go back
          </button>
        </form>
        {error && <p className="text-red-500 mb-4">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
