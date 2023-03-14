import React from "react";
import { Link } from "react-router-dom";
import './App.css'

const Home = () => {
    return (
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
                <h2 className="title">CryptoExtension</h2>
                <p className="paragraphe">C'est une extension Chrome, qui permet de voir le prix d'échange de deux paires de cryptomonnaies, l'extension est divisée en deux parties, l'extension en elle-même, et le site, qui permet de se connecter à son compte Metamask, et de pouvoir faire des virements directement depuis le site, tout passe par Metamask, et tout est instantané</p>
            </div>

            <footer className="footer">
                <p className="footer_title">CryptoExtension</p>
                <p className="copy">&#169; <span>copyright all reserved</span></p>
            </footer>
        </>
    )
}

export default Home;