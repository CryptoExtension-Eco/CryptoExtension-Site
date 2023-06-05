import React, { useState } from 'react';
import LoginMetaMask from './js/LoginMetaMask';
const chip = require("../images/chip.png");
const visa = require("../images/visa.png");
const contactless = require("../images/wifi-signal.png");

const DashboardPages = () => {
  const [userWalletAddress, setUserWalletAddress] = useState(null);
  const [loginButtonText, setLoginButtonText] = useState("Connect to your wallet");
  const [accountBalance, setAccountBalance] = useState(null);

  const handleLogout = () => {
    setUserWalletAddress(null);
    setLoginButtonText("Connect to your wallet");
    setAccountBalance(null);
  };

  return (
    <>
      <div id="Dashboard" />
      <section className="dashboard wallet">
        <div className="contenu">
          <LoginMetaMask setUserWalletAddress={setUserWalletAddress} setLoginButtonText={setLoginButtonText} setAccountBalance={setAccountBalance} />
          <div id="Wallet">
            <p id="userWallet" className="text-lg text-gray-600 my-2 ethAdresse"></p>
            <div className="card-container">
              <div className="card1">
                <img className="chip" src={chip} alt="" />
                <img className="contactless" src={contactless} alt="" />
                <img className="visa" src={visa} alt="" />
                <p id="test" className="card-number">{userWalletAddress}</p>
                {userWalletAddress && (
                <p id="accountBalance">Balance: {accountBalance} ETH</p>
              )}
                <div className="arrow"></div>
                <p className="card-name">Ethereum</p>
                <p className="bank-name">CryptoBank</p>
              </div>
            </div>
            <p className="card-text">Le bouton ci-dessous permet de vous connecter à votre wallet Metamask. Il y aura bientôt la possibilité de choisir n'importe quel wallet.</p>
            <ul>
              <li><a href="#a" id="loginButton" onClick={userWalletAddress ? handleLogout : null}>{loginButtonText}</a></li>
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
};

export default DashboardPages;
