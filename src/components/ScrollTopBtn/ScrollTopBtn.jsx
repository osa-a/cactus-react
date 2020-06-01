import React from 'react';
import PropTypes from 'prop-types';
import './ScrollTopBtn.scss';

export class ScrollTopBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    // add listener on scroll 
    componentDidMount() {
        this.handleScroll();
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        // handle how much were scrolled 
        if (window.pageYOffset > this.props.showUnder) {
            // if enough show button 
            if (!this.state.show) {
                this.setState({ show: true });
            }
        } else {
            if (this.state.show) {
                this.setState({ show: false });
            }
        }
    }

    render() {
        return (
            <div onScroll={this.handleScroll}>
                <a href="#home" className={`body__scroll-top-btn body__scroll-top-btn-position ${this.state.show ? "body__scroll-top-btn--show" : ""}`}>🖢</a>
            </div>
        );
    }
}

ScrollTopBtn.propTypes = {
    // show button under this position
    showUnder: PropTypes.number.isRequired,
};