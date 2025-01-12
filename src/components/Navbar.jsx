import React, { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import image1 from "../assets/image1.jpg";

const Navbar = ({ setDarkMode, darkMode }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700 shadow-sm fixed top-0 left-0 w-full z-50 transition duration-300 ease-in-out`}>
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <a href="#" title="Logo" className="flex items-center">
                            <img
                                className="w-auto h-8"
                                src={image1}
                                alt="Logo"
                            />
                            <span className="ml-3 text-2xl font-semibold tracking-wide text-black dark:text-white">FlyKite</span>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
                        <a
                            href="#home"
                            className="text-base font-semibold text-black dark:text-white transition-all duration-200 hover:text-opacity-80"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="text-base font-semibold text-black dark:text-white transition-all duration-200 hover:text-opacity-80"
                        >
                            About
                        </a>
                        <a
                            href="#contact"
                            className="text-base font-semibold text-black dark:text-white transition-all duration-200 hover:text-opacity-80"
                        >
                            Contact
                        </a>

                        <div className="w-px h-5 bg-black/20 dark:bg-white/20"></div>

                        <a
                            href="#login"
                            className="text-base font-semibold text-black dark:text-white transition-all duration-200 hover:text-opacity-80"
                        >
                            Login
                        </a>
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-200 ${darkMode ? "animate-pulse text-yellow-400" : "text-gray-500"}`}
                        >
                            {darkMode ? <FaSun /> : <FaMoon />}
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-2xl text-black dark:text-white focus:outline-none hover:text-opacity-80 transition duration-200"
                        >
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden bg-gradient-to-b from-teal-500 to-gray-700 dark:from-gray-900 dark:to-black text-white p-4 space-y-4 shadow-lg transition duration-300 ease-in-out">
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
                            className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-200 ${darkMode ? "animate-pulse text-yellow-400" : "text-gray-500"}`}
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
