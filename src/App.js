import React from "react";
import Home from "./Pages/Homepage/Home"
import SingleBlog from "./Pages/Blog/SingleBlog";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"
import CardOfShopkeeperLogin from "./Components/CardOfShopkeeperLogin";
import "./style.css"
import "./input.css"

function App() {
  return (
    <>
      <div className="font-poppins">
        <Navbar />
            <Home />
            <CardOfShopkeeperLogin />
        <Footer />
      </div>
    </>
  );
}

export default App;
