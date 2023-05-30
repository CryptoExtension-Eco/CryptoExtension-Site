import React from 'react'
import { Link } from "react-router-dom";
import {Chat, Footer} from './Widget'
import '../App.css'


const News = () => {
  return (
    <>
        <header>
              <a href="#home" className="logo">CryptoExtension</a>
              <ul className="navigation">
                  <li><Link className="Link" to="/">Home</Link></li>
                  <li><Link  className="Link" to="/dashboard">Dashboard</Link></li>
                  <li><Link className="Link" to="/download">Download</Link></li>
                  {/* <li><Link className="Link" to="/login">Login</Link></li> */}
              </ul>
         </header> 
         <Chat/>
         <Footer/>
    </>
  )
}

export default News
