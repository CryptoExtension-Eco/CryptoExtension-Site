import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Dashboard from "./Pages/Dashboard";
import Download from "./Pages/Download";
import News from "./Pages/News";
import Login from  './Pages/Login'
import NotFound from  './Pages/Error/NotFound'
// import Chat from "./Pages/Chat";
import './App.css';


const App = () => {
  return(
  <>
  
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        {/* <Route exact path="/" element={<Chat/>}/> */}
        <Route exact path="dashboard" element={<Dashboard />}/>
        <Route exact path="download" element={<Download />}/>
        <Route exact path="login" element={<Login />}/>
        <Route exact path="news" element={<News/>}/>
        <Route exact path="notfound" element={<NotFound/>}/>       
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App;