import React from 'react';
import './navigation.scss';

export class Navigation extends React.Component {
  render() {
    return (
      //сделать прилипающий меню-бар*
      <nav className="header__navigation fixed-top">
        <div className="header__burger"></div>
        <div className="header__logo">DECO.</div>
        <ul className="header__nav-list">
          <li className="header__nav-list-item"><a href="#home">HOME</a> </li>
          <li className="header__nav-list-item"><a href="#about">ABOUT</a></li>
          <li className="header__nav-list-item"><a href="#work">WORK</a></li>
          <li className="header__nav-list-item"><a href="#services">SERVICES</a></li>
          <li className="header__nav-list-item"><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
    );
  }
}