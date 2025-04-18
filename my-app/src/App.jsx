import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';
import Aboutpage from './Components/Aboutpage';
import Home from './Components/Home';
import Contact from './Components/Contact';
import News from './Components/News';

import Cart from './Components/Cart';
import Singleproduct from './Components/Singleproduct';
import ProductListing from './Components/ProductListing';
// import Login from './Components/Login';
// import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import ProfilePage from "./Components/ProfilePage";
import ShippingReturns from "./Components/ShippingReturns";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsConditions from "./Components/TermsConditions";
import ProductCustomizer from "./Components/ProductCustomizer";



function App() {

  

  return (
    <>



      <Router>
        <Navbar />
        <Routes>
          {/* <Route path='/Login' element={<Login/>} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/Aboutpage' element={<Aboutpage />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/News' element={<News />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Singleproduct' element={<Singleproduct />} />
          <Route path='/ProductListing' element={<ProductListing />} />
          <Route path='/ProfilePage' element={<ProfilePage/>} />
          <Route path='/ProductCustomizer' element={<ProductCustomizer/>} />
          <Route path='/ShippingReturns' element={<ShippingReturns/>} />
          <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>} />
          <Route path='/TermsConditions' element={<TermsConditions/>} />
        </Routes>


        <Footer />

      </Router>

    </>
  )
}

export default App;
