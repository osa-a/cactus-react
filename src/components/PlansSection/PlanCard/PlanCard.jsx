import React from 'react';
import ReactDOM from 'react-dom';
import './PlanCard.scss';
import { ModalForm } from '../../ModalForm/ModalForm';

export class PlanCard extends React.Component {

    showModal(e) {
        const patterns = this.props.patterns;
        const name = this.props.name;
        // create modal 
        const modal = <ModalForm event={e} patterns={patterns} name={name} />;
        const section = document.querySelector('.main__plans-section');
        const modalContainer = document.createElement('div');
        modalContainer.classList.add('main__subscription-form-container', 'main__subscription-form-container--overflow');
        section.appendChild(modalContainer);
        ReactDOM.render(modal, modalContainer);
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
                <div className="main__plan-card-description-container" >
                    {/* creating elements' description */}
                    {
                        Object.keys(description).map((element) => (
                            <div key={element}>{description[element]}</div>
                        ))
                    }
                </div>
                <button onClick={(e) => this.showModal(e)}
                    className="main__plan-card-select-button"
                    type="button">
                    SELECT
                </button>
            </div >
        )
    }
}