import React, { useEffect, useState } from 'react';

const LoginMetaMask = ({ setUserWalletAddress, setLoginButtonText }) => {
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

  return null;
};

export default LoginMetaMask;
