import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import chip from '../img/chip.png';
import contactless from '../img/wifi-signal.png'
import visa from '../img/visa.png'
import '../App.css'

const Dashboard = () => {

    const [userWalletAddress, setUserWalletAddress] = useState(null);
    const [loginButtonText, setLoginButtonText] = useState("Connect to your wallet")

    useEffect(() => {
        toggleButton();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const toggleButton = () => {
        document.getElementById("loginButton").addEventListener("click", loginWithMetaMask);
    };

    const loginWithMetaMask = async () => {
        const accounts = await window.ethereum
        .request({ method: "eth_requestAccounts" })
        .catch(e => {
            console.error(e.message);
    });

        setUserWalletAddress(accounts[0]);
        setLoginButtonText("Se Déconnecter du Wallet");
        document.getElementById("loginButton").removeEventListener("click", loginWithMetaMask);
        setTimeout(() => {
            document.getElementById("loginButton").addEventListener("click", signOutOfMetaMask);
        });
    };

    const signOutOfMetaMask = () => {
        setUserWalletAddress(null);
        setLoginButtonText("Connect to your wallet");
        document.getElementById("loginButton").removeEventListener("click", signOutOfMetaMask);
        setTimeout(() => {
            document.getElementById("loginButton").addEventListener("click", loginWithMetaMask);
        });
    };

    return(
        <>
         <header>
                <a href="#home" className="logo">CryptoExtension</a>
                <ul className="navigation">
                    <li><Link className="Link" to="/">Home</Link></li>
                    <li><Link className="Link" to="/dashboard">Dashboard</Link></li>
                    <li><Link className="Link" to="/download">Download</Link></li>
                    <li><Link className="Link" to="/login">Login</Link></li>
                    <li className="Link"><a href="#a" id="loginButton" className="Link">{loginButtonText}</a></li>
                </ul>
            </header>   
        
                <div className="contenu">
                    <div className="wallet" id="Wallet">
                        <p id="userWallet" className="text-lg text-gray-600 my-2 ethAdresse"></p>
                        <div className="card-container">
                            <div className="card1">
                                <img className="chip" src={chip}alt=""/>
                                <img className="contactless" src={contactless} alt=""/>
                                <img className="visa" src={visa} alt="" />
                                <p id="test" className="card-number">{userWalletAddress}</p>
                                <div className="arrow">
                                </div>
                                <p className="card-name">Ethereum</p>
                                <p className="bank-name">CryptoBank</p>
                            </div>
                        </div>
                        <p className="card-text">le bouton ci-dessous, permet de vous connecter à votre wallet metamask, il y aura bientôt la possibilité de choisir n'importe quel wallet</p>
                    </div>
                </div>


                {/* Ajouter  une fonciton pour voir le solde actuel du compte metamask
                    ainsi que les denrieres transactions effectuées 
                    
                    Permettre à l'utilisateur d'acheter ou de vendre des crypto-monnaies 
                    directement depuis votre application en utilisant leur compte Metamask.

                    Ajouter des fonctionnalités de portefeuille crypto pour permettre à l'utilisateur
                     de suivre ses investissements et de surveiller ses gains et pertes.

                    Intégrer des outils de recherche de marché pour aider 
                    l'utilisateur à trouver de nouvelles opportunités d'investissement.

                    Proposer des actualités sur les crypto-monnaies 
                    et les derniers développements de l'industrie.

                    Offrir une fonctionnalité de chat en direct pour permettre aux utilisateurs 
                    de discuter entre eux et de poser des questions à l'équipe de support.
                */}

            <div className="footers">
                <p className='footer_text'>Copyright © 2023 Julien-Milants   |</p>
                <a href='https://github.com/NapoTwiixe306' target="_blank" rel='noopener noreferrer' className='lofo'><FontAwesomeIcon icon={faGithub} size="2x" className='github'/></a>
                <a href='https://CryptoExtension.fr' target="_blank" rel='noopener noreferrer' className='lofo'><FontAwesomeIcon icon={faGoogle} size="2x" className='github'/></a>
                <a href='https://www.instagram.com/julien.mlnts/' target="_blank" rel='noopener noreferrer' className='lofo'><FontAwesomeIcon icon={faInstagram} size="2x" className='github'/></a>
            </div>
        </>
    );
}

export default Dashboard;