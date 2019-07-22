import React, {Component} from 'react';
import {CardElement, Elements, StripeProvider} from 'react-stripe-elements';

//CSS
import './assets/payment.css';

//Components
import CheckoutForm from './checkoutForm';

class Provider extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StripeProvider apiKey="pk_test_rOoslLtsuVwdSj3K7M5gQhfW00elTy1tqq">
                <div className="payment-container">
                    <h1>React Stripe Elements Example</h1>
                    <Elements>
                        <CheckoutForm />
                    </Elements>
                </div>
            </StripeProvider>
        );
    }
}

export default Provider;
