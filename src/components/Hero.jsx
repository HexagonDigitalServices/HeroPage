import React from 'react';
import { AiOutlinePlayCircle } from "react-icons/ai";

const Hero = ({ darkMode }) => {
    return (
        <div
            className={`${
                darkMode ? "bg-gradient-to-b from-gray-800 to-black" : "bg-gradient-to-b from-green-50 to-green-100"
            } transition duration-300 h-screen`}>
            <section className="h-full flex items-center">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 h-full flex items-center">
                    <div className="grid items-center grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2 w-full">
                        {/* Text Section */}
                        <div>
                            <h1
                                className={`text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight ${
                                    darkMode ? "text-white" : "text-black"
                                }`}
                            >
                                Collaborate remotely, with
                                <div className="relative inline-flex">
                                    <span
                                        className={`absolute inset-x-0 bottom-0 ${
                                            darkMode ? "border-yellow-400" : "border-[#4ADE80]"
                                        } border-b-[12px] sm:border-b-[20px] md:border-b-[30px]`}></span>
                                    <span
                                        className={`relative ${
                                            darkMode ? "text-white" : "text-black"
                                        }`}
                                    >
                                        FlyKite.
                                    </span>
                                </div>
                            </h1>

                            <p
                                className={`mt-4 text-sm sm:mt-6 sm:text-lg lg:text-xl leading-relaxed ${
                                    darkMode ? "text-gray-300" : "text-black"
                                }`}
                            >
                                Discover a platform designed to elevate your collaborative projects. 
                                Seamlessly connect with your team, streamline workflows, and achieve 
                                remarkable results with FlyKite.
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:space-x-8">
                                <a
                                    href="#"
                                    title=""
                                    className={`inline-flex items-center justify-center px-8 py-3 sm:px-10 sm:py-4 text-sm sm:text-base font-semibold transition-all duration-200 ${
                                        darkMode
                                            ? "text-black bg-yellow-400 hover:bg-yellow-500"
                                            : "text-white bg-orange-500 hover:bg-orange-600"
                                    } focus:outline-none`}
                                    role="button"
                                >
                                    Start exploring
                                </a>

                                <a
                                    href="#"
                                    title=""
                                    className="inline-flex items-center mt-4 text-sm sm:mt-0 sm:text-base font-semibold transition-all duration-200 hover:opacity-80"
                                >
                                    <AiOutlinePlayCircle
                                        className={`w-8 h-8 sm:w-10 sm:h-10 mr-2 ${
                                            darkMode ? "text-yellow-400" : "text-orange-500"
                                        }`}
                                    />
                                    Watch video
                                </a>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div>
                            <img
                                className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-full mx-auto"
                                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png"
                                alt="Collaboration"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
