import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Dashboard from "./Pages/Dashboard";
import Download from "./Pages/Download";
import './App.css';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="dashboard" element={<Dashboard />}/>
        <Route path="download" element={<Download />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;