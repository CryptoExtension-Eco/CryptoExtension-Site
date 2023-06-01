import React from 'react'
import '../../scss/Pages/Widgets/Navbar.scss'
const NavBar = () => {
  return (
    <>
      <nav className="header">
            <a href="#home" className="header__logo">CryptoExtension</a>
            <ul className="header__navigation">
                <li className="header__navigation-item"><a href="#Home" rel="noopener noreferrer" className="header__navigation-link">Home</a></li>
                <li className="header__navigation-item"><a href="#Dashboard" rel="noopener noreferrer" className="header__navigation-link">Dashboard</a></li>
                <li className="header__navigation-item"><a href="#Download" rel="noopener noreferrer" className="header__navigation-link">Download</a></li>
                {/* <li className="header__navigation-item"><a href="#login" target="_blank" rel="noopener noreferrer" className="header__navigation-link">Login</a></li> */}
            </ul>
        </nav>
    </>
  )
}

export default NavBar
