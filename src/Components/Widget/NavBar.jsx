import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
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
          {/* <li className="header__navigation-item">
            <div className="header__dropdown">
              <a href="#a" rel="noopener noreferrer" className="header__navigation-link">
               Ecosystem <FontAwesomeIcon icon={faChevronDown}/>
              </a>
              <div className="header__dropdown-content">
               <Link className='header__dropdown-link' to='api'>Api</Link>
               <Link className='header__dropdown-link' to='mobileapp'>Mobile App</Link>
               <Link className='header__dropdown-link' to='blockchain'>Blockchain</Link>
               <Link className='header__dropdown-link' to='crypto'>CryptoCurrency</Link>
               
              </div>
            </div>
          </li> */}
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
          {/* <li className="header__navigation-item">
            <Link to="login" className="header__navigation-link">
              Login
            </Link>
          </li> */}
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
