import React from 'react'
import '../../scss/Pages/Widgets/Navbar.scss'
const NavBar = () => {
  return (
    <>
      <header class="header">
            <a href="#home" class="header__logo">CryptoExtension</a>
            <ul class="header__navigation">
                <li class="header__navigation-item"><a href="#Home" rel="noopener noreferrer" class="header__navigation-link">Home</a></li>
                <li class="header__navigation-item"><a href="#Dashboard" rel="noopener noreferrer" class="header__navigation-link">Dashboard</a></li>
                <li class="header__navigation-item"><a href="#Download" rel="noopener noreferrer" class="header__navigation-link">Download</a></li>
                {/* <li class="header__navigation-item"><a href="#login" target="_blank" rel="noopener noreferrer" class="header__navigation-link">Login</a></li> */}
            </ul>
        </header>
    </>
  )
}

export default NavBar
