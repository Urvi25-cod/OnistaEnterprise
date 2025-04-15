import React, { useEffect, useState } from "react";
import Profile from "../image/Profile.svg";
import { Link, useLocation } from "react-router-dom";


const ProfilePage = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  // const track = () =>{
  //   onclick(setSelectedOrder)
  // }
  const location = useLocation();
  // const [selectedOrder, setSelectedOrder] = useState(null);

  // If coming from Track Order link
  useEffect(() => {
    if (location.state?.trackingSteps) {
      setSelectedOrder(0); // Or use some specific order index
    }
  }, [location.state]);



  const orders = [1, 2]; // Replace with actual order data

  const trackingSteps = [
    {
      title: "Order Conform",
      desc: "Tracking ID : 0000 0000 0000 0000",
    },
    {
      title: "Order Shipping",
      desc: "order shipping by onista",
    },
    {
      title: "Out for Delivery",
      desc: "Your order is out for delivery",
    },
    {
      title: "Delivered",
      desc: "Your order has been delivered successfully",
    },
  ];



  // Return only tracking view if an order is selected
  if (selectedOrder !== null) {
    return (
      <>

        <div className="max-w-7xl mx-auto  items-center justify-center px-4 py-10 bg-white">
          {/* <div className="text-sm mb-8 cursor-pointer">
            <span className="text-gray-800">
              <Link to="/" className="hover:underline cursor-pointer">
                Home
              </Link>{" "}

              {" "}  <span onClick={() => setSelectedOrder(null)}>{" "}
              / Profile
              </span>
            </span>
          </div> */}
          <div className="mb-6 text-sm cursor-pointer">
            <Link to={'/'}><span
              style={{ fontFamily: "Times New Roman" }}
              className="text-gray-800 hover:underline"
             
              
            >
              Home
            </span></Link>
            /{" "}
            <span
              style={{ fontFamily: "Times New Roman" }}
              className="text-gray-800 hover:underline"
              onClick={() =>setSelectedOrder(null)}
            >
              Profile
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full">
            <img
              src={Profile}
              alt="product"
              className="w-full md:w-[350px] rounded-lg shadow-lg"
            />
            <div className="flex-1">
              {trackingSteps.map((step, idx, arr) => (
                <div key={idx} className="flex items-start relative mb-10">
                  {/* Blue Check Circle */}
                  <div className="flex flex-col items-center z-10">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {/* Line */}
                    {idx !== arr.length - 1 && (
                      <div className="w-px h-10 bg-gray-300 mt-1"></div>
                    )}
                  </div>

                  {/* Step Text */}
                  <div className="ml-4">
                    <h3 style={{ fontFamily: "Times New Roman" }} className="text-xl">{step.title}</h3>
                    <p style={{ fontFamily: "Times New Roman" }} className="text-xl text-gray-600 ">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  // Default profile view with order list
  return (
    <>
      <div className="max-w-7xl mx-auto bg-white px-4 md:px-16 py-8">
        <Link to={'/'}>  <nav style={{ fontFamily: "Times New Roman" }} className="hover:underline text-xs text-gray-500 mb-4">Home / Profile</nav></Link>

        {/* User Info */}
        <div className="bg-gray-100 p-6 rounded-xl shadow mb-8">
          <h2 className="text-2xl mb-4 font-[Times New Roman]">User Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="border border-gray-300 rounded-md px-4 py-2 outline-none font-[Times New Roman]" />
            <input type="text" placeholder="Mobile Number" className="border border-gray-300 rounded-md px-4 py-2 outline-none font-[Times New Roman]" />
            <input type="email" placeholder="Email Address" className="border border-gray-300 rounded-md px-4 py-2 outline-none font-[Times New Roman]" />
            <input type="text" placeholder="DOB" className="border border-gray-300 rounded-md px-4 py-2 outline-none font-[Times New Roman]" />
          </div>
        </div>

        {/* Orders */}
        <div className="bg-gray-100 p-6 rounded-xl shadow mb-8">
          <h2 className="text-2xl mb-4 font-[Times New Roman]">Orders</h2>
          {orders.map((order, index) => (
            <div
              key={index}
              onClick={() => setSelectedOrder(index)}
              className="cursor-pointer flex flex-col md:flex-row gap-4 mb-4  p-2 rounded-md"
            >
              <img src={Profile} alt="product" className="w-full md:w-32 h-auto object-cover rounded-md" />
              <div className="flex-1">
                <p className="text-lg mb-1 font-[Times New Roman]">Shipping Address :</p>
                <p className="text-gray-700 mb-2 font-[Times New Roman]">
                  John Doe, 123 Main St. Springfield, IL 62701 USA
                </p>
                <p className="text-lg mb-1 font-[Times New Roman]">
                  <span className="font-medium">Tracking ID :</span> 0000 0000 0000 0000
                </p>
                <p className="text-lg font-[Times New Roman] text-black">₹120000.00</p>
              </div>
            </div>
          ))}
        </div>

        {/* Logout Button */}
        <button className="flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition font-[Times New Roman]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10V5" />
          </svg>
          Log Out
        </button>
      </div>
    </>
  );
};

export default ProfilePage;
