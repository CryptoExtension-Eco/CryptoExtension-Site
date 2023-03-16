import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../App.css'

const Download = () => {
    return(
        <>
            <header>
                <a href="#home" className="logo">CryptoExtension</a>
                <ul className="navigation">
                    <li><Link className="Link" to="/">Home</Link></li>
                    <li><Link className="Link" to="/dashboard">Dashboard</Link></li>
                    <li><Link className="Link" to="/download">Download</Link></li>
                </ul>
            </header>   

            <div className="content">
                <h2 className="title">Hello</h2>
                <p className="paragraphe">World, test, je sais pas si ça marche, sah</p>
            </div>

            <div className="footer">
                <p className='footer_text'>Copyright © 2023 Julien-Milants   |</p>
                <a href='https://github.com/NapoTwiixe306' target="_blank" rel='noopener noreferrer' className='lofo'><FontAwesomeIcon icon={faGithub} size="2x" className='github'/></a>
                <a href='https://CryptoExtension.fr' target="_blank" rel='noopener noreferrer' className='lofo'><FontAwesomeIcon icon={faGoogle} size="2x" className='github'/></a>
                <a href='https://www.instagram.com/julien.mlnts/' target="_blank" rel='noopener noreferrer' className='lofo'><FontAwesomeIcon icon={faInstagram} size="2x" className='github'/></a>
            </div>
        </>
    );
}

export default Download;