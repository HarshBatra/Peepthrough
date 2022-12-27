import React from 'react';
import SingleBlog from './Pages/Blog/SingleBlog';
import Faq from './Pages/Faq/Faq';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App ()
{
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element />
          <Route path='/blog' element={ <SingleBlog /> } />
          <Route path='/blog/:id' element={ <SingleBlog /> } />
          <Route path='/faq' element={ <Faq /> } />
          <Route path='/privacy-policy' element />
          <Route path='/contact-us' element />
          <Route path='/shopkeeper-login' element />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
