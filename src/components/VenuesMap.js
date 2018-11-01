import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import VenuesMarker from './VenuesMarker';

const VenuesMap = withScriptjs(withGoogleMap((props) => {
    let centerLatitude = props.latitude;
    let centerLongitude = props.longitude;

    if(!(props.latitude && props.longitude) && props.venues.length > 0){
        centerLatitude = props.venues[0].location.lat;
        centerLongitude = props.venues[0].location.lng;
    }
    
    const markers = props.venues.map( venue => <VenuesMarker
        key={venue.id}
        name={venue.name}
        address={venue.location.address}
        location={{lat: venue.location.lat, lng: venue.location.lng}}
        selectedVenue = {venue.id === props.selectedVenue}
    />);
                  
    return (
        <div className='google-map'>
            <GoogleMap
                defaultZoom={18}
                center={ { lat:  centerLatitude, lng: centerLongitude}} >
                {markers}
            </GoogleMap>
        </div>
    );
}
));

export default VenuesMap;