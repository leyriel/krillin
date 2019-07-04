import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import paymentReducer from "./data-model/reducer";

const mapStateToProps = state => ({
    stripeCustomer: state.paymentReducer.stripeCustomer,
});

const mapDispatchToProps = dispatch => ({

});

class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }
    async submit(ev) {
        let {token} = await this.props.stripe.createToken({name: "Name"});
        console.log(token);
/*        let response = await fetch("/charge", {
            method: "POST",
            headers: {"Content-Type": "text/plain"},
            body: token.id
        });

        if (response.ok) {
            console.log("Purchase Complete!");
            console.log(response.token);
        }*/
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutForm);