import { useState } from "react";
import { X } from "lucide-react";
import img from "../image/pro2.svg";



export default function Cart({ toggleCart }) {
  const [isOpen, setIsOpen] = useState(true);
  
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Geometric Harmony Wall Art",
      size: 'Medium (24" × 36") (Black)',
      price: 120000.0,
      quantity: 1,
      image: img,
    },
    {
      id: 2,
      name: "Geometric Harmony Wall Art",
      size: 'Medium (24" × 36") (Black)',
      price: 120000.0,
      quantity: 1,
      image: img,
    },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Format price in Indian currency format (with commas)
  const formatPrice = (price) => {
    return price.toLocaleString("en-IN", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal;

  if (!isOpen) return null;

  return (
    <>

      <div
        style={{ fontFamily: "Times New Roman" }}
        className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-lg flex flex-col h-full z-50"
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-lg font-normal tracking-wide ">
            Your Cart ({cartItems.length})
          </h2>
          <button
            onClick={toggleCart}
            className="p-1 hover:bg-gray-100 rounded-full cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-8">
          {cartItems.map((item) => (
            <div key={item.id} className="flex space-x-6 pb-8 cursor-pointer">
              <div className="h-32 w-32 flex-shrink-0 border border-gray-200 p-1">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="object-cover"
                />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="font-normal text-lg">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.size}</p>
                <div className="flex items-center mt-3">
                  <div className="flex items-center border border-black">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 border-r border-black cursor-pointer"
                    >
                      -
                    </button>
                    <span className="px-4 py-1">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 border-l border-black cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="font-normal mt-2">₹{formatPrice(item.price)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t px-6 py-4 space-y-3">
          <div className="flex justify-between py-1">
            <span className="font-normal">Subtotal</span>
            <span className="font-normal">₹{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between py-1">
            <span className="font-normal">Shipping</span>
            <span className="text-gray-500 font-normal">
              Calculated at checkout
            </span>
          </div>
          <div className="border-t my-2"></div>
          <div className="flex justify-between py-1 font-normal">
            <span>Total</span>
            <span>₹{formatPrice(total)}</span>
          </div>
          <button className="w-full bg-black text-white py-3 font-normal mt-4 hover:bg-gray-800 transition cursor-pointer">
            Check Out
          </button>
        </div>
      </div>
    </>
  );
}
