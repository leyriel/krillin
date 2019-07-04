import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

// Reducers
import paymentReducer from './components/payment/data-model/reducer';

const reducers = combineReducers({
    paymentReducer,
    form: formReducer,
});

export default reducers;