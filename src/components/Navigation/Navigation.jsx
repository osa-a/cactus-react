import React from 'react';
import './navigation.scss';

export class Navigation extends React.Component {
  render() {
    return (
      //сделать выдвигающийся слева меню бар на мобилах
      <nav className="header__navigation">
        <div className="header__burger"></div>
        <div className="header__logo"><a href="#home"> DECO.</a></div>
        <ul className="header__nav-list">
          <li className="header__nav-list-item"><a href="#about">ABOUT</a></li>
          <li className="header__nav-list-item"><a href="#team">OUR TEAM</a></li>
          <li className="header__nav-list-item"><a href="#work">WORK</a></li>
          <li className="header__nav-list-item"><a href="#services">SERVICES</a></li>
          <li className="header__nav-list-item"><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
    );
  }
}