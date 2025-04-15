import React from "react";
import Profile from "../image/Profile.svg";
import checklogo1 from "../image/checklogo1.svg";
import checklogo2 from "../image/checklogo2.svg";

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Shipping Info */}
        <div className="lg:col-span-2">
          <p style={{ fontFamily: "Times New Roman" }} className="text-sm text-gray-500 mb-6 cursor-pointer">&larr; Continue Shopping</p>
          <h2 style={{ fontFamily: "Times New Roman" }} className="text-2xl tracking-widest mb-6">Shipping Information</h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input style={{ fontFamily: "Times New Roman" }} type="text" placeholder="First Name" className="border border-gray-300 rounded px-4 py-2 w-full outline-none"/>
            <input style={{ fontFamily: "Times New Roman" }} type="text" placeholder="Last Name" className="border border-gray-300 rounded px-4 py-2 w-full outline-none" />
            <input style={{ fontFamily: "Times New Roman" }} type="email" placeholder="Email Address" className="border border-gray-300 rounded px-4 py-2 w-full outline-none" />
            <input style={{ fontFamily: "Times New Roman" }} type="tel" placeholder="Phone Number" className="border border-gray-300 rounded px-4 py-2 w-full outline-none" />
            <input style={{ fontFamily: "Times New Roman" }} type="text" placeholder="Street Address" className="border border-gray-300 rounded px-4 py-2 w-full outline-none" />
            <input style={{ fontFamily: "Times New Roman" }} type="text" placeholder="City" className="border border-gray-300 rounded px-4 py-2 w-full outline-none" />
            <select style={{ fontFamily: "Times New Roman" }} className="border border-gray-300 rounded px-4 py-2 w-full outline-none">
              <option value="">State</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Delhi">Delhi</option>
            </select>
            <input style={{ fontFamily: "Times New Roman" }} type="text" placeholder="PIN Code" className="border border-gray-300 rounded px-4 py-2 w-full outline-none" />
            <select style={{ fontFamily: "Times New Roman" }} className="border border-gray-300 rounded px-4 py-2 w-full outline-none md:col-span-2">
              <option value="">Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
          </form>
        </div>

        {/* Order Summary */}
        <div className="pt-10 lg:pt-10 lg:pl-10">
          <h2 style={{ fontFamily: "Times New Roman" }} className="text-2xl tracking-widest mb-6">Order Summary</h2>

          {[1, 2].map((_, i) => (
            <div key={i} className="flex items-start gap-4 mb-6">
              <img
                src={Profile}
                alt="product"
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h3 style={{ fontFamily: "Times New Roman" }} className="font-medium text-lg">Geometric Harmony Wall Art</h3>
                <p style={{ fontFamily: "Times New Roman" }} className="text-lg text-gray-500">Medium (24" x 36") | Black</p>
                <p style={{ fontFamily: "Times New Roman" }} className="text-lg text-gray-500">Qty: 1</p>
                <p style={{ fontFamily: "Times New Roman" }} className="text-base mt-1 font-medium">₹12,999
                </p>
              </div>
            </div>
          ))}

          <div style={{ fontFamily: "Times New Roman" }}  className="text-lg text-gray-600  pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹30,997</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (18% GST)</span>
              <span>₹5,579</span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2">
              <span>Total</span>
              <span>₹30,997</span>
            </div>
          </div>

          <button style={{ fontFamily: "Times New Roman" }} className="mt-6 w-full bg-black text-white py-3 text-lg tracking-widest rounded">
            Payment Now
          </button>

          <div style={{ fontFamily: "Times New Roman" }}  className="space-y-2 items-center gap-4 text-lg mt-6">
            <div className="flex items-center gap-2">
            <img
                src={checklogo1}
                alt="product"
                className="h-10"
              /> Free Shipping
            </div>
            <div className="flex items-center gap-2">
            <img
                src={checklogo2}
                alt="product"
                className="h-8"
              /> 2-Year Warranty
            </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CheckoutPage;
