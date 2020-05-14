import React from 'react';

import './aboutUs.scss';

export class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            dataAbout: [],
            isActiveThinking: false,
            isActiveStrategy: true,
            isActiveSuccess: false,
        };
        this.handleClick = this.showDescription.bind(this);
    }

    showDescription(name, text) {
        switch (name) {
            case 'THINKING':
                this.setState(() => ({
                    isActiveThinking: true,
                    isActiveStrategy: false,
                    isActiveSuccess: false,
                }));
                break;
            case 'STRATEGY':
                this.setState(() => ({
                    isActiveThinking: false,
                    isActiveStrategy: true,
                    isActiveSuccess: false,
                }));
                break;
            case 'SUCCESS':
                this.setState(() => ({
                    isActiveThinking: false,
                    isActiveStrategy: false,
                    isActiveSuccess: true,
                }));
                break;
        }

        const element = document.querySelector('.main__about-list-element-content');
        element.innerHTML = "";
        const textContent = document.createElement('div');
        textContent.classList.add('main__about-list-element-text');
        textContent.innerHTML = text;
        element.appendChild(textContent);
    }

    componentDidMount() {
        fetch("./data.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        dataAbout: result.dataAbout
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {

        const { error, isLoaded, dataAbout } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <section className="main__about">
                    <div className="main__about-heading-wrapper">
                        <a href="#/" name="about"></a>
                        <h2 className="main__about-header main__about-headers-border">
                            OUR AMBITION
                        </h2>
                        <p className="main__about-sub-header">
                            is our weaponry
                        </p>
                    </div>
                    <div className="main__about-content">
                        <ul className="main__about-list">
                            <li className="main__about-list-element" key={dataAbout[0].name} onClick={() => this.showDescription(dataAbout[0].name, dataAbout[0].text)}>
                                <button className={`main__about-list-element-button  ${this.state.isActiveThinking ? "default-focus" : ""}`} type="button">{dataAbout[0].name}</button>
                                <div className={`${this.state.isActiveThinking ? "main__about-line--animation" : " "}`}></div>
                            </li>
                            <li className="main__about-list-element" key={dataAbout[1].name} onClick={() => this.showDescription(dataAbout[1].name, dataAbout[1].text)}>
                                <button className={`main__about-list-element-button ${this.state.isActiveStrategy ? "default-focus" : ""}`} type="button">{dataAbout[1].name}</button>
                                <div className={`${this.state.isActiveStrategy ? "main__about-line--animation" : ""}`}></div>
                            </li>
                            <li className="main__about-list-element" key={dataAbout[2].name} onClick={() => this.showDescription(dataAbout[2].name, dataAbout[2].text)}>
                                <button className={`main__about-list-element-button ${this.state.isActiveSuccess ? "default-focus" : ""}`} type="button">{dataAbout[2].name}</button>
                                <div className={`${this.state.isActiveSuccess ? "main__about-line--animation" : ""}`}></div>
                            </li>
                        </ul>
                        <div className="main__about-list-element-content">
                            <div className="main__about-list-element-text test">
                                {dataAbout[1].text}
                            </div>
                        </div>
                    </div>

                </section>
            );
        }
    }
}