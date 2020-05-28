import React from 'react';
import './PlanCard.scss';

export class PlanCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const name = this.props.name;
        const price = this.props.price;
        const description = this.props.description;
        return (
            <div className="main__plan-card">
                <h4 className="main__plan-card-header">
                    {name}
                </h4>
                <p className="main__plan-card-price">
                    <span className="main__plan-card-price--dollar">$</span>
                    {price}
                    <span className="main__plan-card-price--month">/mo</span>
                </p>
                <div className="main__plan-card-description-container">
                    {
                        Object.keys(description).map((element) => (
                            <div key={element}>{description[element]}</div>
                        ))
                    }
                </div>
                <button className="main__plan-card-select-button"type="button">SELECT</button>
            </div>
        )
    }
}