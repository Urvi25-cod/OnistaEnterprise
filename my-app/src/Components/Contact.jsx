

import React from 'react';
import contact1 from "../image/contact1.svg";
import contact2 from "../image/contact2.svg";
import contact3 from "../image/contact3.svg";
import { Link } from 'react-router-dom';


const Contact = () => {
  return (
    <>
 
    <div className="max-w-7xl mx-auto bg-white px-4 md:px-12 py-12">
    <div className="mb-6 text-sm">
        <Link to={'/'}><span
          style={{ fontFamily: "Times New Roman" }}
          className="text-gray-800 hover:underline"
        >
          Home
        </span></Link>
        /{" "}
        <span
          style={{ fontFamily: "Times New Roman" }}
          className="text-gray-800"
        >
          Contact
        </span>
      </div>


      <h2 style={{ fontFamily: "Times New Roman" }} className="text-center text-xl md:text-2xl tracking-widest mb-8">Contact Us!</h2>

      {/* Icons */}
      <div className="flex justify-center gap-6 mb-10">
        <div className="bg-black text-white p-4 rounded-full">
        <img
        src={contact1}
        className='w-5 h-5'
      />
        </div>
        <div className="bg-black text-white p-4 rounded-full">
        <img
        src={contact2}
        className='w-5 h-5'
      />
        </div>
        <div className="bg-black text-white p-4 rounded-full">
        <img
        src={contact3}
        className='w-5 h-5'
      />
        </div>
      </div>

      {/* Form */}
      <form className="max-w-3xl mx-auto space-y-6">
        <div  style={{ fontFamily: "Times New Roman" }}  className="flex flex-col md:flex-row gap-4 rounded-lg">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 px-4 py-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-2"
          />
        </div>

        <textarea
          placeholder="Message"
          rows="6"
          style={{ fontFamily: "Times New Roman" }} 
          className="w-full border border-gray-300 px-4 py-2"
        ></textarea>

        <button
          type="submit"
          style={{ fontFamily: "Times New Roman" }} 
          className="w-full bg-black text-white py-2 uppercase tracking-wider"
        >
          Send Message
        </button>
      </form>

      {/* Map */}
      <div className="mt-10 rounded-lg overflow-hidden shadow-md">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.365019974011!2d72.86830851493589!3d21.256082685891077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be053206eea9b2b%3A0xa43afda804407bbc!2sHans%20Society!5e0!3m2!1sen!2sin!4v1683109925092!5m2!1sen!2sin"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
          className="w-full"
        ></iframe>
      </div>
    </div>
    </>
  );
};

export default Contact;
