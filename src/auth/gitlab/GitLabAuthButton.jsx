import React from 'react'

const GitLabAuthButton = () => {
    const handleFacebookLogin = () => {
        alert("gitlab");
        };
    
      return (
        <a href='#e' className="facebook-btn" onClick={handleFacebookLogin}>
          <span>Se Connecter avec Gitlab</span>
        </a>
      );
    }

export default GitLabAuthButton
