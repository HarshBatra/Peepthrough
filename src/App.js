import React from "react";
import Home from "./Pages/Homepage/Home"
import SingleBlog from "./Pages/Blog/SingleBlog";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"
import "./style.css"
import "./input.css"

function App() {
  return (
    <>
    <Navbar />
      <div className="font-poppins">
        {/* <SingleBlog /> */}
        <Home />
      </div>
    <Footer />
    </>
  );
}

export default App;
