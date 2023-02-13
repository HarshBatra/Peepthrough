import React from "react";
import Home from "./Pages/Home";
import SingleBlog from "./Pages/SingleBlog";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Faq from "./Pages/Faq";
import Shop from "./Pages/Shop";
import ShopkeeperLogin from "./Pages/ShopkeeperLogin";
import Advertise from "./Pages/Advertise";
import Privacy from "./Pages/Privacy";
import "./style.css";
import "./input.css";
import "./animation.css";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Allblogs from "./Pages/Allblogs";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <div className="font-poppins">
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<SingleBlog />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/shopkeeper-login" element={<ShopkeeperLogin />} />
            <Route path="/advertise" element={<Advertise />} />
            <Route path="/all-blogs" element={<Allblogs />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
