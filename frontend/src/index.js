import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './components/Menu';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
 <Menu />
 <Routes>
 <Route path="/" element={<App />} />
 
 </Routes>
 </BrowserRouter>
);