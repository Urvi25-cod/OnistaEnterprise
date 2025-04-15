import React from "react";
import a1 from "../image/a1.svg";
import a2 from "../image/a2.svg";
import a3 from "../image/a3.svg";
import a4 from "../image/a4.svg";
import { Link } from "react-router-dom";
// import Navbar from "./Navbar";

const OnistaInspired = () => {
    return (
        <>
         {/* <Navbar bgColor="" textColor="text-black"/> */}
            <div className="bg-[#EEFFF3] py-12 px-4 mx-auto max-w-7xl sm:px-8 lg:px-16">
                {/* Header Section */}
                <div style={{fontFamily:"Times New Roman"}} className="text-center mb-8">
                    <h2 className="text-xl sm:text-2xl  mb-2">#OnistaInspired</h2>
                    <p className="text-gray-600 text-sm sm:text-base">
                        See how our customers style Onista pieces in their homes
                    </p>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Image 1 */}
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <img
                            src={a1}
                            alt="Styled Wall Art 1"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Image 2 */}
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <img
                            src={a2}
                            alt="Styled Wall Art 2"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Image 3 */}
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <img
                            src={a3}
                            alt="Styled Wall Art 3"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Image 4 */}
                    <div className="rounded-lg overflow-hidden shadow-md">
                        <img
                            src={a4}
                            alt="Styled Wall Art 4"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* View Profile Button */}
                <div style={{fontFamily:"Times New Roman"}} className="text-center mt-8">
                    <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition duration-300">
                        View Profile
                    </button>
                </div>
            </div>

            <div className="mx-auto max-w-7xl mb-5">

                <div className="bg-black text-white py-12 px-4 sm:px-8 lg:px-16 rounded-lg">
                    {/* Text Content */}
                    <div style={{fontFamily:"Times New Roman"}} className="text-center">
                        <h2 className="text-xl sm:text-2xl  mb-4">
                            Experience the Onista Difference
                        </h2>
                        <p className="text-sm sm:text-base text-gray-400 mb-6">
                            Discover our collection of handcrafted wall art pieces, designed to transform your space with elegance and cultural richness.
                        </p>
                        {/* Button */}
                      <Link to={'/ProductListing'}><button className="bg-white cursor-pointer text-black py-2 px-6 rounded-lg hover:bg-gray-200 transition duration-300">
                            Shop Our Collection
                        </button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OnistaInspired;
