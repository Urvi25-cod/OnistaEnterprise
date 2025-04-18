// import React from 'react';
// import logo from '../image/logo.svg';
// import lo1 from '../image/lo1.svg';

// export default function Login({ onClose }) {
//   return (
//     <div className="fixed inset-0 flex justify-center items-center z-50">
//       <div 
//         className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex overflow-hidden relative"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-600 hover:text-black focus:outline-none z-10"
//         >
//           ✕
//         </button>

//         {/* Left Side - Image Section */}
//         <div className="hidden md:block w-1/2  relative">
//           {/* Framed Picture */}
//           <div className="absolute top-20 left-0 right-0 flex justify-center">
//             <div className="bg-white p-3 shadow-md">
//               <div className="bg-gray-100 w-full h-full">
//                 <img 
//                   src={lo1} 
//                   alt="Nature scene" 
//                   className=" object-cover"
//                 />
//               </div>
//             </div>
//           </div>
          
//           {/* Plant */}
            
//         </div>

//         {/* Right Side - Login Form */}
//         <div className="w-full md:w-1/2 p-8 flex items-center">
//           <div className="w-full">
//             {/* Logo */}
//             <img src={logo} alt="Logo" className="h-12 mx-auto mb-6" />

//             {/* Welcome Text */}
//             <h2 className="text-center text-xl mb-8 font-serif">Welcome Back!</h2>

//             {/* Form */}
//             <form className="space-y-5">
//               {/* Email Input */}
//               <div>
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder="Email Address"
//                   className="block w-full px-3 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-300 text-sm"
//                 />
//               </div>

//               {/* Password Input */}
//               <div>
//                 <input
//                   type="password"
//                   id="password"
//                   placeholder="Passwords"
//                   className="block w-full px-3 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-300 text-sm"
//                 />
//               </div>

//               {/* Login Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-black text-white py-3 px-4 font-light tracking-wide"
//               >
//                 Log In
//               </button>
//             </form>

//             {/* Signup Link */}
//             <p className="text-center text-sm mt-6">
//               Can't Log in? <a href="/signup" className="font-medium">Sign up</a> an account
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
//___________


import React from 'react';
// import React, { useState, useEffect } from 'react';
import logo from "../image/logo.svg";
import lo1 from "../image/lo1.svg";
import { Link } from 'react-router-dom';
// import { Link, useNavigate } from 'react-router-dom';
import { IoIosCloseCircle } from "react-icons/io";


export default function Login({ onClose ,toggSigupPopup}) {

  // const navigate = useNavigate();
  // const [showLogin, setShowLogin] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowLogin(false);
  //     navigate('/'); // Replace with your target route
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, [navigate]);
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 focus:outline-none z-10 cursor-pointer"
        >
          <IoIosCloseCircle  className='w-10 h-10  rounded-full'/>
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
              {/* Email Input */}
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
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

              {/* Login Button */}
             <Link to={'/ProfilePage'}> <button
                type="submit"
                className="w-full bg-black text-white py-3 px-4 font-light tracking-wide cursor-pointer" onClick={onClose}
              >
                Log In
              </button></Link>
            </form>

            {/* Signup Link */}
            <p className="text-center text-sm mt-6 cursor-pointer">
              Can't Log in?{" "}
              <a  className="font-medium" onClick={toggSigupPopup}>
                Sign up
              </a>{" "}
              an account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// import { useState, useEffect } from "react"
// import logo from "../image/logo.svg"
// import lo1 from "../image/lo1.svg"
// import { useNavigate } from "react-router-dom"

// export default function Login({ onClose, toggSigupPopup }) {
//   const navigate = useNavigate()
//   const [showPopup, setShowPopup] = useState(false)

//   useEffect(() => {
//     // Check if popup has been closed in this session
//     const popupClosedThisSession = sessionStorage.getItem("popupClosed")

//     if (!popupClosedThisSession) {
//       // If not closed in this session, show the popup
//       setShowPopup(true)
//     }
//   }, [])

//   const handleClose = () => {
//     // Mark popup as closed for this session
//     sessionStorage.setItem("popupClosed", "true")
//     setShowPopup(false)
//     if (onClose) onClose()
//   }

//   // If popup shouldn't be shown, return null
//   if (!showPopup) {
//     return null
//   }

//   return (
//     <div className="fixed inset-0 flex justify-center items-center z-50 pointer-events-none">
//       {/* Semi-transparent overlay that allows the home page to be visible */}
//       <div
//         className="fixed inset-0  pointer-events-auto"
//         onClick={handleClose}
//       ></div>

//       {/* Popup container */}
//       <div
//         className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex overflow-hidden relative z-10 pointer-events-auto"
//         onClick={e => e.stopPropagation()}
//       >
//         {/* Close Button */}
//         <button
//           onClick={handleClose}
//           className="absolute top-2 right-2 text-gray-600 hover:text-black focus:outline-none z-10"
//         >
//           ✕
//         </button>

//         {/* Left Side - Image Section */}
//         <div className="hidden md:block w-1/2 relative">
//           {/* Full Image */}
//           <img
//             src={lo1 || "/placeholder.svg"}
//             alt="Nature scene"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Right Side - Login Form */}
//         <div className="w-full md:w-1/2 p-8 flex items-center">
//           <div className="w-full">
//             {/* Logo */}
//             <img
//               src={logo || "/placeholder.svg"}
//               alt="Logo"
//               className="h-12 mx-auto mb-6"
//             />

//             {/* Welcome Text */}
//             <h2 className="text-center text-xl mb-8 font-serif">
//               Welcome Back!
//             </h2>

//             {/* Form */}
//             <form className="space-y-5" onSubmit={e => e.preventDefault()}>
//               {/* Email Input */}
//               <div>
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder="Email Address"
//                   className="block w-full px-3 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-300 text-sm"
//                 />
//               </div>

//               {/* Password Input */}
//               <div>
//                 <input
//                   type="password"
//                   id="password"
//                   placeholder="Passwords"
//                   className="block w-full px-3 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-300 text-sm"
//                 />
//               </div>

//               {/* Login Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-black text-white py-3 px-4 font-light tracking-wide"
//               >
//                 Log In
//               </button>
//             </form>

//             {/* Signup Link */}
//             <p className="text-center text-sm mt-6 cursor-pointer">
//               Can't Log in?{" "}
//               <a className="font-medium" onClick={toggSigupPopup}>
//                 Sign up
//               </a>{" "}
//               an account
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



