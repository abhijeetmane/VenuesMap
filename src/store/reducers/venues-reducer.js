import { GET_VENUES, GET_VENUES_FAILED } from '../actions/actionTypes';

const reducer = (state = [], action) => {
    switch(action.type){
    case GET_VENUES:
        return action.venues;
    case GET_VENUES_FAILED:
        return [];
    default:
        return state;
    }
};
export default reducer;
  