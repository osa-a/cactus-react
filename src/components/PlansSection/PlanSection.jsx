import React from 'react';
import './PlanSection.scss';
import { PlanCard } from './PlanCard/PlanCard.jsx';

export class PlanSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const dataPlans = this.props.dataPlans;
        return (
            <div className="main__plans-container">
                <div className="main__plans-head">
                    <a className="main__plans-header" href="/#" name="services">PRICING PLANS</a>
                    <span className="main__plans-sub-header">FOR YOUR PLANTS</span>
                </div>
                <div className="main__plans-card-wrapper">
                    {
                        Object.keys(dataPlans).map((plan) => (
                            <PlanCard key={plan}
                                name={dataPlans[plan].name}
                                price={dataPlans[plan].price}
                                description={dataPlans[plan].description}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}