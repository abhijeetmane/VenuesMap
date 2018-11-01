import React from 'react';
import configureStore from 'redux-mock-store';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from '../components/Dashboard';
import thunk from 'redux-thunk';
import { fetchVenuesbyLocation, fetchVenuesbyPlace, fetchVenuesbyFilters } from '../store/actions/venues-actions';
Enzyme.configure({ adapter: new Adapter() });

const initialState = {
    venues:[{
        location:{
            lat:'44.44',
            lng:'44.44'
        }
    }]
}; 

const mockStore = configureStore([thunk]);
let wrapper;
let store;

beforeEach(() => {
    store = mockStore(initialState);
    wrapper = Enzyme.shallow(<Dashboard store={store} />);
}); 
it('renders Dashboard components', () => {
    expect(wrapper).not.toBe(null);
});

it('check successful action passing user location ', () => {
    let action;
    return store.dispatch(fetchVenuesbyLocation('44.44,44.44'))
        .then(() => {
            action = store.getActions();
            expect(action[0].type).toBe('GET_VENUES');
            expect(action[0].venues.length).not.toBe(0);
        });
});

it('check successful action passing user searched place ', () => {
    let action;
    return store.dispatch(fetchVenuesbyPlace('Amsterdam'))
        .then(() => {
            action = store.getActions();
          
            expect(action[0].type).toBe('GET_VENUES');
            expect(action[0].venues.length).not.toBe(0);
        });
});


it('check successful action on selecting recommended filters ', () => {
    let action;
    return store.dispatch(fetchVenuesbyFilters('Amsterdam', 'All', 0 , '100'))
        .then(() => {
            action = store.getActions();
            expect(action[0].type).toBe('GET_VENUES');
            expect(action[0].venues.length).not.toBe(0);
        });
});

it('check failed action on selecting recommended filters ', () => {
    let action;
    return store.dispatch(fetchVenuesbyFilters('&', 'All', 0 , '100'))
        .then(() => {
            action = store.getActions();
            expect(action[0].type).toBe('GET_VENUES_FAILED');
            expect(action[0].venues.length).toBe(0);
        });
});
