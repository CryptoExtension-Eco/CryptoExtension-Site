import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebook, faGithub, faMailchimp, faInstagram } from '@fortawesome/free-brands-svg-icons'

import './App.css'

const Home = () => {
    
    const [modal, setModal] = useState(false);
    const [secondModal, setSecondModal] = useState(false);
    const [troisModal, setTroisModal] = useState(false);


    const toggleModal = () => {
      setModal(!modal);
    };
  
    useEffect(() => {
        if (modal || secondModal || troisModal) {
          document.body.classList.add('active-modal');
        } else {
          document.body.classList.remove('active-modal');
        }
      }, [modal, secondModal, troisModal]);

    return (
        <>
            <header>
                <a href="#home" className="logo">CryptoExtension</a>
                <ul className="navigation">
                    <li><Link className="Link" to="/">Home</Link></li>
                    <li><Link className="Link" to="/dashboard">Dashboard</Link></li>
                    <li><Link className="Link" to="/download">Download</Link></li>
                    <li><a href="#a" className="Link" onClick={toggleModal}>Connexion</a></li>
                </ul>
            </header>

            <div className="content">
                <h2 className="title">CryptoExtension</h2>
                <p className="paragraphe">C'est une extension Chrome, qui permet de voir le prix d'échange de deux paires de cryptomonnaies, l'extension est divisée en deux parties, l'extension en elle-même, et le site, qui permet de se connecter à son compte Metamask, et de pouvoir faire des virements directement depuis le site, tout passe par Metamask, et tout est instantané</p>
            </div>

            {modal && (
            <div className="modal" id="modal">
            <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                    <h2 className="text-modal">Connectez-vous</h2>
                    <li className="social"><a href="#a"><FontAwesomeIcon icon={faGoogle} className="i" /> Se Connecter avec Google</a></li>
                    <li className="social"><a href="#a"><FontAwesomeIcon icon={faFacebook} className="i"/> Se Connecter avec Facebook</a></li>
                    <li className="social"><a href="#a" id="githubButton"><FontAwesomeIcon icon={faGithub}  /> Se Connecter avec Github</a></li>        
                    <li className="socials"> <a href="#test" onClick={() => setSecondModal(true)}><FontAwesomeIcon icon={faMailchimp} className="i"/> Se Connecter avec votre E-Mail</a></li>
                    <p className="createA">vous n'avez pas de compte, <a href="#test" >créez-en un</a> maintenant</p>
                    <button className="close-modal" onClick={toggleModal}>&times;</button>
                </div>
            </div>
            )}
            {secondModal && (
                <div className="modal" id="test-modal">
                    <div onClick={() => setSecondModal(false)} className="overlay"></div>
                        <div className="modal-content">
                        <h1>Se connecter avec votre adresse e-mail</h1>
                            <form action="">
                                <label htmlFor="email">E-mail</label>
                                <input type="email" name="email" placeholder="Entrez votre adresse e-mail" required/>
                                <label htmlFor="password">Mot de passe</label>
                                <input type="password" name="password" placeholder="Votre mot de passe" required/>
                                <button type="submit">Se connecter</button>
                                <p className="createA">Vous n'avez pas de compte ? <a href="#a" onClick={() => setTroisModal(true)}>Créez-en un</a> maintenant.</p>
                                <p className="createA"><a href="#a">Mot de passe oublié</a> ?</p>
                            </form>
                         <button className="close-modal" onClick={() => setSecondModal(false)}>&times;</button>
                    </div>
                </div>
            )}
            {troisModal && (
                <div className="modal" id="trois-modal">
                    <div onClick={() => setTroisModal(false)} className="overlay"></div>
                    <div className="modal-content">
                    <h1>Créer un compte</h1>
                    <form action="">
                        <label htmlFor="name">Nom complet</label>
                        <input type="text" name="name" placeholder="Entrez votre nom complet" required/>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" placeholder="Entrez votre adresse e-mail" required/>
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" name="password" placeholder="Entrez votre mot de passe" required/>
                        <button type="submit">Créer un compte</button>
                        <p className="createA">Déjà un compte ? <a href="#a">Connectez-vous</a>.</p>
                    </form>
                    <button className="close-modal" onClick={() => setTroisModal(false)}>&times;</button>
                    </div>
                </div>
            )}

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