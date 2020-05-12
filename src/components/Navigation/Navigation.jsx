import React from 'react';
import './navigation.scss';

export class Navigation extends React.Component {
  render() {
    return (
      //сделать прилипающий меню-бар
      <nav className="header__navigation" >
        <div className="header__burger"></div>
        <div className="header__logo">DECO.</div>
        <ul className="header__nav-list">
          <li className="header__nav-list-item">HOME</li>
          <li className="header__nav-list-item"><a href="#about">ABOUT</a></li>
          <li className="header__nav-list-item">WORK</li>
          <li className="header__nav-list-item">SERVICES</li>
          <li className="header__nav-list-item">CONTACT</li>
        </ul>
      </nav>
    );
  }
}