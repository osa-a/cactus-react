import React from 'react';

import './aboutUs.scss';

export class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            '6j7': false,
            '45g': true,
            'gr09': false,
            '8g9': false
        };
    }

    switchDescription(event, text) {
        const dataAbout = this.props.dataAbout;
        const element = event.target.getAttribute('data-id');
        if (!element) {
            return;
        }
        /*change state of each description to show correct one*/
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

        /*create description content block*/
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
                    <a href="#/" name="about" className="main__about-header">
                        OUR AMBITION
                    </a>
                    <span className="main__about-sub-header">
                        IS OUR WEAPONRY
                    </span>
                </div>
                <div className="main__about-content">
                    <ul className="main__about-list" >
                        {/* creating list of description buttons */}
                        {Object.keys(dataAbout).map((item) => (
                            <li
                                key={item}
                                className="main__about-list-element"
                                onClick={(e) => this.switchDescription(e, dataAbout[item].text)}>
                                <button
                                    data-id={item}
                                    /*base on chosen description add focus color to button*/
                                    className={`${this.state[item] ? "default-focus" : ""} main__about-list-element-button`}
                                    type="button">
                                    {dataAbout[item].name}
                                </button>
                                {/* base on chosen description add animated bottom line */}
                                <div className={`${this.state[item] ? "main__about-line--animation" : ""}`} />
                            </li>
                        ))}
                    </ul>
                    <div className="main__about-list-element-content">
                        {/* show description text */}
                        <div className="main__about-list-element-text">
                            {dataAbout['6j7'].text}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}