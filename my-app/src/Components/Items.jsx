import React, { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { Link} from 'react-router-dom';
// import Cart from "./Cart";
import Cart from "./Cart";


import pp1 from "../image/pp1.svg";
import p2 from "../image/p3.svg";
import p3 from "../image/p2.svg";
import p4 from "../image/p4.svg";


const artworks = [
    {
      id: 1,
      image: pp1,
      title: "PORTLAND",
      description: "Discover our featured art collection.",
      price: "₹1200.00",
    },
    {
      id: 2,
      image: p2,
      title: "STORMY LANDSCAPE",
      description: "Dramatic cloudscape over rural setting.",
      price: "₹1500.00",
    },
    {
      id: 3,
      image: p3,
      title: "PORTRAIT",
      description: "Elegant framed portrait in soft tones.",
      price: "₹1800.00",
    },
    {
      id: 4,
      image: p4,
      title: "SUNSET PALMS",
      description: "Tropical sunset with palm trees.",
      price: "₹2000.00",
    },
  ];

  

const Items  = () => {

  const [isCartOpen, setIsCartOpen] = useState(false)
  const toggleCart = () => setIsCartOpen(!isCartOpen)

 
  return (
    <>

<div
        style={{ fontFamily: "Times New Roman" }}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xlr">
          FEATURED COLLECTION
          </h2>
          <p className="text-xs sm:text-sm mt-2">
            Discover our featured art collection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {artworks.map((artwork) => (
    <div key={artwork.id} className="relative rounded-lg overflow-hidden group">
      <div className="aspect-square relative">
        {/* Clicking the image navigates to Singleproduct */}
        <Link to="/Singleproduct">
          <img
            src={artwork.image || "/placeholder.svg"}
            alt={artwork.title || "Artwork"}
            className="w-full h-full object-cover"
          />
        </Link>

        {/* Cart icon - opens Cart page */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          <button
            className="bg-black text-white p-2 rounded-full hover:bg-gray-800 cursor-pointer" onClick={toggleCart}
          >
            <ShoppingBag size={18} />
          </button>
        </div>

        {/* Info - visible always on mobile, on hover in desktop */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white 
          translate-y-0 md:translate-y-full md:group-hover:translate-y-0 
          transition-transform duration-300 ease-in-out">
          <h3 className="font-medium text-lg">{artwork.title}</h3>
          <p className="text-xs">{artwork.description}</p>
          <p className="mt-2 font-semibold">{artwork.price}</p>
        </div>
      </div>
    </div>
  ))}
</div>

        <div className="flex justify-center items-center  mt-10">
      <button
        style={{ fontFamily: "Times New Roman" }}
        className="bg-black text-white px-6 py-2  rounded hover:bg-gray-800 transition cursor-pointer"
      >
        Explore New Arrival
      </button>
    </div>
      </div>
      {isCartOpen && (
              <Cart toggleCart={toggleCart} />
            )}
    </>
  );
};

export default Items ;

