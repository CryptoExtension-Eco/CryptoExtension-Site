import React, { useEffect, useState } from 'react'
const chip = require("../images/chip.png");
const visa = require("../images/visa.png");
const contactless = require("../images/wifi-signal.png")

// switch le js dans DashboardPageBack.js

const DashboardPages = () => {
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
  
    if (accounts && accounts.length > 0) {
      setUserWalletAddress(accounts[0]);
      setLoginButtonText("Se Déconnecter du Wallet");
      document.getElementById("loginButton").removeEventListener("click", loginWithMetaMask);
      setTimeout(() => {
        document.getElementById("loginButton").addEventListener("click", signOutOfMetaMask);
      });
    } else {
      console.error("No accounts found.");
    }
  };

  const signOutOfMetaMask = () => {
      setUserWalletAddress(null);
      setLoginButtonText("Connect to your wallet");
      document.getElementById("loginButton").removeEventListener("click", signOutOfMetaMask);
      setTimeout(() => {
          document.getElementById("loginButton").addEventListener("click", loginWithMetaMask);
      });
  };


  return (
    <>
      <div id="Dashboard" />
      <section className="dashboard wallet">
        <div className="contenu">
          <div className="" id="Wallet">
            <p id="userWallet" className="text-lg text-gray-600 my-2 ethAdresse"></p>
            <div className="card-container">
              <div className="card1">
                <img className="chip" src={chip} alt="" />
                <img className="contactless" src={contactless} alt="" />
                <img className="visa" src={visa} alt="" />
                <p id="test" className="card-number">{userWalletAddress}</p>
                <div className="arrow"></div>
                <p className="card-name">Ethereum</p>
                <p className="bank-name">CryptoBank</p>
              </div>
            </div>
            <p className="card-text">Le bouton ci-dessous permet de vous connecter à votre wallet Metamask. Il y aura bientôt la possibilité de choisir n'importe quel wallet.</p>
            <ul>
              <li><a href="#a" id="loginButton">{loginButtonText}</a></li>
            </ul>
          </div>

          <article className="add-wallet">
            <h2>Ajouter un wallet</h2>
            {/* Ajoutez ici le contenu pour ajouter un wallet */}
          </article>
        </div>
      </section>
    </>
  );
}  
  
export default DashboardPages
