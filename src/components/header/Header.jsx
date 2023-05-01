import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div className='header'>       
      <img src={`icons/weather.png`} alt="" />

      <p>Get Your Weather Update</p>
    </div>
  );
}

export default Header;
