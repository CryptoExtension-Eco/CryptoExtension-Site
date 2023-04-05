import React from "react";


const FacebookAuthButton = () => {
  const handleFacebookLogin = () => {
    alert("Facebook");
  };

  return (
    <a href='#e' className="facebook-btn" onClick={handleFacebookLogin}>Se Connecter avec Facebook</a>
  );
};

export default FacebookAuthButton;