import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <header className="hero is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">天気とニュース</h1>
          <nav className="navbar">
            <div className="navbar-start">
            <Link to="/Home" className="navbar-item">ホーム</Link> 
              {}
              <Link to="/Page1" className="navbar-item"> 天気</Link>
              {}
              <Link to="/Page2" className="navbar-item">ニュース</Link> 
              {}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
