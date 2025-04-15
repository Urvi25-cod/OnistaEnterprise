

// import React, { useState } from "react";

// export default function ContactForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ name, email, message }); // Log form data to the console
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Message</label>
//             <textarea
//               placeholder="Enter your message"
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               rows={4}
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-200"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => setCount(count + 1);
//   const handleDecrement = () => setCount(count - 1);
//   const handleReset = () => setCount(0);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// }

// export default Counter;

import React, { useState } from 'react';

function Counter1() {
  const [count, setCount] = useState(0);

  const handleChangeValue = (event) => {
    setCount(parseInt(event.target.value) || 0); // Parse input value or default to 0
  };

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">Count: {count}</h1>
      <input
        type="number"
        placeholder="Set value"
        value={count}
        onChange={handleChangeValue}
        className="border border-gray-300 rounded-md p-2 mb-4 w-full"
      />
      {/* Buttons in vertical layout */}
      <div className="flex w-120 flex-col space-y-3 text-white">
        <button
          onClick={() => setCount(count + 1)}
          className="p-3 bg-orange-600 rounded-xl cursor-pointer"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="p-3 w-120 bg-orange-600 rounded-xl cursor-pointer"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          className="p-2 w-120 bg-orange-600 rounded-xl cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );ss
}

export default Counter1;


