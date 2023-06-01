import React, { useState } from 'react';
import '../../scss/Pages/Widgets/Navbar.scss';


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`header ${isMenuOpen ? 'header--open' : ''}`}>
        <a href="#Home" className="header__logo">
          CryptoExtension
        </a>
        <ul className={`header__navigation ${isMenuOpen ? 'header__navigation--open' : ''}`}>
          <li className="header__navigation-item">
            <a href="#Home" rel="noopener noreferrer" className="header__navigation-link">
              Home
            </a>
          </li>
          <li className="header__navigation-item">
            <a href="#Dashboard" rel="noopener noreferrer" className="header__navigation-link">
              Dashboard
            </a>
          </li>
          <li className="header__navigation-item">
            <a href="#Download" rel="noopener noreferrer" className="header__navigation-link">
              Download
            </a>
          </li>
        </ul>
        <button className={`header__burger ${isMenuOpen ? 'header__burger--open' : ''}`} onClick={handleMenuToggle}>
          <span className="header__burger-line"></span>
          <span className="header__burger-line"></span>
          <span className="header__burger-line"></span>
        </button>
      </nav>
    </>
  );
};

export default NavBar;
