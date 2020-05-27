import React from 'react';
import  ScrollToTop from 'react-scroll-up'
import './ScrollTopBtn.scss';

export class ScrollTopBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasScrolled: false,
        }
    }

    render() {
        return (
            <ScrollToTop showUnder={250}>
                <div className="body__scroll-top-btn body__scroll-top-btn-position">🖢</div>
            </ScrollToTop>
        );
    }
}