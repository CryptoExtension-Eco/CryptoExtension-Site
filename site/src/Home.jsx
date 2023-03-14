import React from "react";
import { Link } from "react-router-dom";
import './App.css'

const Home = () => {
    return (
        <>
            <header>
                <a href="#home">CryptoExtension</a>
                <ul className="navigation">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/download">Download</Link>
                    </li>
                </ul>
            </header>
        </>
    )
}

export default Home;