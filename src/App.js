import React from 'react';
import SingleBlog from './Pages/Blog/SingleBlog';
import Faq from './Pages/Faq/Faq';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Homepage/Home';
import Navbar from './Components/Navbar';
import Privacy from './Pages/Privacy Policy/Privacy';
import Advertise from './Pages/Advertise/Advertise';
function App ()
{
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/blog' element={ <SingleBlog /> } />
          <Route path='/blog/:id' element={ <SingleBlog /> } />
          <Route path='/faq' element={ <Faq /> } />
          <Route path='/privacy-policy' element={ <Privacy /> } />
          <Route path='/contact-us' element />
          <Route path='/shopkeeper-login' element />
          <Route path='/advertise' element={ <Advertise /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
