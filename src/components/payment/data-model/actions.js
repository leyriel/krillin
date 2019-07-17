import * as types from './actionTypes';
import {HttpClient, HttpClientConfig as config} from '../../../service/httpClient';

// Save a Stripe customer with token
export const saveStripeCustomer = (customer) => {
    console.log('save stripe customer action');
    return function (dispatch) {
        return HttpClient.post('/api/eleve-offer', { id: 1 }, config)
            .then(response => {
                console.log(response);
/*                return {
                    type: types.SAVE_STRIPE_CUSTOMER,
                    data: customer,
                }*/
            })
            .catch((error) => {
                console.log(error);
            })
    };
};