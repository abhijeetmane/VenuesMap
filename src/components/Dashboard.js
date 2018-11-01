import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVenuesbyLocation, fetchVenuesbyPlace, fetchVenuesbyFilters } from '../store/actions/venues-actions';
import '../styles/dashboard.css';
import Labels from '../utility/labels';
import VenuesList from './VenuesList';
import VenueFilter from './VenueFilter';
import ErrorMessage from './ErrorMessage';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentGeoLatitude:'',
            currentGeoLongitude:'',
            loading:false,
            userPlace :null,
            selectedVenue : ''
        };
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                currentGeoLatitude:position.coords.latitude,
                currentGeoLongitude:position.coords.longitude,
                loading:false
            },() => this.props.fetchVenuesbyLocation(this.state.currentGeoLatitude+','+this.state.currentGeoLongitude));
        }, () => {
            this.setState({
                loading:true
            });
        });
    }

    searchVenuesbyPlace = () => {
        if(this.state.userPlace && this.state.userPlace.length > 0){
            this.setState({
                currentGeoLatitude:null,
                currentGeoLongitude:null,
                loading:false
            },() => this.props.fetchVenuesbyPlace(this.state.userPlace));}
        else {
            this.setState({
                loading:true
            });
        }
    }

    updatePlace = evt => {
        this.setState({
            userPlace : evt.target.value
        });
    }

    setSelectedVenue = venue => {
        this.setState({
            selectedVenue: venue
        });
    }

    handlePlaceTypeFilter = (section, openNowFilter, radius) => {
        const requiredParam = this.state.userPlace ? this.state.userPlace : (this.state.currentGeoLatitude+','+ this.state.currentGeoLongitude);
        this.props.fetchVenuesbyFilters(requiredParam, section, openNowFilter, radius);
    }

    render(){
        return (
            <div className='venue-search'>
                <div className='venue-search__location'>
                    <input className='venue-search__input' type='text' placeholder={Labels.EMPTY_SEARCH_BOX} onChange={(evt) => this.updatePlace(evt)} autoFocus/>
                    <button className='venue-search__button' onClick={() => this.searchVenuesbyPlace()}>{Labels.SEARCH_BTN}</button>
                </div>
                <VenueFilter handlePlaceTypeFilter={(section,openNowFilter,radius) => this.handlePlaceTypeFilter(section,openNowFilter,radius)}/>
                <ErrorMessage venues={this.props.venues} loading={this.state.loading} />
                <VenuesList 
                    venues={this.props.venues}
                    latitude = {this.state.currentGeoLatitude}
                    longitude = {this.state.currentGeoLongitude}
                    selectedVenue = {this.state.selectedVenue}
                    setSelectedVenue = {(venue) => this.setSelectedVenue(venue)}
                />
            </div>
        );
    }
}

const mapStateToProps = function(state){
    return {
        venues: state.venues
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchVenuesbyLocation: (coords) => dispatch(fetchVenuesbyLocation(coords)),
        fetchVenuesbyPlace : (place) => dispatch(fetchVenuesbyPlace(place)),
        fetchVenuesbyFilters: (place, section, openNowFilter, radius) => dispatch(fetchVenuesbyFilters(place, section, openNowFilter, radius)),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
