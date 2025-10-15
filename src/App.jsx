import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Services from './Services';
import Pricelist from './Pricelist';
import Review from './Review';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar /> {/* Har page pe show hoga */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='service' element={<Services />} ></Route>
          <Route path='price' element={<Pricelist/>}></Route>
          <Route path='review' element={<Review/>}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
