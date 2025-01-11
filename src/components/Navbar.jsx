import React, { useState } from "react";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
        }
    };

    return (
        <nav className="bg-gray-100 dark:bg-gray-800 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left Section: Logo and Text */}
                    <div className="flex items-center">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Logo"
                            className="h-10 w-10 mr-2"
                        />
                        <span className="text-xl font-semibold dark:text-white">
                            MyBrand
                        </span>
                    </div>

                    {/* Middle Section: Navigation Links */}
                    <div className="hidden md:flex space-x-8">
                        <a
                            href="#home"
                            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                        >
                            About
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Right Section: Login and Dark Mode Toggle */}
                    <div className="flex items-center space-x-4">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700">
                            Login
                        </button>
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            {darkMode ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-yellow-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 3v1m0 16v1m8.364-10.364l-.707.707m-12.728 0l-.707-.707m16 8.364l-.707-.707m-12.728 0l-.707.707M21 12h-1M4 12H3m17.364-4.636l-.707.707m-12.728 0l-.707-.707m16 8.364l-.707-.707m-12.728 0l-.707.707"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-800 dark:text-gray-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 3v1m0 16v1m8.364-10.364l-.707.707m-12.728 0l-.707-.707m16 8.364l-.707-.707m-12.728 0l-.707.707M21 12h-1M4 12H3m17.364-4.636l-.707.707m-12.728 0l-.707-.707m16 8.364l-.707-.707m-12.728 0l-.707.707"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
