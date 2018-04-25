import React from 'react';
import logo from './logo.svg'
import './Header.css';

const Header = () => {
  return (
    <div className ="Header" >
      <img src={logo} alt="Header" className="Header-logo"/>
    </div>
  );
}

export default Header;
