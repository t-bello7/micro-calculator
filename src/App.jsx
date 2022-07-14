import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Calculator from "./components/Calculator";
import Navbar from './components/Navbar';

import Home from "./pages/Home";
import Quote from './pages/Quote';
import NotFound from './pages/NotFound';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>     
          <Route path="/" element={<Home/>}/>
          <Route path="calculator" element={<Calculator/>}/> 
          <Route path="quote" element={<Quote/>}/>
          <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
