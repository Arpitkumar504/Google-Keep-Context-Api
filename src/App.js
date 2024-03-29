import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/Home.js'
import Nopage from './page/Nopage.js'
import Headerkeep from './component/Headerkeep.js';
import Footer from './component/Footer.js';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Headerkeep name="Arpit Keep" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App