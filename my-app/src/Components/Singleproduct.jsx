
// import { useState } from "react";
// import p1 from "../image/p1.svg";
// import p2 from "../image/p2.svg";
// import pro1 from "../image/pro1.svg";
// // import pro2 from "../image/pro2.svg";
// import { Minus, Plus, Truck, ShieldCheck, Info, Star, X } from "lucide-react";
// import { Heart, ShoppingBag } from "lucide-react";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";

// export default function ProductDetail() {
//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState('Medium (24" x 36")');
//   const [selectedFrame, setSelectedFrame] = useState("Gold");
//   const [activeTab, setActiveTab] = useState("Description");
//   const [showSpecDetails, setShowSpecDetails] = useState(false);
//   const [activeSpec, setActiveSpec] = useState("");
//   const [showReviewModal, setShowReviewModal] = useState(false);
//   const [reviewRating, setReviewRating] = useState(5);
//   const [reviewTitle, setReviewTitle] = useState("");
//   const [reviewContent, setReviewContent] = useState("");
//   const [reviewName, setReviewName] = useState("");
//   const [reviews, setReviews] = useState([
//     {
//       id: 1,
//       name: "PRIYA M.",
//       title: "STUNNING ADDITION TO MY LIVING ROOM",
//       content:
//         "This piece exceeded my expectations. The craftsmanship is exceptional, and it has become the focal point of my living room. Everyone who visits comments on it!",
//       rating: 5,
//       date: "2023-04-15",
//     },
//     {
//       id: 2,
//       name: "PRIYA M.",
//       title: "STUNNING ADDITION TO MY LIVING ROOM",
//       content:
//         "This piece exceeded my expectations. The craftsmanship is exceptional, and it has become the focal point of my living room. Everyone who visits comments on it!",
//       rating: 5,
//       date: "2023-04-15",
//     },
//   ]);
//   const [basePrice, setBasePrice] = useState(120000.0);

//   const incrementQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decrementQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleSpecClick = (spec) => {
//     if (activeSpec === spec) {
//       setActiveSpec("");
//       setShowSpecDetails(false);
//     } else {
//       setActiveSpec(spec);
//       setShowSpecDetails(true);
//     }
//   };

//   const openReviewModal = () => {
//     setShowReviewModal(true);
//   };

//   const closeReviewModal = () => {
//     setShowReviewModal(false);
//     // Reset form
//     setReviewRating(5);
//     setReviewTitle("");
//     setReviewContent("");
//     setReviewName("");
//   };

//   const handleSubmitReview = (e) => {
//     e.preventDefault();

//     // Create new review
//     const newReview = {
//       id: reviews.length + 1,
//       name: reviewName.toUpperCase(),
//       title: reviewTitle.toUpperCase(),
//       content: reviewContent,
//       rating: reviewRating,
//       date: new Date().toISOString().split("T")[0],
//     };

//     // Add to reviews
//     setReviews([newReview, ...reviews]);

//     // Close modal and reset form
//     closeReviewModal();
//   };

//   const specifications = {
//     MATERIALS: "Sustainable wood, brass accents",
//     DIMENSIONS: {
//       Small: '18" x 24"',
//       Medium: '24" x 36"',
//       Large: '36" x 48"',
//     },
//     WEIGHT: "2.5 kg (Medium size)",
//     ORIGIN: "Handcrafted in India",
//     CARE_INSTRUCTIONS: "Dust with a soft, dry cloth",
//     INCLUDES: "Mounting hardware, care guide",
//   };

//   const artworks = [
//     {
//       id: 1,
//       title: "Abstract Harmony",
//       description: "Modern abstract painting with vibrant colors",
//       price: "$299",
//       image: "/placeholder.svg?height=400&width=400"
//     },
//     {
//       id: 2,
//       title: "Urban Landscape",
//       description: "Contemporary cityscape at sunset",
//       price: "$349",
//       image: "/placeholder.svg?height=400&width=400"
//     },
//     {
//       id: 3,
//       title: "Serene Waters",
//       description: "Calming ocean scene with soft blues",
//       price: "$279",
//       image: "/placeholder.svg?height=400&width=400"
//     },
//     {
//       id: 4,
//       title: "Forest Dreams",
//       description: "Mystical woodland scene with morning fog",
//       price: "$319",
//       image: "/placeholder.svg?height=400&width=400"
//     }
//   ]

//   return (
//     <>
//       <Navbar bgColor="" textColor="text-black"/>
//     <div
//       style={{ fontFamily: "Times New Roman" }}
//       className="max-w-7xl mx-auto px-4 py-8"
//     >
//       {/* Breadcrumb */}
//       <div className="text-sm mb-8">
//         <span className="text-gray-800">
//           <Link to="/" className="hover:underline">
//             Home
//           </Link>{" "}
//           / Portland
//         </span>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//         {/* Product Images */}
//         <div className="space-y-6">
//           {/* Main Image */}
//           <div>
//             <div className=" p-0">
//               <div className="bg-blue-50 ">
//                 <div className="bg-white p-4 flex justify-center">
//                   <img
//                     src={p1 || "/placeholder.svg"}
//                     alt="Geometric Harmony Wall Art"
//                     className="mx-auto"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Thumbnails */}
//           <div className="flex space-x-4 lg:mx-30 ">
//             {[1, 2, 3].map((index) => (
//               <div
//                 key={index}
//                 className="hover:border cursor-pointer w-24 h-24 "
//               >
//                 <div className="bg-blue-50 h-full w-full flex items-center justify-center ">
//                   <div className="bg-white p-1 w-full h-full flex items-center justify-center">
//                     <img
//                       src={p2 || "/placeholder.svg"}
//                       alt={`Thumbnail ${index}`}
//                       className="object-contain "
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Product Details */}
//         <div className="space-y-6">
//           {/* Badge */}
//           <div className="bg-green-500 text-white text-xs font-medium px-4 py-1 rounded-full inline-block uppercase tracking-wide">
//             Best Selling
//           </div>

//           {/* Title and Rating */}
//           <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
//             <h1 className="text-xl sm:text-2xl font-normal text-gray-900 tracking-wide">
//               Geometric Harmony Wall Art
//             </h1>
//             <span className="text-gray-600 text-sm mt-1 sm:mt-0">
//               4.0 (24 reviews)
//             </span>
//           </div>

//           {/* Price */}
//           <div className="flex flex-wrap items-center gap-2">
//             <span className="text-xl font-normal">
//               ₹{(basePrice * quantity).toFixed(2)}
//             </span>
//             <span className="text-sm text-gray-500 line-through">
//               ₹15,000save
//             </span>
//             <span className="text-sm text-green-600">₹3,000 (19%)</span>
//           </div>

//           {/* Size Selection */}
//           <div>
//             <h2 className="text-base sm:text-lg font-semibold text-gray-900 uppercase tracking-wide mb-3">
//               Size
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//               {[
//                 'Small (18" x 24")',
//                 'Medium (24" x 36")',
//                 'Large (36" x 48")',
//               ].map((size) => (
//                 <button
//                   key={size}
//                   type="button"
//                   onClick={() => setSelectedSize(size)}
//                   className={`w-full px-4 py-2 text-sm sm:text-base font-medium rounded-md transition-colors duration-200
//           ${
//             selectedSize === size
//               ? "bg-black text-white"
//               : "bg-white text-gray-900 border border-gray-300 hover:bg-gray-100"
//           }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Frame Selection */}
//           <div>
//             <h2 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-3">
//               Frame
//             </h2>
//             <div className="grid grid-cols-3  sm:gap-3 md:w-100">
//               {["Black", "Gold", "Silver"].map((frame) => (
//                 <button
//                   key={frame}
//                   type="button"
//                   className={`
//                     ${
//                       selectedFrame === frame
//                         ? "bg-black text-white"
//                         : "bg-white text-gray-900 border border-gray-300"
//                     }
//                      py-2  text-lg font-normal rounded focus:outline-none
//                   `}
//                   onClick={() => setSelectedFrame(frame)}
//                 >
//                   {frame}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Quantity */}
//           <div>
//             <h2 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-3">
//               Quantity
//             </h2>
//             <div className="flex">
//               <button
//                 type="button"
//                 className="border border-black rounded-l p-2 w-12 flex items-center justify-center"
//                 onClick={decrementQuantity}
//               >
//                 <Minus className="h-4 w-4" />
//               </button>
//               <div className="border-t border-b border-black w-12 flex items-center justify-center">
//                 {quantity}
//               </div>
//               <button
//                 type="button"
//                 className="border border-black rounded-r p-2 w-12 flex items-center justify-center"
//                 onClick={incrementQuantity}
//               >
//                 <Plus className="h-4 w-4" />
//               </button>
//             </div>
//           </div>

//           {/* Add to Cart Button */}
//         <Link to={'/Cart'}> <button
//             type="button"
//             className="w-full bg-black text-white py-3 px-6 rounded focus:outline-none hover:bg-gray-800 text-center"
//           >
//             Add to Cart
//           </button></Link>

//           {/* Shipping and Warranty */}
//           <div className="flex justify-between pt-4">
//             <div className="flex items-center">
//               <Truck className="h-5 w-5 mr-2" />
//               <span className="text-base">Free Shipping</span>
//             </div>
//             <div className="flex items-center">
//               <ShieldCheck className="h-5 w-5 mr-2" />
//               <span className="text-base">2-Year Warranty</span>
//             </div>
//           </div>

//           {/* Tabs */}

//           <div className="flex flex-col sm:flex-row border border-gray-300 items-stretch sm:items-center justify-center p-2 sm:p-3 bg-gray-200 rounded-xl gap-2 sm:gap-3">
//             {["Description", "Details", "Review (24)"].map((tab) => (
//               <button
//                 key={tab}
//                 className={`w-full sm:w-auto px-4 py-3 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-colors duration-200
//         ${
//           activeTab === tab
//             ? "bg-black text-white"
//             : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
//         }`}
//                 onClick={() => {
//                   setActiveTab(tab);
//                   // You can enable this if you want modal to open on tab click
//                   // if (tab === "Review (24)") openReviewModal();
//                 }}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>

//           <div className="bg-gray-50 rounded-lg overflow-hidden mt-8">
//             <div className="p-8">
//               {activeTab === "Description" && (
//                 <div className="space-y-8 text-gray-700 text-base leading-relaxed">
//                   <p>
//                     Elevate your space with our Geometric Harmony Wall Art, a
//                     stunning piece that combines modern design with traditional
//                     craftsmanship. This handcrafted wall art features intricate
//                     geometric patterns inspired by ancient Indian motifs,
//                     reimagined for the contemporary home.
//                   </p>
//                   <p>
//                     Each piece is meticulously crafted by our skilled artisans
//                     using sustainable materials. The combination of wood and
//                     metal elements creates a beautiful interplay of textures and
//                     dimensions, adding depth and character to any wall.
//                   </p>
//                   <p>
//                     The Geometric Harmony Wall Art is more than just a
//                     decorative piece; it's a conversation starter and a
//                     statement of refined taste. Its versatile design complements
//                     various interior styles, from minimalist modern to eclectic
//                     bohemian.
//                   </p>
//                 </div>
//               )}
//               {activeTab === "Details" && (
//                 <div className="space-y-6 text-gray-700 text-base">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
//                     {Object.entries(specifications).map(([key, value]) => (
//                       <div
//                         key={key}
//                         className={`border border-gray-200 rounded-lg p-6 cursor-pointer transition-all duration-300 ${
//                           activeSpec === key
//                             ? "bg-gray-100"
//                             : "hover:bg-gray-50"
//                         }`}
//                         onClick={() => handleSpecClick(key)}
//                       >
//                         <div className="flex justify-between items-center mb-2">
//                           <h3 className="text-lg font-medium">
//                             {key.replace("_", " ")}
//                           </h3>
//                           <Info className="h-5 w-5 text-gray-500" />
//                         </div>

//                         {activeSpec === key && showSpecDetails ? (
//                           <div className="mt-4 text-gray-700 animate-fadeIn">
//                             {key === "DIMENSIONS" ? (
//                               <ul className="space-y-2">
//                                 {Object.entries(value).map(
//                                   ([size, dimension]) => (
//                                     <li
//                                       key={size}
//                                       className="flex justify-between"
//                                     >
//                                       <span>{size}:</span>
//                                       <span>{dimension}</span>
//                                     </li>
//                                   )
//                                 )}
//                               </ul>
//                             ) : (
//                               <p>{value}</p>
//                             )}
//                           </div>
//                         ) : (
//                           <p className="text-gray-500 truncate">
//                             {key === "DIMENSIONS"
//                               ? `${value.Small}, ${value.Medium}, ${value.Large}`
//                               : value}
//                           </p>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//               {activeTab === "Review (24)" && (
//                 <div className="space-y-8 text-gray-700 text-base">
//                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
//                     <h2 className="text-xl sm:text-2xl font-semibold text-center sm:text-left">
//                       CUSTOMER REVIEWS
//                     </h2>
//                     <button
//                       onClick={openReviewModal}
//                       className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-gray-800 transition-colors w-full sm:w-auto text-sm sm:text-base"
//                     >
//                       Write Review
//                     </button>
//                   </div>

//                   <div className="space-y-8">
//                     {reviews.map((review) => (
//                       <div
//                         key={review.id}
//                         className="border-b border-gray-200 pb-8"
//                       >
//                         <div className="flex justify-between items-start">
//                           <h3 className="text-xl font-semibold">
//                             {review.title}
//                           </h3>
//                           <span className="text-lg font-medium">
//                             {review.name}
//                           </span>
//                         </div>
//                         <div className="flex my-2">
//                           {[...Array(5)].map((_, i) => (
//                             <Star
//                               key={i}
//                               className={`h-5 w-5 ${
//                                 i < review.rating
//                                   ? "fill-black text-black"
//                                   : "text-gray-300"
//                               }`}
//                             />
//                           ))}
//                         </div>
//                         <p className="mt-2 text-gray-700">{review.content}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Review Modal */}
//       {showReviewModal && (
//         <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
//           <div className="border bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="flex justify-between items-center p-6 border-b">
//               <h2 className="text-2xl font-semibold">Write a Review</h2>
//               <button
//                 onClick={closeReviewModal}
//                 className="text-gray-500 hover:text-black"
//               >
//                 <X className="h-6 w-6" />
//                 <span className="sr-only">Close</span>
//               </button>
//             </div>

//             <form onSubmit={handleSubmitReview} className="p-6 space-y-6">
//               {/* Rating */}
//               <div>
//                 <label className="block text-lg font-medium mb-2">Rating</label>
//                 <div className="flex space-x-2">
//                   {[1, 2, 3, 4, 5].map((rating) => (
//                     <button
//                       key={rating}
//                       type="button"
//                       onClick={() => setReviewRating(rating)}
//                       className="focus:outline-none"
//                     >
//                       <Star
//                         className={`h-8 w-8 ${
//                           rating <= reviewRating
//                             ? "fill-black text-black"
//                             : "text-gray-300"
//                         }`}
//                       />
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Review Title */}
//               <div>
//                 <label
//                   htmlFor="review-title"
//                   className="block text-lg font-medium mb-2"
//                 >
//                   Review Title
//                 </label>
//                 <input
//                   type="text"
//                   id="review-title"
//                   value={reviewTitle}
//                   onChange={(e) => setReviewTitle(e.target.value)}
//                   className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-black"
//                   placeholder="Summarize your experience"
//                   required
//                 />
//               </div>

//               {/* Review Content */}
//               <div>
//                 <label
//                   htmlFor="review-content"
//                   className="block text-lg font-medium mb-2"
//                 >
//                   Review
//                 </label>
//                 <textarea
//                   id="review-content"
//                   value={reviewContent}
//                   onChange={(e) => setReviewContent(e.target.value)}
//                   className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-black min-h-[150px]"
//                   placeholder="Share your experience with this product"
//                   required
//                 />
//               </div>

//               {/* Name */}
//               <div>
//                 <label
//                   htmlFor="review-name"
//                   className="block text-lg font-medium mb-2"
//                 >
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="review-name"
//                   value={reviewName}
//                   onChange={(e) => setReviewName(e.target.value)}
//                   className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-black"
//                   placeholder="Your name"
//                   required
//                 />
//               </div>

//               {/* Submit Button */}
//               <div className="flex justify-end">
//                 <button
//                   type="submit"
//                   className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors"
//                 >
//                   Submit Review
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//       {/* You may also like product section  */}
//       <div
//         style={{ fontFamily: "Times New Roman" }}
//         className="container mx-auto px-4 py-16"
//       >
//         <div className="text-center mb-6 sm:mb-8">
//           <h2 className="text-xl sm:text-2xl md:text-3xl font-serif tracking-wider">
//             YOU MAY ALSO LIKE
//           </h2>
//           <p className="text-xs sm:text-sm mt-2">
//             Discover our featured art collection.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//       {artworks.map(artwork => (
//         <div
//           key={artwork.id}
//           className="relative rounded-lg overflow-hidden group"
//         >
//           <div className="aspect-square relative">
//             <img
//               src={pro1|| "/placeholder.svg?height=400&width=400"}
//               alt={artwork.title || "Artwork"}
//               fill
//               className="object-cover"
//             />

//             {/* Icons - always visible on mobile, hover on desktop */}
//             <div className="absolute top-4 right-4 flex flex-col gap-2 sm:opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
//               <Link href="/">
//                 <button className="bg-black text-white p-2 rounded-full hover:bg-gray-800 cursor-pointer">
//                   <ShoppingBag size={18} />
//                 </button>
//               </Link>
//               <Link href="/">
//                 <button className="bg-black text-white p-2 rounded-full hover:bg-gray-800 cursor-pointer">
//                   <Heart size={18} />
//                 </button>
//               </Link>
//             </div>

//             {/* Description overlay - always visible on mobile, hover on desktop */}
//             <div
//               className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white 
//                           sm:translate-y-0 
//                           md:transform md:translate-y-full md:group-hover:translate-y-0 
//                           transition-transform duration-300 ease-in-out"
//             >
//               <h3 className="font-medium text-lg">{artwork.title}</h3>
//               <p className="text-xs">{artwork.description}</p>
//               <p className="mt-2 font-semibold">{artwork.price}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//       </div>
//     </div>
//     </>
//   );
// }


import { useState } from "react"
import p1 from "../image/p1.svg"
import NewsImg from "../image/News.svg";
import pro1 from "../image/pro1.svg"
import pro2 from "../image/pro2.svg"
import { Minus, Plus, Truck, ShieldCheck, Info, Star, X } from "lucide-react"
import { ShoppingBag } from "lucide-react"
import { Link } from "react-router-dom"
import Cart from "./Cart";


export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedSize, setSelectedSize] = useState('Medium (24" x 36")')
  const [selectedFrame, setSelectedFrame] = useState("Gold")
  const [activeTab, setActiveTab] = useState("Description")
  const [showSpecDetails, setShowSpecDetails] = useState(false)
  const [activeSpec, setActiveSpec] = useState("")
  const [showReviewModal, setShowReviewModal] = useState(false)
  const [reviewRating, setReviewRating] = useState(5)
  const [reviewTitle, setReviewTitle] = useState("")
  const [reviewContent, setReviewContent] = useState("")
  const [reviewName, setReviewName] = useState("")

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "PRIYA M.",
      title: "STUNNING ADDITION TO MY LIVING ROOM",
      content:
        "This piece exceeded my expectations. The craftsmanship is exceptional, and it has become the focal point of my living room. Everyone who visits comments on it!",
      rating: 5,
      date: "2023-04-15"
    },
    {
      id: 2,
      name: "PRIYA M.",
      title: "STUNNING ADDITION TO MY LIVING ROOM",
      content:
        "This piece exceeded my expectations. The craftsmanship is exceptional, and it has become the focal point of my living room. Everyone who visits comments on it!",
      rating: 5,
      date: "2023-04-15"
    }
  ])
  const [basePrice, setBasePrice] = useState(120000.0)
  const [selectedImage, setSelectedImage] = useState(p1)
  
  const toggleCart = () => setIsCartOpen(!isCartOpen)


  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleSpecClick = spec => {
    if (activeSpec === spec) {
      setActiveSpec("")
      setShowSpecDetails(false)
    } else {
      setActiveSpec(spec)
      setShowSpecDetails(true)
    }
  }

  const openReviewModal = () => {
    setShowReviewModal(true)
  }

  const closeReviewModal = () => {
    setShowReviewModal(false)
    // Reset form
    setReviewRating(5)
    setReviewTitle("")
    setReviewContent("")
    setReviewName("")
  }

  const handleSubmitReview = e => {
    e.preventDefault()

    // Create new review
    const newReview = {
      id: reviews.length + 1,
      name: reviewName.toUpperCase(),
      title: reviewTitle.toUpperCase(),
      content: reviewContent,
      rating: reviewRating,
      date: new Date().toISOString().split("T")[0]
    }

    // Add to reviews
    setReviews([newReview, ...reviews])

    // Close modal and reset form
    closeReviewModal()
  }

  const specifications = {
    MATERIALS: "Sustainable wood, brass accents",
    DIMENSIONS: {
      Small: '18" x 24"',
      Medium: '24" x 36"',
      Large: '36" x 48"'
    },
    WEIGHT: "2.5 kg (Medium size)",
    ORIGIN: "Handcrafted in India",
    CARE_INSTRUCTIONS: "Dust with a soft, dry cloth",
    INCLUDES: "Mounting hardware, care guide"
  }

  const artworks = [
    {
      id: 1,
      title: "Abstract Harmony",
      description: "Modern abstract painting with vibrant colors",
      price: "$299",
      image: pro1
    },
    {
      id: 2,
      title: "Urban Landscape",
      description: "Contemporary cityscape at sunset",
      price: "$349",
      image: pro2
    },
    {
      id: 3,
      title: "Serene Waters",
      description: "Calming ocean scene with soft blues",
      price: "$279",
      image: pro1
    },
    {
      id: 4,
      title: "Forest Dreams",
      description: "Mystical woodland scene with morning fog",
      price: "$319",
      image: pro2
    }
  ]

  return (
    <>

      <div
        style={{ fontFamily: "Times New Roman" }}
        className="max-w-7xl mx-auto px-4 py-8"
      >
        {/* Breadcrumb */}
        <div className="text-sm mb-8">
          <span className="text-gray-800">
            <Link to="/" className="hover:underline">
              Home
            </Link>{" "}
            / Portland
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <div>
              <div className=" p-0">
                <div className="bg-blue-50 ">
                  <div className="bg-white p-4 flex justify-center">
                    <img
                      src={selectedImage}
                      alt="Geometric Harmony Wall Art"
                      className="mx-auto cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-4 lg:mx-30 rounded-2xl ">
              <div
                className="hover:border  cursor-pointer w-24 h-24 "
                onClick={() => setSelectedImage(p1)}
              >
                <div className="bg-blue-50 h-full w-full flex items-center justify-center ">
                  <div className="bg-white p-1 w-full h-full flex items-center justify-center">
                    <img
                      src={p1 || "/placeholder.svg"}
                      alt="Thumbnail 1"
                      className="object-contain "
                    />
                  </div>
                </div>
              </div>
              <div
                className="hover:border  cursor-pointer w-24 h-24 "
                onClick={() => setSelectedImage(NewsImg)}
              >
                <div className="bg-blue-50 h-full w-full flex items-center justify-center ">
                  <div className="bg-white p-1 w-full h-full flex items-center justify-center">
                    <img
                      src={NewsImg || "/placeholder.svg"}
                      alt="Thumbnail 2"
                      className="object-contain "
                    />
                  </div>
                </div>
              </div>
              <div
                className="hover:border cursor-pointer w-24 h-24 "
                onClick={() => setSelectedImage(p1)}
              >
                <div className="bg-blue-50 h-full w-full flex items-center justify-center ">
                  <div className="bg-white p-1 w-full h-full flex items-center justify-center">
                    <img
                      src={p1 || "/placeholder.svg"}
                      alt="Thumbnail 3"
                      className="object-contain "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="bg-green-500 text-white text-xs font-medium px-4 py-1 rounded-full inline-block uppercase tracking-wide">
              Best Selling
            </div>

            {/* Title and Rating */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
              <h1 className="text-xl sm:text-2xl font-normal text-gray-900 tracking-wide">
                Geometric Harmony Wall Art
              </h1>
              <span className="text-gray-600 text-sm mt-1 sm:mt-0">
                4.0 (24 reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xl font-normal">
                ₹{(basePrice * quantity).toFixed(2)}
              </span>
              <span className="text-sm text-gray-500 line-through">
                ₹15,000save
              </span>
              <span className="text-sm text-green-600">₹3,000 (19%)</span>
            </div>

            {/* Size Selection */}
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-gray-900 uppercase tracking-wide mb-3">
                Size
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  'Small (18" x 24")',
                  'Medium (24" x 36")',
                  'Large (36" x 48")'
                ].map(size => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`w-full px-4 py-2 text-sm sm:text-base font-medium rounded-md transition-colors duration-200 cursor-pointer
          ${selectedSize === size
                        ? "bg-black text-white"
                        : "bg-white text-gray-900 border border-gray-300 hover:bg-gray-100"
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Frame Selection */}
            <div>
              <h2 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-3">
                Frame
              </h2>
              <div className="grid grid-cols-3  sm:gap-3 md:w-100">
                {["Black", "Gold", "Silver"].map(frame => (
                  <button
                    key={frame}
                    type="button"
                    className={`
                    ${selectedFrame === frame
                        ? "bg-black text-white"
                        : "bg-white text-gray-900 border border-gray-300 cursor-pointer"
                      }
                     py-2  text-lg font-normal rounded focus:outline-none
                  `}
                    onClick={() => setSelectedFrame(frame)}
                  >
                    {frame}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h2 className="text-lg font-normal text-gray-900 uppercase tracking-wide mb-3">
                Quantity
              </h2>
              <div className="flex">
                <button
                  type="button"
                  className="border border-black rounded-l p-2 w-12 flex items-center justify-center cursor-pointer"
                  onClick={decrementQuantity}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <div className="border-t border-b border-black w-12 flex items-center justify-center">
                  {quantity}
                </div>
                <button
                  type="button"
                  className="border border-black rounded-r p-2 w-12 flex items-center justify-center cursor-pointer"
                  onClick={incrementQuantity}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              type="button" onClick={toggleCart}
              className="w-full bg-black text-white py-3 px-6 rounded focus:outline-none hover:bg-gray-800 text-center cursor-pointer"
            >
              Add to Cart
            </button>

            {/* Shipping and Warranty */}
            <div className="flex justify-between pt-4">
              <div className="flex items-center">
                <Truck className="h-10 w-10 mr-2" />
                <span
                  style={{ fontFamily: "Times New Roman" }}
                  className="text-xl "
                >
                  Free Shipping
                </span>
              </div>
              <div className="flex items-center">
                <ShieldCheck className="h-10 w-10 mr-2" />
                <span className="text-xl">2-Year Warranty</span>
              </div>
            </div>

            {/* Tabs */}

            <div className="flex flex-col sm:flex-row border border-gray-300 items-stretch sm:items-center  p-2 sm:p-3 bg-gray-100 rounded-xl gap-2 sm:gap-3">
              {["Description", "Details", "Review (24)"].map(tab => (
                <button
                  key={tab}
                  className={`w-full sm:w-auto px-4 py-3 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-colors duration-200 cursor-pointer
        ${activeTab === tab
                      ? "bg-black text-white"
                      : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100"
                    }`}
                  onClick={() => {
                    setActiveTab(tab)
                    // You can enable this if you want modal to open on tab click
                    // if (tab === "Review (24)") openReviewModal();
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden mt-8">
              <div className="p-8">
                {activeTab === "Description" && (
                  <div className="space-y-8 text-gray-700 text-base leading-relaxed">
                    <p>
                      Elevate your space with our Geometric Harmony Wall Art, a
                      stunning piece that combines modern design with traditional
                      craftsmanship. This handcrafted wall art features intricate
                      geometric patterns inspired by ancient Indian motifs,
                      reimagined for the contemporary home.
                    </p>
                    <p>
                      Each piece is meticulously crafted by our skilled artisans
                      using sustainable materials. The combination of wood and
                      metal elements creates a beautiful interplay of textures and
                      dimensions, adding depth and character to any wall.
                    </p>
                    <p>
                      The Geometric Harmony Wall Art is more than just a
                      decorative piece; it's a conversation starter and a
                      statement of refined taste. Its versatile design complements
                      various interior styles, from minimalist modern to eclectic
                      bohemian.
                    </p>
                  </div>
                )}
                {activeTab === "Details" && (
                  <div className="space-y-6 text-gray-700 text-base">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                      {Object.entries(specifications).map(([key, value]) => (
                        <div
                          key={key}
                          className={`border border-gray-200 rounded-lg p-6 cursor-pointer transition-all duration-300 ${activeSpec === key
                            ? "bg-gray-100"
                            : "hover:bg-gray-50"
                            }`}
                          onClick={() => handleSpecClick(key)}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-medium">
                              {key.replace("_", " ")}
                            </h3>
                            <Info className="h-5 w-5 text-gray-500" />
                          </div>

                          {activeSpec === key && showSpecDetails ? (
                            <div className="mt-4 text-gray-700 animate-fadeIn">
                              {key === "DIMENSIONS" ? (
                                <ul className="space-y-2">
                                  {Object.entries(value).map(
                                    ([size, dimension]) => (
                                      <li
                                        key={size}
                                        className="flex justify-between"
                                      >
                                        <span>{size}:</span>
                                        <span>{dimension}</span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              ) : (
                                <p>{value}</p>
                              )}
                            </div>
                          ) : (
                            <p className="text-gray-500 truncate">
                              {key === "DIMENSIONS"
                                ? `${value.Small}, ${value.Medium}, ${value.Large}`
                                : value}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {activeTab === "Review (24)" && (
                  <div className="space-y-8 text-gray-700 text-base">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
                      <h2 className="text-xl sm:text-xl font-semibold text-center sm:text-left">
                        CUSTOMER REVIEWS
                      </h2>
                      <button
                        onClick={openReviewModal}
                        className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-gray-800 transition-colors w-full sm:w-auto text-sm sm:text-base"
                      >
                        Write Review
                      </button>
                    </div>

                    <div className="space-y-8">
                      {reviews.map(review => (
                        <div
                          key={review.id}
                          className="border-b border-gray-200 pb-8"
                        >
                          <div className="flex justify-between items-start">
                            <h3 className="text-sm font-semibold">
                              {review.title}
                            </h3>
                            <span className="text-sm font-medium">
                              {review.name}
                            </span>
                          </div>
                          <div className="flex my-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < review.rating
                                  ? "fill-black text-black"
                                  : "text-gray-300"
                                  }`}
                              />
                            ))}
                          </div>
                          <p className="mt-2 text-gray-700">{review.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Review Modal */}
        {showReviewModal && (
          <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
            <div className="border bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-2xl font-semibold">Write a Review</h2>
                <button
                  onClick={closeReviewModal}
                  className="text-gray-500 hover:text-black"
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close</span>
                </button>
              </div>

              <form onSubmit={handleSubmitReview} className="p-6 space-y-6">
                {/* Rating */}
                <div>
                  <label className="block text-lg font-medium mb-2">Rating</label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map(rating => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => setReviewRating(rating)}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`h-8 w-8 ${rating <= reviewRating
                            ? "fill-black text-black"
                            : "text-gray-300"
                            }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Review Title */}
                <div>
                  <label
                    htmlFor="review-title"
                    className="block text-lg font-medium mb-2"
                  >
                    Review Title
                  </label>
                  <input
                    type="text"
                    id="review-title"
                    value={reviewTitle}
                    onChange={e => setReviewTitle(e.target.value)}
                    className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Summarize your experience"
                    required
                  />
                </div>

                {/* Review Content */}
                <div>
                  <label
                    htmlFor="review-content"
                    className="block text-lg font-medium mb-2"
                  >
                    Review
                  </label>
                  <textarea
                    id="review-content"
                    value={reviewContent}
                    onChange={e => setReviewContent(e.target.value)}
                    className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-black min-h-[150px]"
                    placeholder="Share your experience with this product"
                    required
                  />
                </div>

                {/* Name */}
                <div>
                  <label
                    htmlFor="review-name"
                    className="block text-lg font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="review-name"
                    value={reviewName}
                    onChange={e => setReviewName(e.target.value)}
                    className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Your name"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {/* You may also like product section  */}
        <div
          style={{ fontFamily: "Times New Roman" }}
          className="container mx-auto px-4 py-16"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif tracking-wider">
              YOU MAY ALSO LIKE
            </h2>
            <p className="text-xs sm:text-sm mt-2">
              Discover our featured art collection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {artworks.map(artwork => (
              <div
                key={artwork.id}
                className="relative rounded-lg overflow-hidden group cursor-pointer"
              >
                <div className="aspect-square relative">
                  <img
                    src={pro1}
                    alt={artwork.title || "Artwork"}
                    fill
                    className="object-cover"
                  />

                  {/* Icons - always visible on mobile, hover on desktop */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 sm:opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    <Link href="/">
                      <button className="bg-black text-white p-2 rounded-full hover:bg-gray-800 cursor-pointer">
                        <ShoppingBag size={18} />
                      </button>
                    </Link>
                  </div>

                  {/* Description overlay - always visible on mobile, hover on desktop */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white 
                          sm:translate-y-0 
                          md:transform md:translate-y-full md:group-hover:translate-y-0 
                          transition-transform duration-300 ease-in-out"
                  >
                    <h3 className="font-medium text-lg">{artwork.title}</h3>
                    <p className="text-xs">{artwork.description}</p>
                    <p className="mt-2 font-semibold">{artwork.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isCartOpen && (
        <Cart toggleCart={toggleCart} />
      )}
    </>
  )
}
