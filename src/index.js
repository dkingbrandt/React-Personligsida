import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Ocean from './components/ocean'
import Contact from './components/contact'
import Price from './components/price';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
   <Route path="/price" element={<Price />} />
    <Route path="/ocean" element={<Ocean />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

