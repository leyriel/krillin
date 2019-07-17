import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import paymentReducer from "./data-model/reducer";

// Action
import * as paymentAction from './data-model/actions';

const mapStateToProps = state => ({
    stripeCustomer: state.paymentReducer.stripeCustomer,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(paymentAction, dispatch),
});

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }
    async submit(ev) {
/*        let {token} = await this.props.stripe.createToken({name: "Name"});
        console.log(token);*/
        this.props.actions.saveStripeCustomer('Eloise Norberto');
    }

    render() {
        return (
            <div className="checkout">
                <p>{this.props.stripeCustomer.name}</p>
                <CardElement />
                <button onClick={this.submit}>Valider le payement</button>
            </div>
        );
    }
}

let form = injectStripe(CheckoutForm);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(form);