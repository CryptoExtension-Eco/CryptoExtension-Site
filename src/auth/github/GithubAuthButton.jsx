import React from 'react'

const GithubAuthButton = () => {
const handleFacebookLogin = () => {
    alert("Github");
  };

  return (
    <a href='#e' className="facebook-btn" onClick={handleFacebookLogin}>
      <span>Se Connecter avec Github</span>
    </a>
  );
}

export default GithubAuthButton
