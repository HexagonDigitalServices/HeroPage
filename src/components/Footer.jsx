import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaYoutube, FaEnvelope } from "react-icons/fa";

const Footer = ({ isDarkMode }) => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            console.log("Email Submitted:", email);
        }
    };

    return (
        <footer
            className={`transition-all relative ${isDarkMode
                ? "bg-yellow-300 text-gray-900"
                : "bg-green-100/60 text-gray-900"
                } py-8`}>
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6
                md:space-y-0">
                {/* Left Section */}
                <div className="text-center md:text-left">
                    <h1 className="text-3xl font-bold">FlyKite</h1>
                    <p className="text-sm mt-2">
                        Your trusted partner for digital excellence.
                    </p>
                </div>

                {/* Middle Section */}
                <div className="flex justify-center space-x-6 text-2xl">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-red-500 transition-colors">
                        <FaInstagram />
                    </a>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-700 transition-colors">
                        <FaFacebook />
                    </a>
                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-red-500 transition-colors">
                        <FaYoutube />
                    </a>
                    <a
                        href="mailto:info@flykite.com"
                        className="hover:text-green-500 transition-colors">
                        <FaEnvelope />
                    </a>
                </div>

                {/* Right Section */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2"
                >
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className={`px-4 py-2 rounded-r-3xl w-full sm:w-auto focus:outline-none ${isDarkMode
                            ? "bg-gray-700 text-white"
                            : "bg-white text-gray-900"
                            }`}
                        required/>
                    <button
                        type="submit"
                        className={`px-4 py-2 rounded-l-3xl w-full sm:w-auto transition-all ${isDarkMode
                            ? "bg-gray-800 hover:bg-gray-900 text-white"
                            : "bg-green-600 hover:bg-green-700 text-white"
                            }`}>
                        Submit
                    </button>
                </form>
            </div>

            {/* Divider and Copyright */}
            <div className="mt-6 border-t pt-4 text-center">
                <p className={`text-sm ${isDarkMode ? "text-gray-800" : "text-gray-700"}`}>
                    Copyright © 2025{" "}
                    <br />
                    <a
                        href="https://hexagondigitalservices.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-purple-600">
                        Hexagon Digital Services
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
