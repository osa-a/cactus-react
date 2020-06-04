import React from 'react';
import './modalForm.scss';
import Select from 'react-select';

const day = [
    { value: 'sat', label: 'Saturday' },
    { value: 'sun', label: 'Sunday' }
]
const time = [
    { value: '9am', label: '9am' },
    { value: '12pm', label: '12pm' },
    { value: '3pm', label: '3pm' },
    { value: '6pm', label: '6pm' }
]
const subscription = {
    "common": { label: 'Common $30/mo' },
    "popular": { label: 'Popular $60/mo' },
    "ultra": { label: 'Ultra $90/mo' },
    "unique": { label: 'Unique $120/mo' }
}

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
            expiration: '',
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

    submit() {
        //checking every state in IsValid object if even one is false, return
        let check;
        for (let key in this.isValid) {
            check = 0;
            if (!this.isValid[key]) {
                check++;
                return;
            }
        }
        if (check === 0) {
            document.getElementById("subscriptionForm").submit();
        } else {
            return;
        }
    }

    render() {
        const name = this.props.name.toLowerCase();
        return (
            <form name="subscriptionForm" id="subscriptionForm" className="main__subscription-form">
                <button className="main__subscription-form-button main__subscription-form-close-button main__subscription-form-close-button-position"
                    onClick={this.closeModal}>
                    ╳
                    </button>
                <fieldset className="main__subscription-form-content">
                    <legend className="main__subscription-form-legend">SUBSCRIPTION FORM</legend>
                    {/* FULL NAME  */}
                    <div className="main__subscription-form-name-content" >
                        <input className="main__subscription-form-input main__subscription-form-input--size" type="text"
                            value={this.state.name}
                            // handle value change
                            onChange={this.validation}
                            name="name"
                            placeholder="John"
                        />
                        <input className="main__subscription-form-input main__subscription-form-input--size" type="text"
                            value={this.state.surname}
                            onChange={this.validation}
                            name="surname"
                            placeholder="Doe"
                        />
                    </div>
                    {/* COUNTRY  */}
                    <div className="main__subscription-form-country-content">
                        <input className="main__subscription-form-input main__subscription-form-input--size" type="text"
                            value={this.state.country}
                            onChange={this.validation}
                            name="country"
                            placeholder="Ukraine"
                        />
                        <input className="main__subscription-form-input main__subscription-form-input--size" type="text"
                            value={this.state.city}
                            onChange={this.validation}
                            name="city"
                            placeholder="Odessa"
                        />
                    </div>
                    {/* CONNECTION */}
                    <input className="main__subscription-form-input main__subscription-form-input-width" type="text"
                        value={this.state.address}
                        onChange={this.validation}
                        name="address"
                        placeholder="65012 Vice Admirala Azarova str./13" />
                    <input className="main__subscription-form-input main__subscription-form-input-width" type="email"
                        value={this.state.email}
                        onChange={this.validation}
                        name="email"
                        placeholder="example@gmail.com" />
                    <input className="main__subscription-form-input main__subscription-form-input-width" type="tel"
                        value={this.state.phone}
                        onChange={this.validation}
                        name="phone"
                        placeholder="+38(011)11-11-11" />
                    {/* SELCTIONS  */}
                    <div className="main__subscription-form-selections-container">
                        <div className="main__subscription-form-select-wrapper">
                            <label className="main__subscription-form-select-label" htmlFor="timeSelect">
                                Delivery time
                            </label>
                            <Select className="main__subscription-form-select" id="timeSelect"
                                options={time}
                                defaultValue={time[0]} />
                        </div>
                        <div className="main__subscription-form-select-wrapper">
                            <label className="main__subscription-form-select-label" htmlFor="daySelect">
                                Delivery day
                            </label>
                            <Select className="main__subscription-form-select" id="daySelect"
                                options={day}
                                defaultValue={day[0]} />
                        </div>
                        <div className="main__subscription-form-select-wrapper">
                            <div className="main__subscription-form-select-label">Subscription type</div>
                            <input className="main__subscription-form-sub-type-input" value={subscription[name].label} disabled />
                        </div>
                    </div>
                    {/* PAYMENT */}
                    <div className="main__subscription-form-payment-content">
                        <p className="main__subscription-form-payment-header">CREDIT CARD DETAILS</p>
                        <div className="main__subscription-form-payment-inputs">
                            <input
                                value={this.state.card}
                                onChange={this.validation}
                                name="card"
                                className="main__subscription-form-input main__subscription-form-card-input--size"
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
                    {/* COMMENTS */}
                    <textarea className="main__subscription-form-textarea" placeholder="Add any comments..."></textarea>
                </fieldset>
                {/* BUTTONS */}
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