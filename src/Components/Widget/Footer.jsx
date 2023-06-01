import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
      <>
        <footer className="footer">
            <p className="footer__text">Copyright © 2023 Julien-Milants   |</p>
            <a href="https://github.com/NapoTwiixe306" target="_blank" rel="noopener noreferrer" className="footer__link footer__link--github">
                <FontAwesomeIcon icon={faGithub} size="2x" className="footer__icon footer__icon--github" />
            </a>
            <a href="https://CryptoExtension.fr" target="_blank" rel="noopener noreferrer" className="footer__link footer__link--google">
                <FontAwesomeIcon icon={faGoogle} size="2x" className="footer__icon footer__icon--google" />
            </a>
            <a href="https://www.instagram.com/julien.mlnts/" target="_blank" rel="noopener noreferrer" className="footer__link footer__link--instagram">
                <FontAwesomeIcon icon={faInstagram} size="2x" className="footer__icon footer__icon--instagram" />
            </a>
        </footer>
      </>
    )
}

export default Footer
