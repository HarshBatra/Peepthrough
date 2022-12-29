import React from "react";
import Home from "./Pages/Home"
import SingleBlog from "./Pages/SingleBlog";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"
import Faq from "./Pages/Faq"
import ShopkeeperLogin from "./Pages/ShopkeeperLogin";
import Advertise from "./Pages/Advertise";
import Privacy from "./Pages/Privacy";
import "./style.css"
import "./input.css"
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="font-poppins">
        <Navbar />
          <Router>
            <Routes>
              <Route path='/' element = { <Home /> } />
              <Route path='/blog' element={ <SingleBlog /> } />
              <Route path='/blog/:id' element={ <SingleBlog /> } />
              <Route path='/faq' element={ <Faq /> } />
              <Route path='/privacy-policy' element = { <Privacy /> } />
              <Route path='/contact-us' element = { <Contact /> } />
              <Route path='/shopkeeper-login' element = { <ShopkeeperLogin /> } />
              <Route path='/advertise' element = { <Advertise /> } />
            </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
