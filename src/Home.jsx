import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

import './App.css'

const Home = () => {
   
    return (
        <>
            <header>
                <a href="#home" className="logo">CryptoExtension</a>
                <ul className="navigation">
                    <li><Link className="Link" to="/dashboard">Dashboard</Link></li>
                    <li><Link className="Link" to="/download">Download</Link></li>
                    {/* <li><Link className="Link" to="/login">Login</Link></li> */}
                    <li><Link className="Link" to="/news">News</Link></li>
                    <li><Link className="Link" to="/notfound">404</Link></li>
                </ul>
            </header>

            <div className="content">
                <h2 className="title">CryptoExtension</h2>
                <p className="paragraphe">C'est une extension Chrome, qui permet de voir le prix d'échange de deux paires de cryptomonnaies, l'extension est divisée en deux parties, l'extension en elle-même, et le site, qui permet de se connecter à son compte Metamask, et de pouvoir faire des virements directement depuis le site, tout passe par Metamask, et tout est instantané</p>
            </div>

            <div className="footer">
                <p className='footer_text'>Copyright © 2023 Julien-Milants   |</p>
                <a href='https://github.com/NapoTwiixe306' target="_blank" rel='noopener noreferrer' className='lofo'><FontAwesomeIcon icon={faGithub} size="2x" className='github'/></a>
                <a href='https://CryptoExtension.fr' target="_blank" rel='noopener noreferrer' className='lofo'><FontAwesomeIcon icon={faGoogle} size="2x" className='github'/></a>
                <a href='https://www.instagram.com/julien.mlnts/' target="_blank" rel='noopener noreferrer' className='lofo'><FontAwesomeIcon icon={faInstagram} size="2x" className='github'/></a>
            </div>
           
        </>
    )
}

export default Home;