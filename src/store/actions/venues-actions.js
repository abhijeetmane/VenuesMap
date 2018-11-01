import { GET_VENUES, GET_VENUES_FAILED } from './actionTypes';
import { 
    getVenuesbyLocation, 
    getVenuesbyPlace, 
    getVenuesbyFilters
} from './api';

export const venuesFetchedSuccessfully = (venues) => ({
    type: GET_VENUES,
    venues: venues
});

export const venuesFetchedFiltersSuccessfully = (responseBody) =>{ 
    const filteredVenues = responseBody.response.groups[0].items.map((item) => {
        return item.venue;
    });

    return{
        type: GET_VENUES,
        venues: filteredVenues
    };
};

export const venuesFetchedFailed = () => ({
    type: GET_VENUES_FAILED,
    venues: []
});

export const fetchVenuesbyLocation = (coords) => {
    return dispatch => {
        return getVenuesbyLocation(coords).then(
            responseBody => dispatch(venuesFetchedSuccessfully(responseBody.response.venues))
        ).catch(error => {
            return dispatch(venuesFetchedFailed());
        });
    };
};

export const fetchVenuesbyPlace = (place) => {
    return dispatch => {
        return getVenuesbyPlace(place).then(
            responseBody => dispatch(venuesFetchedSuccessfully(responseBody.response.venues))
        ).catch(error => dispatch(venuesFetchedFailed()));
    };
};

export const fetchVenuesbyFilters = (place, section, openNowFilter, radius) => {
    return dispatch => {
        return getVenuesbyFilters(place, section, openNowFilter, radius).then(
            venues => dispatch(venuesFetchedFiltersSuccessfully(venues))
        ).catch(error => dispatch(venuesFetchedFailed()));
    };
};
