// import { ShoppingBag } from "lucide-react";
// import { useState, useEffect } from "react";
// import pro1 from "../image/pro1.svg";
// import pro2 from "../image/pro2.svg";
// import { Link } from "react-router-dom";


// export default function ProductListing() {
//   // Sample product data
//   const products = [
//     {
//       id: 1,
//       name: "PORTLAND",
//       description: "Discover our featured art collection.",
//       price: 1200,
//       category: "Modern",
//       material: "Canvas",
//       size: 'Medium (12-24")',
//       image: pro1,
//     },
//     {
//       id: 2,
//       name: "AURORA",
//       description: "Abstract painting with vibrant colors.",
//       price: 1500,
//       category: "Abstract",
//       material: "Canvas",
//       size: 'Large (24-36")',
//       image: pro2,
//     },
//     {
//       id: 3,
//       name: "HERITAGE",
//       description: "Traditional artwork with cultural elements.",
//       price: 2200,
//       category: "Traditional",
//       material: "Wood",
//       size: 'Extra Large (Over 36")',
//       image: pro1,
//     },
//     {
//       id: 4,
//       name: "FUSION",
//       description: "Modern art with mixed media elements.",
//       price: 950,
//       category: "Modern",
//       material: "Mixed Media",
//       size: 'Small (Under 12")',
//       image: pro2,
//     },
//     {
//       id: 5,
//       name: "ESSENCE",
//       description: "Cultural artwork with traditional techniques.",
//       price: 1800,
//       category: "Cultural",
//       material: "Wood",
//       size: 'Medium (12-24")',
//       image: pro1,
//     },
//     {
//       id: 6,
//       name: "METALLIC",
//       description: "Contemporary sculpture with metallic finish.",
//       price: 2400,
//       category: "Modern",
//       material: "Metal",
//       size: 'Large (24-36")',
//       image: pro2,
//     },
//   ];

//   // Filter states
//   const [priceRange, setPriceRange] = useState(2400);
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [selectedMaterials, setSelectedMaterials] = useState([]);
//   const [selectedSizes, setSelectedSizes] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState(products);

//   // Categories, materials, and sizes arrays
//   const categories = ["Modern", "Abstract", "Traditional", "Cultural"];
//   const materials = ["Wood", "Metal", "Canvas", "Mixed Media"];
//   const sizes = [
//     "All Sizes",
//     'Small (Under 12")',
//     'Medium (12-24")',
//     'Large (24-36")',
//     'Extra Large (Over 36")',
//   ];

//   // Handle checkbox changes
//   const handleCategoryChange = (category) => {
//     setSelectedCategories((prev) =>
//       prev.includes(category)
//         ? prev.filter((c) => c !== category)
//         : [...prev, category]
//     );
//   };

//   const handleMaterialChange = (material) => {
//     setSelectedMaterials((prev) =>
//       prev.includes(material)
//         ? prev.filter((m) => m !== material)
//         : [...prev, material]
//     );
//   };

//   const handleSizeChange = (size) => {
//     // If "All Sizes" is selected, clear other selections
//     if (size === "All Sizes") {
//       setSelectedSizes((prev) =>
//         prev.includes("All Sizes") ? [] : ["All Sizes"]
//       );
//       return;
//     }

//     // If selecting a specific size, remove "All Sizes" if present
//     setSelectedSizes((prev) => {
//       const newSizes = prev.filter((s) => s !== "All Sizes");
//       return newSizes.includes(size)
//         ? newSizes.filter((s) => s !== size)
//         : [...newSizes, size];
//     });
//   };

//   // Apply filters whenever filter states change
//   useEffect(() => {
//     let result = products;

//     // Filter by price
//     result = result.filter((product) => product.price <= priceRange);

//     // Filter by categories
//     if (selectedCategories.length > 0) {
//       result = result.filter((product) =>
//         selectedCategories.includes(product.category)
//       );
//     }

//     // Filter by materials
//     if (selectedMaterials.length > 0) {
//       result = result.filter((product) =>
//         selectedMaterials.includes(product.material)
//       );
//     }

//     // Filter by sizes
//     if (selectedSizes.length > 0 && !selectedSizes.includes("All Sizes")) {
//       result = result.filter((product) => selectedSizes.includes(product.size));
//     }

//     setFilteredProducts(result);
//   }, [
//     priceRange,
//     selectedCategories,
//     selectedMaterials,
//     selectedSizes,
//     products,
//   ]);

//   return (
//     <>

//       <div className="container mx-auto px-4 py-8">
//         {/* Breadcrumb */}
//         <div className="mb-6 text-sm">
//           <span
//             style={{ fontFamily: "Times New Roman" }}
//             className="text-gray-800"
//           >
//             Home
//           </span>{" "}
//           /{" "}
//           <span
//             style={{ fontFamily: "Times New Roman" }}
//             className="text-gray-800"
//           >
//             Product
//           </span>
//         </div>

//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Filters Sidebar */}
//           <div className="w-full md:w-72 shrink-0">
//             <div className="border border-gray-200 rounded-lg p-6">
//               <div style={{ fontFamily: "Times New Roman" }} className="mb-6">
//                 <h3 className="text-lg font-medium uppercase mb-4">Categories</h3>
//                 <div className="space-y-2">
//                   {categories.map((category) => (
//                     <label key={category} className="flex items-center">
//                       <input
//                         type="checkbox"
//                         className="w-4 h-4 mr-2 border-gray-300 rounded"
//                         checked={selectedCategories.includes(category)}
//                         onChange={() => handleCategoryChange(category)}
//                       />
//                       <span className="text-gray-600">{category}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               <div style={{ fontFamily: "Times New Roman" }} className="mb-6">
//                 <h3 className="text-lg font-medium uppercase mb-4">Material</h3>
//                 <div className="space-y-2">
//                   {materials.map((material) => (
//                     <label key={material} className="flex items-center">
//                       <input
//                         type="checkbox"
//                         className="w-4 h-4 mr-2 border-gray-300 rounded"
//                         checked={selectedMaterials.includes(material)}
//                         onChange={() => handleMaterialChange(material)}
//                       />
//                       <span className="text-gray-600">{material}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               <div style={{ fontFamily: "Times New Roman" }} className="mb-6">
//                 <h3 className="text-lg font-medium uppercase mb-4">Size</h3>
//                 <div className="space-y-2">
//                   {sizes.map((size) => (
//                     <label key={size} className="flex items-center">
//                       <input
//                         type="checkbox"
//                         className="w-4 h-4 mr-2 border-gray-300 rounded"
//                         checked={selectedSizes.includes(size)}
//                         onChange={() => handleSizeChange(size)}
//                       />
//                       <span className="text-gray-600">{size}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               <div style={{ fontFamily: "Times New Roman" }}>
//                 <h3 className="text-lg font-medium uppercase mb-4">Price</h3>
//                 <div className="space-y-4">
//                   <input
//                     type="range"
//                     min="0"
//                     max="2400"
//                     step="100"
//                     value={priceRange}
//                     onChange={(e) =>
//                       setPriceRange(Number.parseInt(e.target.value))
//                     }
//                     className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
//                   />
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">₹0</span>
//                     <span className="text-gray-600">₹{priceRange}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Product Grid */}
//           <div className="flex-1">
//             {filteredProducts.length === 0 ? (
//               <div className="text-center py-8">
//                 <p className="text-lg text-gray-600">
//                   No products match your filters.
//                 </p>
//                 <button
//                   className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md"
//                   onClick={() => {
//                     setPriceRange(2400);
//                     setSelectedCategories([]);
//                     setSelectedMaterials([]);
//                     setSelectedSizes([]);
//                   }}
//                 >
//                   Clear All Filters
//                 </button>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {filteredProducts.map((product) => (
//                   <ProductCard key={product.id} product={product} />
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// function ProductCard({ product }) {
//   return (

//     <div style={{ fontFamily: "Times New Roman" }} className="group">

//      <Link to={'/Singleproduct'}> <div className="relative mb-3 overflow-hidden bg-gray-100 cursor-pointer ">
//         <img
//           src={product.image || "/placeholder.svg"}
//           alt={product.name}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
//           <Link to="/">
//             <button className="bg-black text-white p-2 rounded-full cursor-pointer">
//               <ShoppingBag size={20} />
//             </button>
//           </Link>
//           {/* <Link to="/">
//             <button className="bg-black text-white p-2 rounded-full cursor-pointer">
//               <Heart size={20} />
//             </button>
//           </Link> */}
//         </div>
//       </div></Link>
//       <div>
//         <h3 className="text-lg font-medium uppercase mb-1">{product.name}</h3>
//         <p className="text-sm text-gray-600 mb-2">{product.description}</p>
//         <p className="font-medium">₹{product.price.toFixed(2)}</p>
//       </div>

//     </div>
//   );
// }







// import { ShoppingBag } from "lucide-react"
// import { useState, useEffect } from "react"
// import pro1 from "../image/pro1.svg"
// import pro2 from "../image/pro2.svg"
// import { Link } from "react-router-dom"

// export default function ProductListing() {
//   // Sample product data
//   const products = [
//     {
//       id: 1,
//       name: "PORTLAND",
//       description: "Discover our featured art collection.",
//       price: 1200,
//       category: "Modern",
//       material: "Canvas",
//       size: 'Medium (12-24")',
//       image: pro1
//     },
//     {
//       id: 2,
//       name: "AURORA",
//       description: "Abstract painting with vibrant colors.",
//       price: 1500,
//       category: "Abstract",
//       material: "Canvas",
//       size: 'Large (24-36")',
//       image: pro2
//     },
//     {
//       id: 3,
//       name: "HERITAGE",
//       description: "Traditional artwork with cultural elements.",
//       price: 2200,
//       category: "Traditional",
//       material: "Wood",
//       size: 'Extra Large (Over 36")',
//       image: pro1
//     },
//     {
//       id: 4,
//       name: "FUSION",
//       description: "Modern art with mixed media elements.",
//       price: 950,
//       category: "Modern",
//       material: "Mixed Media",
//       size: 'Small (Under 12")',
//       image: pro2
//     },
//     {
//       id: 5,
//       name: "ESSENCE",
//       description: "Cultural artwork with traditional techniques.",
//       price: 1800,
//       category: "Cultural",
//       material: "Wood",
//       size: 'Medium (12-24")',
//       image: pro1
//     },
//     {
//       id: 6,
//       name: "METALLIC",
//       description: "Contemporary sculpture with metallic finish.",
//       price: 2400,
//       category: "Modern",
//       material: "Metal",
//       size: 'Large (24-36")',
//       image: pro2
//     }
//   ]

//   // Filter states
//   const [priceRange, setPriceRange] = useState(2400)
//   const [selectedCategories, setSelectedCategories] = useState([])

//   const [selectedMaterials, setSelectedMaterials] = useState([])
//   const [selectedSizes, setSelectedSizes] = useState([])
//   const [filteredProducts, setFilteredProducts] = useState(products)
//   const [isFilterOpen, setIsFilterOpen] = useState(false)

//   // Categories, materials, and sizes arrays
//   const categories = ["Modern", "Abstract", "Traditional", "Cultural"]
//   const materials = ["Wood", "Metal", "Canvas", "Mixed Media"]
//   const sizes = [
//     "All Sizes",
//     'Small (Under 12")',
//     'Medium (12-24")',
//     'Large (24-36")',
//     'Extra Large (Over 36")'
//   ]

//   // Handle checkbox changes
//   // const handleCategoryChange = category => {
//   //   setSelectedCategories(prev =>
//   //     prev.includes(category)
//   //       ? prev.filter(c => c !== category) : [...prev, category]

//   //   )
//   // }
//   const handleCategoryChange = (category) => {
//     const isSelected = selectedCategories.includes(category);

//     if (isSelected) {
//       // Remove category
//       setSelectedCategories(selectedCategories.filter(c => c !== category));
//     } else {
//       // Add category
//       setSelectedCategories([...selectedCategories, category]);
//     }
//   };
//   const handleMaterialChange = material => {
//     setSelectedMaterials(prev =>
//       prev.includes(material)
//         ? prev.filter(m => m !== material)
//         : [...prev, material]
//     )
//   }

//   const handleSizeChange = size => {
//     // If "All Sizes" is selected, clear other selections
//     if (size === "All Sizes") {
//       setSelectedSizes(prev =>
//         prev.includes("All Sizes") ? [] : ["All Sizes"]
//       )
//       return
//     }

//     // If selecting a specific size, remove "All Sizes" if present
//     setSelectedSizes(prev => {
//       const newSizes = prev.filter(s => s !== "All Sizes")
//       return newSizes.includes(size)
//         ? newSizes.filter(s => s !== size)
//         : [...newSizes, size]
//     })
//   }

//   const toggleFilter = () => {
//     setIsFilterOpen(prev => !prev)
//   }

//   // Apply filters whenever filter states change
//   useEffect(() => {
//     let result = products

//     // Filter by price
//     result = result.filter(product => product.price <= priceRange)

//     // Filter by categories
//     if (selectedCategories.length > 0) {
//       result = result.filter(product =>
//         selectedCategories.includes(product.category)
//       )
//     }

//     // Filter by materials
//     if (selectedMaterials.length > 0) {
//       result = result.filter(product =>
//         selectedMaterials.includes(product.material)
//       )
//     }

//     // Filter by sizes
//     if (selectedSizes.length > 0 && !selectedSizes.includes("All Sizes")) {
//       result = result.filter(product => selectedSizes.includes(product.size))
//     }

//     setFilteredProducts(result)
//   }, [priceRange, selectedCategories, selectedMaterials, selectedSizes])

//   // Render product card (previously separate function)
//   const renderProductCard = product => {
//     return (
//       <div
//         key={product.id}
//         style={{ fontFamily: "Times New Roman" }}
//         className="group max-w-7xl mx-auto"
//       >
//         <div className="relative mb-3 overflow-hidden bg-gray-100 ">
//           <img
//             src={product.image || "/placeholder.svg"}
//             alt={product.name}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute top-3 right-3 flex flex-col gap-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
//             <Link to="/">
//               <button className="bg-black text-white p-2 rounded-full cursor-pointer">
//                 <ShoppingBag size={20} />
//               </button>
//             </Link>

//           </div>
//         </div>
//         <div>
//           <h3 className="text-lg font-medium uppercase mb-1">{product.name}</h3>
//           <p className="text-sm text-gray-600 mb-2">{product.description}</p>
//           <p className="font-medium">₹{product.price.toFixed(2)}</p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="max-w-7xl  mx-auto px-4 py-8">
//       {/* Breadcrumb */}
//       <div className="mb-6 text-sm">
//         <Link to={'/'}><span
//           style={{ fontFamily: "Times New Roman" }}
//           className="text-gray-800 hover:underline"
//         >
//           Home
//         </span></Link>
//         /{" "}
//         <span
//           style={{ fontFamily: "Times New Roman" }}
//           className="text-gray-800 hover:underline"
//         >
//           Product
//         </span>
//       </div>

//       {/* Mobile Filter Button */}
//       <div className="md:hidden mb-4">
//         <button
//           onClick={toggleFilter}
//           className="w-full py-2 px-4 bg-black text-white rounded-md flex justify-center items-center"
//           style={{ fontFamily: "Times New Roman" }}
//         >
//           {isFilterOpen ? "Hide Filters" : "Show Filters"}
//         </button>
//       </div>

//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Filters Sidebar */}
//         <div
//           className={`w-full md:w-72 shrink-0 ${isFilterOpen ? "block" : "hidden"
//             } md:block transition-all duration-300`}
//         >
//           <div className="border border-gray-200 rounded-lg p-6">
//             <div style={{ fontFamily: "Times New Roman" }} className="mb-6">
//               <h3 className="text-lg font-medium uppercase mb-4">Categories</h3>
//               <div className="space-y-2">
//                 {categories.map(category => (
//                   <label key={category} className="flex items-center">
//                     <input
//                       type="checkbox"
//                       className="w-4 h-4 mr-2 border-gray-300 rounded"
//                       checked={selectedCategories.includes(category)}
//                       onChange={() => handleCategoryChange(category)}
//                     />
//                     <span className="text-gray-600">{category}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             <div style={{ fontFamily: "Times New Roman" }} className="mb-6">
//               <h3 className="text-lg font-medium uppercase mb-4">Material</h3>
//               <div className="space-y-2">
//                 {materials.map(material => (
//                   <label key={material} className="flex items-center">
//                     <input
//                       type="checkbox"
//                       className="w-4 h-4 mr-2 border-gray-300 rounded"
//                       checked={selectedMaterials.includes(material)}
//                       onChange={() => handleMaterialChange(material)}
//                     />
//                     <span className="text-gray-600">{material}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             <div style={{ fontFamily: "Times New Roman" }} className="mb-6">
//               <h3 className="text-lg font-medium uppercase mb-4">Size</h3>
//               <div className="space-y-2">
//                 {sizes.map(size => (
//                   <label key={size} className="flex items-center">
//                     <input
//                       type="checkbox"
//                       className="w-4 h-4 mr-2 border-gray-300 rounded"
//                       checked={selectedSizes.includes(size)}
//                       onChange={() => handleSizeChange(size)}
//                     />
//                     <span className="text-gray-600">{size}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             <div style={{ fontFamily: "Times New Roman" }}>
//               <h3 className="text-lg font-medium uppercase mb-4">Price</h3>
//               <div className="space-y-4">
//                 <input
//                   type="range"
//                   min="200"
//                   max="2400"
//                   step="100"
//                   value={priceRange}
//                   onChange={e => setPriceRange(Number.parseInt(e.target.value))}
//                   className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
//                 />
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">₹0</span>
//                   <span className="text-gray-600">₹{priceRange}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Product Grid */}
//         <div className="flex-1">
//           {filteredProducts.length === 0 ? (
//             <div className="text-center py-8">
//               <p className="text-lg text-gray-600">
//                 No products match your filters.
//               </p>
//               <button
//                 className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md"
//                 onClick={() => {
//                   setPriceRange(2400)
//                   setSelectedCategories([])
//                   setSelectedMaterials([])
//                   setSelectedSizes([])
//                 }}
//               >
//                 Clear All Filters
//               </button>
//             </div>
//           ) : (
//             <Link to="/Singleproduct"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredProducts.map(product => renderProductCard(product))}
//             </div>
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }




import { ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import pro2 from "../image/pro2.svg";
import pro1 from "../image/pro1.svg";
import pp1 from "../image/pp1.svg";
import { Link, useNavigate } from "react-router-dom";
import Cart from './Cart';

export default function ProductListing() {

  const navigate = useNavigate()
  const [productList, setProductList] = useState([])

  const getProductDataFunction = () => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        console.log(data, 'Fetched Product Data');
        setProductList(data.products)
        return data;
      })
  }

  console.log(productList, 'productList');


  useEffect(() => {
    getProductDataFunction()
  }, [])

  const products = [
    {
      id: 1,
      name: "PORTLAND",
      description: "Discover our featured art collection.",
      price: 1200,
      category: "17.x11.5",
      material: "Canvas",
      size: "Four Corner Round ",
      frame: "PVC",
      image: pp1,
    },
    {
      id: 2,
      name: "AURORA",
      description: "Abstract painting with vibrant colors.",
      price: 1500,
      category: "23.5 x 16",
      material: "Canvas",
      size: "Rectangle",
      frame: "Aluminum",
      image: pro1,
    },
    {
      id: 3,
      name: "HERITAGE",
      description: "Traditional artwork with cultural elements.",
      price: 2200,
      category: "29.5 x 20",
      material: "Wood",
      size: "Square",
      frame: "SSPVD",
      image: pro2,
    },
    {
      id: 4,
      name: "FUSION",
      description: "Modern art with mixed media elements.",
      price: 950,
      category: "18 x 18",
      material: "Mixed Media",
      size: "Round",
      frame: "Aluminum Slim",
      image: pp1,
    },
    {
      id: 5,
      name: "ESSENCE",
      description: "Cultural artwork with traditional techniques.",
      price: 1800,
      category: "24 x 24",
      material: "Wood",
      size: "Ovel",
      frame: "Without farm",
      image: pro1,
    },
    {
      id: 6,
      name: "METALLIC",
      description: "Contemporary sculpture with metallic finish.",
      price: 2400,
      category: "30 x 30",
      material: "Metal",
      size: "Top Round",
      frame: "SSPVD",
      image: pro2,
    },
  ];

  const [priceRange, setPriceRange] = useState(2400);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedframe, setSelectedframe] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  }
  const categories = [
    "17.x11.5", "23.5 x 16", "29.5 x 20", "18 x 18",
    "24 x 24", "30 x 30", "23.5 x 11.5", "29.5x14.5",
    "35.5x17.5", "41.5 x 20.5"
  ];
  const materials = ["Acrylic", "Acrylic White mate", "Canvas", "Glass", "Wood", "Metal", "Mixed Media"];
  const sizes = [
    "Four Corner Round ", "Square", "Rectangle", "Ovel",
    "Round", "Top Round", "bottom Round"
  ];
  const frame = ["PVC", "SSPVD", "Aluminum", "Aluminum Slim", "Without farm"];

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleMaterialChange = (material) => {
    setSelectedMaterials((prev) =>
      prev.includes(material)
        ? prev.filter((m) => m !== material)
        : [...prev, material]
    );
  };

  const handleSizeChange = (size) => {
    if (size === "All Sizes") {
      setSelectedSizes((prev) =>
        prev.includes("All Sizes") ? [] : ["All Sizes"]
      );
      return;
    }
    setSelectedSizes((prev) => {
      const newSizes = prev.filter((s) => s !== "All Sizes");
      return newSizes.includes(size)
        ? newSizes.filter((s) => s !== size)
        : [...newSizes, size];
    });
  };

  const handleFrameChange = (frameType) => {
    setSelectedframe((prev) =>
      prev.includes(frameType)
        ? prev.filter((f) => f !== frameType)
        : [...prev, frameType]
    );
  };

  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

  useEffect(() => {
    let result = products;

    result = result.filter((product) => product.price <= priceRange);

    if (selectedCategories.length > 0) {
      result = result.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((product) =>
        selectedMaterials.includes(product.material)
      );
    }

    if (selectedSizes.length > 0 && !selectedSizes.includes("All Sizes")) {
      result = result.filter((product) => selectedSizes.includes(product.size));
    }

    if (selectedframe.length > 0) {
      result = result.filter((product) => selectedframe.includes(product.frame));
    }

    setFilteredProducts(result);
  }, [priceRange, selectedCategories, selectedMaterials, selectedSizes, selectedframe]);

  const renderProductCard = (product) => (
    <div key={product.id} className="group max-w-7xl mx-auto" style={{ fontFamily: "Times New Roman" }}>
      <div className="relative mb-3 overflow-hidden bg-gray-100">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover"
          onClick={() => navigate('/Singleproduct')}
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity" onClick={toggleCart}>
          {/* <Link to="/"> */}
          <button className="bg-black text-white p-2 rounded-full cursor-pointer">
            <ShoppingBag size={20} />
          </button>
          {/* </Link> */}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium uppercase mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <p className="font-medium">₹{product.price.toFixed(2)}</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6 text-sm">
          <Link to="/">
            <span style={{ fontFamily: "Times New Roman" }} className="text-gray-800 hover:underline">
              Home
            </span>
          </Link>{" "}
          /{" "}
          <span style={{ fontFamily: "Times New Roman" }} className="text-gray-800 hover:underline">
            Product
          </span>
        </div>

        <div className="md:hidden mb-4">
          <button
            onClick={toggleFilter}
            className="w-full py-2 px-4 bg-black text-white rounded-md flex justify-center items-center"
            style={{ fontFamily: "Times New Roman" }}
          >
            {isFilterOpen ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className={`w-full md:w-72 shrink-0 ${isFilterOpen ? "block" : "hidden"} md:block`}>
            <div className="border border-gray-200 rounded-lg p-6">
              {/* Size Filter */}
              <div className="mb-6" style={{ fontFamily: "Times New Roman" }}>
                <h3 className="text-lg font-medium uppercase mb-4">Size</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 mr-2 border-gray-300 rounded"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                      />
                      <span className="text-gray-600">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-6" style={{ fontFamily: "Times New Roman" }}>
                <h3 className="text-lg font-medium uppercase mb-4">Product Material</h3>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <label key={material} className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 mr-2 border-gray-300 rounded"
                        checked={selectedMaterials.includes(material)}
                        onChange={() => handleMaterialChange(material)}
                      />
                      <span className="text-gray-600">{material}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Frame Shape Filter */}
              <div className="mb-6" style={{ fontFamily: "Times New Roman" }}>
                <h3 className="text-lg font-medium uppercase mb-4">Frame Shape</h3>
                <div className="space-y-2">
                  {sizes.map((size) => (
                    <label key={size} className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 mr-2 border-gray-300 rounded"
                        checked={selectedSizes.includes(size)}
                        onChange={() => handleSizeChange(size)}
                      />
                      <span className="text-gray-600">{size}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Frame Material Filter */}
              <div className="mb-6" style={{ fontFamily: "Times New Roman" }}>
                <h3 className="text-lg font-medium uppercase mb-4">Frame Material</h3>
                <div className="space-y-2">
                  {frame.map((frameType) => (
                    <label key={frameType} className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 mr-2 border-gray-300 rounded"
                        checked={selectedframe.includes(frameType)}
                        onChange={() => handleFrameChange(frameType)}
                      />
                      <span className="text-gray-600">{frameType}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div style={{ fontFamily: "Times New Roman" }}>
                <h3 className="text-lg font-medium uppercase mb-4">Price</h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="200"
                    max="2400"
                    step="100"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between">
                    <span className="text-gray-600">₹0</span>
                    <span className="text-gray-600">₹{priceRange}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-lg text-gray-600">No products match your filters.</p>
                <button
                  className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md"
                  onClick={() => {
                    setPriceRange(2400);
                    setSelectedCategories([]);
                    setSelectedMaterials([]);
                    setSelectedSizes([]);
                    setSelectedframe([]);
                  }}
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  renderProductCard(product)
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {isCartOpen && (
        <Cart toggleCart={toggleCart} />
      )}

    </>
  );
}
