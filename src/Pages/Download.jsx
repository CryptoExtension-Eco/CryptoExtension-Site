import React from "react";
import { Link } from "react-router-dom";
import '../App.css'
import {Chat, Footer} from './Widget'

const Download = () => {
    return(
        <>
            <header>
                <a href="#home" className="logo">CryptoExtension</a>
                <ul className="navigation">
                    <li><Link className="Link" to="/">Home</Link></li>
                    <li><Link className="Link" to="/dashboard">Dashboard</Link></li>
                    <li><Link className="Link" to="/download">Download</Link></li>
                    {/* <li><Link className="Link" to="/login">Login</Link></li> */}
                </ul>
            </header>   

            <div className="content">
                <h2 className="title">Télécharger l'extension</h2>
                <p className="paragraphe">Pour télécharger l'extension, vous avez 2 choix, sois en passant par le boutton ci-dessous, sois en allant sur le chrome store</p>
                <a href="https://chrome.google.com/webstore/detail/cryptoextension/jbmpclggkoleafimiibabhiikdfidihf/related" target="_blank" rel="noreferrer" className="button">Télécharger</a>
            </div>
            <Chat/>
            <Footer/>
        </>
    );
}

export default Download;