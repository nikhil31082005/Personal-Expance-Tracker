import React from "react";

function About() {
  return (
    <>
      <div id="about" className="bg-gray-100 border-gray-200 w-full min-h-screen">
        <h1 className="text-center text-5xl font-bold text-gray-800 mb-4 pt-4">About me</h1>
        <div className="flex flex-col lg:flex-row h-full">
          <div className="flex-1 pl-8 pr-8 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Professional man"
              className="w-40 h-40 md:w-60 md:h-60 lg:w-2/3 lg:h-3/4 object-cover rounded-full lg:rounded-md shadow-lg"
            />
          </div>

          <div className="flex-1 flex items-center justify-center px-8 lg:px-12">
            <div className="font-sans text-center lg:text-left">
              <h1 className="font-mono text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-700 via-purple-700 to-red-500 bg-clip-text text-transparent">
                Hey, I'm Nikhil
              </h1>
              <h3 className="font-mono text-2xl sm:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-700 via-purple-700 to-red-500 bg-clip-text text-transparent">
                I'm a Web Developer
              </h3>
              <p className="text-lg mt-4 text-gray-600">
                Hi, I'm Nikhil, a passionate and motivated Computer Science
                student currently pursuing my Bachelor of Technology at GLA
                University, Mathura. With a strong foundation in full-stack
                development, I have built projects ranging from a Twitter (X)
                clone to a student management system, utilizing technologies
                such as HTML5, Tailwind CSS, React.js, Node.js, Express, and
                MongoDB.
              </p>
              <p className="text-lg mt-4 text-gray-600">
                Beyond academics, I am deeply engaged in competitive
                programming, having solved over 800 problems on platforms like
                LeetCode, where I consistently rank in the top 15%. My projects
                showcase my dedication to applying software engineering
                fundamentals to real-world problems, whether it’s optimizing
                user experience through responsive designs or implementing
                efficient data structures for faster performance.
              </p>
              <p className="text-lg mt-4 text-gray-600 pb-5">
                I am constantly looking for opportunities to learn, grow, and
                contribute to impactful projects, with a vision to build
                scalable and efficient software solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
