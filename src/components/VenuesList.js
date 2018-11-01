import React, { Component } from 'react';
import  { google_api } from '../utility/environmentConfig';
import VenuesMap from './VenuesMap';

export default class VenuesList extends Component{
    render(){
        const resultList = this.props.venues.map( venue => {
            return <div key={venue.id} className='venue-search__results_list_item' onMouseEnter = {() => this.props.setSelectedVenue(venue.id)} onClick = {() => this.props.setSelectedVenue(venue.id)}>
                <h4 style={{margin:0}}>{venue.name}</h4>
                <h6>{venue.location.address}{venue.location.postalCode}</h6>
                <h6>{venue.location.city} {venue.location.country}</h6>
            </div>;
        });

        return (
            <React.Fragment>
                { this.props.venues.length > 0  && (<div className='venue-search__results'>
                    <div className='venue-search__results_list'>
                        {resultList}
                    </div>
                    <div className='venue-search__results_map'>
                        <VenuesMap
                            venues={this.props.venues}
                            latitude = {this.props.latitude}
                            longitude = {this.props.longitude}
                            selectedVenue = {this.props.selectedVenue}
                            googleMapURL={google_api}
                            loadingElement={<div style={{ height: '100%' }} />}
                            containerElement={<div style={{ height: '100%', width: '100vw' }} />}
                            mapElement={<div style={{ height: '100%' }} />}
                        />
                    </div>
                </div>)}
            </React.Fragment>
        );
    }
}