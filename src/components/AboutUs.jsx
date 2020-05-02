import React from 'react';

import '../sass/aboutUs.scss';

export class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            aboutData: {}
        };
    }

    componentDidMount() {
        fetch("../../public/dataAbout.json")
            .then(res => res.text())
            .then(text => console.log(text))
    }

    render() {
        return (
            <div>Hello</div>
        );
    }
}

