import React from 'react'
import { Navbar} from './Widget'


const HomePages = () => {
  return (
    <>
      <Navbar/>
      <div id='Home'/>
      <section className="home">
        <h1>CryptoExtension</h1>
        <p>C'est une extension Chrome, qui permet de voir le prix d'échange de deux paires de cryptomonnaies, l'extension est divisée en deux parties, l'extension en elle-même, et le site, qui permet de se connecter à son compte Metamask, et de pouvoir faire des virements directement depuis le site, tout passe par Metamask, et tout est instantané</p>
        <a href="#Download" className='home__link'>Download</a>
      </section>
      
    </>
  )
}

export default HomePages
