import React from "react";
import Home from "./Pages/Home";
import SingleBlog from "./Pages/SingleBlog";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Faq from "./Pages/Faq";
import MallsInCity from "./Pages/MallsInCity";
import ShopkeeperLogin from "./Pages/ShopkeeperLogin";
import Advertise from "./Pages/Advertise";
import Privacy from "./Pages/Privacy";
import Mall from './Pages/Mall';
import "./style.css";
import "./input.css";
import "./animation.css";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Allblogs from "./Pages/Allblogs";
import ScrollToTop from "./Components/ScrollToTop";
import Shop from "./Pages/Shop";

function App ()
{
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
            <Route path="/mallsincity" element={<MallsInCity />} />
            <Route path="/mall" element={<Mall />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/shopkeeper-login" element={<ShopkeeperLogin />} />
            <Route path="/advertise" element={<Advertise />} />
            <Route path="/all-blogs" element={<Allblogs />} />
            <Route path="/shop" element={<Shop/>} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
