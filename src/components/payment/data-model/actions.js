import * as types from './actionTypes';

// Save a Stripe customer with token
export const saveStripeCustomer = (customer) => {
    return {
        type: types.SAVE_STRIPE_CUSTOMER,
        data: customer,
    }
};