import React, { useEffect } from "react"
import Items from "./Items";
import WallArtIntro from "./WallArtIntro";
import Frame from "./Frame";
import InteriorDesign from "./InteriorDesign ";
import Login from "./Login";
import Signup from "./Signup";


export default function Home() {

  const [showLogin, setShowLogin] = React.useState(false)
  const [showSignup, setShowSignup] = React.useState(false)

  useEffect(() => {
    // Clear the session storage on page reload
    // This ensures the popup shows again when the page is reloaded
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("popupClosed")
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

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
      <div>
        {showLogin && (
          <Login
            onClose={handleCloseLogin}
            toggSigupPopup={toggleSignupPopup}
          />
        )}

        {/* Add your Signup component here */}
        {showSignup && (
          <Signup onClose={() => setShowSignup(false)} />
        )}

      </div>
      {/* <Header/> */}
      <div className={showLogin ? 'blur-sm pointer-events-none select-none transition duration-300' : ''}>
        <InteriorDesign />
      </div>
      <Items />
      <WallArtIntro />
      <Items />
      <Frame />


    </>
  )
}

