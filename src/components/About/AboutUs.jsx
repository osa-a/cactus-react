import React from 'react';

import './aboutUs.scss';

export class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            dataAbout: []
        };
    }

    componentDidMount() {
        fetch("./dataAbout.json")
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
                        <a href="/#" name="about" className="main__about-header">OUR AMBITION</a>
                        <p className="main__about-sub-header">is our weaponry</p>
                    </div>

                </section>

                // <ul>
                //   {dataAbout.map(item => (
                //     <li key={item.name}>
                //       {item.name}
                //     </li>
                //   ))}
                // </ul>
            );
        }
    }
}