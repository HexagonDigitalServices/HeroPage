import React, { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import image1 from "../assets/image1.jpg";

const Navbar = ({ setDarkMode, darkMode }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav
            className={`bg-white dark:bg-black text-black dark:text-white border-b border-gray-200 dark:border-gray-700 shadow-sm fixed top-0 left-0 w-full z-50 transition duration-300 ease-in-out ${darkMode
                ? "custom-shadow-light" : "custom-shadow-dark"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left Section: Logo */}
                    <div className="flex items-center">
                        <img
                            src={image1}
                            alt="Logo"
                            className="h-10 w-10 rounded-full border-2 border-gray-300 dark:border-gray-600 shadow-md mr-3"
                        />
                        <span className="text-2xl font-semibold tracking-wide">
                            FlyKite
                        </span>
                    </div>

                    {/* Middle Section: Links */}
                    <div className="hidden md:flex space-x-8 text-lg font-medium">
                        <a
                            href="#home"
                            className="hover:text-teal-500 dark:hover:text-gray-300 transition duration-200 dark:hover:underline underline-offset-4"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="hover:text-teal-500 dark:hover:text-gray-300 transition duration-200 dark:hover:underline underline-offset-4"
                        >
                            About
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-teal-500 dark:hover:text-gray-300 transition duration-200 dark:hover:underline underline-offset-4"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Right Section: Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="px-4 py-2 border border-teal-700 dark:border-gray-600 rounded-md shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-200">
                            Login
                        </button>
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-200 ${darkMode ? "animate-pulse text-yellow-400" : "text-gray-500"
                                }`}
                        >
                            {darkMode ? <FaSun /> : <FaMoon />}
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-2xl focus:outline-none hover:text-gray-500 dark:hover:text-gray-300 transition duration-200"
                        >
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-gradient-to-b from-teal-500 to-gray-700 dark:from-gray-900 dark:to-black text-white p-4 space-y-4 shadow-lg transition duration-300 ease-in-out">
                    <a
                        href="#home"
                        className="block text-lg font-medium hover:text-teal-300 transition duration-200"
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="block text-lg font-medium hover:text-teal-300 transition duration-200"
                        onClick={() => setMenuOpen(false)}
                    >
                        About
                    </a>
                    <a
                        href="#contact"
                        className="block text-lg font-medium hover:text-teal-300 transition duration-200"
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact
                    </a>
                    <div className="flex justify-center">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-200 ${darkMode ? "animate-pulse text-yellow-400" : "text-gray-500"
                                }`}
                        >
                            {darkMode ? <FaSun /> : <FaMoon />}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
