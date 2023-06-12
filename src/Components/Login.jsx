import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Components/Widget/NavBar';
import '../Components/Widget/Footer';
import '../scss/Pages/Login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import NavBar from '../Components/Widget/NavBar';

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(true);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4500/auth/login', loginData);
      console.log('Login Successful!');
      console.log('Email:', loginData.email);
      console.log('Password:', loginData.password);
      console.log(response.data);
    } catch (error) {
      console.error('Login Failed!');
      console.error(error);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4500/auth/register', registerData);
      console.log('Registration Successful!');
      console.log('Name:', registerData.name);
      console.log('Email:', registerData.email);
      console.log('Password:', registerData.password);
      console.log(response.data);
    } catch (error) {
      console.error('Registration Failed!');
      console.error(error);
    }
  };

  const handleLoginInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterInputChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleToggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  const handleFacebookButton = () => {
    alert('FaceBook');
  };

  const handleGoogleButton = () => {
    alert('Google');
  };

  const handleGithubButton = () => {
    alert('GitHub');
  };

  return (
    <>
      <NavBar />
      <div className="login">
        <div className="form-container">
          <h2 className="h2">{isRegistering ? 'Register' : 'Login'}</h2>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebookF} className="icon" onClick={handleFacebookButton} />
            <FontAwesomeIcon icon={faGoogle} className="icon" onClick={handleGoogleButton} />
            <FontAwesomeIcon icon={faGithub} className="icon" onClick={handleGithubButton} />
          </div>
          <form onSubmit={isRegistering ? handleRegisterSubmit : handleLoginSubmit}>
            {isRegistering && (
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleRegisterInputChange}
                  value={registerData.name}
                  placeholder="Name..."
                  required
                />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="email" id=''>Email:</label>
              <input
                type="email"
                name="email"
                onChange={isRegistering ? handleRegisterInputChange : handleLoginInputChange}
                value={isRegistering ? registerData.email : loginData.email}
                placeholder="Email..."
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                onChange={isRegistering ? handleRegisterInputChange : handleLoginInputChange}
                value={isRegistering ? registerData.password : loginData.password}
                placeholder="Password..."
                required
              />
            </div>
            <button className="logre" type="submit">
              {isRegistering ? 'Register' : 'Login'}
            </button>
          </form>
          <button onClick={handleToggleRegister} className="btn-form">
            {isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
          </button>
          <Link to="/" className="HomeLink">
            Back To Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
