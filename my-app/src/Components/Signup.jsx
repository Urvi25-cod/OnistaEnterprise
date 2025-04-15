import React from 'react';
import logo from "../image/logo.svg";
import lo1 from "../image/lo1.svg";
import { IoIosCloseCircle } from "react-icons/io";
export default function Signup({ onClose, }) {
    return (
        <>

            <div className="fixed inset-0 flex justify-center items-center z-50">
                <div
                    className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex overflow-hidden relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}

                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-gray-600 hover:text-black focus:outline-none z-10 "
                    >
                         <IoIosCloseCircle  className='w-10 h-10  rounded-full cursor-pointer'/>
                    </button>
                    {/* Left Side - Image Section */}
                    <div className="hidden md:block w-1/2 relative">
                        {/* Full Image */}
                        <img
                            src={lo1}
                            alt="Nature scene"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Side - Login Form */}
                    <div className="w-full md:w-1/2 p-8 flex items-center">
                        <div className="w-full">
                            {/* Logo */}
                            <img src={logo} alt="Logo" className="h-12 mx-auto mb-6" />

                            {/* Welcome Text */}
                            <h2 className="text-center text-xl mb-8 font-serif">Welcome Back!</h2>

                            {/* Form */}
                            <form className="space-y-5">
                                <div>
                                    <input
                                        type="text"
                                        id="firstname"
                                        placeholder="First Name"
                                        className="block w-full px-3 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-300 text-sm"
                                    />
                                </div>
                                {/* Email Input */}
                                <div>
                                    <input
                                        type="text"
                                        id="email"
                                        placeholder="Last name"
                                        className="block w-full px-3 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-300 text-sm"
                                    />
                                </div>

                                {/* Password Input */}
                                <div>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Passwords"
                                        className="block w-full px-3 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-300 text-sm"
                                    />
                                </div>
                                <div>

                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        placeholder="Confirm your password"
                                        className="block w-full px-3 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-300 text-sm"
                                    />
                                </div>




                                {/* Login Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-black text-white py-3 px-4 font-light tracking-wide"
                                >
                                    Sign Up
                                </button>
                            </form>

                            {/* Signup Link */}
                            <p className="text-center cursor-pointer text-sm mt-6">
                                Can't Signup in?{" "}
                            <a  className="font-medium cursor-pointer" onClick={onClose}>
                                 Login
                                </a>{" "}
                                  an account
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// Can’t Sign up? Log in an account