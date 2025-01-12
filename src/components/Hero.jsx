import React from 'react';
import { AiOutlinePlayCircle } from "react-icons/ai";

const Hero = ({ darkMode }) => {
    return (
        <div
            className={`${
                darkMode ? "bg-gradient-to-b from-gray-800 to-black" : "bg-gradient-to-b from-green-50 to-green-100"
            } transition duration-300`}
        >
            <section className="py-10 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <h1
                                className={`text-4xl font-bold ${
                                    darkMode ? "text-white" : "text-black"
                                } sm:text-6xl lg:text-7xl`}
                            >
                                Collaborate remotely, with
                                <div className="relative inline-flex">
                                    <span
                                        className={`absolute inset-x-0 bottom-0 ${
                                            darkMode ? "border-yellow-400" : "border-[#4ADE80]"
                                        } border-b-[30px]`}
                                    ></span>
                                    <h1
                                        className={`relative text-4xl font-bold ${
                                            darkMode ? "text-white" : "text-black"
                                        } sm:text-6xl lg:text-7xl`}
                                    >
                                        FlyKite.
                                    </h1>
                                </div>
                            </h1>

                            <p
                                className={`mt-8 text-base ${
                                    darkMode ? "text-gray-300" : "text-black"
                                } sm:text-xl`}
                            >
                              Discover a platform designed to elevate your collaborative projects. 
    Seamlessly connect with your team, streamline workflows, and achieve 
    remarkable results with FlyKite.
                            </p>

                            <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                                <a
                                    href="#"
                                    title=""
                                    className={`inline-flex items-center justify-center px-10 py-4 text-base font-semibold transition-all duration-200 ${
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
                                    className="inline-flex items-center text-black dark:text-white mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80"
                                >
                                    <AiOutlinePlayCircle
                                        className={`w-10 h-10 mr-3 ${
                                            darkMode ? "text-yellow-400" : "text-orange-500"
                                        }`}
                                    />
                                    Watch video
                                </a>
                            </div>
                        </div>

                        <div>
                            <img
                                className="w-full"
                                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png"
                                alt=""
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
