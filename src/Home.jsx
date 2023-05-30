import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

import './App.css'

const avtar = require ('./img/avatar.png')

const Home = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [textInput, setTextInput] = useState('');
  
    const handleChatClick = () => {
      setDialogOpen(true);
    };
  
    const handleCloseDialog = () => {
      setDialogOpen(false);
    };
  
    const handleInputChange = (event) => {
      setTextInput(event.target.value);
    };
  
    const handleSendMessage = () => {
      console.log('Message envoyé :', textInput);
      setTextInput('');
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          handleSendMessage();
        }
      };
    return (
        <>
            <header>
                <a href="#home" className="logo">CryptoExtension</a>
                <ul className="navigation">
                    <li><Link className="Link" to="/dashboard">Dashboard</Link></li>
                    <li><Link className="Link" to="/download">Download</Link></li>
                    <li><Link className="Link" to="/news">News</Link></li>
                    <li><Link className="Link" to="/login">Login</Link></li>
                    {/* <li><Link className="Link" to="/notfound">404</Link></li> */}
                </ul>
            </header>

            <div className="content">
                <h2 className="title">CryptoExtension</h2>
                <p className="paragraphe">C'est une extension Chrome, qui permet de voir le prix d'échange de deux paires de cryptomonnaies, l'extension est divisée en deux parties, l'extension en elle-même, et le site, qui permet de se connecter à son compte Metamask, et de pouvoir faire des virements directement depuis le site, tout passe par Metamask, et tout est instantané</p>
            </div>

            <div>
                <div className="chat" id="chat" onClick={handleChatClick}>
                    <img src={avtar} alt="" className="span"/>
                </div>
                {dialogOpen && (
                    <div className="dialog">
                        <div className="dialog-content">
                            <h1>CryptoExtension ChatBot</h1>
                            <button className="btn" onClick={handleCloseDialog}>&times;</button>
                            <div className="input-container">
                                <input
                                    type="text"
                                    placeholder="Écrire du texte..."
                                    value={textInput}
                                    onChange={handleInputChange}
                                    onKeyDown={handleKeyPress}
                                />
                                <i className="send-button" onClick={handleSendMessage}>
                                    <FontAwesomeIcon icon={faPaperPlane} className="send-icon" />
                                </i>
                            </div>
                        </div>
                    </div>
                )}
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