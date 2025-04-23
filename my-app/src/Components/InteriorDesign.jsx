// import React from "react";
// import pan from "../image/pan.svg"
// const InteriorDesign = () => {
//     return (
//         <div className="flex flex-col items-center p-6 md:p-12">
//             {/* Arch-shaped container */}
//             <div className="relative w-full max-w-md md:max-w-lg">
//                 {/* Background pattern */}
//                 <div className="absolute inset-0  opacity-10"></div>

//                 {/* Arch-shaped image */}
//                 <div className="overflow-hidden">
//                     <img
//                         src={pan}
//                         alt="Interior Design"
//                         className="w-700 h-[180%] object-cover"
//                     />
//                 </div>

//             </div>

//             {/* Content below image */}
//             <div className="mt-6 text-center">
//                 <h2 className="text-xl md:text-2xl font-bold text-gray-800">Beautiful Interior</h2>
//                 <p className="text-gray-600 mt-2">
//                     A perfect blend of vibrant colors and rustic decor.
//                 </p>
//             </div>

//             {/* Decorative elements */}

//         </div>
//     );
// };

// export default InteriorDesign;



// import pan from "../image/pan.svg"; // Update the path and extension as needed

// const InteriorDesign = () => {
//   return (
//     <div className="flex flex-col items-center justify-center  py-12">
   
//       {/* Arch-shaped image */}
//       <div className="overflow-hidden rounded-t-[120px]   w-full max-w-[700px]">
//         <img
//           src={pan || "/placeholder.svg"}
//           alt="Interior Design"
//           className="w-full h-auto object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default InteriorDesign;

// import React from 'react';
// import slider1 from "../image/slider1.svg";
// import slider2 from "../image/slider2.svg";
// import slider3 from "../image/slider3.svg";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// };

// const InteriorDesign = () =>{
//   return (
//     <>
//     <div className="">
//       {/* Main slider container */}
//       <div className="">
//           <div className="overflow-hidden">
//         <Slider {...settings}>
//   {[
//     { image: slider1 },
//     { image: slider2},
//     { image: slider3}
//   ].map((slide, index) => (
//     <div key={index}>
//       <div
//         className="bg-cover bg-center min-h-screen flex items-center justify-center text-center"
//         style={{ backgroundImage: `url(${slide.image})` }}
//       >
       
//       </div>
//     </div>
//   ))}
// </Slider>
// </div>

//         </div>

//       {/* Indicators/dots */}
   
//     </div>
//     </>
//   );
// }

// export default InteriorDesign;
//-----------------

// import React from 'react';
// import slider1 from "../image/slider1.svg";
// import slider2 from "../image/slider2.svg";
// import slider3 from "../image/slider3.svg";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// };

// const InteriorDesign = () => {
//   return (
//     <div className="relative">
//       {/* Slider */}
//       <Slider {...settings}>
//         {[
//           { image: slider1 },
//           { image: slider2 },
//           { image: slider3 },
//         ].map((slide, index) => (
//           <div key={index}>
//             <div
//               className="bg-cover bg-center min-h-screen"
//               style={{ backgroundImage: `url(${slide.image})` }}
//             >
//               {/* Empty div to ensure full height */}
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default InteriorDesign;




import React from 'react';
import slider1 from "../image/slider1.svg";
import slider2 from "../image/slider2.svg";
import slider3 from "../image/slider3.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false, // Hide arrows for smaller screens
};

const InteriorDesign = () => {
  return (
    <div className="relative w-full">
      {/* Slider */}
      <Slider {...settings}>
        {[
          { image: slider1 },
          { image: slider2 },
          { image: slider3 },
        ].map((slide, index) => (
          <div key={index} className="w-full">
            <div
              className="bg-cover bg-center h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Optional content inside slides */}
             
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InteriorDesign;
