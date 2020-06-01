import React from 'react';
import './PlanSection.scss';
import { PlanCard } from './PlanCard/PlanCard.jsx';

export class PlanSection extends React.Component {

    render() {
        const dataPlans = this.props.dataPlans;
        const patterns = this.props.patterns;
        return (
            <section className="main__plans-section">
                <div className="main__plans-head">
                    <a className="main__plans-header" href="/#" name="services">PRICING PLANS</a>
                    <span className="main__plans-sub-header">FOR YOUR PLANTS</span>
                </div>
                <div className="main__plans-card-wrapper">
                    {/* creating plan cards */}
                    {
                        Object.keys(dataPlans).map((plan) => (
                            <PlanCard key={plan}
                                name={dataPlans[plan].name}
                                price={dataPlans[plan].price}
                                description={dataPlans[plan].description}
                                patterns={patterns}
                            />
                        ))
                    }
                </div>
            </section>
        );
    }
}