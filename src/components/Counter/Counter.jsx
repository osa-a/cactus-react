import React from 'react';
import CountUp from 'react-countup';

import './counter.scss';

export class Counter extends React.Component {

    render() {
        return (
            <div className="main__counter-container">
                <div className="main__counter-element">
                    <p className="main__counter-caption">
                        HAPPY CUSTOMERS
                    </p>
                    <CountUp className="main__counter-number" end={220} delay={1} duration={3.5} />
                </div>
                <div className="main__counter-element">
                    <p className="main__counter-caption">
                        PLANTS DELIVERED
                </p>
                    <CountUp className="main__counter-number" end={3476} delay={1} duration={3.5} />
                </div>
                <div className="main__counter-element">
                    <p className="main__counter-caption">
                        GLOBAL ACHIEVEMENTS
                    </p>
                    <CountUp className="main__counter-number" end={58} delay={1} duration={3.5} />
                </div>
                <div className="main__counter-element">
                    <p className="main__counter-caption">
                        PLANTS GROWN
                    </p>
                    <CountUp className="main__counter-number" end={5132} delay={1} duration={3.5} />
                </div>
            </div>
        );
    }
}