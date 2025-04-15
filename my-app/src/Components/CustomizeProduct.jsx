import React, { useState, useRef, useEffect } from "react";

const CustomizeProduct = () => {
  // State variables
  const [selectedSize, setSelectedSize] = useState("small");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [instructions, setInstructions] = useState("");
  const [price, setPrice] = useState(120000);
  const [originalPrice, setOriginalPrice] = useState(150000);
  const [frameShape, setFrameShape] = useState("square"); // 'round', 'square', 'oval'
  const fileInputRef = useRef(null);

  // Size specifications
  const sizes = {
    small: {
      label: 'Small (18" x 24")',
      dimensions: { width: 18, height: 24 },
      aspectRatio: 18 / 24,
      priceMultiplier: 1,
    },
    medium: {
      label: 'Medium (24" x 36")',
      dimensions: { width: 24, height: 36 },
      aspectRatio: 24 / 36,
      priceMultiplier: 1.5,
    },
    large: {
      label: 'Large (36" x 48")',
      dimensions: { width: 36, height: 48 },
      aspectRatio: 36 / 48,
      priceMultiplier: 2.25,
    },
  };

  // Calculate current dimensions based on rotation
  const getCurrentDimensions = () => {
    const size = sizes[selectedSize];
    return rotation % 180 === 0
      ? { width: size.dimensions.width, height: size.dimensions.height }
      : { width: size.dimensions.height, height: size.dimensions.width };
  };

  // Get border radius based on frame shape
  const getFrameStyle = () => {
    switch (frameShape) {
      case "round":
        return { borderRadius: "50%" };
      case "oval":
        return { borderRadius: "50%", transform: "scaleX(1.2)" };
      case "square":
      default:
        return { borderRadius: "0" };
    }
  };

  // Update price when size changes
  useEffect(() => {
    const basePrice = 120000;
    const basePriceBeforeDiscount = 150000;
    setPrice(Math.round(basePrice * sizes[selectedSize].priceMultiplier));
    setOriginalPrice(
      Math.round(basePriceBeforeDiscount * sizes[selectedSize].priceMultiplier)
    );
  }, [selectedSize]);

  // Calculate discount percentage
  const discountPercentage = Math.round(
    ((originalPrice - price) / originalPrice) * 100
  );

  // Handle size selection
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle image rotation
  const rotateImage = () => {
    setRotation((prevRotation) => (prevRotation + 90) % 360);
  };

  // Format price to Indian currency format
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 2,
    }).format(price);
  };

  // Calculate current aspect ratio based on rotation
  const currentAspectRatio =
    rotation % 180 === 0
      ? sizes[selectedSize].aspectRatio
      : 1 / sizes[selectedSize].aspectRatio;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 font-sans">
      {/* Navigation breadcrumb */}
      <div className="text-sm text-gray-600 mb-6">
        <span className="hover:underline cursor-pointer">Home</span> /
        <span className="hover:underline cursor-pointer ml-1">Portland</span> /
        <span className="hover:underline cursor-pointer ml-1">Customize</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Product Preview */}
        <div className="md:w-1/2">
          <div className="relative bg-gray-100 p-4 rounded">
            <div
              className="border-8 border-black relative overflow-hidden"
              style={{
                aspectRatio: currentAspectRatio,
                width: "100%",
                height: "auto",
                ...getFrameStyle(),
                transition: "border-radius 0.3s ease, transform 0.3s ease",
              }}
            >
              {uploadedImage ? (
                <div className="w-full h-full bg-white">
                  <img
                    src={uploadedImage}
                    alt="Uploaded custom image"
                    className="w-full h-full object-contain transition-all duration-300 ease-in-out"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      objectFit: "contain",
                    }}
                  />
                </div>
              ) : (
                <div className="w-full h-full bg-white flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4h-12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="mt-1">Upload an image</p>
                  </div>
                </div>
              )}

              {/* Size indicator */}
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                {getCurrentDimensions().width}" ×{" "}
                {getCurrentDimensions().height}"
              </div>
            </div>

            {/* Control buttons */}
            <div className="absolute top-2 right-2 flex space-x-2">
              {uploadedImage && (
                <button
                  onClick={rotateImage}
                  className="bg-black text-white rounded-full p-2 hover:bg-gray-800 transition-colors"
                  title="Rotate image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right: Product Details and Customization */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">
            Geometric Harmony Wall Art
          </h1>

          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
              <svg
                className="w-4 h-4 text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <span className="text-sm text-gray-600 ml-1">4.0 (24 reviews)</span>
          </div>

          <div className="mb-6">
            <span className="text-2xl font-bold">₹{formatPrice(price)}</span>
            <span className="text-gray-500 line-through ml-2">
              ₹{formatPrice(originalPrice)}
            </span>
            <span className="text-green-500 ml-2">
              (-{discountPercentage}%)
            </span>
          </div>

          <div className="mb-6">
            <p className="text-gray-700">
              Designed by The Olaits (Made In India)
            </p>
            <ul className="mt-3 space-y-1 text-sm text-gray-700">
              <li>• Made with High Quality 3 mm acrylic sheet</li>
              <li>• Leveled with a 2.4cm thick premium aluminum metal frame</li>
              <li>• Super HD print output (2400*2400 DPI)</li>
            </ul>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-3">SIZE</h2>
            <div className="grid grid-cols-2 gap-2">
              {Object.keys(sizes).map((size) => (
                <button
                  key={size}
                  className={`border py-2 px-4 rounded transition-colors ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "border-gray-300 hover:border-gray-500"
                  }`}
                  onClick={() => handleSizeChange(size)}
                >
                  {sizes[size].label}
                </button>
              ))}
            </div>
          </div>

          {/* Thickness */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-3">Thickness (mm)</h2>
            <button className="border border-gray-300 bg-black text-white py-2 px-4 rounded">
              3mm
            </button>
          </div>

          {/* Frame Shape */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-3">Frame Shape</h2>
            <div className="space-x-2">
              <button
                onClick={() => setFrameShape("oval")}
                className={`border py-2 px-4 rounded-xl transition-colors ${
                  frameShape === "oval"
                    ? "bg-black text-white"
                    : "border-gray-300 hover:border-gray-500"
                }`}
              >
                Round
              </button>
              <button
                onClick={() => setFrameShape("square")}
                className={`border py-2 px-4 rounded-xl transition-colors ${
                  frameShape === "square"
                    ? "bg-black text-white"
                    : "border-gray-300 hover:border-gray-500"
                }`}
              >
                Square
              </button>
              <button
                onClick={() => setFrameShape("round")}
                className={`border py-2 px-4 rounded-xl transition-colors ${
                  frameShape === "round"
                    ? "bg-black text-white"
                    : "border-gray-300 hover:border-gray-500"
                }`}
              >
                Oval
              </button>
            </div>
          </div>

          {/* Image Upload */}
          <div className="mb-6">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleImageUpload}
            />
            <button
              onClick={() => fileInputRef.current.click()}
              className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors"
            >
              Upload Image
            </button>
          </div>

          {/* Instructions */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-3">Write Instructions</h2>
            <textarea
              className="w-full border border-gray-300 rounded p-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="Write instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            ></textarea>
          </div>

          {/* Buy Button */}
          <button className="w-full bg-black text-white py-3 rounded font-bold hover:bg-gray-800 transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomizeProduct;
