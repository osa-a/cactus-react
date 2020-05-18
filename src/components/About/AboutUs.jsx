import React from 'react';

import './aboutUs.scss';

export class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            '6j7': false,
            '45g': true,
            'gr09': false,
        };
        this.handleClick = this.switchDescription.bind(this);
    }

    switchDescription(event, text) {
        const dataAbout = this.props.dataAbout;
        const element = event.target.getAttribute('data-id');
        if (!element) {
            return;
        }
        for (let key in dataAbout) {
            if (element === key) {
                this.setState(() => ({
                    [key]: true,
                }));
            } else {
                this.setState(() => ({
                    [key]: false,
                }));
            }
        }
        const elementContent = document.querySelector('.main__about-list-element-content');
        elementContent.innerHTML = "";
        const textContent = document.createElement('div');
        textContent.classList.add('main__about-list-element-text');
        textContent.innerHTML = text;
        elementContent.appendChild(textContent);
    }

    render() {
        const dataAbout = this.props.dataAbout;
        return (
            <section className="main__about">
                <div className="main__about-heading-wrapper">
                    <a href="#/" name="about" className="main__about-header main__about-headers-border">
                        OUR AMBITION
                    </a>
                    <span className="main__about-sub-header">
                        is our weaponry
                    </span>
                </div>
                <div className="main__about-content">
                    <ul className="main__about-list" >
                        {Object.keys(dataAbout).map(item => (
                            <li key={item} className="main__about-list-element" onClick={(e) => this.switchDescription(e, dataAbout[item].text)}>
                                <button data-id={item} className={`${this.state[item] ? "default-focus" : ""} main__about-list-element-button`} type="button">
                                    {dataAbout[item].name}
                                </button>
                                <div className={`${this.state[item] ? "main__about-line--animation" : ""}`} />
                            </li>
                        ))}
                    </ul>
                    <div className="main__about-list-element-content">
                        <div className="main__about-list-element-text">
                            {dataAbout['45g'].text}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}