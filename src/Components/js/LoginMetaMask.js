import { useEffect} from 'react';
import Web3 from 'web3';
// eslint-disable-next-line
const LoginMetaMask = ({ setUserWalletAddress, setLoginButtonText, setAccountBalance }) => {
  useEffect(() => {
    toggleButton();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleButton = () => {
    document.getElementById("loginButton").addEventListener("click", loginWithMetaMask);
  };

  const loginWithMetaMask = async () => {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      
      if (accounts && accounts.length > 0) {
        setUserWalletAddress(accounts[0]);
        setLoginButtonText("Se Déconnecter du Wallet");
        document.getElementById("loginButton").removeEventListener("click", loginWithMetaMask);
        setTimeout(() => {
          document.getElementById("loginButton").addEventListener("click", signOutOfMetaMask);
        });


        const web3 = new Web3(window.ethereum);
        const balance = await getAccountBalance(web3, accounts[0]);
        setAccountBalance(balance);
      } else {
        console.error("No accounts found.");
      }
    } catch (error) {
      console.error(error.message);
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

  const getAccountBalance = async (web3, account) => {
    try {
      const balance = await web3.eth.getBalance(account);
      return web3.utils.fromWei(balance);
    } catch (error) {
      console.error("Failed to fetch account balance:", error.message);
      return null;
    }
  };

  return null;
};

export default LoginMetaMask;
