import {SAVE_STRIPE_CUSTOMER} from './actionTypes';

const initialState = {
    stripeCustomer: {name: 'Eric amaloba'},
};

export default function handleContributorActions(state = initialState, action) {
    switch (action.type) {
        case SAVE_STRIPE_CUSTOMER:
            return {
                ...state,
                stripeCustomer: {
                    ...state,
                    name: action.data
                }
            };

        default:
            return state;
    }
}