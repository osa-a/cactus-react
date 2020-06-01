import React from 'react';
import './modalForm.scss';

export class ModalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            address: '',
            city: '',
            country: '',
            phone: '',
            email: '',
            card: '',
            cvv: '',
            expiration: ''
        };
        this.isValid = {
            name: false,
            surname: false,
            address: false,
            city: false,
            country: false,
            phone: false,
            email: false,
            card: false,
            cvv: false,
            expiration: false
        };

        this.validation = this.validation.bind(this);
        this.submit = this.submit.bind(this);
    }

    closeModal() {
        const modal = document.querySelector('.main__subscription-form-container');
        modal.remove();
    }

    validation(event) {
        const patterns = this.props.patterns;
        const attribute = event.target.getAttribute('name');
        const value = event.target.value;
        // update the state according to changed elements' value 
        this.setState({ [attribute]: [value] });
        //validation
        let test = (patterns[attribute].test(value));
        if (!test) {
            //set false if this input is invalid (for submit)
            this.isValid[attribute] = false;
            event.target.classList.remove('main__subscription-form-valid');
            event.target.classList.add('main__subscription-form-invalid');
        } else {
            //set true if this input is valid (for submit)
            this.isValid[attribute] = true;
            event.target.classList.remove('main__subscription-form-invalid');
            event.target.classList.add('main__subscription-form-valid');
        }
    }

    //! PlanCard.jsx isModalVisible: false (not done)
    //!check why this still submit with failed validation 
    submit() {
        //checking every state in IsValid object if even one is false, return
        for (let key in this.isValid) {
            if (!this.isValid[key]) {
                return;
            }
            else {
                document.getElementById("subscriptionForm").submit();
            }
        }
    }

    render() {
        return (
            <form name="subscriptionForm" id="subscriptionForm" className="main__subscription-form">
                <button className="main__subscription-form-button main__subscription-form-close-button main__subscription-form-close-button-position"
                    onClick={this.closeModal}>
                    ╳
                    </button>
                <fieldset className="main__subscription-form-content">
                    <legend className="main__subscription-form-legend">SUBSCRIPTION FORM</legend>
                    <div className="main__subscription-form-name-content" >
                        <input
                            value={this.state.name}
                            // handle value change
                            onChange={this.validation}
                            name="name"
                            className="main__subscription-form-input main__subscription-form-input--size"
                            type="text"
                            placeholder="John"
                        />
                        <input
                            value={this.state.surname}
                            onChange={this.validation}
                            name="surname"
                            className="main__subscription-form-input main__subscription-form-input--size"
                            type="text"
                            placeholder="Doe"
                        />
                    </div>
                    <div className="main__subscription-form-country-content">
                        <input
                            value={this.state.country}
                            onChange={this.validation}
                            name="country"
                            className="main__subscription-form-input main__subscription-form-input--size"
                            type="text"
                            placeholder="Ukraine"
                        />
                        <input
                            value={this.state.city}
                            onChange={this.validation}
                            name="city"
                            className="main__subscription-form-input main__subscription-form-input--size"
                            type="text"
                            placeholder="Odessa"
                        />
                    </div>
                    <input
                        value={this.state.address}
                        onChange={this.validation}
                        name="address"
                        className="main__subscription-form-input main__subscription-form-input-width"
                        type="text"
                        placeholder="65012 Vice Admirala Azarova str./13" />
                    <input
                        value={this.state.email}
                        onChange={this.validation}
                        name="email"
                        className="main__subscription-form-input main__subscription-form-input-width"
                        type="email"
                        placeholder="example@gmail.com" />
                    <input
                        value={this.state.phone}
                        onChange={this.validation}
                        name="phone"
                        className="main__subscription-form-input main__subscription-form-input-width"
                        type="tel"
                        placeholder="+38(011)11-11-11" />
                    <div className="main__subscription-form-selections-container">
                        <div className="main__subscription-form-select-wrapper">
                            <label className="main__subscription-form-select-label"
                                htmlFor="timeSelect">
                                Delivery time
                                </label>
                            <select className="main__subscription-form-select" id="timeSelect">
                                <option value="9am">9am</option>
                                <option value="12pm">12pm</option>
                                <option value="3pm">3pm</option>
                                <option value="6pm">6pm</option>
                            </select>
                        </div>
                        <div className="main__subscription-form-select-wrapper">
                            <label className="main__subscription-form-select-label"
                                htmlFor="daySelect">
                                Delivery day
                                </label>
                            <select className="main__subscription-form-select" id="daySelect">
                                <option value="">Saturday</option>
                                <option value="">Sunday</option>
                            </select>
                        </div>
                        <div className="main__subscription-form-select-wrapper">
                            <label className="main__subscription-form-select-label"
                                htmlFor="typeSelect">
                                Plant type
                                </label>
                            <select className="main__subscription-form-select" id="typeSelect">
                                <option value="">Cactus</option>
                                <option value="">Flower</option>
                                <option value="">Succulent</option>
                                <option value="">Plant</option>
                            </select>
                        </div>
                    </div>

                    <div className="main__subscription-form-payment-content">
                        <p className="main__subscription-form-payment-header">CREDIT CARD DETAILS</p>
                        <div className="main__subscription-form-payment-inputs">
                            <input
                                value={this.state.card}
                                onChange={this.validation}
                                name="card"
                                className="main__subscription-form-input"
                                type="text"
                                placeholder="0000-0000-0000-0000"
                            />
                            <input
                                value={this.state.expiration}
                                onChange={this.validation}
                                name="expiration"
                                className="main__subscription-form-input main__subscription-form-payment-input--size"
                                type="text"
                                placeholder="00/00"
                            />
                            <input
                                value={this.state.cvv}
                                onChange={this.validation}
                                name="cvv"
                                className="main__subscription-form-input main__subscription-form-payment-input--size"
                                type="text"
                                placeholder="CVV"
                            />
                        </div>
                    </div>
                    <textarea className="main__subscription-form-textarea" placeholder="Add any comments..."></textarea>
                </fieldset>
                <div className="main__subscription-form-buttons-container">
                    <button
                        type="reset"
                        className="main__subscription-form-button main__subscription-form-reset-button main__subscription-form-reset-button-position">
                        ⟲
                        </button>
                    <button
                        onClick={this.submit}
                        type="button"
                        className="main__subscription-form-button main__subscription-form-subscribe-button main__subscription-form-subscribe-button-position">
                        SUBSCRIBE
                        </button>
                </div>
            </form>
        );
    }
} 