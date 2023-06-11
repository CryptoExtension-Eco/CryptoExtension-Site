import React from 'react'
import { Footer } from './Widget'


const DownloadPages = () => {

  return (
    <>
      <div id='Download'/>
      <section className="download">
        <h1>Télécharger l'extension</h1>
        <p>Pour télécharger l'extension, vous avez 2 choix, sois en passant par le boutton ci-dessous, sois en allant sur le chrome store</p>
        <a href="https://chrome.google.com/webstore/detail/cryptoextension/jbmpclggkoleafimiibabhiikdfidihf/related" target="_blank" rel="noopener noreferrer">Download</a>
      </section>
      {/* <ChatBot/> */}
      <Footer/>
    </>
  )
}

export default DownloadPages
