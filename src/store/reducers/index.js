import { combineReducers } from 'redux';
import venuesReducer from './venues-reducer';

const rootReducer = combineReducers({
    venues : venuesReducer
});

export default rootReducer;
