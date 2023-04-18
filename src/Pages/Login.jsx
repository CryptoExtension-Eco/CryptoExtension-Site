import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';

import '../App.css';

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });

  const handleLoginSubmit = e => {
    e.preventDefault();
    // Do something with loginData
    console.log(loginData);
  };

  const handleRegisterSubmit = e => {
    e.preventDefault();
    // Do something with registerData
    console.log(registerData);
  };

  const handleLoginInputChange = e => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterInputChange = e => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleToggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <>
      <header>
        <a href="#home" className="logo">CryptoExtension</a>
        <ul className="navigation">
          <li><Link className="Link" to="/">Home</Link></li>
          <li><Link className="Link" to="/dashboard">Dashboard</Link></li>
          <li><Link className="Link" to="/download">Download</Link></li>
        </ul>
      </header>

      <div className="form-container">
        <h2 className='h2'>{isRegistering ? 'Register' : 'Login'}</h2>
        <div className="social-icons">
          <FontAwesomeIcon icon={faFacebookF} className="icon"/>
          <FontAwesomeIcon icon={faGoogle} className="icon"/>
          <FontAwesomeIcon icon={faGithub} className="icon"/>
        </div>
        <form onSubmit={isRegistering ? handleRegisterSubmit : handleLoginSubmit}>
          {isRegistering && (
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" onChange={handleRegisterInputChange} value={registerData.name} placeholder='Name...' required/>
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" onChange={isRegistering ? handleRegisterInputChange : handleLoginInputChange} value={isRegistering ? registerData.email : loginData.email} placeholder='Email...' required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" onChange={isRegistering ? handleRegisterInputChange : handleLoginInputChange} value={isRegistering ? registerData.password : loginData.password} placeholder='PassWord...' required/>
          </div>
          <button className='logre' type="submit">{isRegistering ? 'Register' : 'Login'}</button>
        </form>
        <button onClick={handleToggleRegister} className='btn-form'>
          {isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
        </button>
      </div>
    </>
  );
};

export default Login;
