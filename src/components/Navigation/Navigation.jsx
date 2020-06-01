import React from 'react';
import './navigation.scss';

export class Navigation extends React.Component {
  render() {
    return (
      //sliding from left menu-bar
      <nav className="header__navigation">
        <div className="header__burger"></div>
        <div className="header__logo"><a href="#home" name="home"> DECO.</a></div>
        <ul className="header__nav-list">
          <li className="header__nav-list-item"><a href="#about">ABOUT</a></li>
          <li className="header__nav-list-item"><a href="#team">TEAM</a></li>
          <li className="header__nav-list-item"><a href="#gallery">GALLERY</a></li>
          <li className="header__nav-list-item"><a href="#services">SERVICES</a></li>
          <li className="header__nav-list-item"><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
    );
  }
}