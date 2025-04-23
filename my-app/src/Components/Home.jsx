import React, { useEffect, useState } from "react"
import Items from "./Items";
import WallArtIntro from "./WallArtIntro";
import Frame from "./Frame";
import InteriorDesign from "./InteriorDesign";
import Login from "./Login";
import Signup from "./Signup";


export default function Home() {

  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)

  useEffect(() => {
    // Clear the session storage on page reload
    // This ensures the popup shows again when the page is reloaded
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("popupClosed")
    }

    // window.addEventListener("beforeunload", handleBeforeUnload)

    // Check if popup should be shown
    const popupClosedThisSession = sessionStorage.getItem("popupClosed")
    setShowLogin(!popupClosedThisSession)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [])


  const handleCloseLogin = () => {
    sessionStorage.setItem("popupClosed", "true") 
    setShowLogin(false)
  }

  const toggleSignupPopup = () => {
    sessionStorage.setItem("popupClosed", "true")
    setShowLogin(false)
    setShowSignup(true)
  }

  return (
    <>
    {showLogin && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 backdrop-blur-sm z-40"></div>
      )}

      <div>
        {showLogin && (
          <Login
            onClose={handleCloseLogin}
            toggSigupPopup={toggleSignupPopup}
          />
        )}

        {/* Add your Signup component here */}
        {showSignup && (
          <>
            <div className="fixed inset-0 bg-black/80 bg-opacity-50 backdrop-blur-sm z-40"></div>
          <Signup onClose={() => setShowSignup(false)} />
          </>
        )}

      </div>
      {/* <Header/> */}
      <div className={showLogin ? ' pointer-events-none select-none transition duration-300' : ''}>
        <InteriorDesign />
      </div>
      <Items />
      <WallArtIntro />
      <Items />
      <Frame />


    </>
  )
}






// import React, { useEffect, useState } from "react";
// import Items from "./Items";
// import WallArtIntro from "./WallArtIntro";
// import Frame from "./Frame";
// import InteriorDesign from "./InteriorDesign";
// import Login from "./Login";
// import Signup from "./Signup";

// export default function Home() {
//   const [showLogin, setShowLogin] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);

//   useEffect(() => {
//     const handleBeforeUnload = () => {
//       sessionStorage.removeItem("popupClosed");
//     };

//     window.addEventListener("beforeunload", handleBeforeUnload);

//     const popupClosedThisSession = sessionStorage.getItem("popupClosed");
//     setShowLogin(!popupClosedThisSession);

//     return () => {
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//     };
//   }, []);

//   const handleCloseLogin = () => {
//     sessionStorage.setItem("popupClosed", "true");
//     setShowLogin(false);
//   };

//   const toggleSignupPopup = () => {
//     sessionStorage.setItem("popupClosed", "true");
//     setShowLogin(false);
//     setShowSignup(true);
//   };

//   return (
//     <>
//       {/* Fullscreen dark blur background */}
//       {showLogin && (
//         <div className="fixed inset-0 bg-black/80 bg-opacity-50 backdrop-blur-sm z-40"></div>
//       )}

//       {/* Login and Signup Popups */}
//       <div className="relative z-50">
//         {showLogin && (
//           <Login onClose={handleCloseLogin} toggSigupPopup={toggleSignupPopup} />
//         )}
//         {showSignup && (
//           <Signup onClose={() => setShowSignup(false)} />
//         )}
//       </div>

//       {/* Main Content - Blurred/Disabled when Login is open */}
//       <div className={showLogin ? 'pointer-events-none select-none transition duration-300' : ''}>
//       <InteriorDesign />
//         <Items />
//         <WallArtIntro />
//         <Items />
//         <Frame />
//       </div>
//     </>
//   );
// }
