import React from "react";

function Contact() {
  return (
    <>
      <div id="contact" className="bg-gray-100 py-16 px-8 lg:px-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
            Contact Me
          </h2>

          {/* Contact Details
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600">
              <FaEnvelope className="inline-block mr-2" /> Email:{" "}
              <a
                href="mailto:your.email@example.com"
                className="text-blue-600 hover:underline"
              >
                your.email@example.com
              </a>
            </p>
            <p className="text-lg text-gray-600 mt-4">
              <FaLinkedin className="inline-block mr-2" /> LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/your-profile
              </a>
            </p>
          </div> */}

          {/* Contact Form */}
          <form className="bg-white shadow-lg rounded-lg p-8 space-y-6">
            {/* Name Input */}
            <div>
              <label
                className="block text-gray-600 text-sm font-medium mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                className="block text-gray-600 text-sm font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                className="block text-gray-600 text-sm font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded-md font-medium hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
